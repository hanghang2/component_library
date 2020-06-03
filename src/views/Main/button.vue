<template>
    <div class="Button">
        <div class="buttonList">
            <span>按钮：</span>
            <zz-button>默认按钮</zz-button>
            <zz-button type="primary">主要按钮</zz-button>
            <zz-button type="success">成功按钮</zz-button>
            <zz-button type="info">信息按钮</zz-button>
            <zz-button type="warning">警告按钮</zz-button>
            <zz-button type="danger">危险按钮</zz-button>
        </div>
        <div class="buttonList">
            <span>朴素按钮：</span>
            <zz-button plain>默认按钮</zz-button>
            <zz-button type="primary" plain>主要按钮</zz-button>
            <zz-button type="success" plain>成功按钮</zz-button>
            <zz-button type="info" plain>信息按钮</zz-button>
            <zz-button type="warning" plain>警告按钮</zz-button>
            <zz-button type="danger" plain>危险按钮</zz-button>
        </div>
        <div class="buttonList">
            <span>圆角按钮：</span>
            <zz-button round>默认按钮</zz-button>
            <zz-button type="primary" round>主要按钮</zz-button>
            <zz-button type="success" round>成功按钮</zz-button>
            <zz-button type="info" round>信息按钮</zz-button>
            <zz-button type="warning" round>警告按钮</zz-button>
            <zz-button type="danger" round>危险按钮</zz-button>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.Button .buttonList {
    margin-bottom: 30px;
}
.Button .buttonList span {
    width: 80px;
    display: inline-block;
    text-align: center;
}
</style>