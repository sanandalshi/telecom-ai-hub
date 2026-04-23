import requests
from core.config import GROQ_API_KEY

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

HEADERS = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json"
}

def call_groq(messages, model="llama-3.3-70b-versatile"):
    payload = {
        "model": model,
        "messages": messages,
        "temperature": 0.7
    }

    response = requests.post(GROQ_URL, headers=HEADERS, json=payload)

    if response.status_code != 200:
        return f"Error: {response.text}"

    return response.json()["choices"][0]["message"]["content"]