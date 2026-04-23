from core.llm import call_groq
from services.prompt_engine import build_prompt

def analyze_complaint(text: str):
    messages = build_prompt("support", text)
    return call_groq(messages)