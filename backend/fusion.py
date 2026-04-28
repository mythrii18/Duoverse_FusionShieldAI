def fuse(text_result, voice_result):

    text_score = text_result["score"] if text_result else 0
    voice_score = voice_result["score"] if voice_result else 0

    if voice_result:
        final_score = (text_score + voice_score) / 2
    else:
        final_score = text_score

    if final_score > 0.7:
        level = "HIGH"
    elif final_score > 0.4:
        level = "WARNING"
    else:
        level = "SAFE"

    return {
        "final_score": final_score,
        "level": level,
        "correlation_detected": text_score > 0.4 and voice_score > 0.4
    }