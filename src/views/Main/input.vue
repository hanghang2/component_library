<template>
    <div class="input">
        <div class="list">
            <p>基础用法</p>
            <zz-input v-model="inputvalue" placeholder="请输入内容"></zz-input>
        </div>
        <div class="list">
            <p>禁用状态</p>
            <zz-input v-model="inputvalue" placeholder="请输入内容" disabled></zz-input>
        </div>
        <div class="list">
            <p>可清空</p>
            <zz-input :value.sync="clearvalue" placeholder="请输入内容" clearable></zz-input>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                inputvalue: '',
                clearvalue: '',
            }
        },
    }
</script>
<style scoped>
    .input .list {
        margin-bottom: 20px;
        
    }
    .input .list p {
        margin-bottom: 10px;
    }
</style>