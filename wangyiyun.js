/*
 *
 *
脚本功能：网易云音乐黑胶vip+
软件版本：9.0.30
下载地址：苹果商店下载
脚本作者：
更新时间：2024年11月9
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



modifiedHeaders['Cookie'] = 'MUSIC_U=004345DBEAD42FF6F656AFC4212AAB26423105C1955553B3EBF3C7288A68622298CC902727A789CB304CA37F5FA2093627A5C87FDF6C2075BACBB9DE7AE22ABD05804821B1811A41D3AF9585302FB9563603C6E5EB52DF6EE9A00367F45E6A281B2BBD7100A00D79D662ECC5752A1B60501A9E97853B70ACA22C83618CA2E5BFC5E1AB2BB0B8F09DF66E4E3DE11EE2E9FC118FE5E0522E5A6D869134500F88DD019D5C7A2CC84F4756EB52738DF392064DB4DF29F883D4FABE8A47EB929121EAC132D94D2225F44DF0ED799BB11CAC4FA3C643008C7FFA6E6C208F44DA115DBB6417C7A7F114285DF462C0EE0109C93077C3603FC91D15424D25971E6D478E7F67E3A6373A2E4EEEAC1B62DB4E27EB96214E4EC3EEF84B5273FF2E2D02BD220634;appver=9.1.42; deviceId=9471bf34a33036f50121ecba0591a4bc; os=iPhone OS; osver=16.2; machineid=iPhone13.4; ' ;

delete modifiedHeaders['MConfig-Info'];
$done({headers : modifiedHeaders});



