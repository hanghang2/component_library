<template>
    <div class="movePopout">
        <!--背景-->
        <div class="popout-bg" @mousemove="mousemove">
            <div class="popout-main" v-bind:class="{'isMax':isMax == 2,'isMin':isMax == 0}" 
                 v-bind:style="getPosition(height)">
                <div class="title" @mousedown="mousedown" @mouseup="mouseup">
                    <div class="text">{{title || '提示'}}</div>
                    <div class="tool" @mousedown.stop="">
                        <!--最小化-->
                        <span v-show="isMax == 1" @click="setIsMax(0)">
                            <img src="@/assets/min.png" />
                        </span>
                        <!--最大化-->
                        <span @click="setIsMax(2)" v-show="isMax == 1">
                            <img src="@/assets/open.png" />
                        </span>
                        <!--正常化-->
                        <span @click="setIsMax(1)" v-show="isMax != 1">
                            <img src="@/assets/max.png" />
                        </span>
                        <!--关闭-->
                        <span @click="close()">
                            <img src="@/assets/close.png" />
                        </span>
                    </div>
                </div>
                <div class="content" v-show="isMax != 0">
                    <slot name="content"></slot>
                </div>
                <div class="bottom">
                    <slot name="bottom"></slot>
                    <!-- <button class="confirm" @click="confirm()"><i class="el-icon-check"></i> 确定</button>
                    <button class="clear" @click="close()"><i class="el-icon-close"></i>取消</button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'movePopout',
        props:["title","visible","height"],//title 标题 、 visible是否可见
        data() {
            return {
                isMax: 1, //是否是最大化 0 最小 1 正常  2最大
                left: false, //弹框left距离 false 代表初始移动位置
                top: false  //弹框top距离 false 代表初始移动位置
            }
        },
        watch: {
        },
        methods: {
            confirm() {//确定
                this.$emit('update:visible', true)
            },
            close() {//关闭
                this.$emit('update:visible', false)
            },
            setIsMax(val) {//设置窗口最大化、最小化
                this.left = false;//位置初始化
                this.top = false;//位置初始化
                this.isMax = val;
            },
            mousedown(e) {//按下
                this.down = true;//添加监听
                this.titleX = e.offsetX;//添加监听
                this.titleY = e.offsetY;//添加监听
            },
            mousemove(e) {//移动
                if (this.down) {
                    let x = e.clientX, y = e.clientY;
                    this.left = x - this.titleX;//设置弹框移动
                    this.top = y - this.titleY;//设置弹框移动
                }
            },
            mouseup(e) {//松开
                this.down = false;//不添加监听
            },
            getPosition(height) { //返回弹框位置
                if (this.left === false || this.top == false) {
                    return {
                        height: height
                    }
                } else {
                    return {
                        left: this.left + 'px',
                        top: this.top + 'px',
                        height: height
                    }
                }
            },
        },
        mounted() {
        },
        components: {}
    }
</script>
<style scoped lang="scss">
    .movePopout {
        /*弹框背景*/
        .popout-bg {
            position: absolute;
            overflow: hidden;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 9;
            background: rgba(0, 0, 0, 0.4);
        }
        /*弹框内容*/
        .popout-main {
            &.isMax {
                width: calc(100% - 60px);
                height: calc(100% - 90px);
                left: 30px;
                top: 45px;
            }
            &.isMin {
                width: 200px;
                height: 45px;
                left: 0;
                bottom: 0;
                overflow: hidden;
                top: auto;
            }
            position: absolute;
            width:50%;
            height: 500px;
            background: #ffffff;
            z-index: 10;
            left: 25%;
            top: calc(50% - 300px);
            overflow: hidden;
            /*标题*/
            .title {
                height: 46px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #eee;
                color: #333;
                background: #f8f8f8;
                cursor: move;
                .text {
                    font-weight: normal;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    flex: 1;
                    height: 100%;
                    line-height: 45px;
                    padding-left: 20px;
                }
                .tool {
                    max-width: 120px;
                    text-align: right;
                    padding-right: 20px;
                    height: 100%;
                    line-height: 45px;
                    cursor: initial;
                    span {
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: bold;
                        margin-left: 10px;
                        &:hover {
                            opacity: .7;
                        }
                    }
                }
            }
            /*内容*/
            .content {
                height: calc(100% - 96px);
                display: block;
                flex-direction: column;
                position: relative;
                overflow: auto;
                padding: 10px;
            }
            /*底部按钮*/
            .bottom {
                height: 50px;
                padding: 0 5px;
                display: flex;
                align-items: center;
                justify-content: flex-end;    
                padding-bottom: 10px;
                padding-top: 10px;
                .confirm, .clear {
                    height: 35px;
                    line-height: 35px;
                    padding: 0 20px;
                    border: 1px solid #409eff;
                    color: #409eff;
                    background: #ffffff;
                    cursor: pointer;
                    // border-radius: 2px;
                    i {
                        font-weight: bold;
                    }
                    &:hover {
                        color: #5789d7;
                        border-color: #5789d7;
                        background: rgba(0, 0, 0, .03);
                    }
                }
                .clear {
                    margin-left: 10px;
                }
            }
        }
    }
    .bigSize {
        .popout-main {
            width: 60%;
            height: 630px;
            left: 20%;
        }
    }
    .minSize {
        .popout-main {
            width: 30%;
            height: 350px;
            left: 35%;
            top: calc(50% - 250px);
        }
    }
    
    .changePassword {
        .movePopout .popout-bg {
            position: fixed;
        }
    }
</style>
