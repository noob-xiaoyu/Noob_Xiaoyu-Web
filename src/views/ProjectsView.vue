<script setup>
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectDetailDialog from '@/components/ProjectDetailDialog.vue'; // 我们将创建这个新组件
import backIcon from '@/components/icons/back.vue';

// 1. 完整项目数据
const projectList = ref([
  {
    id: 'personal-website',
    icon: 'https://cdn.jsdelivr.net/gh/noob-xiaoyu/image@main/hoshino.jpg',
    title: '个人网站',
    shortDescription: '就是本网站，使用 Vue 3 + Element Plus 构建。',
    longDescription: '这是一个完全响应式的个人主页和作品集网站。前端采用 Vue 3、Vite 和 Element Plus 构建，实现了动态视频背景、黑白主题切换、流畅的路由过渡动画等功能。所有项目数据都通过模块化的方式进行管理，易于扩展和维护。',
    images: [],
    techStack: ['Vue 3', 'Vite', 'Element Plus', 'Vue Router'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Noob_Xiaoyu-s-Personal-Website',
      live: '/',
    }
  },
  {
    id: 'another-project',
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    title: '另一个项目',
    shortDescription: '这是一个关于...的酷炫项目。',
    longDescription: '这里是“另一个项目”的详细介绍文字。可以放很多内容。',
    images: [],
    techStack: ['Tech A', 'Tech B', 'Tech C'],
    links: {}
  },
]);

// 2. 用于控制弹窗的状态
const selectedProject = ref(null); // 存储当前被选中的项目
const dialogVisible = ref(false);  // 控制弹窗是否显示

// 3. 点击卡片时触发的函数
function showProjectDetails(project) {
  selectedProject.value = project; // 记录被点击的项目
  dialogVisible.value = true;      // 打开弹窗
}

// 4. 关闭弹窗时触发的函数
function handleClose() {
    dialogVisible.value = false;
    // 动画结束后再清空数据，防止内容闪烁
    setTimeout(() => {
        selectedProject.value = null;
    }, 300);
}
</script>

<template>
  <div class="projects-container">
    <!-- v-show="!dialogVisible" 会在弹窗出现时，通过 CSS 隐藏这个列表卡片 -->
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>我的作品</h1>
        <router-link to="/">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div class="project-list-container">
        <ProjectCard
          v-for="project in projectList"
          :key="project.id"
          :icon="project.icon"
          :iconComponent="project.iconComponent"
          :title="project.title"
          :description="project.shortDescription"
          @viewDetails="showProjectDetails(project)"
        />
      </div>
    </div>

    <!-- 这是我们的详情弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      :title="selectedProject ? selectedProject.title : ''"
      width="80%"
      top="5vh"
      class="project-detail-dialog"
      :before-close="handleClose"
      append-to-body
      destroy-on-close
    >
      <ProjectDetailDialog :project="selectedProject" />
    </el-dialog>
  </div>
</template>