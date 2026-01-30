
import React from 'react';
import { Github } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="community" className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-indigo-600/20 blur-[150px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">开源协作，共同进化</h2>
        <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-12">
          Clawdbot Manager 是一个完全开源的项目。欢迎在 GitHub 上提出建议、反馈 Bug 或贡献代码。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://github.com/Peiiii/moltbot-manager" 
            target="_blank"
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Github className="w-5 h-5" /> 在 GitHub 上关注
          </a>
          <a 
            href="#install"
            className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm md:text-base"
          >
            查看安装教程
          </a>
        </div>
        
        <p className="mt-8 text-xs md:text-sm text-slate-500">
          Clawdbot Manager 遵循 MIT 开源协议。
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
