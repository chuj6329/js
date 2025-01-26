/*
 *
 *
源码来源：weigiegie
脚本功能：网易云音乐黑胶vip+
软件版本：9.2.46
下载地址：苹果商店下载
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



modifiedHeaders['Cookie'] = 'MUSIC_U=007324524A3D5748031876BE42E353DA8CD91D71D9666392301FDACB3F42CE0521C08E2302C0F47425C5232A1DFAEBD6DB8D36212CADC3F20ECBA54C100D0D7979659A591F1BB564AAFD97F0FED1168B6BBFB697EF15E64C91A1E7E4A2A272BB99D6610080424193AA99E48443386EEC70DA7E416309B7B55164E0C3B4DED66DBCED1530D92037B5514F8F8D4F77F733DA1A7A92A6BE5DAF432675FD7B7BD819477DCD433F61031F89424043760ED745D238D5CC4A8FB9FB4F589859D2AB0598201BA778F58C8883B087C526EE360B97A79E72AD01B3229CC987632C7D7C6E63906561FACB1D41AEE8C7DA8CF13974DF546B5B8CFAB77ACA311303D174D4FACF5231AD7E71369D0162C33605EC53A6D51F28DC4371D3B821DEF9A58EE206AB2EA2;appver=9.2.20; deviceId=9471bf34a33036f50121ecba0591a4bc; os=iPhone OS; osver=18.0.1; machineid=iPhone13.4; ' ;

delete modifiedHeaders['MConfig-Info'];
$done({headers : modifiedHeaders});



