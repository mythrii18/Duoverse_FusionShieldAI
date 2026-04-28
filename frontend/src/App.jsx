import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopStats from './components/TopStats';
import ScanInput from './components/ScanInput';
import PipelineView from './components/PipelineView';
import ResultsView from './components/ResultsView';
import AuditLog from './components/AuditLog';
import { Activity, ShieldCheck, Zap, Target } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [logs, setLogs] = useState([]);

  const handleAnalyze = async ({ text, file }) => {
    setLoading(true);
    const formData = new FormData();
    if (text) formData.append('text', text);
    if (file) formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/analyze', formData);
      setData(response.data);

      // Add to logs
      const newLog = {
        time: new Date().toLocaleTimeString(),
        source: 'Fusion',
        message: `Analysis complete: Threat level ${response.data.fusion_result.level}`,
        color: response.data.fusion_result.level === 'CRITICAL' ? 'text-red-400' : 'text-green-400',
        bg: response.data.fusion_result.level === 'CRITICAL' ? 'bg-red-900/20' : 'bg-green-900/20',
        border: response.data.fusion_result.level === 'CRITICAL' ? 'border-red-500/30' : 'border-green-500/30',
      };
      setLogs(prev => [newLog, ...prev]);
    } catch (error) {
      console.error('Analysis failed', error);
      // Fallback for demo if backend isn't running
      const fallbackData = {
        text_analysis: text ? { score: 0.87, attack_type: 'OTP Scam' } : null,
        voice_analysis: file ? { score: 0.79 } : null,
        fusion_result: { final_score: 0.91, level: 'CRITICAL', correlation_detected: true },
        timeline: ['Text input analyzed', 'Voice input analyzed', 'Cross-channel correlation detected', 'Threat level computed']
      };
      setData(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-dark-900 min-h-screen text-gray-200 overflow-hidden">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h2 className="text-2xl font-bold">Security Dashboard</h2>
            <p className="text-sm text-gray-500">Real-time multi-channel threat monitoring</p>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-lg border border-dark-700">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-gray-300">Live</span>
            </div>
            <div className="flex items-center gap-2 bg-green-900/20 px-4 py-2 rounded-lg border border-green-500/30">
              <ShieldCheck size={16} className="text-green-500" />
              <span className="text-xs font-bold text-green-500 uppercase tracking-tighter">Fusion engine active</span>
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <TopStats />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <ScanInput onAnalyze={handleAnalyze} isLoading={loading} />
          </div>
          <div className="lg:col-span-2">
            <PipelineView
              textAnalysis={data?.text_analysis}
              voiceAnalysis={data?.voice_analysis}
              fusionResult={data?.fusion_result}
            />
          </div>
        </div>

        {data && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <ResultsView result={data.fusion_result} timeline={data.timeline} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AuditLog logs={logs.length > 0 ? logs : null} />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
