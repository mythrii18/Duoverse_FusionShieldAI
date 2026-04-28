from transformers import pipeline

classifier = pipeline("text-classification")

KEYWORDS = ["bank", "otp", "verify", "urgent", "account", "password", "login", "transaction"]

def analyze_text(text):
    text_lower = text.lower()

    result = classifier(text)[0]
    model_score = result['score']

    found_keywords = [word for word in KEYWORDS if word in text_lower]
    keyword_score = len(found_keywords) / len(KEYWORDS)

    urgency_flag = 1 if "urgent" in text_lower else 0
    link_flag = 1 if "http" in text_lower else 0
    otp_flag = 1 if "otp" in text_lower else 0

    final_score = (
        model_score * 0.5 +
        keyword_score * 0.2 +
        urgency_flag * 0.1 +
        link_flag * 0.1 +
        otp_flag * 0.1
    )

    # Attack type detection
    if otp_flag:
        attack_type = "OTP Scam"
    elif "bank" in text_lower:
        attack_type = "Bank Fraud"
    elif link_flag:
        attack_type = "Phishing Link"
    else:
        attack_type = "General Suspicious"

    reason = []
    if found_keywords:
        reason.append(f"Keywords detected: {', '.join(found_keywords)}")
    if urgency_flag:
        reason.append("Urgency language detected")
    if link_flag:
        reason.append("Suspicious link detected")
    if otp_flag:
        reason.append("OTP request detected")

    return {
        "score": round(final_score, 2),
        "keywords": found_keywords,
        "attack_type": attack_type,
        "reason": "; ".join(reason) if reason else "No strong indicators"
    }