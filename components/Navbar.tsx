
import React from 'react';
import { ClawIcon } from './Icons';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex items-center justify-between glass mx-auto mt-2 md:mt-4 max-w-7xl rounded-xl md:rounded-2xl border border-white/5">
      <div className="flex items-center gap-2">
        <ClawIcon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <span className="text-lg md:text-xl font-bold tracking-tight text-white">Claw<span className="text-cyan-400">.cool</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">核心功能</a>
        <a href="#vision" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">项目愿景</a>
        <a href="#community" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">加入社群</a>
      </div>

      <button className="px-4 py-1.5 md:px-5 md:py-2 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
        立即开始
      </button>
    </nav>
  );
};

export default Navbar;
