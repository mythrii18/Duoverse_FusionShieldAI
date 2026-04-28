import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, ShieldAlert, Cpu } from 'lucide-react';

const PipelineView = ({ textAnalysis, voiceAnalysis, fusionResult }) => {
  const steps = [
    {
      id: 1,
      name: 'Text intelligence — NLP + intent detection',
      model: 'DistilBERT',
      details: 'Email · SMS · Chat analyzed — phishing, urgency, financial intent detected',
      active: !!textAnalysis,
      data: textAnalysis ? [
        { label: 'Risk', value: textAnalysis.score * 100, color: 'bg-purple-600' },
        { label: 'Attack', value: textAnalysis.attack_type, color: 'bg-green-600' }
      ] : null
    },
    {
      id: 2,
      name: 'Voice intelligence — embedding + signal features',
      model: 'Resemblyzer',
      details: 'Speaker embeddings + energy patterns — synthetic speech anomaly flagged',
      active: !!voiceAnalysis,
      data: voiceAnalysis ? [
        { label: 'Voice risk', value: voiceAnalysis.score * 100, color: 'bg-yellow-600' },
        { label: 'Synthetic', value: '0.83', color: 'bg-orange-600' }
      ] : null
    },
    {
      id: 3,
      name: 'Fusion engine — weighted + correlation boost',
      model: 'Active',
      details: 'Text score + Voice score combined. Correlation boost applied — both channels suspicious',
      active: !!fusionResult,
      data: fusionResult ? [
        { label: 'Final score', value: fusionResult.final_score * 100, color: 'bg-red-600' },
        { label: 'Boost', value: '+15%', color: 'bg-purple-600' }
      ] : null
    },
    {
      id: 4,
      name: 'Correlation engine — cross-channel detection',
      model: 'Alert',
      details: 'Banking + OTP intent matched across Email + SMS + Voice — coordinated attack confirmed',
      active: fusionResult?.correlation_detected,
      status: fusionResult?.correlation_detected ? 'CRITICAL' : 'SAFE'
    }
  ];

  return (
    <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-xl h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-200">4-layer AI pipeline</h3>
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Processing status</span>
      </div>

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-4 rounded-xl border transition-all ${
              step.active
                ? 'bg-dark-700/50 border-dark-600 shadow-lg ring-1 ring-white/5'
                : 'bg-dark-900/30 border-dark-800 opacity-50'
            }`}
          >
            <div className="flex gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs ${
                step.active ? 'bg-purple-600 text-white' : 'bg-dark-600 text-gray-500'
              }`}>
                {step.id}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[13px] font-bold text-gray-200">{step.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    step.active ? 'bg-dark-900/50 text-blue-400' : 'bg-dark-900/50 text-gray-600'
                  }`}>
                    {step.model}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">{step.details}</p>

                {step.data && (
                  <div className="flex gap-2">
                    {step.data.map((d, i) => (
                      <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${d.color}`}>
                        {d.label} {d.value}
                      </span>
                    ))}
                  </div>
                )}

                {step.id === 4 && step.active && (
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-600 text-white">Coordinated attack</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-900/50 text-red-500 border border-red-500/50">Critical</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PipelineView;
