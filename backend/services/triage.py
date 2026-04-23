def triage_complaint(text: str):
    if "network" in text.lower():
        return "Network Issue - High Priority"

    if "bill" in text.lower():
        return "Billing Issue - Medium Priority"

    return "General Issue - Low Priority"