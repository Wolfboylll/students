<template>
    <div class="Home">
        <el-container class="item">
            <el-card class="box-card" v-for="(item,index) in 4" :key="index">
                {{ 'Card0' + (index + 1) }}
            </el-card>
        </el-container>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.Home {
    width: 100vw;
    height: 100vh;
}
.Home .item {
    justify-content: center;
    padding: 50px 100px;
    flex-wrap: wrap;
}
.Home .item .el-card {
    width: 20px;
    min-width: 240px;
    max-width: 280px;
    height: 320px;
    line-height: 200px;
    font-size: 24px;
    color: #10401c;
    margin:20px 40px;
    cursor: pointer;
    transition: transform .7s;
}
.Home .item .el-card:hover{
    transform: scale(1.05);
}
</style>
