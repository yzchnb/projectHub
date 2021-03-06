// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var { OPENID, APPID, UNIONID } = cloud.getWXContext();
  const db = cloud.database();
  const _ = db.command;
  console.log(event);
  if(event.onlyUpdateAvatarUrl){
    return await db.collection('UserInfos').where({
      // gt 方法用于指定一个 "大于" 条件，此处 _.gt(30) 是一个 "大于 30" 的条件
      openid: _.eq(OPENID)
    }).update({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName
      }
    });
  }else{
    return await db.collection('UserInfos').where({
      // gt 方法用于指定一个 "大于" 条件，此处 _.gt(30) 是一个 "大于 30" 的条件
      openid: _.eq(OPENID)
    }).update({
      data: {
        name: event.name,
        sex: event.sex,
        grade: event.grade,
        major: event.major,
        telNumber: event.telNumber,
        goodAt: event.goodAt,
        studentId: event.studentId
      }
    });
  }
}