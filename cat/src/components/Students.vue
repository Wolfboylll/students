<template>
    <div class="StudentList">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
     <el-container>
  <el-header>
      
      <router-link to="/home">
      <i class="fab fa-d-and-d"></i>
          fontend
      </router-link>
  </el-header>
  <el-container>
        <el-aside width="240px">

        <el-menu
            router
            :default-active="activePath"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(item,index) in menus">
            <el-submenu :index="index + ''"  :key="index" v-if="!item.hidden">
                <template slot="title">
                <i class="fab fa-jedi-order"></i>
                <!-- <i class="el-icon-location"></i> -->
                <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group v-for="(child,index) in item.children" :key="index">
                <el-menu-item :index="child.path">
                  <i :class="child.iconclass"></i>
                  {{ child.name }}
                </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </template>
            </el-menu>
        </el-aside>
    <el-container class="content">
      <main>
        <!-- 面包屑 -->
        <el-card>
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item class="fontWeight">Students</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        </el-card>
          <!-- 陆游展示出口 -->
          <router-view></router-view>
      </main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [],
      activePath: ''
    }
  },
  created () {
    // console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
    // this.activePath = this.menus[4].children[0].path
    // console.log(this.$router.currentRoute.path)
    this.activePath = this.$router.currentRoute.path
    console.log(this.$route.matched);
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
 .StudentList .el-header {
    background-color: #3f3f3f;
    color: rgb(252, 185, 0);
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .StudentList .el-header a{
      color: #ffcc66;
      font-size: 24px;
      text-decoration: none;
  }
  .StudentList .el-aside {
      position: absolute;
      height: calc(100vh- 60px);
  }
  .StudentList .el-aside[data-v-27bd59c8]{
       height:100%;
      text-align: left;
  }
  .StudentList .el-aside .el-menu{
      height:100%;
      text-align: left;
  }
 .StudentList .el-aside .el-submenu i{
      color:#d3d6d9;
      margin-right: 5px;
  }
  .StudentList .content {
      position: absolute;
      left: 240px;
      width: calc(100vw - 24px);
      padding: 20px;
      display: flex;
      flex-direction: column;
  }
  .StudentList .content main{
      width: 100%;
      height: calc(100% - 100px);
      margin-bottom: 20px;
  }
  .StudentList .content footer{
      width: 100%;
      line-height: 60px;
      color: #10401c
  }
</style>
