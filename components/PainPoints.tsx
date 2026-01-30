
import React from 'react';
import { XCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section id="vision" className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">跨越技术鸿沟</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">OpenClaw 足够强大，但它的配置不应成为普通用户的门槛。</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold mb-2">复杂的命令行噩梦</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  手动编辑 .yaml 配置文件、管理复杂的环境变量，在漆黑的终端中反复调试。一个微小的拼写错误就可能导致整个服务崩溃。
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold mb-2">碎片化的技术支持</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  教程散落在论坛、GitHub Issues 和过时的博客中。用户需要耗费大量精力去整合零散的信息，只为完成一个基础的通讯授权。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-500/5 rounded-3xl blur-2xl" />
          <div className="relative glass p-6 md:p-8 rounded-3xl border border-cyan-500/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Claw.cool 的解决方案</h3>
            <ul className="space-y-4">
              {[
                "引导式分步部署向导",
                "可视化 API 与 令牌管理中心",
                "一键式实例状态监控",
                "统一的技能与插件市场 (即将上线)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-cyan-400">
              <span className="text-sm font-semibold italic">化繁为简，触手可及</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
