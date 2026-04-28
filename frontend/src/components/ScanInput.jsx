import React from 'react';
import { Mail, MessageSquare, Mic, Upload, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ScanInput = ({ onAnalyze, isLoading }) => {
  const [activeTab, setActiveTab] = React.useState('email');
  const [text, setText] = React.useState('');
  const [file, setFile] = React.useState(null);

  const tabs = [
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'sms', label: 'SMS / Chat', icon: MessageSquare },
    { id: 'voice', label: 'Voice upload', icon: Mic },
  ];

  const handleSubmit = () => {
    onAnalyze({ text, file });
  };

  return (
    <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 shadow-xl h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-200">Scan input</h3>
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Multi-channel analysis</span>
      </div>

      <div className="flex bg-dark-900 p-1 rounded-lg mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center py-3 rounded-md transition-all ${
              activeTab === tab.id ? 'bg-dark-700 text-white shadow-lg border border-dark-600' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <tab.icon size={20} className="mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1">
        {activeTab !== 'voice' ? (
          <div className="relative h-full flex flex-col">
            <textarea
              className="flex-1 w-full bg-dark-900 border border-dark-700 rounded-lg p-4 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors resize-none mb-4"
              placeholder={activeTab === 'email' ? "Paste email content here..." : "Paste SMS or chat logs here..."}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {text && (
              <div className="absolute top-4 right-4">
                <button onClick={() => setText('')} className="text-gray-500 hover:text-gray-300">
                  <X size={16} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col h-full">
            <div className="flex-1 border-2 border-dashed border-dark-700 rounded-lg flex flex-col items-center justify-center p-6 bg-dark-900 hover:border-purple-500/50 transition-colors cursor-pointer mb-4 relative overflow-hidden group">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => setFile(e.target.files[0])}
                accept="audio/*"
              />
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map(i => (
                    <motion.div
                      key={i}
                      animate={{ height: [10, 20, 10] }}
                      transition={{ duration: 0.5 + i*0.1, repeat: Infinity }}
                      className="w-1 bg-purple-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-400">
                {file ? file.name : "Drop audio file or click to upload"}
              </p>
              {file && (
                <button
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="mt-2 text-xs text-red-400 hover:text-red-300"
                >
                  Remove file
                </button>
              )}
            </div>
            <div className="text-[10px] text-gray-500 mb-4">Audio (optional)</div>
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading || (!text && !file)}
        className={`w-full py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
          isLoading || (!text && !file)
            ? 'bg-dark-700 text-gray-500 cursor-not-allowed'
            : 'bg-dark-600 text-white hover:bg-dark-500 border border-dark-500 shadow-lg'
        }`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <ShieldCheck size={18} />
            Run FusionShield Analysis
          </>
        )}
      </button>
    </div>
  );
};

export default ScanInput;
