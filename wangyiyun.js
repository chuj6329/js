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
# 会员音质
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/sound\/quality url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 会员臻音全景声
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/audio\/profile url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js

[mitm] 
hostname = *music.163.com,



var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = 'MUSIC_U=00CC33F2C5E5682A1BD0408DDE4F779394526D03DB8823CB7BCD5D63B976F41ECD4728AC0BFB6B729473E1E1306A61235F9952D15EF20A79D7D7B20EC810F8C508C84429D35BCC4E9FA15231D7FE4743FA5E83CD9417C8E0808BC8D33E7B3FF794FB54637D45E8494A73FE1EA38BAE332BDCF68D41367D3B4EE00842EFB5DED9AF3362B435AC036F2E45606B0AC1FCFCB8BE08DAA5C5BE03CDE6F6C3E9C30C7518B58D13285832D9E2E5FFBBAC39D7C19ECFF8C1BA6294F4401204B83D69BE8AF975488B7E9FBFDCE3A514B7E14186315A8AF0FB93FEAA8B4A7B3D81156AE5B963132FF725AB92629F731ABA8F33F042F0FEF35A256FAFC825AEB077EBC00E819C13F5412E02AD5FC4B05B3B43D3DAA567CAAE146C9F320A129B1479B8F44C707B;appver=9.2.50; deviceId=c37795fa7cc0bd4d38b242e3da8497a6; os=iPhone OS; osver=18.2; machineid=iPhone17.2; ' ;

delete modifiedHeaders['MConfig-Info'] =
                             {
                  "zr4bw6pKFDIZScpo": }
$done({headers : modifiedHeaders});