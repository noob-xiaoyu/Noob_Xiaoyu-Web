<script setup>
import GithubIcon from '@/components/icons/GithubIcon.vue';

defineProps({
  project: {
    type: Object,
    default: () => null
  }
});
</script>

<template>
  <div v-if="project" class="detail-content">
    <el-row :gutter="30">
      <el-col :xs="24" :md="14">
        <el-carousel v-if="project.images && project.images.length > 0" height="250px" class="project-carousel">
          <el-carousel-item v-for="img in project.images" :key="img">
            <img :src="img" style="width:100%; height:100%; object-fit:cover;" />
          </el-carousel-item>
        </el-carousel>
        <p class="long-description">{{ project.longDescription }}</p>
      </el-col>
      <el-col :xs="24" :md="10">
        <h3>技术栈</h3>
        <div class="tech-stack">
          <el-tag v-for="tech in project.techStack" :key="tech" size="large" style="margin: 4px;">
            {{ tech }}
          </el-tag>
        </div>
        <h3 v-if="project.links">相关链接</h3>
        <div class="project-links">
          <el-button v-if="project.links.github" tag="a" :href="project.links.github" target="_blank" class="action-btn" :icon="GithubIcon">
            GitHub
          </el-button>
          <el-button v-if="project.links.live" tag="a" :href="project.links.live" target="_blank" type="primary" class="action-btn" style="margin-left: 10px;" plain>
            在线预览
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>