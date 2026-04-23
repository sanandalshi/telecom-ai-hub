from pydantic import BaseModel


# Unified AI endpoint
class AIRequest(BaseModel):
    mode: str
    message: str


# Tutor module
class TutorRequest(BaseModel):
    question: str


# Complaint module
class ComplaintRequest(BaseModel):
    text: str


# Quiz module
class QuizRequest(BaseModel):
    topic: str


# Messaging module
class MessageRequest(BaseModel):
    text: str