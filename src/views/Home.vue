<template>
  <div class="wrapper">
    <el-container>
      <el-header>
        <!-- 头 -->
        <el-header style="text-align: right; font-size: 12px">
          <el-row>
            <el-col :span="3">
              <div class="grid-content bg-purple" style="line-height: 60px;height: 20px;">
                <span style="font-size: 20px;color: whitesmoke">{{ title }}</span>
              </div>
            </el-col>
            <el-col :span="21">
              <div class="grid-content bg-purple-light">
                <!-- 系统标题 -->
                <el-dropdown @command="handleCommand">
                  <i class="el-icon-setting" style="margin-right: 15px"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="center">个人中心</el-dropdown-item>
                    <el-dropdown-item command="updatePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="exit">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                您好，
                <span>{{ name }}</span>
              </div>
            </el-col>
          </el-row>

        </el-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边 -->
          <!-- 默认展开的索引default-active -->
          <el-menu :default-active="default_active" @select="handleSelect" unique-opened>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>AA
              </template>
              <el-menu-item index="1-1">
                <router-link to="/arrangeLesson" class="links">a1</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/courseTable" class="links">a2</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <!-- Main区域，数据显示 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      time: "",
      default_active: "0",
      name: '用户名',
      title: '消息推送平台',
    }
  },
  methods: {
    // 下拉菜单功能，退出、个人中心
    handleCommand(command) {
      // alert(command)
      if (command === 'exit') {
        // this.$axios.defaults.headers.common['token'] = window.localStorage.getItem('token')
        // this.$axios(
        //     {
        //       method: "post",
        //       data: {
        //         "token": window.localStorage.getItem('token')
        //       },
        //       url: 'http://localhost:8085/logout',
        //     }
        // )
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
        localStorage.removeItem('teacher')
        // 判断，返回指定页面
        this.$router.push('/')

      } else if (command === 'center') {
        // todo 跳转到个人中心
      } else if (command === 'updatePassword') {
        // todo 修改密码页面
        this.$router.push('/updatePassword')
      }
    },

    // 展开一个菜单
    handleSelect(val) {
      this.default_active = val;
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  width: 100%;

  .a {
    text-decoration: none !important;
    color: #303133 !important;
  }

  .links {
    text-decoration: none !important;
    color: #303133 !important;
  }
}

.el-container {
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}

.el-header,
.el-footer {
  background-color: #76D8F8;
  //color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: whitesmoke;
  color: #333;
  text-align: center;
  padding: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


