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
    import shiyongdingdan from '@/views/modules/shiyongdingdan/list'
    import shangpingoumai from '@/views/modules/shangpingoumai/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import yuexinxi from '@/views/modules/yuexinxi/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import qiuzhuoyuyue from '@/views/modules/qiuzhuoyuyue/list'
    import jiezhangxinxi from '@/views/modules/jiezhangxinxi/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import taiqiuzhuo from '@/views/modules/taiqiuzhuo/list'
    import chongzhixinxi from '@/views/modules/chongzhixinxi/list'


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
	path: '/shiyongdingdan',
        name: '使用订单',
        component: shiyongdingdan
      }
      ,{
	path: '/shangpingoumai',
        name: '商品购买',
        component: shangpingoumai
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/yuexinxi',
        name: '余额信息',
        component: yuexinxi
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/qiuzhuoyuyue',
        name: '球桌预约',
        component: qiuzhuoyuyue
      }
      ,{
	path: '/jiezhangxinxi',
        name: '结账信息',
        component: jiezhangxinxi
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/taiqiuzhuo',
        name: '台球桌',
        component: taiqiuzhuo
      }
      ,{
	path: '/chongzhixinxi',
        name: '充值信息',
        component: chongzhixinxi
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

export default router;
