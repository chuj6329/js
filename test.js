[rewrite_local]
> 网易云音乐黑胶vip
播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header 
搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header 
播放器会员歌曲
https?:\/\/(?:ipv4|interface\d?)\.music\.163\.com\/e?api\/(mine\/(collect|rn)\/header\/info|v\d\/user\/detail\/\d+|vipnewcenter\/app\/resource\/newaccountpage|music-vip-membership\/(client|front)\/vip\/info|batch|playlist\/privilege|search\/complex\/page|v\d\/(discovery\/recommend\/songs|playlist\/detail)) url request-header (\r\n)x-aeapi:.+(\r\n) request-header $1x-aeapi: false$2
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/song\/(?:chorus|enhance\/|play\/|type\/detail\/get) url script-request-header 
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/(?:album\/|v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-body 
侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header 
首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header 
会员认证
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-analyze-echo-response 

[mitm]
hostname = interface*music.163.com,
var $request = $request;

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = 'MUSIC_U=005A889DBD728B02E7D92DD388BC405EC661B5451AF62193D28AB2BBC0B6E0850B55AAE974A305B638BC9BF8E795809F8964D58301F6DF9004BA7CFE2C1B5E56DD2AC51000F80620317F483A4296C0DA545BCAAD7176F41FAD084E33B3A59339CD32535FBED83869C98FF0062750FFDF33F23A068D1F3D8FFCCADE349D814ACE40B52027770229024CD1049AFD07A835C1FB7D308AC991AB559BA64D124CDB26987AA3C511B5C83229819DF52BBF52FBC060B503B69F3CAC885E0CE8A5F262F813594F9257E4752A7A310D8CB8433A150F068C31945C7C0CE14AEB98F57CC3C9CC0B47A9F4FD60B7301BCDAC99F4C93E9B51EF11A086B2DFF2F5AD5ECD193B7D8EDBA4F4CD97E38C0DF9CDE99AF7CFE4D09BF31E34910D1FEC07A9825332E604CA';
modifiedHeaders['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":2316352,"appver":"9.2.50"},"tPJJnts2H31BZXmp":{"version":2316352,"appver":"9.2.50"}}';
modifiedHeaders['appver'] = '9.2.50';
modifiedHeaders['deviceId'] = 'c37795fa7cc0bd4d38b242e3da8497a6';
modifiedHeaders['os'] = 'iPhone OS';
modifiedHeaders['osver'] = '18.2';
modifiedHeaders['machineid'] = 'iPhone17.2';
$done({ 'headers': modifiedHeaders });