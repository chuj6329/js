/*
 *
 *
源码来源：weigiegie
脚本功能：网易云音乐黑胶vip+
软件版本：9.2.50
下载地址：苹果商店下载
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 网易云音乐黑胶vip
# 播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 播放器会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 会员认证
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js

[mitm] 
hostname = interface*music.163.com,



var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = MUSIC_A_T=1705532211685; MUSIC_R_T=1705532446019; NMTID=00O2oT7C0mlaiuAC0Lfgv_d-m8s2_AAAAGVM_GR3A; ntes_kaola_ad=1; EVNSM=1.0.0; MUSIC_U=005A889DBD728B02E7D92DD388BC405EC661B5451AF62193D28AB2BBC0B6E0850B55AAE974A305B638BC9BF8E795809F8964D58301F6DF9004BA7CFE2C1B5E56DD2AC51000F80620317F483A4296C0DA545BCAAD7176F41FAD084E33B3A59339CD32535FBED83869C98FF0062750FFDF33F23A068D1F3D8FFCCADE349D814ACE40B52027770229024CD1049AFD07A835C1FB7D308AC991AB559BA64D124CDB26987AA3C511B5C83229819DF52BBF52FBC060B503B69F3CAC885E0CE8A5F262F813594F9257E4752A7A310D8CB8433A150F068C31945C7C0CE14AEB98F57CC3C9CC0B47A9F4FD60B7301BCDAC99F4C93E9B51EF11A086B2DFF2F5AD5ECD193B7D8EDBA4F4CD97E38C0DF9CDE99AF7CFE4D09BF31E34910D1FEC07A9825332E604CA; NMCID=olqxtu.1737802817000.01.3; NMDI=Q1NKTQcBDABckEn4dbYovLOb9iZoAAAArKqx%2FL1NGXj8BKSvuu7MmZ1VSYa1V6Bs0kEVXTTnvF%2B2ImmZjUCUK68vVdAbzXdiEwVQ0LN%2BFug4YLkgO48M6P88eWpe1bd9tuqRJjSRHojfsLlxuFTYepRnzgdkmQEOPrvNSAWT%2Bag%3D; URS_APPID=C0B5332B5F1B3A51D16BC6C97F61FCB0C2F449C003BB0DA230AF33DFED8426A09CC2821647BBF7FC67D9350F9678A060; __csrf=a57aaee2ce75d211a3531709c8ec671b; appkey=IuRPVVmc3WWul9fT; appver=9.2.50; buildver=5714; caid={"lastIyunId":"8b08e92346da4d6feb48239bcdba9110","iyunId":"5b6824734e64e650894e481ea6c9867c","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=c37795fa7cc0bd4d38b242e3da8497a6; idfa=; idfv=B9AA4EE6-B044-47AE-81DF-510AB2565A8C; machineid=iPhone17.2; os=iPhone OS; osver=18.2; packageType=release; sDeviceId=c37795fa7cc0bd4d38b242e3da8497a6; JSESSIONID-WYYY=jWPBx5RIV2R5uX%5CSEWujvCXqIUvMKrnl558DZKbpezEeSMqmX8x1afONE4qIC9qN1ER%2BmkbIN0bIg3JrfcPk4zZScJVrWuh37b4EoC2n7SZH%5CeB4nibUWh6ODUthp9OOATF4a1J%2FYmdm5s%5CwfCm5P5QsswsaIWtF0COTE7YXi420M39Z%3A1740334153508; _iuqxldmzr_=33; _ntes_nnid=76d072a12fd96cf846c35fae372fdc24,1737807497367; _ntes_nuid=76d072a12fd96cf846c35fae372fdc24

modifiedHeaders['MConfig-Info'] = {"zr4bw6pKFDIZScpo":{"version":2316352,"appver":"9.2.50"},"tPJJnts2H31BZXmp":{"version":3454976,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":598016,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":74270720,"appver":"9.2.50"}};
$done({headers : modifiedHeaders});
