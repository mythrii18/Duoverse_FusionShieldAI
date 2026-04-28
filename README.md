# FusionShield AI — Multi-Channel Cyber Threat Detection

FusionShield AI is a multi-layer AI-powered cybersecurity system designed to detect coordinated scam attacks across text (email, SMS, chat) and voice channels. It combines NLP, voice intelligence, and a fusion engine to identify cross-channel threats with explainable outputs.

# Key Features
1.Multi-platform text analysis (email, SMS, chat)

2.Voice signal analysis

3.Multi-layer AI pipeline

4.Fusion engine combining text + voice

5.Cross-channel correlation detection 

6.Threat level classification (SAFE / WARNING / CRITICAL)

7.Confidence scoring 

8.Explainable AI (reasoning output) 

9.Attack type detection (OTP scam, phishing, etc.)

10.Timeline analysis 

11.Visualization support (gauge + graphs) 

# System Architecture
#### 1.Text Intelligence Layer

Uses DistilBERT for NLP analysis
Detects:

phishing patterns
urgency language
financial intent (OTP, bank, login)
suspicious links

Output:

Text Risk Score
Detected Keywords
Attack Type
Reasoning


#### 2.Voice Intelligence Layer

Uses Librosa for signal processing

Extracts:

energy (loudness patterns)
zero-crossing rate (speech variation)
signal variability

Detects:

abnormal speech patterns
suspicious audio behavior

Output:

Voice Risk Score
Audio Feature Analysis


#### 3.Fusion Engine

Combines text and voice scores using weighted multi-modal fusion

Text given higher importance
Voice contributes additional signal

Enhances detection when:

both channels show suspicious activity

Output:

Final Threat Score
Threat Level (SAFE / WARNING / CRITICAL)
Confidence Score


#### 4.Correlation Engine

Analyzes relationships between multiple inputs

Checks shared intent (OTP, banking, urgency)
Detects cross-channel coordination

If correlation detected:

Boosts threat score
Flags coordinated attack

Output:

Correlation Status (True / False)


#### 5.Explainability & Timeline Layer

Provides transparent and user-friendly insights

Generates:

reasoning (why flagged)
attack type classification
confidence score
timeline of detected events

Example Timeline:

Text input analyzed
Voice input analyzed
Correlation detected
Threat level computed

# Tech Stack
## Frontend
1.React

2.Tailwind CSS

3.Recharts

## Backend
1.FastAPI

2.Uvicorn

## AI Components
1.DistilBERT (NLP text analysis)

2.Librosa (audio signal processing)

3.Keyword + pattern detection

4.Fusion & correlation engine

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

# Innovation
FusionShield AI detects coordinated cyber attacks by combining signals from multiple channels (text + voice).

Unlike traditional systems, it identifies relationships between inputs using a fusion and correlation engine, enabling detection of advanced multi-channel scams.

# Impact
FusionShield AI improves cybersecurity by detecting coordinated multi-platform scams, reducing fraud risks, and introducing cross-channel threat intelligence.

# Future Enhancements
1.Real-time call monitoring

2.Deepfake voice detection

3.Integration with messaging platforms

4.Continuous learning models

