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

// 目前暂无公开项目
// 我的工作主要通过 buildbyliang.com 博客分享
// 未来有真实项目时会更新这里
export const projects: Project[] = [];
