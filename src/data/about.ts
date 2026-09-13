// 共享关于页数据 - 中英文共用
import type { Locale } from '~/utils/i18n';

export interface CurrentFocusItem {
  icon: string;
  label: { zh: string; en: string };
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export const currentFocus: CurrentFocusItem[] = [
  { icon: '🚀', label: { zh: 'AI Infra 与推理引擎', en: 'AI Infra & Inference Engines' } },
  { icon: '🔧', label: { zh: '嵌入式 AI 部署', en: 'Embedded AI Deployment' } },
  { icon: '⚡', label: { zh: '高性能 C++ 工程实践', en: 'High-Performance C++' } },
  { icon: '🤖', label: { zh: 'AI 工具链与开发效率', en: 'AI Toolchain & Dev Productivity' } },
];

export const techStack: Record<string, string[]> = {
  Languages: ['C++ 17/20/23', 'Python', 'CUDA', 'Rust'],
  'AI/ML': ['PyTorch', 'ONNX Runtime', 'TensorRT', 'vLLM'],
  Embedded: ['ROS2', 'RK3588', 'Yocto', 'CMake'],
  Tools: ['Git', 'Docker', 'Linux', 'GDB/Perf'],
};

export const aiTools = {
  zh: [
    'Claude Code - 主要编程伙伴',
    'Cursor - 偶尔 IDE 编码',
    'GitHub Copilot - 代码补全',
    'ChatGPT - 方案讨论与架构',
    'Perplexity - 实时搜索调研',
    'Windsurf - 复杂项目导航',
  ],
  en: [
    'Claude Code — primary programming partner',
    'Cursor — IDE coding occasionally',
    'GitHub Copilot — code completion',
    'ChatGPT — design discussion & architecture',
    'Perplexity — real-time search & research',
    'Windsurf — complex project navigation',
  ],
} as const satisfies Record<Locale, readonly string[]>;

export const aiToolsNote = {
  zh: '在 AI 时代，C++ 程序员的最大杠杆不是写更多代码，而是知道什么时候该让 AI 写、自己只需要 Review。',
  en: "In the AI era, the biggest leverage for C++ engineers isn't writing more code — it's knowing when to let AI write, while you only Review.",
} as const satisfies Record<Locale, string>;

export const contacts: ContactItem[] = [
  { label: 'GitHub', value: 'github.com/MouL5192bbb', href: 'https://github.com/MouL5192bbb' },
  { label: 'Email', value: 'hi@buildbyliang.com', href: 'mailto:hi@buildbyliang.com' },
  { label: 'Twitter', value: '@Liamw443', href: 'https://twitter.com/Liamw443' },
];

export const philosophy = {
  zh: [
    '我相信 <strong class="text-accent">"在底层扎实，在上层飞扬"</strong>。',
    'C++ 给了我理解计算机的思维方式 —— 从内存布局到 CPU 流水线，从 SIMD 指令到 GPU 内核。这些"看不见的细节"，恰恰是 AI 时代最稀缺的竞争力。',
    '而 AI 工具让我能站在更高的视角思考 —— 把繁琐的实现交给机器，把宝贵的时间留给架构、留给创造、留给那些真正需要人类判断的决策。',
    '这个网站是我的思考笔记。如果你恰好也走在类似的路上，欢迎交流。',
  ],
  en: [
    'I believe in <strong class="text-accent">"grounded at the bottom, soaring at the top"</strong>.',
    'C++ has given me a way of thinking about computers — from memory layout to CPU pipelines, from SIMD instructions to GPU kernels. These "invisible details" are precisely what\'s scarcest in the AI era.',
    'And AI tools let me think from a higher vantage point — delegate tedious implementation to machines, reserve precious time for architecture, for creation, for decisions that genuinely need human judgment.',
    "This site is my notebook of thoughts. If you're on a similar path, let's talk.",
  ],
} as const satisfies Record<Locale, readonly string[]>;
