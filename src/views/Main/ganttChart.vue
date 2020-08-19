<template>
    <div class="zzGanttChart">
        <p>基础用法</p>
		<div class="list">
            <zzGanttChart :sourceData="sourceData"></zzGanttChart>
		</div>
        <p>属性</p>
		<table class="table_show">
			<thead>
				<tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
			</thead>
			<tbody>
				<tr><td>sourceData</td><td>数据</td><td>array</td><td>—</td><td>{}</td></tr>
			</tbody>
		</table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            sourceData: {
                startDate: '2020-01-01',
                endDate: '2020-01-31',
                data: [{
                        formType: "项目一",
                        value: [
                            {
                                fromDate: "2020-01-01",
                                toDate: "2020-01-06",
                                spanClass: "green",
                            },
                            {
                                fromDate: "2020-01-10",
                                toDate: "2020-01-11",
                                spanClass: "green",
                            },
                            {
                                fromDate: "2020-01-15",
                                toDate: "2020-01-16",
                                spanClass: "green",
                            },
                        ],
                    }, {
                        formType: "项目二",
                        value: [
                            {
                                fromDate: "2020-01-03",
                                toDate: "2020-01-09",
                                spanClass: "purple",
                            },
                            {
                                fromDate: "2020-01-14",
                                toDate: "2020-01-15",
                                spanClass: "purple",
                            },
                            {
                                fromDate: "2020-01-21",
                                toDate: "2020-01-28",
                                spanClass: "purple",
                            },
                        ],
                    }, {
                        formType: "项目三",
                        value: [
                            {
                                fromDate: "2020-01-02",
                                toDate: "2020-01-20",
                                spanClass: "yellow",
                            },
                        ],
                    }, {
                        formType: "项目四",
                        value: [
                            {
                                fromDate: "2020-01-13",
                                toDate: "2020-01-31",
                                spanClass: "green",
                            },
                        ],
                    }, {
                        formType: "项目五",
                        value: [
                            {
                                fromDate: "2020-01-19",
                                toDate: "2020-01-23",
                                spanClass: "red",
                            },
                        ],
                    }, {
                        formType: "项目六",
                        value: [
                            {
                                fromDate: "2020-01-05",
                                toDate: "2020-01-11",
                                spanClass: "blue",
                            },
                        ],
                    }, {
                        formType: "项目七",
                        value: [
                            {
                                fromDate: "2020-01-22",
                                toDate: "2020-01-26",
                                spanClass: "green",
                            },
                        ],
                    },
                ],
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.zzGanttChart {
    .list {
        margin-bottom: 40px;
        border: 1px solid #dddddd;
        padding: 25px;
        border-radius: 5px;
    }
    .list:hover {
        transition: all 0.5s;
        box-shadow: 0 0 8px 0 #eee, 0 2px 4px 0 #eee;
    }
    p {
        margin-bottom: 10px;
    }
    a {
        color: #0170fe;
    }
}
</style>