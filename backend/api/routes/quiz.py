from fastapi import APIRouter
from models.schemas import QuizRequest
from services.quiz_service import generate_quiz
import json

router = APIRouter()


@router.post("/generate")
def generate(req: QuizRequest):
    response = generate_quiz(req.topic)

    try:
        parsed_quiz = json.loads(response)
        return {
            "quiz": parsed_quiz
        }

    except Exception:
        return {
            "error": "AI returned invalid quiz format",
            "raw_response": response
        }