# FusionShield AI — Multi-Channel Cyber Threat Detection

FusionShield AI is a multi-layer AI-powered cybersecurity system designed to detect coordinated scam attacks across text (email, SMS, chat) and voice channels. It combines NLP, voice intelligence, and a fusion engine to identify cross-channel threats with explainable outputs.

# Key Features
1.Multi-channel detection (text and voice)

2.Cross-channel correlation detection

3.Weighted fusion risk scoring

4.Confidence scoring system

5.Explainable AI outputs

6.Attack timeline visualization

7.Risk gauge and fusion graphs

8.Works with single or multiple inputs

# System Architecture
1. Text Intelligence Layer
Uses DistilBERT for NLP analysis
Detects phishing patterns, urgency, and financial intent
Output: Text Risk Score

2. Voice Intelligence Layer
Uses Resemblyzer for voice analysis
Extracts embeddings and signal features
Detects anomalies and suspicious speech patterns
Output: Voice Risk Score

3. Fusion Engine
Combines text and voice scores
Increases risk when both signals are suspicious

4. Correlation Engine
Identifies relationships across channels
Detects coordinated multi-channel attacks

# Tech Stack
## Frontend
1.React

2.Tailwind CSS

3.Recharts

## Backend
1.FastAPI

2.Uvicorn

## AI Components
1.DistilBERT for text analysis

2.Resemblyzer for voice analysis

3.Keyword and intent detection

4.Signal feature extraction

# Workflow
1.User provides text and/or audio input

2.Text and voice are analyzed independently

3.Fusion engine combines risk scores

4.Correlation engine detects cross-channel patterns

5.System outputs:
Threat level (SAFE / WARNING / CRITICAL)

Confidence score

Explanation and visual insights

# Use Cases
1.Fraud detection in banking and fintech

2.Scam detection for individuals

3.Enterprise communication security

# Installation
### Clone the repository
git clone https://github.com/your-username/fusionshield-ai.git

### Navigate to project folder
cd fusionshield-ai

### Backend Setup
1.cd backend

2.pip install -r requirements.txt

3.uvicorn main:app --reload

### Frontend Setup
1.cd frontend

2.npm install

3.npm start

# Output Example
Threat Level: CRITICAL

Confidence: 92%

Reason: OTP request, urgency signals, suspicious voice pattern

Visualization: Risk gauge and fusion graph

# Impact
FusionShield AI improves cybersecurity by detecting coordinated multi-platform scams, reducing fraud risks, and introducing cross-channel threat intelligence.

# Future Enhancements
1.Real-time call monitoring

2.Deepfake voice detection

3.Integration with messaging platforms

4.Continuous learning models

