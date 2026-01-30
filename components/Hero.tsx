
import React from 'react';
import { ArrowRight, Terminal, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-20 px-6 max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-semibold mb-6 md:mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        公开测试版现已开启
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight md:leading-[1.1]">
        您的个人 AI 数字管家 <br />
        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          配置从未如此简单
        </span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-xl mb-8 md:mb-10 leading-relaxed px-4">
        OpenClaw 是一个跨时代的开源 AI 助理。我们致力于消除技术壁垒，让您告别繁琐的命令行，通过精美的图形界面深度定制您的 AI 自动化流程。
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20">
          部署 OpenClaw <ArrowRight className="w-5 h-5" />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 glass text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
          查看技术文档
        </button>
      </div>

      <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 grayscale opacity-50 text-xs md:text-sm">
        <div className="flex items-center gap-2"><Terminal className="w-4 h-4 md:w-5 md:h-5" /> 从命令行到 UI</div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> 安全密钥管理</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> 24/7 状态监控</div>
      </div>
    </section>
  );
};

export default Hero;
