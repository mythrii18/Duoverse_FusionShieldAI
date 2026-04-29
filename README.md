# FusionShield AI — Multi-Channel Cyber Threat Detection

FusionShield AI is a multi-layer cybersecurity system designed to detect coordinated scam attacks across text (email, SMS, chat) and voice channels. It combines text intelligence, voice analysis, and a fusion engine to identify cross-channel threats with clear, explainable outputs.

---

## Key Features

- Multi-platform text analysis (email, SMS, chat)
- Voice signal analysis
- Multi-layer AI pipeline
- Fusion engine combining text and voice signals
- Cross-channel correlation detection
- Threat classification (SAFE / WARNING / HIGH)
- Confidence scoring
- Explainable AI outputs (reasoning)
- Attack type detection (OTP scams, phishing, etc.)
- Timeline-based analysis
- Visualizations (gauge, charts, pipeline)

---

## System Architecture

### 1. Text Intelligence Layer
Analyzes text using NLP-based techniques.

Detects:
- Phishing patterns  
- Urgency signals  
- Financial intent (OTP, bank, login)  
- Suspicious keywords  

Output:
- Text risk score  
- Detected patterns  
- Attack type  
- Reasoning  

---

### 2. Voice Intelligence Layer
Uses signal processing for voice analysis.

Extracts:
- Energy (loudness patterns)  
- Zero-crossing rate (speech variation)  
- Signal variability  

Detects:
- Abnormal speech behavior  
- Suspicious voice characteristics  

Output:
- Voice risk score  
- Audio feature insights  

---

### 3. Fusion Engine
Combines text and voice scores using weighted fusion.

- Text has higher priority  
- Voice adds supporting evidence  

Enhances detection when:
- Both channels indicate risk  

Output:
- Final threat score  
- Threat level (SAFE / WARNING / HIGH)  
- Confidence score  

---

### 4. Correlation Engine
Detects relationships between multiple inputs.

- Identifies shared intent (OTP, banking, urgency)  
- Detects coordinated cross-channel attacks  

If correlation is detected:
- Threat score is boosted  
- Attack is flagged as coordinated  

Output:
- Correlation status (True / False)  

---

### 5. Explainability & Timeline Layer
Provides clear and interpretable outputs.

Includes:
- Reasoning (why flagged)  
- Attack classification  
- Confidence score  
- Timeline of events  

Example Timeline:
- Text analyzed  
- Voice analyzed  
- Correlation detected  
- Final decision computed  

---

## Tech Stack

### Frontend
- React  
- Tailwind CSS
- Recharts  

### Backend
- FastAPI  
- Uvicorn  

### AI Components
- NLP-based text analysis (DistilBERT-inspired logic)  
- Librosa for audio signal processing  
- Keyword and pattern detection  
- Fusion and correlation engine  

---

## Workflow

1. User provides text and/or audio input  
2. Text and voice are analyzed independently  
3. Fusion engine combines the scores  
4. Correlation engine detects cross-channel relationships  
5. System outputs:
   - Threat level  
   - Confidence score  
   - Explanation  
   - Visual insights  

---

## Use Cases

- Fraud detection in banking and fintech  
- Scam detection for individuals  
- Enterprise communication security  

---

## Installation

### Clone Repository

git clone https://github.com/mythrii18/FusionShieldAI.git

cd FusionShieldAI


### Backend Setup

cd backend

pip install -r requirements.txt

uvicorn main:app --reload


### Frontend Setup

cd frontend

npm install

npm start


---

## Output Example

- Threat Level: HIGH  
- Confidence: 90%+  
- Reason: OTP request, urgency signals, suspicious voice pattern  
- Visualization: Risk gauge, fusion graph, reports  

---

## Innovation

FusionShield AI detects coordinated cyber attacks by combining signals from multiple channels (text and voice).  

Unlike traditional systems that analyze inputs independently, it identifies relationships between channels using a fusion and correlation engine, enabling detection of advanced multi-channel scams.

---

## Impact

- Improves detection of modern cyber scams  
- Reduces fraud risk  
- Introduces cross-channel threat intelligence  
- Enhances user awareness and security  

---

## Future Enhancements

- Real-time call monitoring  
- Deepfake voice detection  
- Integration with messaging platforms  
- Continuous learning models  
