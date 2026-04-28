def fuse(t, v):
    final = (t + v) / 2

    if final < 0.4:
        level = "SAFE"
    elif final < 0.7:
        level = "WARNING"
    else:
        level = "CRITICAL"

    return {"final": round(final, 2), "level": level}