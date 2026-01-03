// src/data/projects.js

// 导入你可能用到的图标组件
import vsIcon from '@/components/icons/Visual_Studio_2022.vue';
import launcherIcon from '@/components/icons/launcher.vue'; // 假设你还有一个 launcher.vue 图标

// 导出项目列表数组
export const projects = [
  {
    id: 'personal-website', // 唯一的 ID，将用在 URL 中
    icon: 'https://cdn.jsdelivr.net/gh/noob-xiaoyu/image@main/hoshino.jpg',
    title: '个人网站',
    description: '就是本网站，使用 Vue 3 + Element Plus 构建。',
    fullDescription: '这是一个从零开始构建的、完全响应式的个人主页和作品集。项目采用了 Vite 作为构建工具，Vue 3 作为核心框架，并搭配 Element Plus 组件库快速构建美观的 UI。实现了动态视频背景、黑白主题一键切换、组件化开发以及路由过渡动画等功能。',
    technologies: ['Vue 3', 'Vite', 'Element Plus', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Noob_Xiaoyu-s-Personal-Website',
    }
  },
  {
    id: 'windows-launcher',
    iconComponent: launcherIcon, // 使用组件作为图标
    title: 'Windows 桌面启动器',
    description: '一个模仿 Windows 11 风格的桌面应用启动器。',
    fullDescription: '该项目旨在通过 Web 技术复刻原生桌面应用的体验。用户可以自定义添加、删除和拖拽应用图标，所有配置均保存在本地。项目难点在于实现流畅的拖拽排序算法和状态的本地持久化。',
    technologies: ['React', 'TypeScript', 'Electron', 'Styled-Components'],
    links: {
      github: 'https://github.com/your-repo/launcher'
    }
  },;

// 同样，我们也可以把下载列表放在这里
export const downloads = [
    {
        id: 'vs-2022',
        iconComponent: vsIcon,
        title: 'Visual Studio 2022',
        description: 'Visual Studio 2022 Community',
        to: 'https://aka.ms/vs/17/release/vs_community.exe', 
    },
    // ... 其他下载项
];