
import React, { useState } from 'react';
import { Terminal, Copy, Check, Apple, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState<'nix' | 'win' | null>(null);

  const copyToClipboard = (text: string, type: 'nix' | 'win') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const nixCmd = "curl -fsSL https://clawdbot-manager.pages.dev/install.sh | bash";
  const winCmd = "irm https://clawdbot-manager.pages.dev/install.ps1 | iex";

  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-20 px-6 max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-semibold mb-6 md:mb-8">
        一行命令，开启您的 Clawdbot 之旅
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight md:leading-[1.1]">
        Clawdbot Manager <br />
        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
          极简安装配置工具
        </span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-xl mb-12 leading-relaxed px-4">
        专为 Clawdbot 打造的自动化管理程序。告别复杂的配置过程，一键部署属于您的 Discord 智能助理。
      </p>

      <div id="install" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16 px-4">
        {/* Nix Install */}
        <div className="text-left bg-black/40 border border-white/10 rounded-2xl p-5 relative group overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-slate-400 text-sm font-medium">
            <Apple className="w-4 h-4" /> Mac / Linux
          </div>
          <code className="block font-mono text-xs md:text-sm text-cyan-400 break-all bg-black/50 p-3 rounded-lg border border-white/5 pr-10">
            {nixCmd}
          </code>
          <button 
            onClick={() => copyToClipboard(nixCmd, 'nix')}
            className="absolute right-8 top-[3.7rem] p-2 hover:text-white text-slate-500 transition-colors"
          >
            {copied === 'nix' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Win Install */}
        <div className="text-left bg-black/40 border border-white/10 rounded-2xl p-5 relative group overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-slate-400 text-sm font-medium">
            <Monitor className="w-4 h-4" /> Windows (PowerShell)
          </div>
          <code className="block font-mono text-xs md:text-sm text-yellow-500/80 break-all bg-black/50 p-3 rounded-lg border border-white/5 pr-10">
            {winCmd}
          </code>
          <button 
            onClick={() => copyToClipboard(winCmd, 'win')}
            className="absolute right-8 top-[3.7rem] p-2 hover:text-white text-slate-500 transition-colors"
          >
            {copied === 'win' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
