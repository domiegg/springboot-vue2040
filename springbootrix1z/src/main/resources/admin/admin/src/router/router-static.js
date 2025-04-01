import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import jianshenkecheng from '@/views/modules/jianshenkecheng/list'
    import jiaoshixinxi from '@/views/modules/jiaoshixinxi/list'
    import discussjianshenqicai from '@/views/modules/discussjianshenqicai/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import jianshenqicai from '@/views/modules/jianshenqicai/list'
    import huiyuankaxinxi from '@/views/modules/huiyuankaxinxi/list'
    import bankaxinxi from '@/views/modules/bankaxinxi/list'
    import qicaijieyong from '@/views/modules/qicaijieyong/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import xunlianjihua from '@/views/modules/xunlianjihua/list'
    import messages from '@/views/modules/messages/list'
    import kechengyuyue from '@/views/modules/kechengyuyue/list'
    import config from '@/views/modules/config/list'
    import discussjianshenkecheng from '@/views/modules/discussjianshenkecheng/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '新闻公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/jianshenkecheng',
        name: '健身课程',
        component: jianshenkecheng
      }
      ,{
	path: '/jiaoshixinxi',
        name: '教室信息',
        component: jiaoshixinxi
      }
      ,{
	path: '/discussjianshenqicai',
        name: '健身器材评论',
        component: discussjianshenqicai
      }
      ,{
	path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }
      ,{
	path: '/jianshenqicai',
        name: '健身器材',
        component: jianshenqicai
      }
      ,{
	path: '/huiyuankaxinxi',
        name: '会员卡信息',
        component: huiyuankaxinxi
      }
      ,{
	path: '/bankaxinxi',
        name: '办卡信息',
        component: bankaxinxi
      }
      ,{
	path: '/qicaijieyong',
        name: '器材借用',
        component: qicaijieyong
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/xunlianjihua',
        name: '训练计划',
        component: xunlianjihua
      }
      ,{
	path: '/messages',
        name: '在线留言',
        component: messages
      }
      ,{
	path: '/kechengyuyue',
        name: '课程预约',
        component: kechengyuyue
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussjianshenkecheng',
        name: '健身课程评论',
        component: discussjianshenkecheng
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
