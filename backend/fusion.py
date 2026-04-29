def fuse(text_result, voice_result):

    text_score = text_result["score"] if text_result else 0
    voice_score = voice_result["score"] if voice_result else 0

    # 🎯 BASE FUSION (text more important)
    if voice_result:
        final_score = (text_score * 0.7) + (voice_score * 0.3)
    else:
        final_score = text_score

    correlation = False

    # 🔗 CORRELATION ENGINE
    if text_result and voice_result:

        # moderate correlation
        if text_score > 0.4 and voice_score > 0.4:
            correlation = True
            final_score += 0.15   # controlled boost

        # strong coordinated attack
        if text_score > 0.7 and voice_score > 0.5:
            correlation = True
            final_score += 0.2

        # similarity consistency boost
        if abs(text_score - voice_score) < 0.15:
            final_score += 0.05

    # 🧠 NORMALIZE (important)
    final_score = min(final_score, 1.0)

    # 🚨 STABLE THREAT LEVELS (important for demo)
    if final_score >= 0.7:
        level = "HIGH"
    elif final_score >= 0.4:
        level = "WARNING"
    else:
        level = "SAFE"

    return {
        "score": round(final_score, 2),
        "level": level,
        "correlation_detected": correlation
    }