
import React from 'react';
import { ClawIcon } from './Icons';
import { Github } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex items-center justify-between glass mx-auto mt-2 md:mt-4 max-w-7xl rounded-xl md:rounded-2xl border border-white/5">
      <div className="flex items-center gap-2">
        <ClawIcon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <span className="text-lg md:text-xl font-bold tracking-tight text-white">Clawdbot<span className="text-cyan-400"> Manager</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#install" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">快速安装</a>
        <a href="#steps" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">安装流程</a>
        <a href="https://github.com/Peiiii/moltbot-manager" target="_blank" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>

      <a href="https://github.com/Peiiii/moltbot-manager" target="_blank" className="px-4 py-1.5 md:px-5 md:py-2 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
        获取源码
      </a>
    </nav>
  );
};

export default Navbar;
