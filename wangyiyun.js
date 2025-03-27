/*
*
*
软件版本：9.2.50
[rewrite_local]
# > 网易云音乐黑胶svip
# 播放器会员皮肤
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
# 搜索结果会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/search\/(?:complex\/page|complex\/rec\/song\/get|song\/list\/page) url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
# 播放器会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/song\/(?:chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/(?:v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
# 侧边栏会员等级
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/w?e?api\/(homepage\/|v6\/)?playlist\/(?!(?:delete|subscribe|unsubscribe)) url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js
# 会员认证
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/chuj6329/js/main/wangyiyun.js

[mitm]
hostname = interface*.music.163.com,
*
*
*/


var modifiedHeaders = $request.headers;



modifiedHeaders['Cookie'] = 'MUSIC_U=00EA4F9643EF0DFE389C84488F46F89052C4AEFED1C804F7E946DC219845B12925869783925EF9D0ED932AD13C482633815164DA2FE979B95C415F003F47301A9355349602E828652F9DDDFA256822FDB3FD07012686D88F0B47A05832E204958580EB6CE417B15118A4865B82E578C4A44C12E24163E0C4D35A894F07F0F00CFCF91F4B1338BA0F5235DE8AF68200F62D2C31549E222F1E860CA034CA26C286548936D76BD5832787D9E708F2A022D200CD0FDBDB8EB431F9D200CF563532A177BC6A4F1CF12ACF7736637D7D9FCF15838D11DD65E82ADAA1E0B111F65D5CC453DE320EC5B05100F219F6BA6FAB7E2A2374BC47FBE36FFD527814E6C069A016829FD345C8684E51E4ADCE2790260016F568BF06EB63183FEF62267934160CA017;appver=9.2.20; deviceId=9471bf34a33036f50121ecba0591a4bc; os=iPhone OS; osver=18.0.1; machineid=iPhone13.4; ' ;

delete modifiedHeaders['MConfig-Info'];
$done({headers : modifiedHeaders});