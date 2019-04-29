import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

// 获取用户信息
export const getUser = ()=>fetch('/v1/user',{user_id:getStore('user_id')})

// 个人中心里编辑地址
export const getAddressList=(user_id)=>fetch('/v1/users/'+user_id+'/addresses')

//获取首页默认地址
export const cityGuess=()=>fetch('/v1/cities',{type:'guess'})

//获取首页热门城市
export const hotcity=()=>fetch('/v1/cities',{type:'hot'})

//获取首页所有城市
export const groupcity=()=>fetch('/v1/cities',{type:'group'})

//获取当前所在城市
export const currentcity=number=>fetch('/v1/cities/'+number)

//获取搜索地址
export const searchplace=(cityid,value)=>fetch('/v1/pois',{
    type:'search',
    city_id:cityid,
    keyword:value
})

//获取msite页面地址信息
export const msiteAddress = geohash => fetch('/v2/pois/'+geohash)


//获取msite页面食品分类列表
export const msiteFoodTypes = geohash => fetch('/v2/index_entry',{
    geohash,
    group_type:'1',
    'flags[]':'F'
})

// 获取msite商铺列表
export const shopList = (latitude,longitude,offset,restaurant_category_id='',restaurant_category_ids='',order_by='',delivery_mode='',support_ids=[]) => {
    let supportStr='';
    support_ids.forEach(item=>{
        if(item.status){
            supportStr+='&support_ids[]='+item.id;
        }
    })
    let data={
        latitude,
        longitude,
        offset,
        limit:'20',
        'extras[]':'activities',
        keyword:'',
        restaurant_category_id,
        'restaurant_category_ids[]':restaurant_category_ids,
        order_by,
        'delivery_mode[]':delivery_mode+supportStr
    };
    return fetch('/shopping/restaurants',data);
}

/**
 * 获取search页面搜索结果
 */

export const searchRestaurant = (geohash, keyword) => fetch('/v4/restaurants', {
	'extras[]': 'restaurant_activity',
	geohash,
	keyword,
	type: 'search'
})

/**
 * 获取food页面的 category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category', {
	latitude,
	longitude
});


/**
 * 获取food页面的配送方式
 */

export const foodDelivery = (latitude, longitude) => fetch('/shopping/v1/restaurants/delivery_modes', {
	latitude,
	longitude,
	kw: ''
});


/**
 * 获取food页面的商家属性活动列表
 */

export const foodActivity = (latitude, longitude) => fetch('/shopping/v1/restaurants/activity_attributes', {
	latitude,
	longitude,
	kw: ''
});

/**
 * 获取短信验证码
 */

export const mobileCode = phone => fetch('/v4/mobile/verify_code/send', {
	mobile: phone,
	scene: 'login',
	type: 'sms'
}, 'POST');

/**
 * 检测帐号是否存在
 */

export const checkExsis = (checkNumber, type) => fetch('/v1/users/exists', {
	[type]: checkNumber,
	type
});

/**
 * 手机号登录
 */

export var sendLogin = (code, mobile, validate_token) => fetch('/v1/login/app_mobile', {
	code,
	mobile,
	validate_token
}, 'POST');

/**
 * 获取图片验证码
 */

export const getcaptchas = () => fetch('/v1/captchas', {},'POST');

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST');

/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout');

/**
* 删除地址
*/

export const deleteAddress = (userid, addressid) => fetch( '/v1/users/' + userid + '/addresses/' + addressid, {}, 'DELETE')

/**
 * 添加地址
 */

export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => fetch('/v1/users/' + userId + '/addresses', {
	address,
	address_detail,
	geohash,
	name,
	phone,
	phone_bk,
	poi_type,
	sex,
	tag,
	tag_type,
}, 'POST');

/**
 * 搜索地址
 */

export const searchNearby = keyword => fetch('/v1/pois', {
	type: 'nearby',
	keyword
});

/**
 * 发送帐号
 */

export const sendMobile = (sendData, captcha_code, type, password) => fetch('/v1/mobile/verify_code/send', {
	action: "send",
	captcha_code,
	[type]: sendData,
	type: "sms",
	way: type,
	password,
}, 'POST');

/**
 * 改密码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');

/**
 * 获取红包
*/

export const getHongbaoNum = id => fetch('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0');

/**
 * 获取过期红包
*/


export const getExpired = id => fetch('/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0');

/**
 * 兑换红包
*/

export const exChangeHongbao = (id, exchange_code, captcha_code) => fetch('/v1/users/' + id + '/hongbao/exchange',{
	exchange_code,
	captcha_code,
}, 'POST');

/**
 * 获取订单列表
 */

export const getOrderList = (user_id, offset) => fetch('/bos/v2/users/' + user_id + '/orders', {
	limit: 10,
	offset,
});

/**
 * 获取订单详情
 */

export const getOrderDetail = (user_id, orderid) => fetch('/bos/v1/users/' + user_id + '/orders/' + orderid + '/snapshot');

/**
*兑换会员卡
*/

export const vipCart = (id, number, password) => fetch('/member/v1/users/' + id + '/delivery_card/physical_card/bind',{
	number,
	password
}, 'POST')

/**
 * 获取服务中心信息
 */

export const getService = () => fetch('/v3/profile/explain');