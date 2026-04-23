def get_telecom_context(query: str):
    try:
        with open("data/telecom_docs.txt", "r") as f:
            data = f.read()

        # simple retrieval (can upgrade to embeddings later)
        return data[:2000]

    except:
        return ""