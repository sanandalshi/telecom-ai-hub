from fastapi import APIRouter
from models.schemas import AIRequest
from services.prompt_engine import build_prompt
from core.llm import call_groq

router = APIRouter()

@router.post("/chat")
def chat(req: AIRequest):

    messages = build_prompt(req.mode, req.message)

    response = call_groq(messages)

    return {
        "mode": req.mode,
        "response": response
    }