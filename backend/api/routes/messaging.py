from fastapi import APIRouter
from models.schemas import MessageRequest
from services.messaging_service import format_message

router = APIRouter()


@router.post("/rewrite")
def rewrite_message(req: MessageRequest):

    result = format_message(req.text)

    return {
        "response": result
    }