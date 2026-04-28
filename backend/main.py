from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil

from text_model import analyze_text
from voice_model import analyze_voice
from fusion import fuse

app = FastAPI()

# Enable CORS
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

    text_result = analyze_text(text) if text else None
    voice_result = None

    if file:
        with open("temp.wav", "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        voice_result = analyze_voice("temp.wav")

    fusion_result = fuse(text_result, voice_result)

    # Timeline simulation
    timeline = []
    if text:
        timeline.append("Text input analyzed")
    if file:
        timeline.append("Voice input analyzed")
    if fusion_result["correlation_detected"]:
        timeline.append("Cross-channel correlation detected")
    timeline.append("Threat level computed")

    return {
        "text_analysis": text_result,
        "voice_analysis": voice_result,
        "fusion_result": fusion_result,
        "timeline": timeline
    }