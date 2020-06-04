<template>
    <div class="Button">
        <p>基础用法</p>
        <br>
        <div class="buttonList">
            <zz-button>默认按钮</zz-button>
            <zz-button type="primary">主要按钮</zz-button>
            <zz-button type="success">成功按钮</zz-button>
            <zz-button type="info">信息按钮</zz-button>
            <zz-button type="warning">警告按钮</zz-button>
            <zz-button type="danger">危险按钮</zz-button>
            <br>
            <br>
            <zz-button plain>朴素按钮</zz-button>
            <zz-button type="primary" plain>主要按钮</zz-button>
            <zz-button type="success" plain>成功按钮</zz-button>
            <zz-button type="info" plain>信息按钮</zz-button>
            <zz-button type="warning" plain>警告按钮</zz-button>
            <zz-button type="danger" plain>危险按钮</zz-button>
            <br>
            <br>
            <zz-button round>圆角按钮</zz-button>
            <zz-button type="primary" round>主要按钮</zz-button>
            <zz-button type="success" round>成功按钮</zz-button>
            <zz-button type="info" round>信息按钮</zz-button>
            <zz-button type="warning" round>警告按钮</zz-button>
            <zz-button type="danger" round>危险按钮</zz-button>
        </div>
        <p>禁用状态</p>
        <br>
        <div class="buttonList">
            <zz-button disabled>禁用按钮</zz-button>
            <zz-button type="primary" disabled>主要按钮</zz-button>
            <zz-button type="success" disabled>成功按钮</zz-button>
            <zz-button type="info" disabled>信息按钮</zz-button>
            <zz-button type="warning" disabled>警告按钮</zz-button>
            <zz-button type="danger" disabled>危险按钮</zz-button>
            <br>
            <br>
            <zz-button disabled plain>朴素按钮</zz-button>
            <zz-button type="primary" disabled plain>主要按钮</zz-button>
            <zz-button type="success" disabled plain>成功按钮</zz-button>
            <zz-button type="info" disabled plain>信息按钮</zz-button>
            <zz-button type="warning" disabled plain>警告按钮</zz-button>
            <zz-button type="danger" :disabled="true" plain>危险按钮</zz-button>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.Button .buttonList {
    margin-bottom: 30px;
    border: 1px solid #dddddd;
    padding: 25px;
    border-radius: 5px;
}
.Button .buttonList span {
    width: 80px;
    display: inline-block;
    text-align: center;
}
</style>
