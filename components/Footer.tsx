
import React from 'react';
import { ClawIcon } from './Icons';
import { Github, Twitter, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] pt-16 md:pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ClawIcon className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" />
              <span className="text-lg md:text-xl font-bold text-white">Claw.cool</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-6">
              OpenClaw 生态最直观的图形化管理平台。化简为繁，赋能每一位普通用户拥有自己的 AI 管家。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm md:text-base">平台产品</h4>
            <ul className="space-y-3 text-xs md:text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">管理面板</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">向导界面</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">集成中心</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-6 text-sm md:text-base">相关资源</h4>
            <ul className="space-y-3 text-xs md:text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">文档中心</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">技能市场</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">服务状态</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm md:text-base">订阅最新动态</h4>
            <p className="text-xs text-slate-500 mb-4">第一时间获取插件发布和核心版本更新通知。</p>
            <form className="flex gap-2">
              <input type="text" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs md:text-sm text-white" placeholder="您的电子邮箱..." />
              <button className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-xs md:text-sm font-bold border border-cyan-500/20 hover:bg-cyan-500/30 transition-all">订阅</button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] text-slate-600 uppercase tracking-widest text-center md:text-left">
          <p>© 2024 Claw.cool 配置管理平台。保留所有权利。</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
