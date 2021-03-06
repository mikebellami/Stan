!function() {
    "use strict";
    angular.module("app", ["app.core", "app.chart", "app.ui", "app.ui.form", "app.ui.form.validation", "app.page", "app.table","app.stan", "md.data.table"])
}

(),
function() {
    "use strict";
    angular.module("app.chart", ["ngecharts"])
}

(),
function() {
    "use strict";
    angular.module("app.core", ["ngAnimate", "ngAria", "ngMessages", "app.layout", "app.i18n", "oc.lazyLoad", "ngMaterial", "ui.router", "duScroll"])
}

(),
function() {
    "use strict";
    angular.module("app.ui.form", [])
}

(),
function() {
    "use strict";
    angular.module("app.ui.form.validation", ["validation.match"])
}

(),
function() {
    "use strict";
    angular.module("app.layout", [])
}

(),
function() {
    "use strict";
    angular.module("app.page", [])
}

(),
function() {
    "use strict";
    angular.module("app.table", [])
}

(),
function() {
    "use strict";
    angular.module("app.ui", ["ngMaterial"])
}

(),
function() {
    "use strict";
    function e(e, t) {
        function a() {
            var e=Math.round(100*Math.random());
            return e*(e%2==0?1: -1)
        }
        function o() {
            for(var e=[], t=100;
            t--;
            )e.push([a(), a(), Math.abs(a())]);
            return e
        }
        e.line1= {}
        ,
        e.line2= {}
        ,
        e.line3= {}
        ,
        e.line4= {}
        ,
        e.bar1= {}
        ,
        e.bar2= {}
        ,
        e.bar3= {}
        ,
        e.bar4= {}
        ,
        e.bar5= {}
        ,
        e.pie1= {}
        ,
        e.pie2= {}
        ,
        e.pie4= {}
        ,
        e.scatter1= {}
        ,
        e.scatter2= {}
        ,
        e.radar1= {}
        ,
        e.radar2= {}
        ,
        e.gauge1= {}
        ,
        e.chord1= {}
        ,
        e.funnel1= {}
        ,
        e.line1.options= {
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                data: ["Highest temperature", "Lowest temperature"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "category", boundaryGap: !1, data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }
            ],
            yAxis:[ {
                type:"value",
                axisLabel: {
                    formatter:"{value} °C"
                }
            }
            ],
            series:[ {
                name:"Highest temperature",
                type:"line",
                data:[11,
                11,
                15,
                13,
                12,
                13,
                10],
                markPoint: {
                    data:[ {
                        type: "max", name: "Max"
                    }
                    ,
                    {
                        type: "min", name: "Min"
                    }
                    ]
                }
                ,
                markLine: {
                    data:[ {
                        type: "average", name: "Average"
                    }
                    ]
                }
            }
            ,
            {
                name:"Lowest temperature",
                type:"line",
                data:[1,
                -2,
                2,
                5,
                3,
                2,
                0],
                markPoint: {
                    data:[ {
                        name: "Lowest temperature", value: -2, xAxis: 1, yAxis: -1.5
                    }
                    ]
                }
                ,
                markLine: {
                    data:[ {
                        type: "average", name: "Average"
                    }
                    ]
                }
            }
            ]
        }
        ,
        e.line2.options= {
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "category", boundaryGap: !1, data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }
            ],
            yAxis:[ {
                type: "value"
            }
            ],
            series:[ {
                name: "Email", type: "line", stack: "Sum", data: [120, 132, 101, 134, 90, 230, 210]
            }
            ,
            {
                name: "Affiliate", type: "line", stack: "Sum", data: [220, 182, 191, 234, 290, 330, 310]
            }
            ,
            {
                name: "Video Ads", type: "line", stack: "Sum", data: [150, 232, 201, 154, 190, 330, 410]
            }
            ,
            {
                name: "Direct", type: "line", stack: "Sum", data: [320, 332, 301, 334, 390, 330, 320]
            }
            ,
            {
                name: "Search", type: "line", stack: "Sum", data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
            ]
        }
        ,
        e.line3.options= {
            title: {
                text: "Sales"
            }
            ,
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                data: ["Intention", "Pre-order", "Deal closed"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "category", boundaryGap: !1, data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }
            ],
            yAxis:[ {
                type: "value"
            }
            ],
            series:[ {
                name:"Deal closed",
                type:"line",
                smooth:!0,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[10,
                12,
                21,
                54,
                260,
                830,
                710]
            }
            ,
            {
                name:"Pre-order",
                type:"line",
                smooth:!0,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[30,
                182,
                434,
                791,
                390,
                30,
                10]
            }
            ,
            {
                name:"Intention",
                type:"line",
                smooth:!0,
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[1320,
                1132,
                601,
                234,
                120,
                90,
                20]
            }
            ]
        }
        ,
        e.line4.options= {
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "category", boundaryGap: !1, data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }
            ],
            yAxis:[ {
                type: "value"
            }
            ],
            series:[ {
                name:"Email",
                type:"line",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[120,
                132,
                101,
                134,
                90,
                230,
                210]
            }
            ,
            {
                name:"Affiliate",
                type:"line",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[220,
                182,
                191,
                234,
                290,
                330,
                310]
            }
            ,
            {
                name:"Video Ads",
                type:"line",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[150,
                232,
                201,
                154,
                190,
                330,
                410]
            }
            ,
            {
                name:"Direct",
                type:"line",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[320,
                332,
                301,
                334,
                390,
                330,
                320]
            }
            ,
            {
                name:"Search",
                type:"line",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[820,
                932,
                901,
                934,
                1290,
                1330,
                1320]
            }
            ]
        }
        ,
        e.bar1.options= {
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                data: ["Evaporation", "Precipitation"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "category", data: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
            }
            ],
            yAxis:[ {
                type: "value"
            }
            ],
            series:[ {
                name:"Evaporation",
                type:"bar",
                data:[2,
                4.9,
                7,
                23.2,
                25.6,
                76.7,
                135.6,
                162.2,
                32.6,
                20,
                6.4,
                3.3],
                markPoint: {
                    data:[ {
                        type: "max", name: "Max"
                    }
                    ,
                    {
                        type: "min", name: "Min"
                    }
                    ]
                }
                ,
                markLine: {
                    data:[ {
                        type: "average", name: "Average"
                    }
                    ]
                }
            }
            ,
            {
                name:"Precipitation",
                type:"bar",
                data:[2.6,
                5.9,
                9,
                26.4,
                28.7,
                70.7,
                175.6,
                182.2,
                48.7,
                18.8,
                6,
                2.3],
                markPoint: {
                    data:[ {
                        name: "Highest", value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18
                    }
                    ,
                    {
                        name: "Lowest", value: 2.3, xAxis: 11, yAxis: 3
                    }
                    ]
                }
                ,
                markLine: {
                    data:[ {
                        type: "average", name: "Average"
                    }
                    ]
                }
            }
            ]
        }
        ,
        e.bar2.options= {
            tooltip: {
                trigger:"axis",
                axisPointer: {
                    type: "shadow"
                }
            }
            ,
            legend: {
                data: ["Direct", "Email", "Affiliate", "Video Ads", "Search", "Baidu", "Google", "Bing", "Others"]
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "category", data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }
            ],
            yAxis:[ {
                type: "value"
            }
            ],
            series:[ {
                name: "Direct", type: "bar", data: [320, 332, 301, 334, 390, 330, 320]
            }
            ,
            {
                name: "Email", type: "bar", stack: "Ads", data: [120, 132, 101, 134, 90, 230, 210]
            }
            ,
            {
                name: "Affiliate", type: "bar", stack: "Ads", data: [220, 182, 191, 234, 290, 330, 310]
            }
            ,
            {
                name: "Video Ads", type: "bar", stack: "Ads", data: [150, 232, 201, 154, 190, 330, 410]
            }
            ,
            {
                name:"Search",
                type:"bar",
                data:[862,
                1018,
                964,
                1026,
                1679,
                1600,
                1570],
                markLine: {
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: "dashed"
                            }
                        }
                    }
                    ,
                    data:[[ {
                        type: "min"
                    }
                    ,
                    {
                        type: "max"
                    }
                    ]]
                }
            }
            ,
            {
                name: "Baidu", type: "bar", barWidth: 5, stack: "Search", data: [620, 732, 701, 734, 1090, 1130, 1120]
            }
            ,
            {
                name: "Google", type: "bar", stack: "Search", data: [120, 132, 101, 134, 290, 230, 220]
            }
            ,
            {
                name: "Bing", type: "bar", stack: "Search", data: [60, 72, 71, 74, 190, 130, 110]
            }
            ,
            {
                name: "Others", type: "bar", stack: "Search", data: [62, 82, 91, 84, 109, 110, 120]
            }
            ]
        }
        ,
        e.bar3.options= {
            title: {
                text: "World Population", subtext: "From the Internet"
            }
            ,
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                data: ["2011", "2012"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "value", boundaryGap: [0, .01]
            }
            ],
            yAxis:[ {
                type: "category", data: ["Brazil", "Indonesia", "USA", "India", "China", "World Population (10k)"]
            }
            ],
            series:[ {
                name: "2011", type: "bar", data: [18203, 23489, 29034, 104970, 131744, 630230]
            }
            ,
            {
                name: "2012", type: "bar", data: [19325, 23438, 31e3, 121594, 134141, 681807]
            }
            ]
        }
        ,
        e.bar4.options= {
            tooltip: {
                trigger:"axis",
                axisPointer: {
                    type: "shadow"
                }
            }
            ,
            legend: {
                data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "value"
            }
            ],
            yAxis:[ {
                type: "category", data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }
            ],
            series:[ {
                name:"Direct",
                type:"bar",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "insideRight"
                        }
                    }
                }
                ,
                data:[320,
                302,
                301,
                334,
                390,
                330,
                320]
            }
            ,
            {
                name:"Email",
                type:"bar",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "insideRight"
                        }
                    }
                }
                ,
                data:[120,
                132,
                101,
                134,
                90,
                230,
                210]
            }
            ,
            {
                name:"Affiliate",
                type:"bar",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "insideRight"
                        }
                    }
                }
                ,
                data:[220,
                182,
                191,
                234,
                290,
                330,
                310]
            }
            ,
            {
                name:"Video Ads",
                type:"bar",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "insideRight"
                        }
                    }
                }
                ,
                data:[150,
                212,
                201,
                154,
                190,
                330,
                410]
            }
            ,
            {
                name:"Search",
                type:"bar",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "insideRight"
                        }
                    }
                }
                ,
                data:[820,
                832,
                901,
                934,
                1290,
                1330,
                1320]
            }
            ]
        }
        ,
        e.bar5.options= {
            tooltip: {
                trigger:"axis",
                axisPointer: {
                    type: "shadow"
                }
            }
            ,
            legend: {
                data: ["Profit", "Cost", "Income"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            xAxis:[ {
                type: "value"
            }
            ],
            yAxis:[ {
                type:"category",
                axisTick: {
                    show: !1
                }
                ,
                data:["Mon.",
                "Tue.",
                "Wed.",
                "Thu.",
                "Fri.",
                "Sat.",
                "Sun."]
            }
            ],
            series:[ {
                name:"Profit",
                type:"bar",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "inside"
                        }
                    }
                }
                ,
                data:[200,
                170,
                240,
                244,
                200,
                220,
                210]
            }
            ,
            {
                name:"Income",
                type:"bar",
                stack:"Sum",
                barWidth:5,
                itemStyle: {
                    normal: {
                        label: {
                            show: !0
                        }
                    }
                }
                ,
                data:[320,
                302,
                341,
                374,
                390,
                450,
                420]
            }
            ,
            {
                name:"Cost",
                type:"bar",
                stack:"Sum",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0, position: "left"
                        }
                    }
                }
                ,
                data:[-120,
                -132,
                -101,
                -134,
                -190,
                -230,
                -210]
            }
            ]
        }
        ,
        e.pie1.options= {
            title: {
                text: "Traffic Source", x: "center"
            }
            ,
            tooltip: {
                trigger:"item",
                formatter:"{a} <br/>{b} : {c} ({d}%)"
            }
            ,
            legend: {
                orient: "vertical", x: "left", data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            series:[ {
                name:"Vist source",
                type:"pie",
                radius:"55%",
                center:["50%",
                "60%"],
                data:[ {
                    value: 335, name: "Direct"
                }
                ,
                {
                    value: 310, name: "Email"
                }
                ,
                {
                    value: 234, name: "Affiliate"
                }
                ,
                {
                    value: 135, name: "Video Ads"
                }
                ,
                {
                    value: 1548, name: "Search"
                }
                ]
            }
            ]
        }
        ,
        e.pie2.options= {
            tooltip: {
                trigger:"item",
                formatter:"{a} <br/>{b} : {c} ({d}%)"
            }
            ,
            legend: {
                orient: "vertical", x: "left", data: ["Direct", "Email", "Affiliate", "Video Ads", "Search"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            series:[ {
                name:"Traffic source",
                type:"pie",
                radius:["50%",
                "70%"],
                itemStyle: {
                    normal: {
                        label: {
                            show: !1
                        }
                        ,
                        labelLine: {
                            show: !1
                        }
                    }
                    ,
                    emphasis: {
                        label: {
                            show:!0,
                            position:"center",
                            textStyle: {
                                fontSize: "30", fontWeight: "bold"
                            }
                        }
                    }
                }
                ,
                data:[ {
                    value: 335, name: "Direct"
                }
                ,
                {
                    value: 310, name: "Email"
                }
                ,
                {
                    value: 234, name: "Affiliate"
                }
                ,
                {
                    value: 135, name: "Video Ads"
                }
                ,
                {
                    value: 1548, name: "Search"
                }
                ]
            }
            ]
        }
        ,
        e.pie4.options= {
            title: {
                text: "Nightingale rose diagram", x: "center"
            }
            ,
            tooltip: {
                trigger:"item",
                formatter:"{a} <br/>{b} : {c} ({d}%)"
            }
            ,
            legend: {
                x: "center", y: "bottom", data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6", "rose7", "rose8"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            series:[ {
                name:"Radius model",
                type:"pie",
                radius:[20,
                110],
                center:["25%",
                200],
                roseType:"radius",
                width:"40%",
                max:40,
                itemStyle: {
                    normal: {
                        label: {
                            show: !1
                        }
                        ,
                        labelLine: {
                            show: !1
                        }
                    }
                    ,
                    emphasis: {
                        label: {
                            show: !0
                        }
                        ,
                        labelLine: {
                            show: !0
                        }
                    }
                }
                ,
                data:[ {
                    value: 10, name: "rose1"
                }
                ,
                {
                    value: 5, name: "rose2"
                }
                ,
                {
                    value: 15, name: "rose3"
                }
                ,
                {
                    value: 25, name: "rose4"
                }
                ,
                {
                    value: 20, name: "rose5"
                }
                ,
                {
                    value: 35, name: "rose6"
                }
                ,
                {
                    value: 30, name: "rose7"
                }
                ,
                {
                    value: 40, name: "rose8"
                }
                ]
            }
            ,
            {
                name:"Area model",
                type:"pie",
                radius:[30,
                110],
                center:["75%",
                200],
                roseType:"area",
                x:"50%",
                max:40,
                sort:"ascending",
                data:[ {
                    value: 10, name: "rose1"
                }
                ,
                {
                    value: 5, name: "rose2"
                }
                ,
                {
                    value: 15, name: "rose3"
                }
                ,
                {
                    value: 25, name: "rose4"
                }
                ,
                {
                    value: 20, name: "rose5"
                }
                ,
                {
                    value: 35, name: "rose6"
                }
                ,
                {
                    value: 30, name: "rose7"
                }
                ,
                {
                    value: 40, name: "rose8"
                }
                ]
            }
            ]
        }
        ,
        e.scatter1.options= {
            title: {
                text: "Height and weight distribution", subtext: "Data: Heinz  2003"
            }
            ,
            tooltip: {
                trigger:"axis",
                showDelay:0,
                formatter:function(e) {
                    return e.value.length>1?e.seriesName+" :<br/>"+e.value[0]+"cm "+e.value[1]+"kg ": e.seriesName+" :<br/>"+e.name+" : "+e.value+"kg "
                }
                ,
                axisPointer: {
                    show:!0,
                    type:"cross",
                    lineStyle: {
                        type: "dashed", width: 1
                    }
                }
            }
            ,
            legend: {
                data: ["Femail", "Male"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            xAxis:[ {
                type:"value",
                scale:!0,
                axisLabel: {
                    formatter:"{value} cm"
                }
            }
            ],
            yAxis:[ {
                type:"value",
                scale:!0,
                axisLabel: {
                    formatter:"{value} kg"
                }
            }
            ],
            series:[ {
                name:"Femail",
                type:"scatter",
                data:[[161.2,
                51.6],
                [167.5,
                59],
                [159.5,
                49.2],
                [157,
                63],
                [155.8,
                53.6],
                [170,
                59],
                [159.1,
                47.6],
                [166,
                69.8],
                [176.2,
                66.8],
                [160.2,
                75.2],
                [172.5,
                55.2],
                [170.9,
                54.2],
                [172.9,
                62.5],
                [153.4,
                42],
                [160,
                50],
                [147.2,
                49.8],
                [168.2,
                49.2],
                [175,
                73.2],
                [157,
                47.8],
                [167.6,
                68.8],
                [159.5,
                50.6],
                [175,
                82.5],
                [166.8,
                57.2],
                [176.5,
                87.8],
                [170.2,
                72.8],
                [174,
                54.5],
                [173,
                59.8],
                [179.9,
                67.3],
                [170.5,
                67.8],
                [160,
                47],
                [154.4,
                46.2],
                [162,
                55],
                [176.5,
                83],
                [160,
                54.4],
                [152,
                45.8],
                [162.1,
                53.6],
                [170,
                73.2],
                [160.2,
                52.1],
                [161.3,
                67.9],
                [166.4,
                56.6],
                [168.9,
                62.3],
                [163.8,
                58.5],
                [167.6,
                54.5],
                [160,
                50.2],
                [161.3,
                60.3],
                [167.6,
                58.3],
                [165.1,
                56.2],
                [160,
                50.2],
                [170,
                72.9],
                [157.5,
                59.8],
                [167.6,
                61],
                [160.7,
                69.1],
                [163.2,
                55.9],
                [152.4,
                46.5],
                [157.5,
                54.3],
                [168.3,
                54.8],
                [180.3,
                60.7],
                [165.5,
                60],
                [165,
                62],
                [164.5,
                60.3],
                [156,
                52.7],
                [160,
                74.3],
                [163,
                62],
                [165.7,
                73.1],
                [161,
                80],
                [162,
                54.7],
                [166,
                53.2],
                [174,
                75.7],
                [172.7,
                61.1],
                [167.6,
                55.7],
                [151.1,
                48.7],
                [164.5,
                52.3],
                [163.5,
                50],
                [152,
                59.3],
                [169,
                62.5],
                [164,
                55.7],
                [161.2,
                54.8],
                [155,
                45.9],
                [170,
                70.6],
                [176.2,
                67.2],
                [170,
                69.4],
                [162.5,
                58.2],
                [170.3,
                64.8],
                [164.1,
                71.6],
                [169.5,
                52.8],
                [163.2,
                59.8],
                [154.5,
                49],
                [159.8,
                50],
                [173.2,
                69.2],
                [170,
                55.9],
                [161.4,
                63.4],
                [169,
                58.2],
                [166.2,
                58.6],
                [159.4,
                45.7],
                [162.5,
                52.2],
                [159,
                48.6],
                [162.8,
                57.8],
                [159,
                55.6],
                [179.8,
                66.8],
                [162.9,
                59.4],
                [161,
                53.6],
                [151.1,
                73.2],
                [168.2,
                53.4],
                [168.9,
                69],
                [173.2,
                58.4],
                [171.8,
                56.2],
                [178,
                70.6],
                [164.3,
                59.8],
                [163,
                72],
                [168.5,
                65.2],
                [166.8,
                56.6],
                [172.7,
                105.2],
                [163.5,
                51.8],
                [169.4,
                63.4],
                [167.8,
                59],
                [159.5,
                47.6],
                [167.6,
                63],
                [161.2,
                55.2],
                [160,
                45],
                [163.2,
                54],
                [162.2,
                50.2],
                [161.3,
                60.2],
                [149.5,
                44.8],
                [157.5,
                58.8],
                [163.2,
                56.4],
                [172.7,
                62],
                [155,
                49.2],
                [156.5,
                67.2],
                [164,
                53.8],
                [160.9,
                54.4],
                [162.8,
                58],
                [167,
                59.8],
                [160,
                54.8],
                [160,
                43.2],
                [168.9,
                60.5],
                [158.2,
                46.4],
                [156,
                64.4],
                [160,
                48.8],
                [167.1,
                62.2],
                [158,
                55.5],
                [167.6,
                57.8],
                [156,
                54.6],
                [162.1,
                59.2],
                [173.4,
                52.7],
                [159.8,
                53.2],
                [170.5,
                64.5],
                [159.2,
                51.8],
                [157.5,
                56],
                [161.3,
                63.6],
                [162.6,
                63.2],
                [160,
                59.5],
                [168.9,
                56.8],
                [165.1,
                64.1],
                [162.6,
                50],
                [165.1,
                72.3],
                [166.4,
                55],
                [160,
                55.9],
                [152.4,
                60.4],
                [170.2,
                69.1],
                [162.6,
                84.5],
                [170.2,
                55.9],
                [158.8,
                55.5],
                [172.7,
                69.5],
                [167.6,
                76.4],
                [162.6,
                61.4],
                [167.6,
                65.9],
                [156.2,
                58.6],
                [175.2,
                66.8],
                [172.1,
                56.6],
                [162.6,
                58.6],
                [160,
                55.9],
                [165.1,
                59.1],
                [182.9,
                81.8],
                [166.4,
                70.7],
                [165.1,
                56.8],
                [177.8,
                60],
                [165.1,
                58.2],
                [175.3,
                72.7],
                [154.9,
                54.1],
                [158.8,
                49.1],
                [172.7,
                75.9],
                [168.9,
                55],
                [161.3,
                57.3],
                [167.6,
                55],
                [165.1,
                65.5],
                [175.3,
                65.5],
                [157.5,
                48.6],
                [163.8,
                58.6],
                [167.6,
                63.6],
                [165.1,
                55.2],
                [165.1,
                62.7],
                [168.9,
                56.6],
                [162.6,
                53.9],
                [164.5,
                63.2],
                [176.5,
                73.6],
                [168.9,
                62],
                [175.3,
                63.6],
                [159.4,
                53.2],
                [160,
                53.4],
                [170.2,
                55],
                [162.6,
                70.5],
                [167.6,
                54.5],
                [162.6,
                54.5],
                [160.7,
                55.9],
                [160,
                59],
                [157.5,
                63.6],
                [162.6,
                54.5],
                [152.4,
                47.3],
                [170.2,
                67.7],
                [165.1,
                80.9],
                [172.7,
                70.5],
                [165.1,
                60.9],
                [170.2,
                63.6],
                [170.2,
                54.5],
                [170.2,
                59.1],
                [161.3,
                70.5],
                [167.6,
                52.7],
                [167.6,
                62.7],
                [165.1,
                86.3],
                [162.6,
                66.4],
                [152.4,
                67.3],
                [168.9,
                63],
                [170.2,
                73.6],
                [175.2,
                62.3],
                [175.2,
                57.7],
                [160,
                55.4],
                [165.1,
                104.1],
                [174,
                55.5],
                [170.2,
                77.3],
                [160,
                80.5],
                [167.6,
                64.5],
                [167.6,
                72.3],
                [167.6,
                61.4],
                [154.9,
                58.2],
                [162.6,
                81.8],
                [175.3,
                63.6],
                [171.4,
                53.4],
                [157.5,
                54.5],
                [165.1,
                53.6],
                [160,
                60],
                [174,
                73.6],
                [162.6,
                61.4],
                [174,
                55.5],
                [162.6,
                63.6],
                [161.3,
                60.9],
                [156.2,
                60],
                [149.9,
                46.8],
                [169.5,
                57.3],
                [160,
                64.1],
                [175.3,
                63.6],
                [169.5,
                67.3],
                [160,
                75.5],
                [172.7,
                68.2],
                [162.6,
                61.4],
                [157.5,
                76.8],
                [176.5,
                71.8],
                [164.4,
                55.5],
                [160.7,
                48.6],
                [174,
                66.4],
                [163.8,
                67.3]],
                markPoint: {
                    data:[ {
                        type: "max", name: "Max"
                    }
                    ,
                    {
                        type: "min", name: "Min"
                    }
                    ]
                }
                ,
                markLine: {
                    data:[ {
                        type: "average", name: "Average"
                    }
                    ]
                }
            }
            ,
            {
                name:"Male",
                type:"scatter",
                data:[[174,
                65.6],
                [175.3,
                71.8],
                [193.5,
                80.7],
                [186.5,
                72.6],
                [187.2,
                78.8],
                [181.5,
                74.8],
                [184,
                86.4],
                [184.5,
                78.4],
                [175,
                62],
                [184,
                81.6],
                [180,
                76.6],
                [177.8,
                83.6],
                [192,
                90],
                [176,
                74.6],
                [174,
                71],
                [184,
                79.6],
                [192.7,
                93.8],
                [171.5,
                70],
                [173,
                72.4],
                [176,
                85.9],
                [176,
                78.8],
                [180.5,
                77.8],
                [172.7,
                66.2],
                [176,
                86.4],
                [173.5,
                81.8],
                [178,
                89.6],
                [180.3,
                82.8],
                [180.3,
                76.4],
                [164.5,
                63.2],
                [173,
                60.9],
                [183.5,
                74.8],
                [175.5,
                70],
                [188,
                72.4],
                [189.2,
                84.1],
                [172.8,
                69.1],
                [170,
                59.5],
                [182,
                67.2],
                [170,
                61.3],
                [177.8,
                68.6],
                [184.2,
                80.1],
                [186.7,
                87.8],
                [171.4,
                84.7],
                [172.7,
                73.4],
                [175.3,
                72.1],
                [180.3,
                82.6],
                [182.9,
                88.7],
                [188,
                84.1],
                [177.2,
                94.1],
                [172.1,
                74.9],
                [167,
                59.1],
                [169.5,
                75.6],
                [174,
                86.2],
                [172.7,
                75.3],
                [182.2,
                87.1],
                [164.1,
                55.2],
                [163,
                57],
                [171.5,
                61.4],
                [184.2,
                76.8],
                [174,
                86.8],
                [174,
                72.2],
                [177,
                71.6],
                [186,
                84.8],
                [167,
                68.2],
                [171.8,
                66.1],
                [182,
                72],
                [167,
                64.6],
                [177.8,
                74.8],
                [164.5,
                70],
                [192,
                101.6],
                [175.5,
                63.2],
                [171.2,
                79.1],
                [181.6,
                78.9],
                [167.4,
                67.7],
                [181.1,
                66],
                [177,
                68.2],
                [174.5,
                63.9],
                [177.5,
                72],
                [170.5,
                56.8],
                [182.4,
                74.5],
                [197.1,
                90.9],
                [180.1,
                93],
                [175.5,
                80.9],
                [180.6,
                72.7],
                [184.4,
                68],
                [175.5,
                70.9],
                [180.6,
                72.5],
                [177,
                72.5],
                [177.1,
                83.4],
                [181.6,
                75.5],
                [176.5,
                73],
                [175,
                70.2],
                [174,
                73.4],
                [165.1,
                70.5],
                [177,
                68.9],
                [192,
                102.3],
                [176.5,
                68.4],
                [169.4,
                65.9],
                [182.1,
                75.7],
                [179.8,
                84.5],
                [175.3,
                87.7],
                [184.9,
                86.4],
                [177.3,
                73.2],
                [167.4,
                53.9],
                [178.1,
                72],
                [168.9,
                55.5],
                [157.2,
                58.4],
                [180.3,
                83.2],
                [170.2,
                72.7],
                [177.8,
                64.1],
                [172.7,
                72.3],
                [165.1,
                65],
                [186.7,
                86.4],
                [165.1,
                65],
                [174,
                88.6],
                [175.3,
                84.1],
                [185.4,
                66.8],
                [177.8,
                75.5],
                [180.3,
                93.2],
                [180.3,
                82.7],
                [177.8,
                58],
                [177.8,
                79.5],
                [177.8,
                78.6],
                [177.8,
                71.8],
                [177.8,
                116.4],
                [163.8,
                72.2],
                [188,
                83.6],
                [198.1,
                85.5],
                [175.3,
                90.9],
                [166.4,
                85.9],
                [190.5,
                89.1],
                [166.4,
                75],
                [177.8,
                77.7],
                [179.7,
                86.4],
                [172.7,
                90.9],
                [190.5,
                73.6],
                [185.4,
                76.4],
                [168.9,
                69.1],
                [167.6,
                84.5],
                [175.3,
                64.5],
                [170.2,
                69.1],
                [190.5,
                108.6],
                [177.8,
                86.4],
                [190.5,
                80.9],
                [177.8,
                87.7],
                [184.2,
                94.5],
                [176.5,
                80.2],
                [177.8,
                72],
                [180.3,
                71.4],
                [171.4,
                72.7],
                [172.7,
                84.1],
                [172.7,
                76.8],
                [177.8,
                63.6],
                [177.8,
                80.9],
                [182.9,
                80.9],
                [170.2,
                85.5],
                [167.6,
                68.6],
                [175.3,
                67.7],
                [165.1,
                66.4],
                [185.4,
                102.3],
                [181.6,
                70.5],
                [172.7,
                95.9],
                [190.5,
                84.1],
                [179.1,
                87.3],
                [175.3,
                71.8],
                [170.2,
                65.9],
                [193,
                95.9],
                [171.4,
                91.4],
                [177.8,
                81.8],
                [177.8,
                96.8],
                [167.6,
                69.1],
                [167.6,
                82.7],
                [180.3,
                75.5],
                [182.9,
                79.5],
                [176.5,
                73.6],
                [186.7,
                91.8],
                [188,
                84.1],
                [188,
                85.9],
                [177.8,
                81.8],
                [174,
                82.5],
                [177.8,
                80.5],
                [171.4,
                70],
                [185.4,
                81.8],
                [185.4,
                84.1],
                [188,
                90.5],
                [188,
                91.4],
                [182.9,
                89.1],
                [176.5,
                85],
                [175.3,
                69.1],
                [175.3,
                73.6],
                [188,
                80.5],
                [188,
                82.7],
                [175.3,
                86.4],
                [170.5,
                67.7],
                [179.1,
                92.7],
                [177.8,
                93.6],
                [175.3,
                70.9],
                [182.9,
                75],
                [170.8,
                93.2],
                [188,
                93.2],
                [180.3,
                77.7],
                [177.8,
                61.4],
                [185.4,
                94.1],
                [168.9,
                75],
                [185.4,
                83.6],
                [180.3,
                85.5],
                [174,
                73.9],
                [167.6,
                66.8],
                [182.9,
                87.3],
                [160,
                72.3],
                [180.3,
                88.6],
                [167.6,
                75.5],
                [186.7,
                101.4],
                [175.3,
                91.1],
                [175.3,
                67.3],
                [175.9,
                77.7],
                [175.3,
                81.8],
                [179.1,
                75.5],
                [181.6,
                84.5],
                [177.8,
                76.6],
                [182.9,
                85],
                [177.8,
                102.5],
                [184.2,
                77.3],
                [179.1,
                71.8],
                [176.5,
                87.9],
                [188,
                94.3],
                [174,
                70.9],
                [167.6,
                64.5],
                [170.2,
                77.3],
                [167.6,
                72.3],
                [188,
                87.3],
                [174,
                80],
                [176.5,
                82.3],
                [180.3,
                73.6],
                [167.6,
                74.1],
                [188,
                85.9],
                [180.3,
                73.2],
                [167.6,
                76.3],
                [183,
                65.9],
                [183,
                90.9],
                [179.1,
                89.1],
                [170.2,
                62.3],
                [177.8,
                82.7],
                [179.1,
                79.1],
                [190.5,
                98.2],
                [177.8,
                84.1],
                [180.3,
                83.2],
                [180.3,
                83.2]],
                markPoint: {
                    data:[ {
                        type: "max", name: "Max"
                    }
                    ,
                    {
                        type: "min", name: "Min"
                    }
                    ]
                }
                ,
                markLine: {
                    data:[ {
                        type: "average", name: "Average"
                    }
                    ]
                }
            }
            ]
        }
        ,
        e.scatter2.options= {
            tooltip: {
                trigger:"axis",
                showDelay:0,
                axisPointer: {
                    show:!0,
                    type:"cross",
                    lineStyle: {
                        type: "dashed", width: 1
                    }
                }
            }
            ,
            legend: {
                data: ["scatter1", "scatter2"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            xAxis:[ {
                type: "value", splitNumber: 4, scale: !0
            }
            ],
            yAxis:[ {
                type: "value", splitNumber: 4, scale: !0
            }
            ],
            series:[ {
                name:"scatter1",
                type:"scatter",
                symbolSize:function(e) {
                    return Math.round(e[2]/5)
                }
                ,
                data:o()
            }
            ,
            {
                name:"scatter2",
                type:"scatter",
                symbolSize:function(e) {
                    return Math.round(e[2]/5)
                }
                ,
                data:o()
            }
            ]
        }
        ,
        e.radar1.options= {
            title: {
                text: "Budget vs spending"
            }
            ,
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                orient: "vertical", x: "right", y: "bottom", data: ["Allocated Budget", "Actual Spending"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            polar:[ {
                indicator:[ {
                    text: "sales", max: 6e3
                }
                ,
                {
                    text: "dministration", max: 16e3
                }
                ,
                {
                    text: "Information Techology", max: 3e4
                }
                ,
                {
                    text: "Customer Support", max: 38e3
                }
                ,
                {
                    text: "Development", max: 52e3
                }
                ,
                {
                    text: "Marketing", max: 25e3
                }
                ]
            }
            ],
            calculable:!0,
            series:[ {
                name:"Budget vs spending",
                type:"radar",
                data:[ {
                    value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3], name: "Allocated Budget"
                }
                ,
                {
                    value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3], name: "Actual Spending"
                }
                ]
            }
            ]
        }
        ,
        e.radar2.options= {
            tooltip: {
                trigger: "axis"
            }
            ,
            legend: {
                x: "center", data: ["Ronaldo", "Andriy Shevchenko"]
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            calculable:!0,
            polar:[ {
                indicator:[ {
                    text: "Attack", max: 100
                }
                ,
                {
                    text: "Guard", max: 100
                }
                ,
                {
                    text: "Physical", max: 100
                }
                ,
                {
                    text: "Speed", max: 100
                }
                ,
                {
                    text: "Strength", max: 100
                }
                ,
                {
                    text: "Skill", max: 100
                }
                ],
                radius:130
            }
            ],
            series:[ {
                name:"Full of live data",
                type:"radar",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: "default"
                        }
                    }
                }
                ,
                data:[ {
                    value: [97, 42, 88, 94, 90, 86], name: "Andriy Shevchenko"
                }
                ,
                {
                    value: [97, 32, 74, 95, 88, 92], name: "Ronaldo"
                }
                ]
            }
            ]
        }
        ,
        e.gauge1.options= {
            tooltip: {
                formatter:"{a} <br/>{b} : {c}%"
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            series:[ {
                name:"Business metric",
                type:"gauge",
                detail: {
                    formatter:"{value}%"
                }
                ,
                data:[ {
                    value: 50, name: "Completion"
                }
                ]
            }
            ]
        }
        ,
        e.chord1.options= {
            title: {
                text: "Test Data", subtext: "From d3.js", x: "right", y: "bottom"
            }
            ,
            tooltip: {
                trigger:"item",
                formatter:function(e) {
                    return e.indicator2?e.value.weight: e.name
                }
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            legend: {
                x: "left", data: ["group1", "group2", "group3", "group4"]
            }
            ,
            series:[ {
                type:"chord",
                sort:"ascending",
                sortSub:"descending",
                showScale:!0,
                showScaleText:!0,
                data:[ {
                    name: "group1"
                }
                ,
                {
                    name: "group2"
                }
                ,
                {
                    name: "group3"
                }
                ,
                {
                    name: "group4"
                }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: !1
                        }
                    }
                }
                ,
                matrix:[[11975,
                5871,
                8916,
                2868],
                [1951,
                10048,
                2060,
                6171],
                [8010,
                16145,
                8090,
                8045],
                [1013,
                990,
                940,
                6907]]
            }
            ]
        }
        ,
        e.funnel1.options= {
            title: {
                text: "Funnel"
            }
            ,
            tooltip: {
                trigger:"item",
                formatter:"{a} <br/>{b} : {c}%"
            }
            ,
            toolbox: {
                show:!0,
                feature: {
                    restore: {
                        show: !0, title: "restore"
                    }
                    ,
                    saveAsImage: {
                        show: !0, title: "save as image"
                    }
                }
            }
            ,
            legend: {
                data: ["Display", "Click", "Vist", "Contact", "Order"]
            }
            ,
            calculable:!0,
            series:[ {
                name:"Funnel",
                type:"funnel",
                width:"40%",
                data:[ {
                    value: 60, name: "Vist"
                }
                ,
                {
                    value: 40, name: "Contact"
                }
                ,
                {
                    value: 20, name: "Order"
                }
                ,
                {
                    value: 80, name: "Click"
                }
                ,
                {
                    value: 100, name: "Display"
                }
                ]
            }
            ,
            {
                name:"Pyramid",
                type:"funnel",
                x:"50%",
                sort:"ascending",
                itemStyle: {
                    normal: {
                        label: {
                            position: "left"
                        }
                    }
                }
                ,
                data:[ {
                    value: 60, name: "Vist"
                }
                ,
                {
                    value: 40, name: "Contact"
                }
                ,
                {
                    value: 20, name: "Order"
                }
                ,
                {
                    value: 80, name: "Click"
                }
                ,
                {
                    value: 100, name: "Display"
                }
                ]
            }
            ]
        }
    }
    angular.module("app.chart").controller("EChartsCtrl", ["$scope", "$timeout", e])
}

(),
function() {
    "use strict";
    function e() {
        var e=[ {
            name: "Fade up", class: "animate-fade-up"
        }
        ,
        {
            name: "Scale up", class: "ainmate-scale-up"
        }
        ,
        {
            name: "Slide in from right", class: "ainmate-slide-in-right"
        }
        ,
        {
            name: "Flip Y", class: "animate-flip-y"
        }
        ],
        t=new Date,
        a=t.getFullYear(),
        o= {
            brand: "Material", name: "Lisa", year: a, layout: "wide", menu: "vertical", isMenuCollapsed: !1, fixedHeader: !0, fixedSidebar: !0, pageTransition: e[0], skin: "12", link: "https://themeforest.net/item/material-design-admin-with-angularjs/13582227"
        }
        ,
        n= {
            primary: "#009688", success: "#8BC34A", info: "#00BCD4", infoAlt: "#7E57C2", warning: "#FFCA28", danger: "#F44336", text: "#3D4051", gray: "#EDF0F1"
        }
        ;
        return {
            pageTransitionOpts: e, main: o, color: n
        }
    }
    function t(e) {
        var t=e.extendPalette("cyan", {
            contrastLightColors: "500 600 700 800 900", contrastStrongLightColors: "500 600 700 800 900"
        }
        ),
        a=e.extendPalette("light-green", {
            contrastLightColors: "500 600 700 800 900", contrastStrongLightColors: "500 600 700 800 900"
        }
        );
        e.definePalette("cyanAlt", t).definePalette("lightGreenAlt", a),
        e.theme("default").primaryPalette("teal", {
            default: "500"
        }
        ).accentPalette("cyanAlt", {
            default: "500"
        }
        ).warnPalette("red", {
            default: "500"
        }
        ).backgroundPalette("grey")
    }
    angular.module("app.core").factory("appConfig", [e]).config(["$mdThemingProvider", t])
}

(),
function() {
    "use strict";
    function e(e, t, a, o, n) {
        e.pageTransitionOpts=n.pageTransitionOpts,
        e.main=n.main,
        e.color=n.color,
        e.$watch("main", function(a, o) {
            "horizontal"===a.menu&&"vertical"===o.menu&&t.$broadcast("nav:reset"), a.fixedHeader===!1&&a.fixedSidebar===!0&&(o.fixedHeader===!1&&o.fixedSidebar===!1&&(e.main.fixedHeader=!0, e.main.fixedSidebar=!0), o.fixedHeader===!0&&o.fixedSidebar===!0&&(e.main.fixedHeader=!1, e.main.fixedSidebar=!1)), a.fixedSidebar===!0&&(e.main.fixedHeader=!0), a.fixedHeader===!1&&(e.main.fixedSidebar=!1)
        }
        , !0),
        t.$on("$stateChangeSuccess", function(e, t, a) {
            o.scrollTo(0, 0)
        }
        )
    }
    angular.module("app").controller("AppCtrl", ["$scope", "$rootScope", "$state", "$document", "appConfig", e])
}

(),
function() {
    "use strict";
    angular.module("app").config(["$ocLazyLoadProvider", function(e) {
        e.config( {
            debug:!1, events:!1, modules:[ {
                name: "fontawesome", files: ["bower_components/font-awesome/css/font-awesome.css"]
            }
            , {
                name: "weather-icons", files: ["bower_components/weather-icons/css/weather-icons.min.css"]
            }
            , {
                name: "angular-material-data-table", files: ["bower_components/angular-material-data-table/dist/md-data-table.min.js"]
            }
            , {
                name: "angular-wizard", files: ["bower_components/angular-wizard/dist/angular-wizard.min.js"]
            }
            , {
                name: "email", files: ["app/email/email.module.js", "app/email/email.controller.js", "app/email/email.service.js"], serie: !0
            }
            , {
                name: "googlemap", files: ["js!http://maps.google.com/maps/api/js", "bower_components/ngmap/build/scripts/ng-map.min.js"]
            }
            , {
                name: "fullcalendar", files: ["bower_components/moment/min/moment.min.js", "bower_components/fullcalendar/dist/fullcalendar.min.js", "bower_components/angular-ui-calendar/src/calendar.js"], serie: !0
            }
            , {
                name: "textAngular", files: ["bower_components/textAngular/dist/textAngular-sanitize.min.js", "bower_components/rangy/rangy-core.min.js", "bower_components/rangy/rangy-selectionsaverestore.min.js", "bower_components/textAngular/dist/textAngular.js", "bower_components/textAngular/dist/textAngularSetup.js"], serie: !0
            }
            ]
        }
        )
    }
    ])
}

(),
function() {
    "use strict";
    angular.module("app").config(["$stateProvider", "$urlRouterProvider", "$ocLazyLoadProvider", function(e, t, a) {
        var o, n;
        o=["ui/cards", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", "ui/components", "ui/timeline", "ui/lists", "ui/pricing-tables", "table/static", "table/responsive", "table/data", "form/elements", "form/layouts", "form/validation", "chart/echarts", "chart/echarts-line", "chart/echarts-bar", "chart/echarts-pie", "chart/echarts-scatter", "chart/echarts-more", "page/404", "page/500", "page/blank", "page/forgot-password", "page/invoice", "page/lock-screen", "page/profile", "page/signin", "page/signup", "app/calendar"], n=function(t) {
            var a, o;
            return o="/"+t, a= {
                url: o, templateUrl: "app/"+t+".html"
            }
            , e.state(t, a), e
        }
        , o.forEach(function(e) {
            return n(e)
        }
        ), e.state("dashboard", {
            url: "/dashboard", templateUrl: "app/dashboard/dashboard.html"
        }
        ).state("form/editor", {
            url:"/form/editor", templateUrl:"app/form/editor.html", resolve: {
                deps:["$ocLazyLoad", function(e) {
                    return e.load(["textAngular"])
                }
                ]
            }
        }
        ).state("form/wizard", {
            url:"/form/wizard", templateUrl:"app/form/wizard.html", resolve: {
                deps:["$ocLazyLoad", function(e) {
                    return e.load(["angular-wizard"])
                }
                ]
            }
        }
        ).state("map/maps", {
            url:"/map/maps", templateUrl:"app/map/maps.html", resolve: {
                deps:["$ocLazyLoad", function(e) {
                    return e.load(["googlemap"])
                }
                ]
            }
        }
        ), t.when("/", "/dashboard").otherwise("/dashboard")
    }
    ])
}

(),
function() {
    function e(e) {
        e.useStaticFilesLoader( {
            prefix: "assets/i18n/", suffix: ".json"
        }
        ),
        e.preferredLanguage("en"),
        e.useSanitizeValueStrategy(null)
    }
    function t(e, t) {
        function a(a) {
            switch(a) {
                case"american": t.use("en");
                break;
                case"spain": t.use("es");
                break;
                case"china": t.use("zh");
                break;
                case"japan": t.use("ja")
            }
            return e.activeLang=a
        }
        e.activeLang="american",
        e.setLang=a,
        e.langs=["american",
        "spain",
        "china",
        "japan"]
    }
    angular.module("app.i18n", ["pascalprecht.translate"]).config(["$translateProvider", e]).controller("LangCtrl", ["$scope", "$translate", t])
}

(),
function() {
    "use strict";
    function e(e) {
        e.combo= {}
        ,
        e.combo.options= {
            legend: {
                show: !0, x: "right", y: "top", data: ["WOM", "Viral", "Paid"]
            }
            ,
            grid: {
                x: 40, y: 60, x2: 40, y2: 30, borderWidth: 0
            }
            ,
            tooltip: {
                show:!0,
                trigger:"axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            }
            ,
            xAxis:[ {
                type:"category",
                axisLine: {
                    show: !1
                }
                ,
                axisTick: {
                    show: !1
                }
                ,
                axisLabel: {
                    textStyle: {
                        color: "#607685"
                    }
                }
                ,
                splitLine: {
                    show:!1,
                    lineStyle: {
                        color: "#f3f3f3"
                    }
                }
                ,
                data:[0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20]
            }
            ],
            yAxis:[ {
                type:"value",
                axisLine: {
                    show: !1
                }
                ,
                axisTick: {
                    show: !1
                }
                ,
                axisLabel: {
                    textStyle: {
                        color: "#607685"
                    }
                }
                ,
                splitLine: {
                    show:!0,
                    lineStyle: {
                        color: "#f3f3f3"
                    }
                }
            }
            ],
            series:[ {
                name:"WOM",
                type:"bar",
                clickable:!1,
                itemStyle: {
                    normal: {
                        color: e.color.gray
                    }
                    ,
                    emphasis: {
                        color: "rgba(237,240,241,.7)"
                    }
                }
                ,
                barCategoryGap:"50%",
                data:[75,
                62,
                45,
                60,
                73,
                50,
                31,
                56,
                70,
                63,
                49,
                72,
                76,
                67,
                46,
                51,
                69,
                59,
                85,
                67,
                56],
                legendHoverLink:!1,
                z:2
            }
            ,
            {
                name:"Viral",
                type:"line",
                smooth:!0,
                itemStyle: {
                    normal: {
                        color:e.color.success,
                        areaStyle: {
                            color: "rgba(139,195,74,.7)", type: "default"
                        }
                    }
                }
                ,
                data:[0,
                0,
                0,
                5,
                20,
                15,
                30,
                28,
                25,
                40,
                60,
                40,
                43,
                32,
                36,
                23,
                12,
                15,
                2,
                0,
                0],
                symbol:"none",
                legendHoverLink:!1,
                z:3
            }
            ,
            {
                name:"Paid",
                type:"line",
                smooth:!0,
                itemStyle: {
                    normal: {
                        color:e.color.info,
                        areaStyle: {
                            color: "rgba(0,188,212,.7)", type: "default"
                        }
                    }
                }
                ,
                data:[0,
                0,
                0,
                0,
                1,
                6,
                15,
                8,
                16,
                9,
                25,
                12,
                50,
                20,
                25,
                12,
                2,
                1,
                0,
                0,
                0],
                symbol:"none",
                legendHoverLink:!1,
                z:4
            }
            ]
        }
        ,
        e.smline1= {}
        ,
        e.smline2= {}
        ,
        e.smline3= {}
        ,
        e.smline4= {}
        ,
        e.smline1.options= {
            tooltip: {
                show:!1,
                trigger:"axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            }
            ,
            grid: {
                x: 1, y: 1, x2: 1, y2: 1, borderWidth: 0
            }
            ,
            xAxis:[ {
                type: "category", show: !1, boundaryGap: !1, data: [1, 2, 3, 4, 5, 6, 7]
            }
            ],
            yAxis:[ {
                type:"value",
                show:!1,
                axisLabel: {
                    formatter:"{value} °C"
                }
            }
            ],
            series:[ {
                name:"*",
                type:"line",
                symbol:"none",
                data:[11,
                11,
                15,
                13,
                12,
                13,
                10],
                itemStyle: {
                    normal: {
                        color: e.color.info
                    }
                }
            }
            ]
        }
        ,
        e.smline2.options= {
            tooltip: {
                show:!1,
                trigger:"axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            }
            ,
            grid: {
                x: 1, y: 1, x2: 1, y2: 1, borderWidth: 0
            }
            ,
            xAxis:[ {
                type: "category", show: !1, boundaryGap: !1, data: [1, 2, 3, 4, 5, 6, 7]
            }
            ],
            yAxis:[ {
                type:"value",
                show:!1,
                axisLabel: {
                    formatter:"{value} °C"
                }
            }
            ],
            series:[ {
                name:"*",
                type:"line",
                symbol:"none",
                data:[11,
                10,
                14,
                12,
                13,
                11,
                12],
                itemStyle: {
                    normal: {
                        color: e.color.success
                    }
                }
            }
            ]
        }
        ,
        e.smline3.options= {
            tooltip: {
                show:!1,
                trigger:"axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            }
            ,
            grid: {
                x: 1, y: 1, x2: 1, y2: 1, borderWidth: 0
            }
            ,
            xAxis:[ {
                type: "category", show: !1, boundaryGap: !1, data: [1, 2, 3, 4, 5, 6, 7]
            }
            ],
            yAxis:[ {
                type:"value",
                show:!1,
                axisLabel: {
                    formatter:"{value} °C"
                }
            }
            ],
            series:[ {
                name:"*",
                type:"line",
                symbol:"none",
                data:[11,
                10,
                15,
                13,
                12,
                13,
                10],
                itemStyle: {
                    normal: {
                        color: e.color.danger
                    }
                }
            }
            ]
        }
        ,
        e.smline4.options= {
            tooltip: {
                show:!1,
                trigger:"axis",
                axisPointer: {
                    lineStyle: {
                        color: e.color.gray
                    }
                }
            }
            ,
            grid: {
                x: 1, y: 1, x2: 1, y2: 1, borderWidth: 0
            }
            ,
            xAxis:[ {
                type: "category", show: !1, boundaryGap: !1, data: [1, 2, 3, 4, 5, 6, 7]
            }
            ],
            yAxis:[ {
                type:"value",
                show:!1,
                axisLabel: {
                    formatter:"{value} °C"
                }
            }
            ],
            series:[ {
                name:"*",
                type:"line",
                symbol:"none",
                data:[11,
                12,
                8,
                10,
                15,
                12,
                10],
                itemStyle: {
                    normal: {
                        color: e.color.warning
                    }
                }
            }
            ]
        }
        ;
        var t= {
            normal: {
                color:e.color.primary,
                label: {
                    show:!0,
                    position:"center",
                    formatter:"{b}",
                    textStyle: {
                        color: "#999", baseline: "top", fontSize: 12
                    }
                }
                ,
                labelLine: {
                    show: !1
                }
            }
        }
        ,
        a= {
            normal: {
                label: {
                    formatter:function(e) {
                        return 100-e.value+"%"
                    }
                    ,
                    textStyle: {
                        color: e.color.text, baseline: "bottom", fontSize: 20
                    }
                }
            }
        }
        ,
        o= {
            normal: {
                color:"#f1f1f1",
                label: {
                    show: !0, position: "center"
                }
                ,
                labelLine: {
                    show: !1
                }
            }
        }
        ,
        n=[55,
        60];
        e.pie= {}
        ,
        e.pie.options= {
            series:[ {
                type:"pie",
                center:["12.5%",
                "50%"],
                radius:n,
                itemStyle:a,
                data:[ {
                    name: "Bounce", value: 36, itemStyle: t
                }
                ,
                {
                    name: "other", value: 64, itemStyle: o
                }
                ]
            }
            ,
            {
                type:"pie",
                center:["37.5%",
                "50%"],
                radius:n,
                itemStyle:a,
                data:[ {
                    name: "Activation", value: 45, itemStyle: t
                }
                ,
                {
                    name: "other", value: 55, itemStyle: o
                }
                ]
            }
            ,
            {
                type:"pie",
                center:["62.5%",
                "50%"],
                radius:n,
                itemStyle:a,
                data:[ {
                    name: "Retention", value: 25, itemStyle: t
                }
                ,
                {
                    name: "other", value: 75, itemStyle: o
                }
                ]
            }
            ,
            {
                type:"pie",
                center:["87.5%",
                "50%"],
                radius:n,
                itemStyle:a,
                data:[ {
                    name: "Referral", value: 75, itemStyle: t
                }
                ,
                {
                    name: "other", value: 25, itemStyle: o
                }
                ]
            }
            ]
        }
    }
    angular.module("app").controller("DashboardCtrl", ["$scope", e])
}

(),
function() {
    "use strict";
    function e(e) {
        e.user= {
            title: "Developer", email: "ipsum@lorem.com", firstName: "", lastName: "", company: "Google", address: "1600 Amphitheatre Pkwy", city: "Mountain View", state: "CA", biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!", postalCode: "94043"
        }
        ,
        e.states="AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ").map(function(e) {
            return {
                abbrev: e
            }
        }
        )
    }
    function t(e) {
        e.checkbox= {}
        ,
        e.checkbox.cb1=!0,
        e.checkbox.cb2=!1,
        e.checkbox.cb3=!1,
        e.checkbox.cb4=!1,
        e.checkbox.cb5=!1,
        e.checkbox.cb6=!0,
        e.checkbox.cb7=!0,
        e.checkbox.cb8=!0,
        e.items=[1,
        2,
        3,
        4,
        5],
        e.selected=[],
        e.toggle=function(e, t) {
            var a=t.indexOf(e);
            a>-1?t.splice(a, 1): t.push(e)
        }
        ,
        e.exists=function(e, t) {
            return t.indexOf(e)>-1
        }
    }
    function a(e) {
        e.radio= {
            group1: "Banana", group2: "2", group3: "Primary"
        }
        ,
        e.radioData=[ {
            label: "Radio: disabled", value: "1", isDisabled: !0
        }
        ,
        {
            label: "Radio: disabled, Checked", value: "2", isDisabled: !0
        }
        ],
        e.contacts=[ {
            id: 1, fullName: "Maria Guadalupe", lastName: "Guadalupe", title: "CEO, Found"
        }
        ,
        {
            id: 2, fullName: "Gabriel García Marquéz", lastName: "Marquéz", title: "VP Sales & Marketing"
        }
        ,
        {
            id: 3, fullName: "Miguel de Cervantes", lastName: "Cervantes", title: "Manager, Operations"
        }
        ,
        {
            id: 4, fullName: "Pacorro de Castel", lastName: "Castel", title: "Security"
        }
        ],
        e.selectedIndex=2,
        e.selectedUser=function() {
            var t=e.selectedIndex-1;
            return e.contacts[t].lastName
        }
    }
    function o(e) {
        e.color= {
            red: 97, green: 211, blue: 140
        }
        ,
        e.rating1=3,
        e.rating2=2,
        e.rating3=4,
        e.disabled1=0,
        e.disabled2=70,
        e.user= {
            title: "Developer", email: "ipsum@lorem.com", firstName: "", lastName: "", company: "Google", address: "1600 Amphitheatre Pkwy", city: "Mountain View", state: "CA", biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!", postalCode: "94043"
        }
        ,
        e.select1="1",
        e.toppings=[ {
            category: "meat", name: "Pepperoni"
        }
        ,
        {
            category: "meat", name: "Sausage"
        }
        ,
        {
            category: "meat", name: "Ground Beef"
        }
        ,
        {
            category: "meat", name: "Bacon"
        }
        ,
        {
            category: "veg", name: "Mushrooms"
        }
        ,
        {
            category: "veg", name: "Onion"
        }
        ,
        {
            category: "veg", name: "Green Pepper"
        }
        ,
        {
            category: "veg", name: "Green Olives"
        }
        ],
        e.favoriteTopping=e.toppings[0].name,
        e.switchData= {
            cb1: !0, cbs: !1, cb4: !0, color1: !0, color2: !0, color3: !0
        }
        ,
        e.switchOnChange=function(t) {
            e.message="The switch is now: "+t
        }
    }
    function n(e, t, a, o) {
        function n(e) {
            alert("Sorry! You'll need to create a Constituion for "+e+" first!")
        }
        function i(o) {
            var n,
            i=o?e.states.filter(c(o)): e.states;
            return e.simulateQuery?(n=a.defer(), t(function() {
                n.resolve(i)
            }
            , 1e3*Math.random(), !1), n.promise):i
        }
        function r(e) {}
        function l(e) {}
        function s() {
            var e="Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,                            Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,                            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,                            North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,                            South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,                            Wisconsin, Wyoming";
            return e.split(/, +/g).map(function(e) {
                return {
                    value: e.toLowerCase(), display: e
                }
            }
            )
        }
        function c(e) {
            var t=angular.lowercase(e);
            return function(e) {
                return 0===e.value.indexOf(t)
            }
        }
        var e=this;
        e.simulateQuery=!1,
        e.isDisabled=!1,
        e.states=s(),
        e.querySearch=i,
        e.selectedItemChange=l,
        e.searchTextChange=r,
        e.newState=n
    }
    function i(e) {
        e.myDate=new Date,
        e.minDate=new Date(e.myDate.getFullYear(), e.myDate.getMonth()-2, e.myDate.getDate()),
        e.maxDate=new Date(e.myDate.getFullYear(), e.myDate.getMonth()+2, e.myDate.getDate())
    }
    angular.module("app.ui.form").config(["$compileProvider", function(e) {
        e.preAssignBindingsEnabled(!0)
    }
    ]).controller("InputCtrl", ["$scope", e]).controller("CheckboxCtrl", ["$scope", t]).controller("RadioCtrl", ["$scope", a]).controller("FormCtrl", ["$scope", o]).controller("MaterialAutocompleteCtrl", ["$scope", "$timeout", "$q", "$log", n]).controller("MaterialDatepickerCtrl", ["$scope", i])
}

(),
function() {
    "use strict";
    function e(e) {
        var t;
        e.form= {
            required: "", minlength: "", maxlength: "", length_rage: "", type_something: "", confirm_type: "", foo: "", email: "", url: "", num: "", minVal: "", maxVal: "", valRange: "", pattern: ""
        }
        ,
        t=angular.copy(e.form),
        e.revert=function() {
            return e.form=angular.copy(t),
            e.form_constraints.$setPristine()
        }
        ,
        e.canRevert=function() {
            return!angular.equals(e.form, t)||!e.form_constraints.$pristine
        }
        ,
        e.canSubmit=function() {
            return e.form_constraints.$valid&&!angular.equals(e.form, t)
        }
        ,
        e.submitForm=function() {
            return e.showInfoOnSubmit=!0,
            e.revert()
        }
    }
    function t(e) {
        var t;
        e.user= {
            email: "", passowrd: ""
        }
        ,
        t=angular.copy(e.user),
        e.revert=function() {
            e.user=angular.copy(t),
            e.material_login_form.$setPristine(),
            e.material_login_form.$setUntouched()
        }
        ,
        e.canRevert=function() {
            return!angular.equals(e.user, t)||!e.material_login_form.$pristine
        }
        ,
        e.canSubmit=function() {
            return e.material_login_form.$valid&&!angular.equals(e.user, t)
        }
        ,
        e.submitForm=function() {
            return e.showInfoOnSubmit=!0,
            e.revert()
        }
    }
    function a(e) {
        var t;
        e.user= {
            name: "", email: "", passowrd: ""
        }
        ,
        t=angular.copy(e.user),
        e.revert=function() {
            e.user=angular.copy(t),
            e.material_signup_form.$setPristine(),
            e.material_signup_form.$setUntouched()
        }
        ,
        e.canRevert=function() {
            return!angular.equals(e.user, t)||!e.material_signup_form.$pristine
        }
        ,
        e.canSubmit=function() {
            return e.material_signup_form.$valid&&!angular.equals(e.user, t)
        }
        ,
        e.submitForm=function() {
            return e.showInfoOnSubmit=!0,
            e.revert()
        }
    }
    function o(e) {
        var t;
        e.user= {
            email: "", password: ""
        }
        ,
        e.showInfoOnSubmit=!1,
        t=angular.copy(e.user),
        e.revert=function() {
            return e.user=angular.copy(t),
            e.form_signin.$setPristine()
        }
        ,
        e.canRevert=function() {
            return!angular.equals(e.user, t)||!e.form_signin.$pristine
        }
        ,
        e.canSubmit=function() {
            return e.form_signin.$valid&&!angular.equals(e.user, t)
        }
        ,
        e.submitForm=function() {
            return e.showInfoOnSubmit=!0,
            e.revert()
        }
    }
    function n(e) {
        var t;
        e.user= {
            name: "", email: "", password: "", age: ""
        }
        ,
        e.showInfoOnSubmit=!1,
        t=angular.copy(e.user),
        e.revert=function() {
            e.user=angular.copy(t),
            e.form_signup.$setPristine()
        }
        ,
        e.canRevert=function() {
            return!angular.equals(e.user, t)||!e.form_signup.$pristine
        }
        ,
        e.canSubmit=function() {
            return e.form_signup.$valid&&!angular.equals(e.user, t)
        }
        ,
        e.submitForm=function() {
            return e.showInfoOnSubmit=!0,
            e.revert()
        }
    }
    angular.module("app.ui.form.validation").controller("FormConstraintsCtrl", ["$scope", e]).controller("MaterialLoginCtrl", ["$scope", t]).controller("MaterialSignUpCtrl", ["$scope", a]).controller("SigninCtrl", ["$scope", o]).controller("SignupCtrl", ["$scope", n])
}

(),
function() {
    "use strict";
    function e(e, t, a, o) {
        e.canExit=!1,
        e.stepActive=!0,
        e.finished=function() {
            alert("Wizard finished :)")
        }
        ,
        e.logStep=function() {
            console.log("Step continued")
        }
        ,
        e.goBack=function() {
            o.wizard().goTo(0)
        }
        ,
        e.exitWithAPromise=function() {
            var e=t.defer();
            return a(function() {
                e.resolve(!0)
            }
            , 1e3),
            e.promise
        }
        ,
        e.exitToggle=function() {
            e.canExit=!e.canExit
        }
        ,
        e.stepToggle=function() {
            e.stepActive=!e.stepActive
        }
        ,
        e.exitValidation=function() {
            return e.canExit
        }
    }
    angular.module("app.ui.form").controller("WizardCtrl", ["$scope", "$q", "$timeout", "WizardHandler", e])
}

(),
function() {
    function e(e) {}
    angular.module("app.layout").controller("CustomizerCtrl", ["$scope", e])
}

(),
function() {
    "use strict";
    function e() {
        function e(e, t, a) {
            var o=$(t[0]),
            n=$("#app");
            o.on("click", function(e) {
                var t="quickview-open";
                if(a.target)var t=t+"-"+a.target;
                n.toggleClass(t), e.preventDefault()
            }
            )
        }
        var t= {
            restrict: "A", link: e
        }
        ;
        return t
    }
    function t(e) {
        return {
            restrict:"A",
            template:'<span class="bar"></span>',
            link:function(e, t, a) {
                t.addClass("preloaderbar hide"),
                e.$on("$stateChangeStart", function(e) {
                    t.removeClass("hide").addClass("active")
                }
                ),
                e.$on("$stateChangeSuccess", function(e, a, o, n) {
                    e.targetScope.$watch("$viewContentLoaded", function() {
                        t.addClass("hide").removeClass("active")
                    }
                    )
                }
                ),
                e.$on("preloader:active", function(e) {
                    t.removeClass("hide").addClass("active")
                }
                ),
                e.$on("preloader:hide", function(e) {
                    t.addClass("hide").removeClass("active")
                }
                )
            }
        }
    }
    angular.module("app.layout").directive("toggleQuickview", e).directive("uiPreloader", ["$rootScope", t])
}

(),
function() {
    function e() {
        $("#loader-container").fadeOut("slow")
    }
    $(window).load(function() {
        setTimeout(e, 1e3)
    }
    )
}

(),
function() {
    "use strict";
    function e(e) {
        function t(t, a, o) {
            var n;
            n=$("#app"),
            a.on("click", function(t) {
                return n.hasClass("nav-collapsed-min")?n.removeClass("nav-collapsed-min"): (n.addClass("nav-collapsed-min"), e.$broadcast("nav:reset")), t.preventDefault()
            }
            )
        }
        var a= {
            restrict: "A", link: t
        }
        ;
        return a
    }
    function t() {
        function e(e, t, a) {
            var o,
            n,
            i,
            r,
            l,
            s,
            c,
            u,
            m,
            d,
            p;
            d=250,
            c=$(window),
            r=t.find("ul").parent("li"),
            r.append('<i class="fa fa-angle-down icon-has-ul-h"></i>'),
            o=r.children("a"),
            o.append('<i class="fa fa-angle-down icon-has-ul"></i>'),
            l=t.children("li").not(r),
            n=l.children("a"),
            i=$("#app"),
            s=$("#nav-container"),
            o.on("click", function(e) {
                var t, a;
                return!(i.hasClass("nav-collapsed-min")||s.hasClass("nav-horizontal")&&c.width()>=768)&&(a=$(this), t=a.parent("li"), r.not(t).removeClass("open").find("ul").slideUp(d), t.toggleClass("open").find("ul").stop().slideToggle(d), void e.preventDefault())
            }
            ),
            n.on("click", function(e) {
                r.removeClass("open").find("ul").slideUp(d)
            }
            ),
            e.$on("nav:reset", function(e) {
                r.removeClass("open").find("ul").slideUp(d)
            }
            ),
            u=void 0,
            m=c.width(),
            p=function() {
                var e;
                e=c.width(),
                e<768&&i.removeClass("nav-collapsed-min"),
                m<768&&e>=768&&s.hasClass("nav-horizontal")&&r.removeClass("open").find("ul").slideUp(d),
                m=e
            }
            ,
            c.resize(function() {
                var e;
                clearTimeout(e), e=setTimeout(p, 300)
            }
            )
        }
        var t= {
            restrict: "A", link: e
        }
        ;
        return t
    }
    function a() {
        function e(e, t, a, o) {
            var n,
            i,
            r;
            i=t.find("a"),
            r=function() {
                return o.path()
            }
            ,
            n=function(e, t) {
                return t="#!"+t,
                angular.forEach(e, function(e) {
                    var a, o, n;
                    if(o=angular.element(e), a=o.parent("li"), n=o.attr("href"), a.hasClass("active")&&a.removeClass("active"), 0===t.indexOf(n))return a.addClass("active")
                }
                )
            }
            ,
            n(i, o.path()),
            e.$watch(r, function(e, t) {
                if(e!==t)return n(i, o.path())
            }
            )
        }
        var t= {
            restrict: "A", controller: ["$scope", "$element", "$attrs", "$location", e]
        }
        ;
        return t
    }
    function o() {
        function e(e, t, a) {
            t.on("click", function() {
                return $("#app").toggleClass("on-canvas")
            }
            )
        }
        var t= {
            restrict: "A", link: e
        }
        ;
        return t
    }
    angular.module("app.layout").directive("toggleNavCollapsedMin", ["$rootScope", e]).directive("collapseNav", t).directive("highlightActive", a).directive("toggleOffCanvas", o)
}

(),
function() {
    "use strict";
    function e(e, t) {
        var a,
        o,
        n;
        e.printInvoice=function() {
            a=document.getElementById("invoice").innerHTML,
            o=document.body.innerHTML,
            n=window.open(),
            n.document.open(),
            n.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">'+a+"</html>"),
            n.document.close()
        }
    }
    function t(e, t, a) {
        e.login=function() {
            a.url("/")
        }
        ,
        e.signup=function() {
            a.url("/")
        }
        ,
        e.reset=function() {
            a.url("/")
        }
        ,
        e.unlock=function() {
            a.url("/")
        }
    }
    angular.module("app.page").controller("invoiceCtrl",
    ["$scope",
    "$window",
    e]).controller("authCtrl",
    ["$scope",
    "$window",
    "$location",
    t])
}

(),
function() {
    "use strict";
    function e() {
        function e(e,
        t,
        a) {
            var o,
            n;
            n=function() {
                return a.path()
            }
            ,
            o=function(e) {
                switch(t.removeClass("on-canvas"),
                t.removeClass("body-wide body-err body-lock body-auth"),
                e) {
                    case"/404": case"/page/404": case"/page/500": return t.addClass("body-wide body-err");
                    case"/page/signin": case"/page/signup": case"/page/forgot-password": return t.addClass("body-wide body-auth");
                    case"/page/lock-screen": return t.addClass("body-wide body-lock")
                }
            }
            ,
            o(a.path()),
            e.$watch(n,
            function(e,
            t) {
                if(e!==t)return o(a.path())
            }
            )
        }
        var t= {
            restrict: "A", controller: ["$scope", "$element", "$location", e]
        }
        ;
        return t
    }
    angular.module("app.page").directive("customPage",
    e)
}

(),
function() {
    "use strict";
    function e(e,
    t,
    a,
    o) {
        a.selected=[],
        a.limitOptions=[5,
        10,
        15],
        a.options= {
            rowSelection: !0, multiSelect: !0, autoSelect: !0, decapitate: !1, largeEditDialog: !1, boundaryLinks: !1, limitSelect: !0, pageSelect: !0
        }
        ,
        a.query= {
            order: "name", limit: 5, page: 1
        }
        ,
        a.desserts= {
            count:9,
            data:[ {
                name:"Frozen yogurt",
                type:"Ice cream",
                calories: {
                    value: 159
                }
                ,
                fat: {
                    value: 6
                }
                ,
                carbs: {
                    value: 24
                }
                ,
                protein: {
                    value: 4
                }
                ,
                sodium: {
                    value: 87
                }
                ,
                calcium: {
                    value: 14
                }
                ,
                iron: {
                    value: 1
                }
            }
            ,
            {
                name:"Ice cream sandwich",
                type:"Ice cream",
                calories: {
                    value: 237
                }
                ,
                fat: {
                    value: 9
                }
                ,
                carbs: {
                    value: 37
                }
                ,
                protein: {
                    value: 4.3
                }
                ,
                sodium: {
                    value: 129
                }
                ,
                calcium: {
                    value: 8
                }
                ,
                iron: {
                    value: 1
                }
            }
            ,
            {
                name:"Eclair",
                type:"Pastry",
                calories: {
                    value: 262
                }
                ,
                fat: {
                    value: 16
                }
                ,
                carbs: {
                    value: 24
                }
                ,
                protein: {
                    value: 6
                }
                ,
                sodium: {
                    value: 337
                }
                ,
                calcium: {
                    value: 6
                }
                ,
                iron: {
                    value: 7
                }
            }
            ,
            {
                name:"Cupcake",
                type:"Pastry",
                calories: {
                    value: 305
                }
                ,
                fat: {
                    value: 3.7
                }
                ,
                carbs: {
                    value: 67
                }
                ,
                protein: {
                    value: 4.3
                }
                ,
                sodium: {
                    value: 413
                }
                ,
                calcium: {
                    value: 3
                }
                ,
                iron: {
                    value: 8
                }
            }
            ,
            {
                name:"Jelly bean",
                type:"Candy",
                calories: {
                    value: 375
                }
                ,
                fat: {
                    value: 0
                }
                ,
                carbs: {
                    value: 94
                }
                ,
                protein: {
                    value: 0
                }
                ,
                sodium: {
                    value: 50
                }
                ,
                calcium: {
                    value: 0
                }
                ,
                iron: {
                    value: 0
                }
            }
            ,
            {
                name:"Lollipop",
                type:"Candy",
                calories: {
                    value: 392
                }
                ,
                fat: {
                    value: .2
                }
                ,
                carbs: {
                    value: 98
                }
                ,
                protein: {
                    value: 0
                }
                ,
                sodium: {
                    value: 38
                }
                ,
                calcium: {
                    value: 0
                }
                ,
                iron: {
                    value: 2
                }
            }
            ,
            {
                name:"Honeycomb",
                type:"Other",
                calories: {
                    value: 408
                }
                ,
                fat: {
                    value: 3.2
                }
                ,
                carbs: {
                    value: 87
                }
                ,
                protein: {
                    value: 6.5
                }
                ,
                sodium: {
                    value: 562
                }
                ,
                calcium: {
                    value: 0
                }
                ,
                iron: {
                    value: 45
                }
            }
            ,
            {
                name:"Donut",
                type:"Pastry",
                calories: {
                    value: 452
                }
                ,
                fat: {
                    value: 25
                }
                ,
                carbs: {
                    value: 51
                }
                ,
                protein: {
                    value: 4.9
                }
                ,
                sodium: {
                    value: 326
                }
                ,
                calcium: {
                    value: 2
                }
                ,
                iron: {
                    value: 22
                }
            }
            ,
            {
                name:"KitKat",
                type:"Candy",
                calories: {
                    value: 518
                }
                ,
                fat: {
                    value: 26
                }
                ,
                carbs: {
                    value: 65
                }
                ,
                protein: {
                    value: 7
                }
                ,
                sodium: {
                    value: 54
                }
                ,
                calcium: {
                    value: 12
                }
                ,
                iron: {
                    value: 6
                }
            }
            ]
        }
        ,
        a.editComment=function(o,
        n) {
            o.stopPropagation();
            var i,
            r= {
                modelValue:n.comment,
                placeholder:"Add a comment",
                save:function(e) {
                    return"Donald Trump"===e.$modelValue?(e.$invalid=!0,
                    t.reject()): "Bernie Sanders"===e.$modelValue?n.comment="FEEL THE BERN!": void(n.comment=e.$modelValue)
                }
                ,
                targetEvent:o,
                title:"Add a comment",
                validators: {
                    "md-maxlength": 30
                }
            }
            ;
            i=a.options.largeEditDialog?e.large(r):e.small(r),
            i.then(function(e) {
                var t=e.getInput();
                t.$viewChangeListeners.push(function() {
                    t.$setValidity("test",
                    "test"!==t.$modelValue)
                }
                )
            }
            )
        }
        ,
        a.toggleLimitOptions=function() {
            a.limitOptions=a.limitOptions?void 0: [5, 10, 15]
        }
        ,
        a.getTypes=function() {
            return["Candy",
            "Ice cream",
            "Other",
            "Pastry"]
        }
        ,
        a.loadStuff=function() {
            a.promise=o(function() {}
            ,
            2e3)
        }
        ,
        a.logItem=function(e) {
            console.log(e.name,
            "was selected")
        }
        ,
        a.logOrder=function(e) {
            console.log("order: ",
            e)
        }
        ,
        a.logPagination=function(e,
        t) {
            console.log("page: ",
            e),
            console.log("limit: ",
            t)
        }
    }
    angular.module("app.table").controller("nutritionController",
    ["$mdEditDialog",
    "$q",
    "$scope",
    "$timeout",
    e])
}

(),
function() {
    "use strict";
    function e() {
        var e=this;
        e.readonly=!1,
        e.fruitNames=["Apple",
        "Banana",
        "Orange"],
        e.roFruitNames=angular.copy(e.fruitNames),
        e.tags=[],
        e.vegObjs=[ {
            name: "Broccoli", type: "Brassica"
        }
        ,
        {
            name: "Cabbage", type: "Brassica"
        }
        ,
        {
            name: "Carrot", type: "Umbelliferous"
        }
        ],
        e.newVeg=function(e) {
            return {
                name: e, type: "unknown"
            }
        }
    }
    function t(e,
    t) {
        e.status="  ",
        e.showAlert=function(e) {
            t.show(t.alert().parent(angular.element(document.querySelector("#popupContainer"))).clickOutsideToClose(!0).title("This is an alert title").content("You can specify some description text in here.").ariaLabel("Alert Dialog Demo").ok("Got it!").targetEvent(e))
        }
        ,
        e.showConfirm=function(a) {
            var o=t.confirm().title("Would you like to delete your debt?").content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.').ariaLabel("Lucky day").targetEvent(a).ok("Please do it!").cancel("Sounds like a scam");
            t.show(o).then(function() {
                e.status="You decided to get rid of your debt."
            }
            ,
            function() {
                e.status="You decided to keep your debt."
            }
            )
        }
        ,
        e.showAdvanced=function(o) {
            t.show( {
                controller: a, templateUrl: "dialog1.tmpl.html", parent: angular.element(document.body), targetEvent: o, clickOutsideToClose: !0
            }
            ).then(function(t) {
                e.status='You said the information was "'+t+'".'
            }
            ,
            function() {
                e.status="You cancelled the dialog."
            }
            )
        }
        ,
        e.openOffscreen=function() {
            t.show(t.alert().clickOutsideToClose(!0).title("Opening from offscreen").content("Closing to offscreen").ariaLabel("Offscreen Demo").ok("Amazing!").openFrom( {
                top: 50, width: 30, height: 80
            }
            ).closeTo( {
                left: 1500
            }
            ))
        }
    }
    function a(e,
    t) {
        e.hide=function() {
            t.hide()
        }
        ,
        e.cancel=function() {
            t.cancel()
        }
        ,
        e.answer=function(e) {
            t.hide(e)
        }
    }
    function o(e,
    t) {
        var a=[ {
            title: "One", content: "Tabs will become paginated if there isn't enough room for them."
        }
        ,
        {
            title: "Two", content: "You can swipe left and right on a mobile device to change tabs."
        }
        ,
        {
            title: "Three", content: "You can bind the selected tab via the selected attribute on the md-tabs element."
        }
        ,
        {
            title: "Four", content: "If you set the selected tab binding to -1, it will leave no tab selected."
        }
        ,
        {
            title: "Five", content: "If you remove a tab, it will try to select a new one."
        }
        ,
        {
            title: "Six", content: "There's an ink bar that follows the selected tab, you can turn it off if you want."
        }
        ,
        {
            title: "Seven", content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."
        }
        ,
        {
            title: "Eight", content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"
        }
        ,
        {
            title: "Nine", content: 'If you set md-theme="green" on the md-tabs element, you\'ll get green tabs.'
        }
        ,
        {
            title: "Ten", content: "If you're still reading this, you should just go check out the API docs for tabs!"
        }
        ],
        o=null,
        n=null;
        e.tabs=a,
        e.selectedIndex=2,
        e.$watch("selectedIndex",
        function(e,
        t) {
            n=o,
            o=a[e]
        }
        ),
        e.addTab=function(e,
        t) {
            t=t||e+" Content View",
            a.push( {
                title: e, content: t, disabled: !1
            }
            )
        }
        ,
        e.removeTab=function(e) {
            var t=a.indexOf(e);
            a.splice(t,
            1)
        }
    }
    function n(e,
    t) {
        var a=this,
        o=0,
        n=0;
        a.modes=[],
        a.activated=!0,
        a.determinateValue=30,
        a.toggleActivation=function() {
            a.activated||(a.modes=[]),
            a.activated&&(o=n=0)
        }
        ,
        t(function() {
            a.determinateValue+=1,
            a.determinateValue>100&&(a.determinateValue=30),
            o<5&&!a.modes[o]&&a.activated&&(a.modes[o]="indeterminate"),
            n++%4==0&&o++
        }
        ,
        100,
        0,
        !0)
    }
    function i(e,
    t) {
        var a=this,
        o=0,
        n=0;
        a.mode="query",
        a.activated=!0,
        a.determinateValue=30,
        a.determinateValue2=30,
        a.modes=[],
        a.toggleActivation=function() {
            a.activated||(a.modes=[]),
            a.activated&&(o=n=0,
            a.determinateValue=30,
            a.determinateValue2=30)
        }
        ,
        t(function() {
            a.determinateValue+=1,
            a.determinateValue2+=1.5,
            a.determinateValue>100&&(a.determinateValue=30),
            a.determinateValue2>100&&(a.determinateValue2=30),
            o<2&&!a.modes[o]&&a.activated&&(a.modes[o]=0==o?"buffer": "query"), n++%4==0&&o++, 2==o&&(a.contained="indeterminate")
        }
        ,
        100,
        0,
        !0),
        t(function() {
            a.mode="query"==a.mode?"determinate": "query"
        }
        ,
        7200,
        0,
        !0)
    }
    function r(e,
    t,
    a) {
        function o() {
            var t=e.toastPosition;
            t.bottom&&n.top&&(t.top=!1),
            t.top&&n.bottom&&(t.bottom=!1),
            t.right&&n.left&&(t.left=!1),
            t.left&&n.right&&(t.right=!1),
            n=angular.extend( {}
            ,
            t)
        }
        var n= {
            bottom: !1, top: !0, left: !1, right: !0
        }
        ;
        e.toastPosition=angular.extend( {}
        ,
        n),
        e.getToastPosition=function() {
            return o(),
            Object.keys(e.toastPosition).filter(function(t) {
                return e.toastPosition[t]
            }
            ).join(" ")
        }
        ,
        e.showCustomToast=function() {
            t.show( {
                controller: "ToastCustomDemo", templateUrl: "toast-template.html", parent: a[0].querySelector("#toastBounds"), hideDelay: 6e3, position: e.getToastPosition()
            }
            )
        }
        ,
        e.showSimpleToast=function() {
            t.show(t.simple().content("Simple Toast!").position(e.getToastPosition()).hideDelay(3e3))
        }
        ,
        e.showActionToast=function() {
            var a=t.simple().content("Action Toast!").action("OK").highlightAction(!1).position(e.getToastPosition());
            t.show(a).then(function(e) {
                "ok"==e&&alert("You clicked 'OK'.")
            }
            )
        }
    }
    function l(e,
    t) {
        e.closeToast=function() {
            t.hide()
        }
    }
    function s(e) {
        e.demo= {
            showTooltip: !1, tipDirection: ""
        }
        ,
        e.$watch("demo.tipDirection",
        function(t) {
            t&&t.length&&(e.demo.showTooltip=!0)
        }
        )
    }
    function c(e) {
        var t="assets/images/g1.jpg";
        e.messages=[ {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ,
        {
            face: t, what: "Brunch this weekend?", who: "Min Li Chan", when: "3:08PM", notes: " I'll be in your neighborhood doing errands"
        }
        ]
    }
    function u() {
        var e=this;
        e.userState="",
        e.states="AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ").map(function(e) {
            return {
                abbrev: e
            }
        }
        ),
        e.sizes=["small (12-inch)",
        "medium (14-inch)",
        "large (16-inch)",
        "insane (42-inch)"],
        e.toppings=[ {
            category: "meat", name: "Pepperoni"
        }
        ,
        {
            category: "meat", name: "Sausage"
        }
        ,
        {
            category: "meat", name: "Ground Beef"
        }
        ,
        {
            category: "meat", name: "Bacon"
        }
        ,
        {
            category: "veg", name: "Mushrooms"
        }
        ,
        {
            category: "veg", name: "Onion"
        }
        ,
        {
            category: "veg", name: "Green Pepper"
        }
        ,
        {
            category: "veg", name: "Green Olives"
        }
        ]
    }
    angular.module("app.ui").controller("ChipsBasicDemoCtrl",
    e).controller("DialogDemo",
    ["$scope",
    "$mdDialog",
    t]).controller("TabsDemo",
    ["$scope",
    "$log",
    o]).controller("ProgressCircularDemo",
    ["$scope",
    "$interval",
    n]).controller("ProgressLinearDemo",
    ["$scope",
    "$interval",
    i]).controller("ToastDemo",
    ["$scope",
    "$mdToast",
    "$document",
    r]).controller("ToastCustomDemo",
    ["$scope",
    "$mdToast",
    l]).controller("TooltipDemo",
    ["$scope",
    s]).controller("SubheaderDemo",
    ["$scope",
    c]).controller("SelectDemo",
    u)
}

(),
function() {
    "use strict";
    function e(e,
    t) {
        e.start=function() {
            t.$broadcast("preloader:active")
        }
        ,
        e.complete=function() {
            t.$broadcast("preloader:hide")
        }
    }
    function t(e,
    t) {
        e.toppings=[ {
            name: "Pepperoni", wanted: !0
        }
        ,
        {
            name: "Sausage", wanted: !1
        }
        ,
        {
            name: "Black Olives", wanted: !0
        }
        ],
        e.settings=[ {
            name: "Wi-Fi", extraScreen: "Wi-fi menu", icon: "wifi", enabled: !0
        }
        ,
        {
            name: "Bluetooth", extraScreen: "Bluetooth menu", icon: "bluetooth", enabled: !1
        }
        ],
        e.messages=[ {
            id: 1, title: "Message A", selected: !1
        }
        ,
        {
            id: 2, title: "Message B", selected: !0
        }
        ,
        {
            id: 3, title: "Message C", selected: !0
        }
        ],
        e.people=[ {
            name: "Janet Perkins", img: "img/100-0.jpeg", newMessage: !0
        }
        ,
        {
            name: "Mary Johnson", img: "img/100-1.jpeg", newMessage: !1
        }
        ,
        {
            name: "Peter Carlsson", img: "img/100-2.jpeg", newMessage: !1
        }
        ],
        e.goToPerson=function(e,
        a) {
            t.show(t.alert().title("Navigating").content("Inspect "+e).ariaLabel("Person inspect demo").ok("Neat!").targetEvent(a))
        }
        ,
        e.navigateTo=function(e,
        a) {
            t.show(t.alert().title("Navigating").content("Imagine being taken to "+e).ariaLabel("Navigation demo").ok("Neat!").targetEvent(a))
        }
        ,
        e.doSecondaryAction=function(e) {
            t.show(t.alert().title("Secondary Action").content("Secondary actions can be used for one click actions").ariaLabel("Secondary click demo").ok("Neat!").targetEvent(e))
        }
    }
    function a(e,
    t,
    a) {
        var o,
        n;
        for(n=[],
        o=0;
        o<8;
        )n[o]=new google.maps.Marker( {
            title: "Marker: "+o
        }
        ),
        o++;
        e.GenerateMapMarkers=function() {
            var t,
            a,
            i,
            r,
            l;
            for(t=new Date,
            e.date=t.toLocaleString(),
            l=Math.floor(4*Math.random())+4,
            o=0;
            o<l;
            )a=43.66+Math.random()/100,
            i=-79.4103+Math.random()/100,
            r=new google.maps.LatLng(a,
            i),
            n[o].setPosition(r),
            n[o].setMap(e.map),
            o++
        }
        ,
        a(e.GenerateMapMarkers,
        2e3)
    }
    angular.module("app.ui").controller("LoaderCtrl",
    ["$scope",
    "$rootScope",
    e]).controller("ListCtrl",
    ["$scope",
    "$mdDialog",
    t]).controller("MapDemoCtrl",
    ["$scope",
    "$http",
    "$interval",
    a])
}

(),
function() {
    "use strict";
    function e() {
        function e(e,
        t) {
            e.addClass("ui-wave");
            var a,
            o,
            n,
            i;
            e.off("click").on("click",
            function(e) {
                var t=$(this);
                0===t.find(".ink").length&&t.prepend("<span class='ink'></span>"),
                a=t.find(".ink"),
                a.removeClass("wave-animate"),
                a.height()||a.width()||(o=Math.max(t.outerWidth(),
                t.outerHeight()),
                a.css( {
                    height: o, width: o
                }
                )),
                n=e.pageX-t.offset().left-a.width()/2,
                i=e.pageY-t.offset().top-a.height()/2,
                a.css( {
                    top: i+"px", left: n+"px"
                }
                ).addClass("wave-animate")
            }
            )
        }
        var t= {
            restrict: "A", compile: e
        }
        ;
        return t
    }
    function t() {
        function e(e,
        t) {
            var a,
            o;
            o=function() {
                var e,
                n,
                i,
                r,
                l,
                s;
                return s=new Date,
                e=s.getHours(),
                n=s.getMinutes(),
                i=s.getSeconds(),
                n=a(n),
                i=a(i),
                l=e+":"+n+":"+i,
                t.html(l),
                r=setTimeout(o,
                500)
            }
            ,
            a=function(e) {
                return e<10&&(e="0"+e),
                e
            }
            ,
            o()
        }
        var t= {
            restrict: "A", link: e
        }
        ;
        return t
    }
    function a() {
        return {
            restrict:"A",
            compile:function(e,
            t) {
                return e.on("click",
                function(e) {
                    e.stopPropagation()
                }
                )
            }
        }
    }
    function o() {
        return {
            restrict:"A",
            link:function(e,
            t,
            a) {
                return t.slimScroll( {
                    height: a.scrollHeight||"100%"
                }
                )
            }
        }
    }
    angular.module("app.ui").directive("uiWave",
    e).directive("uiTime",
    t).directive("uiNotCloseOnClick",
    a).directive("slimScroll",
    o)
}

();