from fastapi import APIRouter
from models.schemas import TutorRequest
from services.prompt_engine import build_prompt
from core.llm import call_groq

router = APIRouter()


@router.post("/ask")
def ask_tutor(req: TutorRequest):

    messages = build_prompt("tutor", req.question)

    response = call_groq(messages)

    return {
        "answer": response
    }