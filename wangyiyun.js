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


var Y1=$request['\x68\x65\x61\x64\x65\x72\x73'];Y1['\x43\x6f\x6f\x6b\x69\x65']='\x4d\x55\x53\x49\x43\x5f\x55\x3d\x30\x30\x36\x31\x38\x39\x42\x43\x35\x42\x39\x43\x36\x33\x39\x30\x32\x46\x30\x41\x41\x36\x45\x39\x45\x44\x41\x33\x34\x46\x45\x37\x46\x44\x35\x44\x36\x45\x42\x45\x46\x30\x39\x37\x37\x33\x33\x34\x33\x45\x36\x42\x38\x35\x32\x31\x46\x43\x30\x41\x34\x32\x32\x30\x38\x42\x30\x37\x39\x43\x39\x38\x44\x32\x34\x36\x46\x34\x33\x41\x38\x43\x39\x33\x33\x39\x37\x45\x30\x45\x33\x37\x43\x41\x30\x37\x36\x37\x41\x33\x35\x30\x35\x34\x33\x42\x31\x37\x43\x39\x39\x45\x44\x45\x33\x38\x39\x31\x31\x31\x38\x38\x41\x44\x34\x42\x31\x30\x45\x39\x33\x43\x44\x31\x34\x44\x32\x33\x43\x34\x46\x41\x44\x45\x43\x45\x36\x44\x33\x37\x35\x33\x32\x30\x41\x35\x41\x33\x37\x34\x36\x37\x43\x45\x35\x31\x43\x43\x46\x30\x31\x32\x30\x44\x34\x42\x34\x41\x45\x35\x36\x30\x46\x33\x36\x30\x46\x32\x45\x31\x46\x32\x44\x31\x35\x39\x42\x46\x33\x37\x38\x42\x31\x30\x41\x44\x41\x42\x33\x35\x43\x32\x42\x32\x37\x32\x33\x44\x44\x31\x38\x30\x35\x43\x41\x38\x45\x45\x34\x45\x33\x32\x41\x38\x43\x43\x46\x37\x32\x38\x34\x38\x31\x37\x38\x34\x41\x30\x34\x31\x35\x45\x39\x32\x38\x38\x30\x44\x45\x42\x31\x33\x36\x36\x46\x45\x42\x37\x45\x43\x37\x41\x44\x35\x30\x46\x39\x30\x37\x45\x43\x33\x44\x43\x30\x43\x38\x42\x36\x38\x46\x33\x35\x31\x32\x38\x31\x36\x31\x36\x31\x38\x31\x37\x37\x35\x44\x39\x44\x34\x43\x31\x38\x35\x38\x46\x42\x44\x42\x34\x35\x34\x38\x43\x45\x31\x32\x43\x35\x36\x46\x33\x44\x38\x37\x33\x32\x43\x41\x45\x44\x39\x34\x36\x46\x39\x38\x31\x34\x35\x32\x31\x44\x46\x46\x39\x36\x43\x31\x39\x37\x30\x46\x37\x30\x30\x45\x42\x42\x30\x36\x46\x34\x36\x41\x32\x36\x42\x38\x37\x32\x32\x36\x31\x31\x38\x31\x32\x43\x33\x44\x32\x42\x33\x41\x42\x31\x31\x38\x43\x45\x31\x39\x41\x38\x31\x34\x45\x35\x35\x37\x38\x37\x34\x36\x46\x30\x31\x30\x39\x41\x41\x37\x46\x34\x41\x39\x34\x34\x36\x41\x34\x30\x41\x46\x39\x41\x38\x41\x43\x34\x35\x43\x41\x31\x30\x31\x38\x45\x35\x37\x33\x41\x44\x43\x43\x42\x38\x32\x43\x35\x45\x39\x45\x45\x39\x39\x38\x43\x44\x31\x34\x37\x46\x38\x32\x44\x33\x37\x43\x46\x46\x42\x37\x32\x38\x33\x45\x39\x44\x44\x34\x35\x33\x45\x42\x44\x34\x43\x32\x32\x44\x31\x31\x42\x37\x30\x43\x32\x45\x39\x46\x44\x37\x42\x36\x46\x35\x32\x44\x42\x33\x39\x42\x45\x31\x46\x35\x39\x34\x33\x34\x30\x43\x31\x36\x36\x37\x34\x30\x36\x31\x46\x44\x31\x37\x35\x42\x41\x31\x33\x37\x45\x42\x39\x33\x44\x32\x30\x38\x38\x33\x31\x38\x42\x43\x41\x30\x33\x37\x34\x31\x36\x41\x38\x39\x36\x44\x3b\x61\x70\x70\x76\x65\x72\x3d\x39\x2e\x32\x2e\x37\x32\x3b \x64\x65\x76\x69\x63\x65\x49\x64\x3d\x63\x33\x37\x37\x39\x35\x66\x61\x37\x63\x63\x30\x62\x64\x34\x64\x33\x38\x62\x32\x34\x32\x65\x33\x64\x61\x38\x34\x39\x37\x61\x36\x3b \x6f\x73\x3d\x69\x50\x68\x6f\x6e\x65 \x4f\x53\x3b \x6f\x73\x76\x65\x72\x3d\x31\x38\x2e\x32\x3b \x6d\x61\x63\x68\x69\x6e\x65\x69\x64\x3d\x69\x50\x68\x6f\x6e\x65\x31\x37\x2e\x32\x3b ';delete Y1['\x4d\x43\x6f\x6e\x66\x69\x67\x2d\x49\x6e\x66\x6f'];$done({headers:Y1});