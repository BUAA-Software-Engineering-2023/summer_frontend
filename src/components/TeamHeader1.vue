<template>
  <img src="@/assets/imgs/icons/menu.svg" @click="drawer = true" class="img-decorate">
  <el-drawer v-model="drawer" title="SUMMER" :with-header="false" direction="ltr" size="15%">
    <div class="drawer-content">
      <div class="summer-heading">
        <span class="summer-text" :v-model="teamName">团队：{{ teamName }}</span>
      </div>
      <el-divider class="custom-divider" />
    </div>
    <div class="team-heading">团队</div> <!-- 添加的小标题 -->
    <div class="button-container">
      <button text v-for="button in buttons" :key="button.id" :type="button.type" :icon="button.icon"
        @click="jump(button.id)" class="custom-button" :id="button.id"><i :class="button.icon"
          style="margin-right: 15px; min-width: 30px; height: 30px;"></i>{{button.text}}
      </button>
	    <el-divider></el-divider>
	    
	    <button text v-for="button in buttons2" :key="button.id" :type="button.type" :icon="button.icon"
	            @click="jump(button.id)" class="custom-button" :id="button.id"><i
		    :class="button.icon" style="margin-right: 15px; min-width: 30px; height: 30px;"></i>{{button.text}}
	    </button>
    </div>
    <el-divider></el-divider>
	  
  </el-drawer>
</template>

<script setup>
import { reactive, ref } from 'vue'
import router from "@/router";
import { useRoute } from 'vue-router';
import {clearToken, getTeamId, getTeamName} from "@/utils/token";
const drawer = ref(false)
const teamName = ref(getTeamName())
const buttons = reactive([
  { id: "002", type: 'plain', text: '团队项目', icon: 'el-icon-my-platform' },
  { id: "003", type: 'plain', text: '团队管理', icon: 'el-icon-my-custom' },
  { id: "004", type: 'plain', text: '聊天室', icon: 'el-icon-my-custom1' },
])
const buttons2 = reactive([
	{ id: "005", type: 'plain', text: '切换团队', icon: 'el-icon-my-switch' },
	{ id: "006", type: 'plain', text: '退出登录', icon: 'el-icon-my-logout' },
])

function jump(buttonId) {
  if (buttonId === '001') {
    drawer.value = !drawer.value
    router.push('/document')
  } else if (buttonId === '002') {
    drawer.value = !drawer.value
    router.push('/project')
  } else if (buttonId === '003') {
    drawer.value = !drawer.value
    router.push('/member')
  } else if (buttonId === '004') {
    drawer.value = !drawer.value
    console.log('##############')
    console.log(router)
    router.push({
      path: `/team/${getTeamId()}/chatHome`,
    })
  } else if(buttonId === '005'){
	  drawer.value = !drawer.value
	  router.push('/switch')
  } else if(buttonId === '006'){
	  drawer.value = !drawer.value
	  clearToken()
	  router.push('/login')
  }
  else {
    router.push('/home')
  }

}

function setDrawer(data){
	drawer.value = data
}
defineExpose({setDrawer})



</script>


<style scoped>
.img-decorate {
  margin: auto;
  width: 30px;
  height: auto;
  position: absolute;
  top: 25%;
  left: 1%;
  transition: transform 0.3s ease;
}

.img-decorate:hover {
  transform: scale(1.2);
  /* 或者其他你想要的放大比例 */
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.drawer-content {
  margin: 0px;
  /* 添加一些内边距 */
}

.summer-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
}

.summer-text {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 0px;
  /* 设置文本颜色为橙色 */
}

.el-icon-my-help {
  background: url('@/assets/imgs/icons/icon-s-help.svg') no-repeat;
  font-size: 20px;
  background-size: cover;

  /* 替换成你自己的图标路径 */
}

.el-icon-my-platform {
  background: url('@/assets/imgs/icons/icon-s-platform.svg') no-repeat;
  font-size: 20px;
  background-size: cover;

  /* 替换成你自己的图标路径 */
}

.el-icon-my-custom {
  background: url('@/assets/imgs/icons/icon-s-custom.svg') no-repeat;
  font-size: 20px;
  background-size: cover;

  /* 替换成你自己的图标路径 */
}

.el-icon-my-custom1 {
  background: url('@/assets/imgs/icons/icon-chat-dot-round.svg') no-repeat;
  font-size: 20px;
  background-size: cover;

  /* 替换成你自己的图标路径 */
}
.el-icon-my-logout{
  background: url('@/assets/imgs/icons/logout.svg') no-repeat;
  font-size: 20px;
  background-size: cover;
}
.el-icon-my-switch{
  background: url('@/assets/imgs/icons/switch.svg') no-repeat;
  font-size: 20px;
  background-size: cover;
}
.chat {
  font-size: 20px;
  background-size: cover;
  background: url('@/assets/imgs/icons/icon-chat-dot-round.svg') no-repeat;
  /* 替换成你自己的图标路径 */
}

.el-icon-my-custom:before {
  content: "替";
  font-size: 20px;
  visibility: hidden;
}

.el-icon-my-custom1:before {
  content: "替";
  font-size: 20px;
  visibility: hidden;
}

 .el-icon-my-platform:before {
  content: "替";
  font-size: 20px;
  visibility: hidden;
}

.el-icon-my-help:before {
  content: "替";
  font-size: 20px;
  visibility: hidden;
}
.chat:before {
  content: "替";
  font-size: 20px;
  visibility: hidden;
}

.custom-button {
  border-radius: 8px;
  background: none;
  cursor: pointer;
  position: relative;
  transition: color 0.4s linear;
  width: 100%;
  /* 调整按钮宽度 */
  margin: 15px 0;
  /* 调整按钮之间的垂直间距 */
  border-radius: 5px;
  /* 按钮圆角 */
  background-color: none;
  /* 按钮背景颜色 */
  color: black;
  /* 按钮文字颜色 */
  border: none;
  /* 去掉按钮边框 */
  display: flex;
  /* 使用 Flex 布局 */
  font-size: large;
  text-align: center;
  /* 让文本居中 */
  /* padding: 12px; 增加内边距以适应内容 */
  transition: background-color 0.3s, transform 0.3s;
  /* 添加过渡效果 */
}

.button-icon {
  margin-right: 8px;
  /* 调整图标和文字之间的右侧间距 */
}

.custom-button:hover {
  background-color: #e5eaee;
  /* 按钮背景颜色（鼠标悬停时） */
  transform: scale(1.2);
  /* 鼠标悬停时放大按钮 */
}

.team-heading {
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
  margin-left: 10px;
}
</style>