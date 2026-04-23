from core.llm import call_groq
from services.prompt_engine import build_prompt

def format_message(text: str):
    messages = build_prompt("messaging", text)
    return call_groq(messages)