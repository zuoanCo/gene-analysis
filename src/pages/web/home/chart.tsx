import React from 'react';
import EChartsReact from 'echarts-for-react';
//折线图
import 'echarts/lib/chart/bar';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export const Chart:React.FC = () => {

    const getOption = () => {
        return {
            title:{
                text:'',
                x:'center',
                show: false
            },
            tooltip:{
                trigger:'axis',
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'OFO订单量',
                    type:'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data:[1000,2000,1500,3000,2000,1200,800]
                }
            ]
        }
    }

    return <EChartsReact option={getOption()} style={{ width: '70%',height: '300px' }} />
}