from transformers import pipeline

classifier = pipeline("text-classification")

def analyze_text(text):
    result = classifier(text)[0]
    score = result['score']

    keywords = ["bank", "otp", "verify", "urgent"]
    intent_score = sum([1 for w in keywords if w in text.lower()]) / len(keywords)

    final_score = (score + intent_score) / 2

    return {"score": round(final_score, 2)}