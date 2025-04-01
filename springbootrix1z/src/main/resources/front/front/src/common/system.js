export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"教练","menuJump":"列表","tableName":"jiaolian"}],"menu":"教练管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除","查看评论"],"menu":"健身课程","menuJump":"列表","tableName":"jianshenkecheng"}],"menu":"健身课程管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"课程预约","menuJump":"列表","tableName":"kechengyuyue"}],"menu":"课程预约管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"健身器材","menuJump":"列表","tableName":"jianshenqicai"}],"menu":"健身器材管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","删除","审核"],"menu":"器材借用","menuJump":"列表","tableName":"qicaijieyong"}],"menu":"器材借用管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"会员卡信息","menuJump":"列表","tableName":"huiyuankaxinxi"}],"menu":"会员卡信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","删除","审核"],"menu":"办卡信息","menuJump":"列表","tableName":"bankaxinxi"}],"menu":"办卡信息管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","删除"],"menu":"训练计划","menuJump":"列表","tableName":"xunlianjihua"}],"menu":"训练计划管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["新增","查看","修改","删除"],"menu":"教室信息","menuJump":"列表","tableName":"jiaoshixinxi"}],"menu":"教室信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"在线留言","tableName":"messages"}],"menu":"在线留言"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"新闻公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","预约"],"menu":"健身课程列表","menuJump":"列表","tableName":"jianshenkecheng"}],"menu":"健身课程模块"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","借用"],"menu":"健身器材列表","menuJump":"列表","tableName":"jianshenqicai"}],"menu":"健身器材模块"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","办卡"],"menu":"会员卡信息列表","menuJump":"列表","tableName":"huiyuankaxinxi"}],"menu":"会员卡信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","支付"],"menu":"课程预约","menuJump":"列表","tableName":"kechengyuyue"}],"menu":"课程预约管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"器材借用","menuJump":"列表","tableName":"qicaijieyong"}],"menu":"器材借用管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","支付"],"menu":"办卡信息","menuJump":"列表","tableName":"bankaxinxi"}],"menu":"办卡信息管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"训练计划","menuJump":"列表","tableName":"xunlianjihua"}],"menu":"训练计划管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","预约"],"menu":"健身课程列表","menuJump":"列表","tableName":"jianshenkecheng"}],"menu":"健身课程模块"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","借用"],"menu":"健身器材列表","menuJump":"列表","tableName":"jianshenqicai"}],"menu":"健身器材模块"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","办卡"],"menu":"会员卡信息列表","menuJump":"列表","tableName":"huiyuankaxinxi"}],"menu":"会员卡信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","审核","训练计划"],"menu":"课程预约","menuJump":"列表","tableName":"kechengyuyue"}],"menu":"课程预约管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","删除","修改"],"menu":"训练计划","menuJump":"列表","tableName":"xunlianjihua"}],"menu":"训练计划管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","预约"],"menu":"健身课程列表","menuJump":"列表","tableName":"jianshenkecheng"}],"menu":"健身课程模块"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","借用"],"menu":"健身器材列表","menuJump":"列表","tableName":"jianshenqicai"}],"menu":"健身器材模块"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","办卡"],"menu":"会员卡信息列表","menuJump":"列表","tableName":"huiyuankaxinxi"}],"menu":"会员卡信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教练","tableName":"jiaolian"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
