/*
*
*
软件版本：9.2.50
[rewrite_local]
# > 网易云音乐黑胶vip
# 播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 播放器会员歌曲
^https:\/\/interface3?\.music\.# 163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
# 会员认证
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js

[mitm]
hostname = interface*.music.163.com,

;var encodeversion = 'jsjiami.com.v5', gzpgw = '0x5e6ab',  0x5e6ab=['w4k8w5s=','w7rDicODw60=','w61tRSM=','w5RIwpRGw4E=','w4XDjsKaUmY=','wpQ6eCrDvA==','w5gXOxnCoQ==','w6PDnmDCjMK5','ccOjw5LDjMKh','w7jDuD/DpcO4','w5DCnjVQfg==','w4Uew5l5w5g=','w7TDmFLDpsK7','woLCsBXCoHc=','w7rDjgY/wqI=','fT7DkgTCog==','N8Ovw4DDocKjXsOU','VcKVw4A2wrc=','w7ghw68Qw5Q=','wq1bw4bCg8KhwqdaBw==','AcOLw6bDmsKRw5I=','w4lgw7rCuQ5Hw7Q=','w64mw6lFw4Q=','LMKnNAzCvw==','w6jDnMOLw6gcwqQ=','w4nDk8KLO11q','w7QTw7wJw5w=','AMOCwq7DpMKa','w4Esw5t4w5Q=','w5rDtMKkw40=','wojCuUBuYg==','wpbDmzXDnMOs','w5UxEU8a','w5LDrsKIXVU=','wp4aBMKfw6Y=','wpTDrxTDvMOe','w5PDoXbCp8KPCsKfwrI=','OsKMNTbCuA==','FMKpw44UCw==','w6PDjynDmMOZw5Rl','cMKKw7LDpMKd','w6fDqMKNw4PCtA==','w5/DukbCpMKG','woYiO8Ogw6U=','UMO3w6/DtcKo','w5zDk8KXZWBSw7I2','BQcJMw==','w6jDq8OGw7Qgwr9p','w6E2AklpwrA=','w4HDoUrCscKG','wrVfw4HCjsK8','fMOAw4HDnMKY','w58+w4NLw60=','w4DDkXDCpMKf','w4AQw5Rjw5E=','w7gEw6dDw4Y=','woVmw5I7','VcOaw7HDqw==','w7fDnxsfw6E=','wp3CoRXCr3I=','w4PDhsKTDVFq','w5U6w4Ruw7Q=','w5fDqjHDkMOc','w7vDjzzDhsOZ','w5QOD0Ey','w7fDgsKDPA==','XcKHw7MFKA==','w4HDlMKFew==','w7rDggjDgMOG','w5IawovDq8Oz','w6sVw6dxw7M=','wpXCiwpcZA==','w6rDlsOCw59M','OsKQLQnCjA==','w7cjw6lWw7Q=','w4PDgMKOFn4=','w5RMwpN6w5A=','wqnCug/CoXc=','w4XDiMKHSG4=','w5ESw4lLw7Y=','w5zDmcKACjs=','w4rDlH/CqcKw','w6vDsVfDp8K8','IDQFJXo=','woHCk0RbYg==','wpUzOcOxw7Y=','woRlw4zCmMKU','w4LDhsKIVEs=','wpLCuCrCplM=','w6cQw7kMw5M=','wqPDjyXDjMOC','w5fDjcKGXmE=','w4fDhcK8FFo=','M8OUw4PDmcKD','w7JKKXNr','w5QWMj/Cug==','w6DDmyrDlMOA','wogkJsOow6E=','w7XDnifDksOt','w7PDlgA2wrE=','w54iw7oUw6k=','w75+w7XCvgM=','w7PDqgQywqI=','wqTCqVVWXQ==','EcKcAFHCjw==','w4rCpRVEew==','w4LDoG7CqsKM','w4/DvMKBNlo=','wrXCuApCYg==','wosLKcOKw7s=','w6/DpBnDm8OW','w6LDtEXDrcKi','w4ZPw6fChcKD','w5kIw7tKw7E=','w4nDoAVnwrzDjUo=','woBJw5fCg8Kb','w6HDmw3DnMOG','w7HDmgrDh8Ob','w4fDjMKbHmNo','NMOZw5jDhsKP','wrYMH8OVw6Q=','w7Qhw6Nkw7U=','w6QMw5VVw7Y=','w7DDhsOdw5Yd','w6vDrMKcw4w=','w5LDjMKBDVE=','w4fDjcKBCGVMw60=','w4XDnU7CksKD','w5QOwpA7','w5PDvgfDlMOFw4BR','wqPDnCLDtMOx','w7ZlCltq','w4FMw7bI=','w7rDuAIbwrU=','w6/DicOGw6E=','wrZFw4LCj8Kg','w5DDgkfCkMKo','w4pQw6HCthhU','w7XDnArDpcOV','w4PDoMONw7cX','wo8yHMOzw6E=','w4IDwrdww5k=','w5wOwobDrcOs','w7nDssOXw6MB','w4VWwptZw5U=','w6/Dih7DisOM','w7UVw7YLw5k=','KcOQw5HDrcKdw6QQw4M=','w5jDhsKTHVti','w7nDpAMJwqg=','w5zDjcKuBjA=','w5DDjVDCmMKD','woozA8O1w7Y=','w4HCpARyew==','H8KjLQ3Cpg==','wrUUEMOjw4Q=','w5QDw4RKw7A=','w4EkwrtMw4g=','ECUBEXs=','w6wvw6Iew6U=','w4bDjMKQIVts','w4sFw7txw5E=','wq7DrCnDjMOw','EcKCFSTCsw==','IMONw4HDjMKA','w71GKH9/','w4Uvw69Aw6k=','wsAgLcO5w7E=','w6E7w7Rrw4o=','w4PDo2LCi8Kw','ZMOyw7TDpMKA','w6bDmAEtwpI=','w64jw7paw7s=','w7dNDlBd','w5oxwrDDssOS','w5MRwo/Dr8Ok','w4MBw49vw60=','wrIMHsOjw58=','w4R1w6DCmD5b','w4TCsA1Oew==','w7PCuiFDdg==','w4lhwolew5w=','w5QuwpHDpcOG','w6HDnxnDiMOr','w5M7wrxow5Q=','w67DnifDncOR','wpkvPsO6w7k=','woVMw5zCnMKQ','w7TDoAEnwrA=','w6Mhw4Fvw4LDlFVF'];(function(0x21d0ac,0x36453f){var 0x25d34b=function(0x1a53d7){while(--0x1a53d7){0x21d0ac['push'](0x21d0ac'shift');}};0x25d34b(++0x36453f);}(0x5e6ab,0xb4));var 0x2d8a=function(0x408b3d,0x31e76a){0x408b3d=0x408b3d-0x0;var 0x35c8cb=0x5e6ab[0x408b3d];if(0x2d8a['initialized']===undefined){(function(){var 0x4d4ee1=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var 0x5d2f10='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';0x4d4ee1['atob']||(0x4d4ee1['atob']=function(0x5f1fb4){var 0x32bad=String(0x5f1fb4)'replace';for(var 0x5cc9ef=0x0,0x1e0a05,0x1a8d27,0x54f3e7=0x0,0x5d2ab4='';0x1a8d27=0x32bad'charAt';~0x1a8d27&&(0x1e0a05=0x5cc9ef%0x4?0x1e0a050x40+0x1a8d27:0x1a8d27,0x5cc9ef++%0x4)?0x5d2ab4+=String['fromCharCode'](0xff&0x1e0a05>>(-0x20x5cc9ef&0x6)):0x0){0x1a8d27=0x5d2f10'indexOf';}return 0x5d2ab4;});}());0x2d8a['rc4']=function(0x4fd4f9,0x4a2a67){for(var 0x3f09ae=[],0x342ca3=0x0,0x40a0b6,0x2cdaf7='',0x25a89f='',0x203a49=0x0,0x45d22d=0x4fd4f9['length'];0x203a49<0x45d22d;0x203a49++){0x25a89f+='%'+('00'+0x4fd4f9'charCodeAt''toString')'slice';}0x4fd4f9=decodeURIComponent(0x25a89f);for(var 0x5a6a13=0x0;0x5a6a13<0x100;0x5a6a13++){0x3f09ae[0x5a6a13]=0x5a6a13;}for(0x5a6a13=0x0;0x5a6a13<0x100;0x5a6a13++){0x342ca3=(0x342ca3+0x3f09ae[0x5a6a13]+0x4a2a67['charCodeAt'](0x5a6a13%0x4a2a67['length']))%0x100;0x40a0b6=0x3f09ae[0x5a6a13];0x3f09ae[0x5a6a13]=0x3f09ae[0x342ca3];0x3f09ae[0x342ca3]=0x40a0b6;}0x5a6a13=0x0;0x342ca3=0x0;for(var 0x1d8e71=0x0;0x1d8e71<0x4fd4f9['length'];0x1d8e71++){0x5a6a13=(0x5a6a13+0x1)%0x100;0x342ca3=(0x342ca3+0x3f09ae[0x5a6a13])%0x100;0x40a0b6=0x3f09ae[0x5a6a13];0x3f09ae[0x5a6a13]=0x3f09ae[0x342ca3];0x3f09ae[0x342ca3]=0x40a0b6;0x2cdaf7+=String['fromCharCode'](0x4fd4f9'charCodeAt'^0x3f09ae[(0x3f09ae[0x5a6a13]+0x3f09ae[0x342ca3])%0x100]);}return 0x2cdaf7;};0x2d8a['data']={};0x2d8a['initialized']=!![];}var 0x3649b6=0x2d8a'data';if(0x3649b6===undefined){if(0x2d8a['once']===undefined){var 0x3adb41=function(0x2c4bcd){this['rc4Bytes']=0x2c4bcd;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20\x5c(\x5c)\x20{\x5cw+\x20';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20}';};0x3adb41'prototype'=function(){var 0x1a2c4d=new RegExp(this['firstState']+this['secondState']);return this['runState'](0x1a2c4d['test'](this'newState')'toString');};0x3adb41['prototype