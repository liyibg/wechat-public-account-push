export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx8d776538ec7e66a0",

    // 公众号APP_SECRET
    APP_SECRET: "a3a033a34213a1bad20a5319f2d76a61",

    // 模板消息id
    TEMPLATE_ID: "034hF61Y9RnO2iX3-ZeryUdc8eSGagBH1za1V2jyxUk",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "nbGGuvBxvJxxczZlve6txc4D3tg8QGR9Wb5V5KH9OOA",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    // [{
    //   name: "张三",
    //   id: "oco0y6QemeM87f_Hxup-jxmmZ1Do"
    // },
    // {
    //   name: "李四",
    //   id: "wxafasdasdd-zxfvsdfd"
    // }]
    USERS: [
      {name: '001', id: "oco0y6QemeM87f_Hxup-jxmmZ1Do"}, 
      {name: 'ma', id: "oco0y6dMpV77gWyuh2OKiSecXswQ"}, 
      {name: '003', id: "oco0y6TA9ZmcWcuAAKJ7TSJ1EXIQ"}, 
      {name: '004', id: "4hxOO6VskYv0Kuf-ywI你懂的,填错狗头打烂MpuXhk"}, 
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "HuaiNanHuaCao"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "山西",
    // 所在城市
    CITY: "太原",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "节日", "name": "中秋节", "year": "1949", "date": "09-10"},
      {"type": "节日", "name": "国庆节", "year": "2021", "date": "10-01"},
      {"type": "节日", "name": "立冬", "year": "2021", "date": "11-07"},
      {"type": "节日", "name": "元宵节", "year": "2021", "date": "02-15"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 3,

    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
