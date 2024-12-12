/*
 *
 *
脚本功能：网易云音乐黑胶vip+
软件版本：9.2.20
下载地址：苹果商店下载
脚本作者：
更新时间：2024年12月12
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 网易云音乐黑胶vip
# 播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 播放器会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 会员认证
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js

[mitm] 
hostname = *music.163.com,

*
*
*/







var modifiedHeaders = $request.headers;



modifiedHeaders['Cookie'] = 'MUSIC_U=004B80C1C010ACDB9B46042384BB4E6FCBD28B64C05820B2FAEBEC369A180EA0DCDDF8FA42A488010CA673EE21F5269355D1FA178BECCC0A40037FA1CD0F7318D5F5C6E89C59833FAADB8028F8EB8CEFC8268B7BF26E173DDCA31A87F5482B3DC1C3F81F9A1CF89A7254C4265882CBE7C56E46B26F5C446C3A3906B2F05A2CBD20D13B8F8999A8F7268CF1D2517374D67FB6A2CDEFDBBA668410DDF106E527C21311EBFC008EE6B4F8F545E43BC15C39568B9CABDB5C9A0FA1B4D3C5FC26C693CE1FDBC465E6A6634C5940979B805EE0E0ABE0F264C52CB80EE8854E4FADD6E2401EC966C4F8EC1C02B0C75FA6F48B0E8DDF131C16C7181453D9375D8FADE133110ACF13A3E5A3634DECD98E8229359B765679FEA374F2952763A4015F735EEE01;appver=9.1.42; deviceId=9471bf34a33036f50121ecba0591a4bc; os=iPhone OS; osver=16.2; machineid=iPhone13.4; ' ;

delete modifiedHeaders['MConfig-Info'];
$done({headers : modifiedHeaders});



