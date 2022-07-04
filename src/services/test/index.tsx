import request from '@/core/index'

interface order{
    timestamp: string
    appId: string
    sign: string
    version: string
    method: string
    startTime: number
    endTime: number
    timeType: number
}

class Test {
    static url = {
        getList: '1103512/24196747', //获取订单信息
    }

    static getList = (params:order) => {
        // console.log(request.post)
        return request.post(this.url.getList, params)
    }
}

export default Test