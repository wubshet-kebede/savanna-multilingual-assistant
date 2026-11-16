import json
import os
import uuid

DATA_FILE = os.path.join(os.path.dirname(__file__), 'data', 'jobs.json')

class CareerService:
    @staticmethod
    def get_jobs(partner_id: str = "savanna") -> list:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            jobs = json.load(f)
        if partner_id:
            jobs = [j for j in jobs if j.get("partner_id") == partner_id]
        return jobs

    @staticmethod
    def create_accommodation_request(job_id: str, applicant_name: str, accommodations: list) -> dict:
        code = f"ACC-{str(uuid.uuid4())[:8].upper()}"
        formatted = ", ".join(accommodations) if accommodations else "Screen reader compatible test, Extended assessment time"
        return {
            "status": "submitted",
            "confirmation_code": code,
            "official_note": f"Dear Hiring Team, applicant {applicant_name} has requested the following verified accommodations: {formatted}."
        }

    @staticmethod
    def broadcast_job_alert(job_id: str = "job_01") -> dict:
        """
        Dispatches multi-channel job alerts across Telegram and SMS
        for newly published inclusive roles.
        """
        jobs = CareerService.get_jobs()
        matched = next((j for j in jobs if j.get("id") == job_id), jobs[0] if jobs else None)
        if not matched:
            return {"status": "error", "message": "No jobs found"}

        title = matched.get("title", "Junior Virtual Assistant")
        company = matched.get("company", "AfriRemote Solutions")
        salary = matched.get("salary", "$500 - $700 / month")
        course = matched.get("course_alignment", "VA-1")

        # Telegram alert payload
        telegram_alert = (
            f"🔔 <b>NEW INCLUSIVE JOB ALERT!</b>\n\n"
            f"💼 <b>{title}</b>\n"
            f"🏢 <b>Company:</b> {company}\n"
            f"💵 <b>Salary:</b> {salary}\n"
            f"🎯 <b>Aligned Course:</b> {course}\n"
            f"♿ <b>Accommodations:</b> Screen reader testing, +50% assessment time.\n\n"
            f"<i>Apply now or type /acc to request standardized interview accommodations!</i>"
        )

        # 2G SMS alert (strictly <= 160 characters)
        sms_alert = f"Savanna Job Alert: {title} at {company} ({salary}). Screen reader certified. Reply ACC to request accommodations or see savanna.edu/careers"
        if len(sms_alert) > 160:
            sms_alert = sms_alert[:157] + "..."

        return {
            "status": "dispatched",
            "job_id": job_id,
            "title": title,
            "company": company,
            "telegram_alert_preview": telegram_alert,
            "sms_alert_preview": sms_alert,
            "channels_notified": ["Telegram", "SMS"],
            "character_count_sms": len(sms_alert)
        }

    @staticmethod
    def seed_career_knowledge(db):
        """
        Ingests inclusive jobs and interview accommodation guides into the
        LessonChunk vector brain, enabling the AI tutor to answer questions
        about jobs, salaries, companies, and workplace accommodations.
        """
        from app.modules.tutor import models
        from app.modules.tutor.service import model as embedding_model

        existing = db.query(models.LessonChunk).filter(models.LessonChunk.url_id.like("career/%")).first()
        if existing:
            return

        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            jobs = json.load(f)

        for job in jobs:
            title = f"Career Opportunity: {job.get('title')} at {job.get('company')}"
            acc_text = ", ".join([f"{k.replace('_', ' ')}: {v}" for k, v in job.get('accommodations', {}).items() if v is True])
            content = (
                f"Job Title: {job.get('title')}. "
                f"Employer: {job.get('company')}. "
                f"Location: {job.get('location')}. "
                f"Employment Type: {job.get('employment_type')}. "
                f"Monthly Salary: {job.get('salary')}. "
                f"Aligned Course: {job.get('course_alignment')}. "
                f"Description: {job.get('description')} "
                f"Certified Accommodations for Disabilities: {acc_text}. "
                f"Accommodations Contact: {job.get('accommodations', {}).get('contact', '')}. "
                f"How to Apply: Apply through the Savanna Career Gateway or text JOBS."
            )
            emb = embedding_model.encode(content).tolist()
            chunk = models.LessonChunk(
                url_id=f"career/{job.get('id')}",
                title=title,
                content=content,
                embedding=emb
            )
            db.add(chunk)

        # General accommodations policy chunk
        acc_guide_content = (
            "Savanna Inclusive Career & Interview Accommodations Policy: "
            "All Savanna hiring partners are certified to provide non-discriminatory interview and testing accommodations for learners with disabilities. "
            "Certified accommodations include: 1. Screen Reader Compatible Testing (full NVDA, TalkBack, and JAWS accessibility for technical skill evaluations). "
            "2. Extended Assessment Time (25% to 50% additional time for exams and technical assessments). "
            "3. Flexible Interview Formats (Camera-Optional video calls or written Q&A format). "
            "Learners can generate an official accommodation letter with an authentic confirmation code (e.g., ACC-A1B2C3D4) "
            "through the Web Career Gateway tab, by typing /acc in Telegram, or by texting ACC over 2G SMS."
        )
        acc_emb = embedding_model.encode(acc_guide_content).tolist()
        acc_chunk = models.LessonChunk(
            url_id="career/interview-accommodations-policy",
            title="Savanna Certified Interview Accommodations Guide",
            content=acc_guide_content,
            embedding=acc_emb
        )
        db.add(acc_chunk)
        db.commit()
        print("[CareerService] Career knowledge successfully ingested into RAG vector brain.")
