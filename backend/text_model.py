def analyze_text(text):
    if not text:
        return None

    text = text.lower()

    score = 0
    reasons = []

    # 🚨 HIGH RISK KEYWORDS
    high_risk = ["otp", "password", "bank", "account blocked", "verify", "urgent"]

    # ⚠️ MEDIUM RISK
    medium_risk = ["click", "link", "update", "login", "confirm"]

    # HIGH RISK DETECTION
    for word in high_risk:
        if word in text:
            score += 0.3
            reasons.append(f"High-risk keyword: {word}")

    # MEDIUM RISK DETECTION
    for word in medium_risk:
        if word in text:
            score += 0.15
            reasons.append(f"Suspicious keyword: {word}")

    # URGENCY DETECTION
    if "immediately" in text or "urgent" in text:
        score += 0.2
        reasons.append("Urgency detected")

    # LIMIT SCORE
    score = min(score, 1.0)

    # CLASSIFICATION
    if score > 0.7:
        level = "HIGH"
        attack = "Phishing / Scam"
    elif score > 0.4:
        level = "WARNING"
        attack = "Suspicious"
    else:
        level = "SAFE"
        attack = "Normal"

    return {
        "score": score,
        "level": level,
        "attack_type": attack,
        "reasons": reasons
    }