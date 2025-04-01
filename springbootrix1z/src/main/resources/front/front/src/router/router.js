import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import jiaolianList from '../pages/jiaolian/list'
import jiaolianDetail from '../pages/jiaolian/detail'
import jiaolianAdd from '../pages/jiaolian/add'
import jianshenkechengList from '../pages/jianshenkecheng/list'
import jianshenkechengDetail from '../pages/jianshenkecheng/detail'
import jianshenkechengAdd from '../pages/jianshenkecheng/add'
import kechengyuyueList from '../pages/kechengyuyue/list'
import kechengyuyueDetail from '../pages/kechengyuyue/detail'
import kechengyuyueAdd from '../pages/kechengyuyue/add'
import jianshenqicaiList from '../pages/jianshenqicai/list'
import jianshenqicaiDetail from '../pages/jianshenqicai/detail'
import jianshenqicaiAdd from '../pages/jianshenqicai/add'
import qicaijieyongList from '../pages/qicaijieyong/list'
import qicaijieyongDetail from '../pages/qicaijieyong/detail'
import qicaijieyongAdd from '../pages/qicaijieyong/add'
import huiyuankaxinxiList from '../pages/huiyuankaxinxi/list'
import huiyuankaxinxiDetail from '../pages/huiyuankaxinxi/detail'
import huiyuankaxinxiAdd from '../pages/huiyuankaxinxi/add'
import bankaxinxiList from '../pages/bankaxinxi/list'
import bankaxinxiDetail from '../pages/bankaxinxi/detail'
import bankaxinxiAdd from '../pages/bankaxinxi/add'
import xunlianjihuaList from '../pages/xunlianjihua/list'
import xunlianjihuaDetail from '../pages/xunlianjihua/detail'
import xunlianjihuaAdd from '../pages/xunlianjihua/add'
import jiaoshixinxiList from '../pages/jiaoshixinxi/list'
import jiaoshixinxiDetail from '../pages/jiaoshixinxi/detail'
import jiaoshixinxiAdd from '../pages/jiaoshixinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'jiaolian',
					component: jiaolianList
				},
				{
					path: 'jiaolianDetail',
					component: jiaolianDetail
				},
				{
					path: 'jiaolianAdd',
					component: jiaolianAdd
				},
				{
					path: 'jianshenkecheng',
					component: jianshenkechengList
				},
				{
					path: 'jianshenkechengDetail',
					component: jianshenkechengDetail
				},
				{
					path: 'jianshenkechengAdd',
					component: jianshenkechengAdd
				},
				{
					path: 'kechengyuyue',
					component: kechengyuyueList
				},
				{
					path: 'kechengyuyueDetail',
					component: kechengyuyueDetail
				},
				{
					path: 'kechengyuyueAdd',
					component: kechengyuyueAdd
				},
				{
					path: 'jianshenqicai',
					component: jianshenqicaiList
				},
				{
					path: 'jianshenqicaiDetail',
					component: jianshenqicaiDetail
				},
				{
					path: 'jianshenqicaiAdd',
					component: jianshenqicaiAdd
				},
				{
					path: 'qicaijieyong',
					component: qicaijieyongList
				},
				{
					path: 'qicaijieyongDetail',
					component: qicaijieyongDetail
				},
				{
					path: 'qicaijieyongAdd',
					component: qicaijieyongAdd
				},
				{
					path: 'huiyuankaxinxi',
					component: huiyuankaxinxiList
				},
				{
					path: 'huiyuankaxinxiDetail',
					component: huiyuankaxinxiDetail
				},
				{
					path: 'huiyuankaxinxiAdd',
					component: huiyuankaxinxiAdd
				},
				{
					path: 'bankaxinxi',
					component: bankaxinxiList
				},
				{
					path: 'bankaxinxiDetail',
					component: bankaxinxiDetail
				},
				{
					path: 'bankaxinxiAdd',
					component: bankaxinxiAdd
				},
				{
					path: 'xunlianjihua',
					component: xunlianjihuaList
				},
				{
					path: 'xunlianjihuaDetail',
					component: xunlianjihuaDetail
				},
				{
					path: 'xunlianjihuaAdd',
					component: xunlianjihuaAdd
				},
				{
					path: 'jiaoshixinxi',
					component: jiaoshixinxiList
				},
				{
					path: 'jiaoshixinxiDetail',
					component: jiaoshixinxiDetail
				},
				{
					path: 'jiaoshixinxiAdd',
					component: jiaoshixinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
