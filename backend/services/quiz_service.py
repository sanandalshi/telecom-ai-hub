from core.llm import call_groq
from services.prompt_engine import build_prompt

def generate_quiz(topic: str):
    messages = build_prompt("quiz", topic)
    response = call_groq(messages)

    return response