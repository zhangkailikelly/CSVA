/**
 * Created by jey on 2016/5/17.
 */


window.SecondMenuAdmin = {
//    cgdf:[
//      {
//        "name":"待评分场馆",
//        "target":"/ruleAdd"
//      },{
//        "name":"已评分场馆",
//        "target":"/ruleMain"
//      }
//    ],
  pfsz:[
    {
      "name":"设置评分规则",
      "target":"/ruleAdd"
    },{
      "name":"评分规则列表",
      "target":"/ruleMain"
    }
  ],
  cgglM:[
    {
      "name":"场馆列表",
      "target":"/stadiumMain"
    },
    {
      "name":"场馆信息",
      "target":"/stadiumAuditDetail"
    },
    {
      "name":"运营数据",
      "target":"/stadiumFunctionBlock"
    }
  ]
}

window.SecondMenu = {
  rcsj:[
    {
      "name":"查看日常数据",
      "target":"/dailyIndex"
    },{
      "name":"添加活动用户",
      "target":"/dailyAddUser"
    }
  ],
  hzsj:[
    {
      "name":"开放信息",
      "target":"",
      "children":[
        {"name":"开放情况", "target":"/totalTableInfo"},
        {"name":"开放面积", "target":"/totalArea"},
        {"name":"开放天数", "target":"/totalDays"},
        {"name":"开放时间", "target":"/totalHours"},
        {"name":"体育赛事", "target":"/totalActive/1"},
        {"name":"群体活动", "target":"/totalActive/2"},
        {"name":"其他文体活动", "target":"/totalActive/3"},
        {"name":"体育培训", "target":"/totalService/1"},
        {"name":"运动健身指导", "target":"/totalService/2"},
        {"name":"专业训练", "target":"/totalService/3"}
      ]
    },{
      "name":"综合效益",
      "target":"",
      "children":[
        {"name":"效益列表", "target":"/benefitTable"},
        {"name":"接待总量", "target":"/receiveNums"},
        {"name":"接待人次增长", "target":"/receiveNumsByYear"},
        {"name":"收支比例", "target":"/paymentScale"},
        {"name":"收入增长", "target":"/paymentGrow"},
        {"name":"公益项目", "target":"/commonweal"},
        {"name":"满意度", "target":"/fineScale"}
      ]
    },{
      "name":"特色加分",
      "target":"/addScore"
    }
  ],
  cggl:[
    {
      "name":"场馆基础信息",
      "target":"/stadiumInfo"
    },{
      "name":"优惠信息公告",
      "target":"/cheapInfoMain"
    }
  ],
  "hdcz":[
    {
      "name":"体育赛事",
      "target":"",
      "children":[
        {"name":"体育赛事列表", "target":"/gamesMain"},
        {"name":"添加体赛事", "target":"/gameAdd"}
      ]
    },{
      "name":"体育活动",
      "target":"",
      "children":[
        {"name":"体育活动列表", "target":"/gamesMain/2"},
        {"name":"添加活动", "target":"/activeAdd/2"}
      ]
    },{
      "name":"其他文体活动",
      "target":"",
      "children":[
        {"name":"其他文体活动列表", "target":"/gamesMain/3"},
        {"name":"添加活动", "target":"/activeAdd/3"}
      ]
    }
  ],
  "tyfw":[
    {
      "name":"体育培训",
      "target":"",
      "children":[
        {"name":"体育培训列表", "target":"serviceMain/1"},
        {"name":"添加体育培训", "target":"/serviceAdd/1"}
      ]
    },{
      "name":"运动健身指导",
      "target":"",
      "children":[
        {"name":"健身指导列表", "target":"serviceMain/2"},
        {"name":"添加运动健身指导", "target":"serviceAdd/2"}
      ]
    },{
      "name":"专业训练",
      "target":"",
      "children":[
        {"name":"专业训练列表", "target":"serviceMain/3"},
        {"name":"添加专业训练", "target":"serviceAdd/3"}
      ]
    }
  ]
}
