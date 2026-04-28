import React from 'react';
import { LayoutDashboard, ShieldAlert, BarChart3, Brain, Mic, MessageSquare, Database, Settings, FileText } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ShieldAlert, label: 'Threats', count: 12 },
    { icon: BarChart3, label: 'Analytics' },
  ];

  const aiLayers = [
    { icon: MessageSquare, label: 'Text intelligence', color: 'text-blue-400' },
    { icon: Mic, label: 'Voice intelligence', color: 'text-yellow-400' },
    { icon: Brain, label: 'Fusion engine', color: 'text-purple-400' },
    { icon: ShieldAlert, label: 'Correlation engine', count: 3, color: 'text-red-400' },
  ];

  const outputs = [
    { icon: FileText, label: 'Explainability' },
    { icon: BarChart3, label: 'Attack timeline' },
    { icon: FileText, label: 'Reports' },
  ];

  const system = [
    { icon: Database, label: 'Audit logs', color: 'text-yellow-400' },
    { icon: Settings, label: 'Settings', color: 'text-green-400' },
  ];

  return (
    <div className="w-64 bg-dark-900 h-screen border-r border-dark-700 flex flex-col p-4 overflow-y-auto">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <ShieldAlert className="text-white w-5 h-5" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">FusionShield AI</h1>
          <p className="text-xs text-purple-400 font-medium">Multi-channel cyber defense</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-[10px] uppercase font-bold text-gray-500 mb-2 px-2 tracking-wider">Overview</h2>
          {menuItems.map((item, idx) => (
            <div key={idx} className={`flex items-center justify-between px-2 py-2 rounded-md cursor-pointer ${item.active ? 'bg-dark-700 text-white border-l-2 border-purple-500' : 'text-gray-400 hover:bg-dark-800'}`}>
              <div className="flex items-center gap-3">
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.count && <span className="bg-red-900/30 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded">{item.count}</span>}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-[10px] uppercase font-bold text-gray-500 mb-2 px-2 tracking-wider">AI Layers</h2>
          {aiLayers.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-dark-800">
              <div className="flex items-center gap-3">
                <item.icon size={18} className={item.color} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.count && <span className="bg-red-900/30 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded">{item.count}</span>}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-[10px] uppercase font-bold text-gray-500 mb-2 px-2 tracking-wider">Outputs</h2>
          {outputs.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-dark-800">
              <div className="flex items-center gap-3">
                <item.icon size={18} className="text-green-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-[10px] uppercase font-bold text-gray-500 mb-2 px-2 tracking-wider">System</h2>
          {system.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-dark-800">
              <div className="flex items-center gap-3">
                <item.icon size={18} className={item.color} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
