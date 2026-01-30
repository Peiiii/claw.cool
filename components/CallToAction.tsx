
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="community" className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-indigo-600/20 blur-[150px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">准备好释放您的 AI 潜能了吗？</h2>
        <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-12">
          加入数千名 OpenClaw 用户，告别繁琐配置，迈向无缝自动化管理的新纪元。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="email" 
            placeholder="输入您的邮箱以获取优先体验权" 
            className="w-full sm:w-80 px-6 py-4 rounded-xl glass border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 text-sm md:text-base"
          />
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all whitespace-nowrap text-sm md:text-base">
            加入候补名单
          </button>
        </div>
        
        <p className="mt-8 text-xs md:text-sm text-slate-500">
          已经是 OpenClaw 用户？ <a href="#" className="text-cyan-400 hover:underline">立即连接现有实例</a>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
