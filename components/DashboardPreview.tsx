
import React from 'react';
import { Activity, Layout, Settings, Share2, Power } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="px-4 md:px-6 py-12 max-w-6xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl md:rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        
        <div className="relative glass rounded-xl md:rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Mock Browser Header */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-2 md:ml-4 px-2 md:px-3 py-1 bg-black/30 rounded-md text-[9px] md:text-[10px] text-slate-500 flex items-center gap-2">
                <Layout className="w-3 h-3" /> dashboard.claw.cool
              </div>
            </div>
          </div>

          {/* Mock Content */}
          <div className="flex flex-col md:flex-row h-auto md:h-[420px]">
            {/* Sidebar - Mobile Horizontal / Desktop Vertical */}
            <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-white/5 p-3 md:p-4 flex md:flex-col gap-2 overflow-x-auto">
              <div className="whitespace-nowrap flex-shrink-0 p-2 bg-cyan-500/10 rounded-lg text-cyan-400 text-[10px] md:text-xs font-medium flex items-center gap-2">
                <Activity className="w-4 h-4" /> 运行概览
              </div>
              <div className="whitespace-nowrap flex-shrink-0 p-2 text-slate-500 text-[10px] md:text-xs hover:text-white transition-colors flex items-center gap-2">
                <Settings className="w-4 h-4" /> 参数配置
              </div>
              <div className="whitespace-nowrap flex-shrink-0 p-2 text-slate-500 text-[10px] md:text-xs hover:text-white transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" /> 外部集成
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-black/20">
              <div className="md:col-span-2 flex items-center justify-between mb-1">
                <h3 className="text-white text-sm md:text-base font-semibold">实例：智能管家_Alpha</h3>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[9px] md:text-[10px] border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> 运行中
                </div>
              </div>

              <div className="glass p-4 rounded-xl border border-white/5 space-y-4">
                <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">记忆体状态</p>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-cyan-500 rounded-full glow" />
                </div>
                <div className="flex justify-between text-[9px] md:text-[10px] text-slate-400">
                  <span>8.4 GB 已占用</span>
                  <span>12.0 GB 总计</span>
                </div>
              </div>

              <div className="glass p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center gap-2">
                <Power className="w-6 h-6 md:w-8 md:h-8 text-red-500/50" />
                <button className="text-[9px] md:text-[10px] bg-red-500/20 hover:bg-red-500/40 text-red-400 px-4 py-2 rounded-lg transition-colors font-bold">立即停止实例</button>
              </div>

              <div className="md:col-span-2 glass p-4 rounded-xl border border-white/5 overflow-hidden">
                <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">实时运行日志</p>
                <div className="font-mono text-[8px] md:text-[9px] text-slate-500 space-y-1">
                  <div>[14:22:01] <span className="text-cyan-500">INFO</span> 正在初始化 OpenClaw 环境...</div>
                  <div>[14:22:04] <span className="text-green-500">OK</span> 已成功连接至 WhatsApp 桥接服务。</div>
                  <div>[14:22:08] <span className="text-cyan-500">INFO</span> 正在处理用户语音指令：查看明日天气...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
