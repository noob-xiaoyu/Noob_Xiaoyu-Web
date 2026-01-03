<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="to" class="download-card-link" download>
    <el-card class="project-card" shadow="hover">
      <div class="project-card-content">
        <div class="icon-container">
          <slot name="icon">
            <el-avatar v-if="icon" :size="52" :src="icon" shape="square" />
          </slot>
        </div>

        <div class="project-details">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </el-card>
  </a>
</template>