from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import tutor, quiz, messaging, complaint, ai

app = FastAPI(title="Telecom AI Hub")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tutor.router, prefix="/api/tutor")
app.include_router(quiz.router, prefix="/api/quiz")
app.include_router(messaging.router, prefix="/api/messaging")
app.include_router(complaint.router, prefix="/api/complaint")
app.include_router(ai.router, prefix="/api/ai")


@app.get("/")
def home():
    return {"status": "Telecom AI Hub Running"}