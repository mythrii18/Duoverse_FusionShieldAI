# FusionShield AI — Multi-Channel Cyber Threat Detection

FusionShield AI is a multi-layer AI-powered cybersecurity system designed to detect coordinated scam attacks across text (email, SMS, chat) and voice channels. It combines NLP, voice intelligence, and a fusion engine to identify cross-channel threats with explainable outputs.

# Key Features
Multi-channel detection (text and voice)
Cross-channel correlation detection
Weighted fusion risk scoring
Confidence scoring system
Explainable AI outputs
Attack timeline visualization
Risk gauge and fusion graphs
Works with single or multiple inputs

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
React
Tailwind CSS
Recharts

## Backend
FastAPI
Uvicorn

## AI Components
DistilBERT for text analysis
Resemblyzer for voice analysis
Keyword and intent detection
Signal feature extraction

# Workflow
User provides text and/or audio input
Text and voice are analyzed independently
Fusion engine combines risk scores
Correlation engine detects cross-channel patterns
System outputs:
Threat level (SAFE / WARNING / CRITICAL)
Confidence score
Explanation and visual insights

# Use Cases
Fraud detection in banking and fintech
Scam detection for individuals
Enterprise communication security

# Installation
Clone the repository
git clone https://github.com/your-username/fusionshield-ai.git

Navigate to project folder
cd fusionshield-ai

Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Frontend Setup
cd frontend
npm install
npm start

# Output Example
Threat Level: CRITICAL
Confidence: 92%
Reason: OTP request, urgency signals, suspicious voice pattern
Visualization: Risk gauge and fusion graph

# Impact
FusionShield AI improves cybersecurity by detecting coordinated multi-platform scams, reducing fraud risks, and introducing cross-channel threat intelligence.

# Future Enhancements
Real-time call monitoring
Deepfake voice detection
Integration with messaging platforms
Continuous learning models

