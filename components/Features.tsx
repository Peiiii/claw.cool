
import React from 'react';
import { Rocket, Monitor, Key, Bot, CheckCircle, Smartphone, Terminal, Settings } from 'lucide-react';

const Features: React.FC = () => {
  const steps = [
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "1. 运行命令",
      description: "复制 Hero 区域的命令并运行，Manager 服务将自动启动。"
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "2. 访问面板",
      description: "打开浏览器访问：http://localhost:17321 即可看到管理界面。"
    },
    {
      icon: <Key className="w-5 h-5" />,
      title: "3. 安全登录",
      description: "使用安装时设置的用户名和密码登录管理后台。"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "4. 安装 CLI",
      description: "在面板中一键下载并初始化 Clawdbot CLI 核心组件。"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "5. Discord 配置",
      description: "填写您的 Discord Bot Token，打通与 Discord 的连接。"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "6. 模型配置",
      description: "配置 AI 模型 API Key，赋予您的助理智能对话能力。"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "7. 建立配对",
      description: "与您的 Bot 实例完成配对，确保双向通信正常。"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "8. 完成使用",
      description: "一切就绪！现在您可以开始享受 AI 驱动的自动化体验。"
    }
  ];

  return (
    <section id="steps" className="py-20 md:py-24 px-6 bg-[#050b1a]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">安装与使用流程</h2>
          <p className="text-slate-400 max-w-xl mx-auto">遵循以下 8 个简单步骤，几分钟内即可完成部署。</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl glass border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
