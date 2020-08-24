<template>
    <div class="GanttChart">
        <table>
            <thead>
                <tr>
                    <th>项目/时间</th>
                    <th v-for="(day, index) in Dateinterval" :key="index">{{day|longDateToDay}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in jsonData" :key="index">
                    <td>
                        <p>{{item.formType}}</p>
                    </td>
                    <td v-for="(day, index) in Dateinterval" :key="index">
                        <!-- v-show 属性可以去掉，但此处加上是为了区分无 class 栏位和无数据栏位，方便后期追加默认样式显示 -->
                        <span
                            :class="spanShow(item.value, day).color"
                            v-show="spanShow(item.value, day).show"
                        ></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
/**  日期格式化。 *小于 10 的数字在前面 + 0。如 01、06 **/
var fDate = function (value) {
    return value < 10 ? "0" + value : value;
};
/** 日期格式化：yyyy-mm-dd **/
Date.prototype.format = function () {
    return (
        this.getFullYear() +
        "-" +
        fDate(this.getMonth() + 1) +
        "-" +
        fDate(this.getDate())
    );
};
/** 获取指定时间段内所有天。 输入起止日期。格式：yyyy-mm-dd。 返回格式：yyyy-mm-dd **/
var getAllDay = function (startDate, endDate) {
    var allDays = [];
    var a = startDate.split("-");
    var b = endDate.split("-");
    var uDb = new Date().setUTCFullYear(a[0], a[1] - 1, a[2]); //start
    var uDe = new Date().setUTCFullYear(b[0], b[1] - 1, b[2]); //end
    for (var i = uDb; i <= uDe; i = i + 24 * 60 * 60 * 1000) {
        allDays.push(new Date(parseInt(i)).format());
    }
    return allDays;
};
/** 获取指定时间段内所有月。 输入起止日期。格式：yyyy-mm-dd。 返回格式：yyyy-mm **/
var getAllMonth = function (startDate, endDate) {
    var allMonth = [];
    var a = startDate.split("-");
    var b = endDate.split("-");
    var uDb = new Date().setUTCFullYear(a[0], a[1] - 1, a[2]); //start
    var uDe = new Date().setUTCFullYear(
        b[0],
        b[1] - 1,
        new Date(b[0], b[1], 0).getDate()
    ); //结束月份设置为指定月最后一天
    while (uDb <= uDe) {
        // 等于号防止 31 号计算遗漏
        allMonth.push(
            new Date(uDb).getFullYear() +
                "-" +
                fDate(new Date(uDb).getMonth() + 1)
        );
        uDb = new Date(uDb).setMonth(new Date(uDb).getMonth() + 1);
    }
    return allMonth;
};
export default {
    props: {
        sourceData: { //表格数据
            default: function() {
                return {};
            },
        },
    },
    data(){
        return { 
            jsonData: [],
            startDate: '',
            endDate: '',
            AllMonths: [],/* 获取指定时间段内所有月，用作表头一 */
            Dateinterval: [],/* 获取指定时间段内所有天，用作表头二 */
        }
    },
    methods: {
        /** 甘特图显示状况 传入参数： 1、甘特图所需数据数组。即上述 JSON 对象的 value 数组 2、当前日期，即此刻对应表头中的日期列。 **/
        spanShow: function (valArray, currentDate) {
            var show = false; /*默认不显示*/
            var color = "";/*默认样式颜色为空*/
            var filter = this.$options.filters["strDateToTimeStamp"];/*调用 Vue 过滤器*/
            /*循环 value 数据。判断当前对应日期是否位于该组 value 数据的 fromdate 与 todate 之间。*/
            for (var i = 0; i < valArray.length; i++) {
                var inInterval = false;
                inInterval =
                    filter(valArray[i].fromDate) <= filter(currentDate) &&
                    filter(currentDate) <= filter(valArray[i].toDate);
                if (inInterval) {
                    color = valArray[i].spanClass;
                }
                show = show || inInterval;
            }
            return {/*返回判断结果与当前日期在该组数据下对应的样式颜色*/
                show: show,
                color: color,
            };
        },
    },
    /*Vue 过滤器用于格式化日期*/
    filters: {
        strDateToTimeStamp: function (strDate) {/*字符串格式的日期转为时间戳*/
            return Date.parse(strDate);
        },
        longDateToDay: function (longDate) {/*字符串格式的日期转为天。yyyy-mm-dd  -->  dd*/
            return fDate(new Date(Date.parse(longDate)).getDate());
        },
        longDateToMonth: function (longDate) { /*字符串格式的日期转为月。yyyy-mm-dd  -->  mm*/
            return fDate(new Date(Date.parse(longDate)).getMonth() + 1);
        },
    },
    mounted() {
        this.jsonData = this.sourceData.data
        this.startDate = this.sourceData.startDate
        this.endDate = this.sourceData.endDate
        this.AllMonths = getAllMonth(this.sourceData.startDate, this.sourceData.endDate)/* 获取指定时间段内所有月，用作表头一 */
        this.Dateinterval=  getAllDay(this.sourceData.startDate, this.sourceData.endDate)/* 获取指定时间段内所有天，用作表头二 */
    }
};
</script>
<style lang="scss" scoped>
.GanttChart {
    table {
        border-collapse: collapse;
        width: 100%;
        th, td {
            min-width: 20px;
            text-align: center;
            border: 1px solid #ebeef5;
            background: #ffffff;
            height: 30px;
            line-height: 30px;
        }
        th {
            font-weight: 400;
        }
        span {
            height: 100%;
            width: 100%;
            display: block;
        }
        .yellow {
            background-color: #f9a100;
        }
        .green {
            background-color: #34b4a0;
        }
        .red {
            background-color: #ff0d0d;
        }
        .purple {
            background-color: #8b64ff;
        }
        .blue {
            background-color: #299ced;
        }
    }
}
</style>