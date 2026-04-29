from transformers import pipeline

# Load once (fast inference model)
classifier = pipeline("sentiment-analysis")

def analyze_text(text):
    if not text:
        return None

    result = classifier(text)[0]

    label = result["label"]
    score = result["score"]

    # Convert to threat score
    if label == "NEGATIVE":
        risk_score = score
    else:
        risk_score = 1 - score

    # Add rule boost (important for hackathon realism)
    keywords = ["otp", "bank", "password", "urgent", "verify"]
    keyword_boost = sum([0.1 for k in keywords if k in text.lower()])

    final_score = min(risk_score + keyword_boost, 1.0)

    if final_score > 0.7:
        level = "HIGH"
    elif final_score > 0.4:
        level = "WARNING"
    else:
        level = "SAFE"

    return {
        "score": round(final_score, 2),
        "level": level,
        "attack_type": "AI-detected threat",
        "reasons": [f"{label} sentiment", "Keyword patterns detected"]
    }