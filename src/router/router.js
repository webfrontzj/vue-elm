import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')),'msite')
const search = r => require.ensure([], () => r(require('../page/search/search')),'search')
const food = r => require.ensure([], () => r(require('../page/food/food')),'food')
const login = r => require.ensure([], () => r(require('../page/login/login')),'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')),'profile')
const info = r => require.ensure([], () => r(require('../page/profile/info')),'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/setusername')),'setusername')
const address = r => require.ensure([], () => r(require('../page/profile/address')),'address')
const add = r => require.ensure([], () => r(require('../page/profile/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/addDetail')), 'addDetail')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const balanceDetail = r => require.ensure([], () => r(require('../page/balance/detail')), 'balanceDetail')
const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const coupon = r => require.ensure([], () => r(require('../page/benefit/coupon')), 'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/hbDescription')), 'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/exchange')), 'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/commend')), 'commend')
const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')
const pointsDetail = r => require.ensure([], () => r(require('../page/points/detail')), 'pointsDetail')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/orderDetail')), 'orderDetail')
const vipcard = r => require.ensure([], () => r(require('../page/vipcard/vipcard')), 'vipcard')
const invoiceRecord = r => require.ensure([], () => r(require('../page/vipcard/invoiceRecord')), 'invoiceRecord')
const useCart = r => require.ensure([], () => r(require('../page/vipcard/useCart')), 'useCart')
const vipDescription = r => require.ensure([], () => r(require('../page/vipcard/vipDescription')), 'vipDescription')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service/questionDetail')), 'questionDetail')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children:[
        // 默认跳转home页
        {
            path:'',
            redirect:'/home'
        },
        // home页城市列表
        {
            path:'/home',
            component:home
        },
        // 当前选择的城市页
        {
            path:'/city/:cityid',
            component:city
        },
        // 所有商铺列表页
        {
            path:'/msite',
            component:msite,
            meta:{
                keepAlive:true
            }
        },
        //搜索页
        {
            path:'/search/:geohash',
            component:search
        },
        //特色商铺列表页
        {
            path:'/food',
            component:food
        },
        // 登录注册页
        {
            path:'/login',
            component:login
        },
        //个人信息页
        {
            path:'/profile',
            component:profile,
            children:[
                // 个人信息详情页
                {
                    path:'info',
                    component:info,
                    children:[
                        {
                            path:'setusername',
                            component:setusername
                        },{
                            path:'address',
                            component:address,
                            children:[
                                {
                                    path:'add',
                                    component:add,
                                    children:[
                                        {
                                            path:'addDetail',
                                            component:addDetail
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        //修改密码页
        {
            path: '/forget',
            component: forget
        },
        //余额
        {
            path: 'balance',
            component: balance,
            children: [{
                path: 'detail', //余额说明
                component: balanceDetail,
            }, ]
        },
        //我的优惠页
        {
            path: 'benefit',
            component: benefit,
            children: [
                {
                    path: 'coupon', //代金券说明
                    component: coupon,
                }, 
                {
                    path: 'hbDescription', //红包说明
                    component: hbDescription,
                }, 
                {
                    path: 'hbHistory', //历史红包
                    component: hbHistory,
                }, 
                {
                    path: 'exchange', //兑换红包
                    component: exchange,
                }, 
                {
                    path: 'commend', //推荐有奖
                    component: commend,
                }
            ]
        },
        //我的积分页
        {
            path: 'points',
            component: points,
            children: [{
                path: 'detail', //积分说明
                component: pointsDetail,
            }, ]
        },
        //订单列表页
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }, ]
        },
        //vip卡页
        {
            path: '/vipcard',
            component: vipcard,
            children: [{
                path: 'invoiceRecord', //开发票
                component: invoiceRecord,
            }, {
                path: 'useCart', //购买会员卡
                component: useCart,
            }, {
                path: 'vipDescription', //会员说明
                component: vipDescription,
            },]
        },
        //服务中心
        {
            path: '/service',
            component: service,
             children: [{
                path: 'questionDetail', //订单详情页
                component: questionDetail,
            }, ]
        },
        //下载页
        {
            path: '/download',
            component: download
        },


    ]
}]