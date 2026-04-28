import librosa
import numpy as np

def analyze_voice(file_path):
    y, sr = librosa.load(file_path)

    energy = np.mean(np.abs(y))
    zcr = np.mean(librosa.feature.zero_crossing_rate(y))

    variability = np.std(y)

    score = (energy * 0.5 + zcr * 0.3 + variability * 0.2) % 1

    return {
        "score": round(score, 2),
        "features": {
            "energy": float(energy),
            "zcr": float(zcr),
            "variability": float(variability)
        }
    }