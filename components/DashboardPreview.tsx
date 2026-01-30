
import React from 'react';
import { Activity, Layout, Settings, Share2, Power, Terminal } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="px-4 md:px-6 py-12 max-w-6xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl md:rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        
        <div className="relative glass rounded-xl md:rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-2 md:ml-4 px-2 md:px-3 py-1 bg-black/30 rounded-md text-[9px] md:text-[10px] text-slate-500 flex items-center gap-2">
                <Layout className="w-3 h-3" /> http://localhost:17321
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-auto md:h-[450px]">
            {/* Sidebar */}
            <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-white/5 p-3 md:p-4 flex md:flex-col gap-2 overflow-x-auto">
              <div className="whitespace-nowrap flex-shrink-0 p-2 bg-cyan-500/10 rounded-lg text-cyan-400 text-[10px] md:text-xs font-medium flex items-center gap-2">
                <Terminal className="w-4 h-4" /> 终端管理
              </div>
              <div className="whitespace-nowrap flex-shrink-0 p-2 text-slate-500 text-[10px] md:text-xs hover:text-white transition-colors flex items-center gap-2">
                <Settings className="w-4 h-4" /> 秘钥配置
              </div>
              <div className="whitespace-nowrap flex-shrink-0 p-2 text-slate-500 text-[10px] md:text-xs hover:text-white transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" /> 外部应用
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-black/20">
              <div className="md:col-span-2 flex items-center justify-between mb-1">
                <h3 className="text-white text-sm md:text-base font-semibold">Clawdbot 管理中心</h3>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[9px] md:text-[10px] border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> 服务正常
                </div>
              </div>

              <div className="glass p-4 rounded-xl border border-white/5 space-y-4">
                <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">CLI 版本状态</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white">v1.2.4 (最新版)</span>
                  <button className="text-[9px] bg-cyan-500 text-black px-2 py-1 rounded font-bold">检查更新</button>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500 rounded-full glow" />
                </div>
              </div>

              <div className="glass p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center gap-2">
                <p className="text-[9px] text-slate-500 font-bold mb-1">DISCORD BOT</p>
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                   <Activity className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-[10px] text-slate-400">已成功连接</span>
              </div>

              <div className="md:col-span-2 glass p-4 rounded-xl border border-white/5 overflow-hidden">
                <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">系统消息</p>
                <div className="font-mono text-[8px] md:text-[9px] text-slate-500 space-y-1">
                  <div>[Manager] 已在端口 17321 启动 Web 服务。</div>
                  <div>[CLI] 正在加载 Discord Bot Token... <span className="text-green-500">成功</span></div>
                  <div>[AI] 模型节点 (GPT-4o) 状态正常。</div>
                  <div className="text-cyan-400 cursor-pointer hover:underline">点击查看详细实时日志...</div>
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
