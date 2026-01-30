
import React from 'react';
import { UserPlus, Gauge, AppWindow, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "引导式初始化",
      description: "交互式表单管理 API 密钥、通讯令牌和环境路径。我们为您自动生成所有配置文件。"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "服务状态监控",
      description: "实时掌握 OpenClaw 实例的运行状况。支持一键启动、停止或平滑重启。"
    },
    {
      icon: <AppWindow className="w-6 h-6" />,
      title: "可视化配置中心",
      description: "通过直观的开关和滑块调整技能设置、记忆存储偏好以及 LLM 模型权重。"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "社区生态集成",
      description: "预留插件市场接口，支持社区配置模板的一键导入与分享，促进生态协作。"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-24 px-6 bg-[#050b1a]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">核心功能模块</h2>
          <p className="text-slate-400 max-w-xl mx-auto">作为 OpenClaw 生态的关键补充，旨在赋能非技术背景用户。</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-6 md:p-8 rounded-2xl glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
