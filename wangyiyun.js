/*
*
*
软件版本：9.2.50
[rewrite_local]
# > 网易云音乐黑胶svip
# 播放器会员皮肤
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 搜索结果会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/search\/(?:complex\/page|complex\/rec\/song\/get|song\/list\/page) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 播放器会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/song\/(?:chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/(?:v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 侧边栏会员等级
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/w?e?api\/(homepage\/|v6\/)?playlist\/(?!(?:delete|subscribe|unsubscribe)) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 会员认证
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js

[mitm]
hostname = interface*.music.163.com,
*
*
*/


var modifiedHeaders = $request.headers;



modifiedHeaders['Cookie'] = 'MUSIC_U=006189BC5B9C63902F0AA6E9EDA34FE7FD5D6EBEF09773343E6B8521FC0A42208B079C98D246F43A8C93397E0E37CA0767A350543B17C99EDE38911188AD4B10E93CD14D23C4FADECE6D375320A5A37467CE51CCF0120D4B4AE560F360F2E1F2D159BF378B10ADAB35C2B2723DD1805CA8EE4E32A8CCF728481784A0415E92880DEB1366FEB7EC7AD50F907EC3DC0C8B68F351281616181775D9D4C1858FBDB4548CE12C56F3D8732CAED946F9814521DFF96C1970F700EBB06F46A26B8722611812C3D2B3AB118CE19A814E5578746F0109AA7F4A9446A40AF9A8AC45CA1018E573ADCCB82C5E9EE998CD147F82D37CFFB7283E9DD453EBD4C22D11B70C2E9FD7B6F52DB39BE1F594340C16674061FD175BA137EB93D2088318BCA037416A896D;appver=9.2.72; deviceId=c37795fa7cc0bd4d38b242e3da8497a6; os=iPhone OS; osver=18.2; machineid=iPhone17.2; ' ;

delete modifiedHeaders['MConfig-Info'];
$done({headers : modifiedHeaders});