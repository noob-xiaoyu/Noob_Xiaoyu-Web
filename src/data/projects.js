// src/data/projects.js
export const projectsData = [
  {
    id: 'personal-website',
    icon: 'https://cdn.jsdelivr.net/gh/noob-xiaoyu/image@main/hoshino.jpg',
    title: '个人网站',
    shortDescription: '就是本网站，使用 Vue 3 + Element Plus 构建。',
    longDescription: `这是一个完全响应式的个人主页和作品集网站。前端采用 Vue 3、Vite 和 Element Plus 构建，实现了动态视频背景、黑白主题切换、流畅的路由过渡动画等功能。所有项目数据都通过模块化的方式进行管理，易于扩展和维护。`,
    images: [],
    techStack: ['Vue 3', 'Vite', 'Element Plus', 'Vue Router'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Noob_Xiaoyu-s-Personal-Website',
      live: '/',
    }
  },
  {
    id: 'imgui-menu',
    icon: 'src/assets/image/icon/imgui.png',
    title: 'Imgui-menu',
    shortDescription: '基于 ImGui 的现代化悬浮菜单框架，集成了辉光、鼠标拖尾等视觉特效和计时器等实用工具。',
    longDescription: `这是一个现代化的、半透明的悬浮菜单，主要特点包括：

1. 高度可定制
   - 可自由调整外观，从颜色主题到按钮圆角大小
   - 实时样式编辑器，像 Photoshop 一样调整视觉细节
   - 支持保存和加载自定义主题

2. 核心功能
   - 一键显示/隐藏（默认 Insert 键，可自定义）
   - 丰富的视觉效果：菜单辉光、鼠标拖尾、背景模糊
   - 强大的主题系统：内置多种精心设计的主题
   - 实用的内置工具：毫秒级计时器、实时帧率显示
   - 配置管理系统：支持多个配置文件快速切换

3. 使用方式
   - 运行程序后按 Insert 键呼出菜单
   - 左侧导航栏切换不同功能页面
   - 在设置中可切换主题、修改快捷键等
   - 安全退出程序功能

这是一个集美观、实用和高度个性化于一体的强大 UI 框架。`,
    images: [],
    techStack: ['C++', 'ImGui'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Imgui-menu'
    }
  },
  {
    id: 'image-binary-converter',
    title: 'ImageBinaryConverter',
    shortDescription: '一个可以在图片和二进制文件之间进行双向转换的工具，用于文件伪装、隐藏和绕过传输限制。',
    longDescription: `ImageBinaryConverter 是一个实用的小工具，核心功能是在图片和二进制文件之间进行双向转换。

主要功能：

1. 二进制转图片
   - 将任意文件（如 .exe, .dll, .zip）转换成一张彩色噪点图片
   - 图片中完整包含原始文件的全部数据

2. 图片转二进制
   - 将通过本工具生成的图片还原为原始二进制文件
   - 数据完全无损，保证文件的完整性

应用场景：

• 文件伪装与隐藏：将私密文件转换成普通图片，不易引起注意
• 绕过传输限制：在某些只允许上传图片的平台传输其他类型文件
• 数据隐蔽传输：通过图片形式安全传输敏感数据

技术特点：
- 数据完全无损转换
- 生成的图片看起来像是随机彩色噪点
- 支持各种文件格式的转换
- 简单的操作界面，易于使用

这是一个巧妙的文件隐藏和传输工具，通过将文件数据编码到图片像素中，实现了文件类型的伪装。`,
    images: [],
    techStack: ['C#'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Imgui-menu'
    }
  },
];

// 如果需要可以添加辅助函数
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};

export const getProjectsByTech = (tech) => {
  return projectsData.filter(project => 
    project.techStack.some(stack => stack.toLowerCase().includes(tech.toLowerCase()))
  );
};