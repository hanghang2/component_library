<template>
    <div class="zlInput" @click="changes" ref="input">
        <input
            type="text"
            autocomplete="off"
            class="zl-input__inner"
            v-bind:class="{isfocus:isFocus}"
            v-model="inputVal"
            :placeholder="placeholder"
            :disabled="disabled !== false"
        />
        <span v-show="clearable !== false" @click="clear" class="zl-input_isclearable">
            <img class="zl-input__clear" src="@/assets/clearable.png" />
        </span>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            //绑定的父组件的值
            default: function() {
                return false;
            },
            type: String
        },
        placeholder: {
            default: function() {
                return false;
            },
            type: String
        },
        clearable: {
            default: false
        },
        disabled: {
            default: false
        }
    },
    data() {
        return {
            inputVal: "",
            isFocus: false
        };
    },
    methods: {
        clear() {
            this.inputVal = "";
            this.$emit("update:value", this.inputVal);
        },
        changes() {
            if (this.disabled == undefined) {
                this.isFocus = !this.isFocus;
            } else {
                if (this.disabled !== false) {
                    this.isFocus = false;
                } else {
                    this.isFocus = !this.isFocus;
                }
            }
        }
    },
    watch: {
        inputVal(newVal) {
            this.$emit("update:value", newVal);
        },
        value() {
            if (this.inputVal !== this.value) this.inputVal = this.value;
        }
    },
    created() {
        this.inputVal = this.value;
    },
    mounted() {
        let _this = this;
        document.addEventListener("click", function(e) {
            try {
                if (!!_this.$refs.input.contains(e.target)) return;
                _this.isFocus = false;
            } catch (e) {}
        });
    }
};
</script>
<style scoped>
.zlInput {
    width: 240px;
    position: relative;
}
.zlInput .zl-input__inner {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    cursor: pointer;
}
.zlInput .zl-input__inner:hover {
    border: 1px solid #c0c4cc;
}
.zlInput .zl-input__inner.isfocus {
    border-color: #409eff !important;
}
.zlInput input:disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    &:hover {
        border: 1px solid #e4e7ed;
    }
}
.zlInput .zl-input_isclearable {
    position: absolute;
    right: 0;
    width: 25px;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 111;
    display: flex;
    justify-content: center;
    align-items: center;
}
.zlInput .zl-input__clear {
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 16px;
}
</style>
