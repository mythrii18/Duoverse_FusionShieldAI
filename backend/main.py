from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil

from text_model import analyze_text
from voice_model import analyze_voice
from fusion import fuse

app = FastAPI()

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

    if text:
        text_result = analyze_text(text)

    if file:
        try:
            file_path = "temp.wav"
            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)

            voice_result = analyze_voice(file_path)

        except Exception as e:
            return {"error": str(e)}

    fusion_result = fuse(text_result, voice_result)

    timeline = []
    if text:
        timeline.append("Text analyzed")
    if file:
        timeline.append("Voice analyzed")
    timeline.append("Fusion applied")

    if fusion_result["correlation_detected"]:
        timeline.append("Cross-channel correlation detected")

    timeline.append("Final decision computed")

    return {
        "text_analysis": text_result,
        "voice_analysis": voice_result,
        "fusion_result": fusion_result,
        "timeline": timeline
    }