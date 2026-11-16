import { describe, it, expect } from 'vitest';

const BASE_URL = 'http://localhost:8000';

describe('Production 2G Low-Bandwidth SMS Channel (POST /sms/inbound)', () => {
  it('should accept JSON payload, query RAG, and return plain text <= 160 characters', async () => {
    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from_number: '+251911000001',
        body: 'What is a virtual assistant?'
      })
    });

    expect(res.status).toBe(200);
    const contentType = res.headers.get('content-type') || '';
    expect(contentType).toContain('text/plain');

    const text = await res.text();
    expect(text.length).toBeGreaterThan(10);
    expect(text.length).toBeLessThanOrEqual(160);
    expect(res.headers.get('x-sms-character-count')).toBe(String(text.length));
  }, 20000);

  it('should accept application/x-www-form-urlencoded (Twilio / Africa\'s Talking) format', async () => {
    const params = new URLSearchParams();
    params.append('From', '+251911000002');
    params.append('Body', 'What is a virtual assistant?');

    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    expect(res.status).toBe(200);
    const contentType = res.headers.get('content-type') || '';
    expect(contentType).toContain('text/plain');

    const text = await res.text();
    expect(text.length).toBeLessThanOrEqual(160);
  }, 20000);

  it('should support the modular endpoint POST /api/v1/channels/sms/inbound', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/channels/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from_number: '+251911000003',
        body: 'What are virtual assistant tasks?'
      })
    });

    expect(res.status).toBe(200);
    const contentType = res.headers.get('content-type') || '';
    expect(contentType).toContain('text/plain');

    const text = await res.text();
    expect(text.length).toBeLessThanOrEqual(160);
  }, 20000);

  it('should handle the HELP / MENTOR keyword command <= 160 characters', async () => {
    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from_number: '+251911000004',
        body: 'HELP'
      })
    });

    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Mentor');
    expect(text.length).toBeLessThanOrEqual(160);
    expect(res.headers.get('x-rag-engine')).toBe('keyword-mentor');
  }, 10000);

  it('should handle the JOBS keyword command <= 160 characters', async () => {
    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from_number: '+251911000005',
        body: 'JOBS'
      })
    });

    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Savanna Jobs:');
    expect(text.length).toBeLessThanOrEqual(160);
  }, 10000);

  it('should handle the ACC accommodation keyword command <= 160 characters', async () => {
    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from_number: '+251911000006',
        body: 'ACC'
      })
    });

    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Accommodations');
    expect(text.length).toBeLessThanOrEqual(160);
  }, 10000);

  it('should handle language switching via LANG <code> <= 160 characters', async () => {
    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from_number: '+251911000007',
        body: 'LANG am'
      })
    });

    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Amharic');
    expect(text.length).toBeLessThanOrEqual(160);
  }, 10000);

  it('should gracefully handle empty or missing payloads without crashing', async () => {
    const res = await fetch(`${BASE_URL}/sms/inbound`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });

    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain('Savanna SMS Tutor:');
    expect(text.length).toBeLessThanOrEqual(160);
  }, 10000);
});
