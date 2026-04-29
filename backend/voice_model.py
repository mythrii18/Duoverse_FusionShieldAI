import librosa
import numpy as np

def analyze_voice(file_path):
    try:
        y, sr = librosa.load(file_path)

        energy = np.mean(np.abs(y))
        zcr = np.mean(librosa.feature.zero_crossing_rate(y))
        spectral = np.mean(librosa.feature.spectral_centroid(y=y, sr=sr))

        # Normalize features
        energy_score = min(energy * 10, 1)
        zcr_score = min(zcr * 10, 1)
        spectral_score = min(spectral / 5000, 1)

        final_score = (energy_score + zcr_score + spectral_score) / 3

        return {
            "score": round(final_score, 2),
            "level": "VOICE_ANALYZED",
            "features": {
                "energy": float(energy),
                "zcr": float(zcr),
                "spectral": float(spectral)
            }
        }

    except Exception as e:
        return {"score": 0, "error": str(e)}
    