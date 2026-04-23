from fastapi import APIRouter
from models.schemas import ComplaintRequest
from services.complaint_service import analyze_complaint

router = APIRouter()

@router.post("/submit")
def submit(req: ComplaintRequest):

    result = analyze_complaint(req.text)

    return {"analysis": result}