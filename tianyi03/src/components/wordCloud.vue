<template>
    <div id=wordCloud></div>
</template>
    
<script>
import echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";

let option = {
    //backgroundColor:'#434B56',
    tooltip: {
        show: true
    },
    series: [{
        type: "wordCloud",
        gridSize:6,
        shape:'diamond',
        sizeRange: [15, 60],
        //rotationRange: [-45, 90],
        width:"100%",
        height:"100%",
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
                name: " 李克强",
                value: 30,
            },
            {
                name: " 屏幕",
                value: 24
            },
            {
                name: " 不错",
                value: 21
            },
            {
                name: " 可以",
                value: 19
            },
            {
                name: " 发货",
                value: 18
            },
            {
                name: " 这个",
                value: 18
            },
            {
                name: " 什么",
                value: 17
            },
            {
                name: " 一个",
                value: 12
            },
            {
                name: " 不好",
                value: 12
            },
            {
                name: " 质量",
                value: 11
            },
            {
                name: " 快递",
                value: 11
            },
            {
                name: " 问题",
                value: 10
            },
            {
                name: " 物流",
                value: 9
            },
            {
                name: " 几天",
                value: 9
            },
            {
                name: " 一般",
                value: 9
            },
            {
                name: " 就是",
                value: 9
            },
            {
                name: " 使用",
                value: 8
            },
            {
                name: " 怎么",
                value: 8
            },
            {
                name: " 电池",
                value: 8
            },
            {
                name: " 不能",
                value: 8
            },
            {
                name: " 速度",
                value: 8
            },
            {
                name: " 客服",
                value: 8
            },
            {
                name: " 一星",
                value: 8
            },
            {
                name: " 拍照",
                value: 8
            },
            {
                name: " 摄像头",
                value: 7
            },
            {
                name: " 外观",
                value: 7
            },
            {
                name: " 包装",
                value: 7
            },
            {
                name: " 到货",
                value: 7
            },
            {
                name: " 有点",
                value: 7
            },
            {
                name: " 抢购",
                value: 6
            },
            {
                name: " 这样",
                value: 6
            },
            {
                name: " 性价比",
                value: 6
            },
            {
                name: " 一般般",
                value: 6
            },
            {
                name: " 出现",
                value: 6
            },
            {
                name: " 以前",
                value: 6
            },
            {
                name: " 知道",
                value: 6
            },
            {
                name: " 一次",
                value: 6
            },
            {
                name: " 真的",
                value: 6
            },
            {
                name: " 收到",
                value: 6
            },
            {
                name: " 其他",
                value: 6
            },
            {
                name: " 电量",
                value: 6
            },
            {
                name: " 还是",
                value: 6
            },
            {
                name: " 不行",
                value: 6
            },
            {
                name: " 红米",
                value: 6
            },
            {
                name: " 那么",
                value: 6
            },
            {
                name: " 挺快",
                value: 5
            },
            {
                name: " 现在",
                value: 5
            },
            {
                name: " 服务",
                value: 5
            },
            {
                name: " 充电",
                value: 5
            },
            {
                name: " 流畅",
                value: 5
            },
            {
                name: " 系统",
                value: 5
            },
            {
                name: " 非常",
                value: 5
            },
            {
                name: " 满意",
                value: 5
            },
            {
                name: " 购物",
                value: 5
            },
            {
                name: " 玩游戏",
                value: 5
            },
            {
                name: " 信号",
                value: 5
            },
            {
                name: " 不了",
                value: 5
            },
            {
                name: " 别人",
                value: 5
            },
            {
                name: " 死机",
                value: 5
            },
            {
                name: " 耗电",
                value: 5
            },
            {
                name: " 一直",
                value: 5
            },
            {
                name: " 像素",
                value: 5
            },
            {
                name: " 第一次",
                value: 5
            },
            {
                name: " 广告",
                value: 5
            },
            {
                name: " 买个",
                value: 5
            },
            {
                name: " 黑屏",
                value: 5
            },
            {
                name: " 为什么",
                value: 4
            },
            {
                name: " 猴王",
                value: 4
            },
            {
                name: " 视频",
                value: 4
            },
            {
                name: " 体验",
                value: 4
            },
            {
                name: " 好评",
                value: 4
            },
            {
                name: " 闪屏",
                value: 4
            },
            {
                name: " 价格",
                value: 4
            },
            {
                name: " 饥饿",
                value: 4
            },
            {
                name: " 营销",
                value: 4
            },
            {
                name: " 发热",
                value: 4
            },
            {
                name: " 还行",
                value: 4
            },
            {
                name: " 一天",
                value: 4
            },
            {
                name: " 需要",
                value: 4
            },
            {
                name: " 特别",
                value: 4
            },
            {
                name: " 而且",
                value: 4
            },
            {
                name: " 运行",
                value: 4
            },
            {
                name: " 等到",
                value: 4
            },
            {
                name: " 手机卡",
                value: 4
            },
            {
                name: " 呵呵",
                value: 4
            },
            {
                name: " 时候",
                value: 4
            },
            {
                name: " 东西",
                value: 4
            },
            {
                name: " 感觉",
                value: 4
            },
            {
                name: " 卡机",
                value: 4
            },
            {
                name: " 没什么",
                value: 4
            },
            {
                name: " 大家",
                value: 4
            },
            {
                name: " 没货",
                value: 4
            },
            {
                name: " 售后",
                value: 4
            },
            {
                name: " 比较",
                value: 4
            },
            {
                name: " 退货",
                value: 4
            },
            {
                name: " 加价",
                value: 3
            },
            {
                name: " 耳机",
                value: 3
            },
            {
                name: " 呜呜",
                value: 3
            },
            {
                name: " 一分钱",
                value: 3
            },
            {
                name: " 一分货",
                value: 3
            },
            {
                name: " 默认",
                value: 3
            },
            {
                name: " 说好",
                value: 3
            },
            {
                name: " 你们",
                value: 3
            },
            {
                name: " 一点",
                value: 3
            },
            {
                name: " 超级",
                value: 3
            },
            {
                name: " 耐用",
                value: 3
            },
            {
                name: " 很快",
                value: 3
            },
            {
                name: " 断流",
                value: 3
            },
            {
                name: " 套装",
                value: 3
            },
            {
                name: " 一样",
                value: 3
            },
            {
                name: " 发票",
                value: 3
            },
            {
                name: " 买回来",
                value: 3
            },
            {
                name: " 软件",
                value: 3
            },
            {
                name: " 还好",
                value: 3
            },
            {
                name: " 以后",
                value: 3
            },
            {
                name: " 下单",
                value: 3
            },
            {
                name: " 打游戏",
                value: 3
            },
            {
                name: " 我们",
                value: 3
            },
            {
                name: " 但是",
                value: 3
            },
            {
                name: " 一部",
                value: 3
            },
            {
                name: " 王者",
                value: 3
            },
            {
                name: " 不怎么样",
                value: 3
            },
            {
                name: " 看看",
                value: 3
            },
            {
                name: " 自己",
                value: 3
            },
            {
                name: " 里面",
                value: 3
            },
            {
                name: " 边框",
                value: 3
            },
            {
                name: " 看着",
                value: 3
            },
            {
                name: " 要死",
                value: 3
            },
            {
                name: " 原因",
                value: 3
            },
            {
                name: " 新机",
                value: 3
            },
            {
                name: " 不如",
                value: 3
            },
            {
                name: " 老是",
                value: 3
            },
            {
                name: " 购买",
                value: 3
            },
            {
                name: " 更好",
                value: 3
            },
            {
                name: " 相机",
                value: 3
            },
            {
                name: " 竟然",
                value: 3
            },
            {
                name: " 一分",
                value: 3
            },
            {
                name: " 天才",
                value: 3
            },
            {
                name: " 荣耀",
                value: 3
            },
            {
                name: " 正常",
                value: 3
            },
            {
                name: " 回复",
                value: 3
            },
            {
                name: " 联系",
                value: 3
            },
            {
                name: " 总体",
                value: 3
            },
            {
                name: " 反应",
                value: 3
            },
            {
                name: " 老爸",
                value: 3
            },
            {
                name: " 星期",
                value: 3
            },
            {
                name: " 半个",
                value: 3
            },
            {
                name: " 打电话",
                value: 3
            },
            {
                name: " 不是",
                value: 3
            },
            {
                name: " 保护膜",
                value: 3
            },
            {
                name: " 充电器",
                value: 3
            },
            {
                name: " 买不到",
                value: 2
            },
            {
                name: " 老子",
                value: 2
            },
            {
                name: " 差评",
                value: 2
            },
            {
                name: " 这么",
                value: 2
            },
            {
                name: " 真香",
                value: 2
            },
            {
                name: " 真是",
                value: 2
            },
            {
                name: " 三天",
                value: 2
            },
            {
                name: " 填写内容",
                value: 2
            },
            {
                name: " 帮别人",
                value: 2
            },
            {
                name: " 终于",
                value: 2
            },
            {
                name: " 有时候",
                value: 2
            },
            {
                name: " 极致",
                value: 2
            },
            {
                name: " 还有",
                value: 2
            },
            {
                name: " 希望",
                value: 2
            },
            {
                name: " 必须",
                value: 2
            },
            {
                name: " 好像",
                value: 2
            },
            {
                name: " 严重",
                value: 2
            },
            {
                name: " 反应速度",
                value: 2
            },
            {
                name: " 后面",
                value: 2
            },
            {
                name: " 音乐",
                value: 2
            },
            {
                name: " 商品",
                value: 2
            },
            {
                name: " 哈哈",
                value: 2
            },
            {
                name: " 垃圾",
                value: 2
            },
            {
                name: " 好用",
                value: 2
            },
            {
                name: " 突出",
                value: 2
            },
            {
                name: " 价钱",
                value: 2
            },
            {
                name: " 耍猴",
                value: 2
            },
            {
                name: " 磕碰",
                value: 2
            },
            {
                name: " 几次",
                value: 2
            },
            {
                name: " 失灵",
                value: 2
            },
            {
                name: " 支持",
                value: 2
            },
            {
                name: " 快充",
                value: 2
            },
            {
                name: " 意思",
                value: 2
            },
            {
                name: " 失败",
                value: 2
            },
            {
                name: " 整整",
                value: 2
            },
            {
                name: " 没收",
                value: 2
            },
            {
                name: " 已经",
                value: 2
            },
            {
                name: " 无法",
                value: 2
            },
            {
                name: " 方面",
                value: 2
            },
            {
                name: " 为啥",
                value: 2
            },
            {
                name: " 喜欢",
                value: 2
            },
            {
                name: " 套餐",
                value: 2
            },
            {
                name: " 完全",
                value: 2
            },
            {
                name: " 专业",
                value: 2
            },
            {
                name: " 选择",
                value: 2
            },
            {
                name: " 48mp",
                value: 2
            },
            {
                name: " 无线",
                value: 2
            },
            {
                name: " 一个月",
                value: 2
            },
            {
                name: " 不过",
                value: 2
            },
            {
                name: " ldquo",
                value: "-"
            },
            {
                name: " rdquo",
                value: "-"
            },
            {
                name: " 这种",
                value: 2
            },
            {
                name: " 送货",
                value: 2
            },
            {
                name: " 卡死",
                value: 2
            },
            {
                name: " 来看",
                value: 2
            },
            {
                name: " 糊弄人",
                value: 2
            },
            {
                name: " note7",
                value: 2
            },
            {
                name: " 时间",
                value: 2
            },
            {
                name: " 短信",
                value: 2
            },
            {
                name: " 滑落",
                value: 2
            },
            {
                name: " 那样",
                value: 2
            },
            {
                name: " vivo",
                value: 2
            },
            {
                name: " 防水",
                value: 2
            },
            {
                name: " 等待",
                value: 2
            },
            {
                name: " 直播",
                value: 2
            },
            {
                name: " 难受",
                value: 2
            },
            {
                name: " 四个",
                value: 2
            },
            {
                name: " 到手",
                value: 2
            },
            {
                name: " 发现",
                value: 2
            },
            {
                name: " 掉电",
                value: 2
            },
            {
                name: " 华为",
                value: 2
            },
            {
                name: " 再也",
                value: 2
            },
            {
                name: " 不用",
                value: 2
            },
            {
                name: " 给力",
                value: 2
            },
            {
                name: " 两天",
                value: 2
            },
            {
                name: " 立马",
                value: 2
            },
            {
                name: " 两周",
                value: 2
            },
            {
                name: " 处理器",
                value: 2
            },
            {
                name: " 关机",
                value: 2
            },
            {
                name: " 要么",
                value: 2
            },
            {
                name: " 满血",
                value: 2
            },
            {
                name: " 不会",
                value: 2
            },
            {
                name: " 定金",
                value: 2
            },
            {
                name: " 付款",
                value: 2
            },
            {
                name: " 心情",
                value: 2
            },
            {
                name: " 另外",
                value: 2
            },
            {
                name: " 游戏",
                value: 2
            },
            {
                name: " 公司",
                value: 2
            },
            {
                name: " 按键",
                value: 2
            },
            {
                name: " 卡顿",
                value: 2
            },
            {
                name: " 晚上",
                value: 2
            },
            {
                name: " 百分之",
                value: 2
            },
            {
                name: " 手机信号",
                value: 2
            },
            {
                name: " 一下",
                value: 2
            },
            {
                name: " 开学",
                value: 2
            },
            {
                name: " 上班",
                value: 2
            },
            {
                name: " 上天",
                value: 2
            },
            {
                name: " 配送",
                value: 2
            },
            {
                name: " 最后",
                value: 2
            },
            {
                name: " 太慢",
                value: 2
            },
            {
                name: " 手机套",
                value: 2
            },
            {
                name: " 笨重",
                value: 2
            },
            {
                name: " 半年",
                value: 2
            },
            {
                name: " 屏险",
                value: 2
            },
            {
                name: " 先发",
                value: 2
            },
            {
                name: " 不灵敏",
                value: 2
            },
            {
                name: " 硬度",
                value: 2
            },
            {
                name: " 这次",
                value: 2
            },
            {
                name: " 性能",
                value: 2
            },
            {
                name: " 介绍",
                value: 2
            },
            {
                name: " 卡针",
                value: 2
            },
            {
                name: " 不理",
                value: 2
            },
            {
                name: " 这是",
                value: 2
            },
            {
                name: " 买来",
                value: 2
            },
            {
                name: " 两次",
                value: 2
            },
            {
                name: " 网络",
                value: 2
            },
            {
                name: " 就裂",
                value: 2
            },
            {
                name: " 没用",
                value: 2
            },
            {
                name: " 多次",
                value: 2
            },
            {
                name: " 钢化",
                value: 2
            },
            {
                name: " 一星怪",
                value: 1
            },
            {
                name: " 新款",
                value: 1
            },
            {
                name: " 你行",
                value: 1
            },
            {
                name: " 没送",
                value: 1
            },
            
            {
                name: " 太乱",
                value: 1
            },
            {
                name: " 日",
                value: 1
            }
            
        ],
    }]

};
export default {
     data(){
        return {
            ColumnData:null
        }
    },
    methods:{
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById("wordCloud"));
        this.myChart.setOption(option);
    }
}

</script>

<style>
#wordCloud{
    width: 100%;
    height: 1065px
}
</style>