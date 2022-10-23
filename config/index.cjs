/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0dddceb3f3f364f2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '47d6fbdad54402198303dcbc3b526125',

  PROVINCE: '江西',
  CITY: '安福',

  USERS: [
    {
      // 想要发送的人的名字
      name: '乖宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4kc26Cw_-pDxX_X8va7q94z-42w','o4kc26FyG7H-XJ3hOB3U3xX0q1gQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	p8E2DRRLnZwXHPaK_fkf1BkYyFJCvaup25BP9JR9dOU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '乖宝', year: '1999', date: '06-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '大宝', year: '1996', date: '09-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '02-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-02-14' },
        
      ],
    },
  ],

 
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	bWUbv-4Ko1x6bszsLm7tCtTkFMhIAcYyXzKihmiCpRE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4kc26FMtF7JgqH1UEUkXSi1FzeA',
    }
  ],

}

module.exports = USER_CONFIG

