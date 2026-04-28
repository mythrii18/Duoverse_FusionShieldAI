from fastapi import FastAPI, Form
from text_model import analyze_text

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FusionShield Backend Running"}

@app.post("/analyze")
def analyze(text: str = Form(...)):
    result = analyze_text(text)
    return result