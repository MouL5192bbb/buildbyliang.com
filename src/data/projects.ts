// 共享项目数据 - 中英文共用
export interface Project {
  name: string;
  description: {
    zh: string;
    en: string;
  };
  tags: string[];
  status: 'Active' | 'Planning' | 'Archived';
  stars: number;
  url: string;
  language: string;
}

export const projects: Project[] = [
  {
    name: 'cpp-ai-toolkit',
    description: {
      zh: '面向 C++ 工程师的 AI 工具集合，包含代码审查、重构、测试生成、性能分析等工具，让 AI 真正赋能系统级开发。',
      en: 'AI toolkit for C++ engineers: code review, refactoring, test generation, performance profiling — empowering system-level development with AI.',
    },
    tags: ['C++', 'AI', 'DevTools', 'Open Source'],
    status: 'Active',
    stars: 128,
    url: 'https://github.com/MouL5192bbb/cpp-ai-toolkit',
    language: 'C++',
  },
  {
    name: 'infer-lab',
    description: {
      zh: '推理引擎学习笔记配套代码：从 PyTorch → ONNX → TensorRT 全流程实操，每一步都有可运行的示例。',
      en: 'Companion code for inference engine study notes: end-to-end PyTorch → ONNX → TensorRT pipeline with runnable examples.',
    },
    tags: ['AI Infra', 'CUDA', 'TensorRT', 'Tutorial'],
    status: 'Active',
    stars: 64,
    url: 'https://github.com/MouL5192bbb/infer-lab',
    language: 'C++/Python',
  },
  {
    name: 'embedded-ai-cookbook',
    description: {
      zh: '嵌入式 AI 部署实战集：量化、剪枝、ONNX Runtime 在 RK3588 / Jetson 上的工程化经验。',
      en: 'Embedded AI deployment cookbook: quantization, pruning, ONNX Runtime on RK3588 / Jetson — engineering practices.',
    },
    tags: ['Embedded', 'AI', 'Edge Computing'],
    status: 'Planning',
    stars: 0,
    url: '#',
    language: 'C++/Python',
  },
];
