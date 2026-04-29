from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from text_model import analyze_text
from voice_model import analyze_voice
from fusion import fuse

app = FastAPI(title="FusionShield AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "FusionShield AI Running"}

@app.post("/analyze")
async def analyze(text: str = Form(None), file: UploadFile = File(None)):

    text_result = None
    voice_result = None

    # TEXT
    if text:
        try:
            text_result = analyze_text(text)
        except Exception as e:
            print("TEXT ERROR:", e)
            text_result = {"score": 0, "level": "ERROR", "reasons": []}

    # AUDIO
    if file:
        try:
            file_path = "temp.wav"

            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)

            print("Audio received:", file.filename)

            voice_result = analyze_voice(file_path)

        except Exception as e:
            print("VOICE ERROR:", e)
            voice_result = {"score": 0, "error": str(e)}

        finally:
            if os.path.exists("temp.wav"):
                os.remove("temp.wav")

    # FUSION
    fusion_result = fuse(text_result, voice_result)

    # TIMELINE
    timeline = []
    if text:
        timeline.append("Text analysis completed")
    if file:
        timeline.append("Voice analysis completed")
    timeline.append("AI fusion engine executed")

    if fusion_result["correlation_detected"]:
        timeline.append("Cross-channel threat correlation detected")

    timeline.append("Final decision generated")

    return {
        "text_analysis": text_result,
        "voice_analysis": voice_result,
        "fusion_result": fusion_result,
        "timeline": timeline
    }