from pydantic import BaseModel, Field

class TutorChatRequest(BaseModel):
    message: str = Field(..., example="የሰው ረዳት እና የ AI ረዳት ልዩነቱ ምንድነው?")
    language: str = Field("am", example="am")
    partner_id: str = Field("savanna", example="savanna")
    course_id: str = Field("VA-1", example="VA-1")
    simple_mode: bool = Field(False, example=False)

class TutorChatResponse(BaseModel):
    reply: str
    citation: str
    provider: str
    language: str
    direction: str
