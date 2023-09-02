<script setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
import cat from '@/assets/cat1.png'
</script>
<template>
  <el-carousel>
    <el-carousel-item v-for="item in 4" :key="item" class="main">
      <el-image :src="cat" alt="">
        <template #error>
          <div class="image-slot">
            <el-icon><icon-picture /></el-icon>
          </div>
        </template>
      </el-image>
<!--      <img src="../assets/cat1.png" alt="" style="width:100%;">-->
    </el-carousel-item>
  </el-carousel>
</template>

