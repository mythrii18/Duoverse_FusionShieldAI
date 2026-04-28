def fuse(text_data, voice_data):
    text_score = text_data["score"] if text_data else 0
    voice_score = voice_data["score"] if voice_data else 0

    combined = (text_score * 0.6) + (voice_score * 0.4)

    correlation = False
    boost = 0

    if text_data and voice_data:
        if len(text_data["keywords"]) > 0:
            correlation = True
            boost = 0.15

    final_score = combined + boost

    if final_score < 0.4:
        level = "SAFE"
    elif final_score < 0.7:
        level = "WARNING"
    else:
        level = "CRITICAL"

    confidence = min(1.0, final_score + 0.2)

    return {
        "final_score": round(final_score, 2),
        "level": level,
        "confidence": round(confidence, 2),
        "correlation_detected": correlation
    }