<template>
    <transition name="fade">
        <div v-show="isclose">
            <div class="zzAlert" :class="'zzAlert-' + type + ' is-' + effect">
                <span>{{ title }}</span>
                
                <span v-show="closable" @click="clear" class="zl-alert_isclearable">
                    <img v-if="!closeText" class="zl-alert__clear" src="@/assets/close.png" />
                    <span v-else class="zl-alert__clear">{{ closeText }}</span>
                </span>
            </div>
        </div>
	</transition>
</template>

<script>
export default {
    props: {
        title: {
            default: function() {
				return '';
			},
			type: String
        },
        type: {
            default: function() {
				return 'success';
			},
			type: String
        },
        effect: {
            default: function() {
				return 'light';
			},
			type: String
        },
        closable: {
            default: function() {
				return true;
			},
			type: Boolean
        },
        closeText: {
            default: function() {
				return '';
			},
			type: String
        }
    },
    data(){
        return {
            isclose: true
        }
    },
    methods: {
        clear(){
            this.isclose = false
        }
    }
}
</script>

<style scoped>
.zzAlert {
    padding: 8px 16px;
    font-size: 13px;     
    border-radius: 4px;
    position: relative;
    margin: 15px 0 0;  
}
.zzAlert-success {
    background-color: #f0f9eb;
    color: #67c23a;
}
.zzAlert-info {
    background-color: #f4f4f5;
    color: #909399;
}
.zzAlert-warning {
    background-color: #fdf6ec;
    color: #e6a23c;
}
.zzAlert-error {
    background-color: #fef0f0;
    color: #f56c6c;
}

.zzAlert-success.is-dark {
    background-color: #67c23a;
    color: #fff;
}
.zzAlert-info.is-dark {
    background-color: #909399;
    color: #fff;
}
.zzAlert-warning.is-dark {
    background-color: #e6a23c;
    color: #fff;
}
.zzAlert-error.is-dark {
    background-color: #f56c6c;
    color: #fff;
}
.zzAlert .zl-alert_isclearable {
	position: absolute;
	right: 0;
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

.zzAlert .zl-alert__clear {
	cursor: pointer;
	transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.fade-leave-active,.fade-enter-active {
	transition: max-height 0.3s;
}
.fade-enter,.fade-leave-to {
	max-height:0 ;
}
.fade-enter-to,.fade-leave {
	max-height: 40px ;
}
</style>