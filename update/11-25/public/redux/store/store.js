/**
 * Created by kellyZhang on 2016/11/15.
 */
var store = {
    //场馆列表数据
    data: {
        stadium: [
            // {
            //     "name": "",
            //     "city": "",
            //     "mainUnit": "",
            //     "buildDate": "",
            //     "investmentAmount": "",
            //     "level": "",
            //     "seats": "",
            //     "parkArea": "",
            //     "stadiumArea": "",
            //     "sports": "",
            //     "state": "",
            //     "address": "",
            //     "picture": [],
            //     "landline": "",
            //     "contants": "",
            //     "contantsPhone": "",
            //     "userid": "",
            //     "operatingUnit": 0,
            //     "operatingUnitName": "",
            //     "operatTimeNormalStart": "",
            //     "operatTimeNormalEnd": "",
            //     "operatTimeHdayStart": "",
            //     "operatTimeHdayEnd": "",
            //     "id": ""
            // }
        ],
        ruleList: []
    },
    //过滤条件
    search: {
        // type: "search"// 搜索类型
    },
    //点击审查时暂存的数据
    checkData: {
        index:'',//此条数据的索引
        state:''//此条数据的审核状态
    },
    //选中数据的id值
    lookData: {
        id:""
    },
    users: {}
}
export default store;