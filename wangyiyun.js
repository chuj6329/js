*脚本功能：网易云音乐黑胶vip+
*软件版本：9.2.50
*下载地址：苹果商店下载
[rewrite_local]
> 网易云音乐黑胶vip
播放器会员皮肤
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
搜索结果会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/search\/(?:complex\/page|complex\/rec\/song\/get|song\/list\/page) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
播放器会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/(?:v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/song\/(?:chorus|enhance\/|play\/|type\/detail\/get) url script-analyze-echo-response https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
侧边栏会员等级
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
首页歌单会员歌曲
^https?:\/\/interface\d?\.music\.163\.com\/w?e?api\/(homepage\/|v6\/)?playlist\/(?!(?:delete|subscribe|unsubscribe)) url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js
会员认证
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/wangyiyun.js

[mitm]
hostname = interface*music.163.com,



;var encode_version = 'jsjiami.com.v5', xzdnl = '__0x120807', __0x120807 = ['F8OhOQ==', 'XRPChnfDoMOKTcKEe8K6LMOOw5Y=', 'w6hOQTDDkA==', 'w4Jaw7w2Zg==', 'wogoGADDpA==', 'ZQHCkDJZ', 'w5E/dcKQwrU=', 'w7F5w7obQw==', 'XB3ChUPDtA==', 'SsKTw6LChsOu', 'VwPChBVN', 'wrxMwqMl', 'wrVTw7PDrMOw', 'w5TDrMOEw6PCng==', 'EUfDm8K0OA==', 'w7d+w4MuYg==', 'w5J0w6MyaQ==', 'TizDlcOVeg==', 'wpE1wrvCscOV', 'N8O6w4bClMOZ', 'JkTDlMKbAQ==', 'MMOQw57Co8OZ', 'GDPCrFnCtg==', 'w4oUwqdKw5s=', 'w78gUcKJwp/DksKT', 'woEOwpkEw5M=', 'JsO6wpbDugU=', 'w7vDt8OVw5XDlQ==', 'w5zDlcOFwp80', 'PErDnBLCi8OjwoUTEsKBwrvDssKkasOKw64=', 'w4Rbw7PDoTzCu8OkVsOcaFfCoArCl8KuBhnCtnTCocK/E8OXwrk/woYDY8K1w6FJVj/DjUBSwp7DiQ3DncKOMMOuwoZAwpjCiXPCh8K2Y8KPwqZmTVnDosOjw58MwrvDow==', 'wrgIwrkX', 'w6HCoMKdTsOZ', 'w65iw7IMRw==', 'csOKw6nDg8Oa', 'w5k0wrlkw5s=', 'wptlwrghw7w=', 'w6jDhsO0w4jChg==', 'wpTCrsKrwpk=', 'wqkyBirDrQ==', 'w4RUw6YKSg==', 'BkrDoMKm', 'woQuwonCtsOS', 'ASrDjGDCqA==', 'w48DV8KKwoY=', 'IX7Dq8KFBw==', 'byvDrsOwZlsZ', 'PTjCuMO/PktJEsOwwqTDvX4/w5PCrMK4wqY=', 'ZR/CmD1g', 'w7HCuMKQTsOD', 'dSbCiwF9', 'w7TCsMOvwq0=', 'f8K4JRbDhiQdRXM=', 'wrvDlMKgw5HCsA==', 'w7djw4ASfA==', 'w7DDgMOUw6c=', 'bMK2w4bCtMOP', 'ehDCuT1g', 'acKiwrdUwr4=', 'w4nDh8OXw7zCpg==', 'DwlGw5Ry', 'w67CrsOlwqto', 'wo0JJ8OCKUnDlw==', 'w6jDmcOFw6zCuztPw5sn', 'Nitsw51IwrdY', 'XwvCg3DDgQ==', 'wqYxwpLCi8OOwp8e', 'woMnFMOD', 'wqFHwrY+', 'OVDDnALCkMOmwo8=', 'wpE0FMOCw5E=', 'wpgpAQ==', 'wrvCm0fCgWBEw5I=', 'eDbDocOgbA==', 'BhfCnWLCiw==', 'w6EKw6c=', 'w6Yaw6UfwrPCmTEPZ20NGsK+w4DDpsOGaQ==', 'wo3CusKQ==', 'ccKTw53CkcO6', 'w5Agwph8w40=', 'wo5FwqM=', 'cTHCvA==', 'w60Vw78=', 'H8Osw7TDqsOWYQ==', 'w7rDpQTCs18=', 'wr8EwqoBw4A=', 'TMOHw53Dp8Ov', 'OHDDmTzCmQ==', 'wpcIOsO9Nw==', 'TTPCpTdX', 'w5rClcOPw6d8', 'dVA6UsKz', 'w6nDs8Oow63Dvg==', 'UcKmw53Cq8O1', 'w6bDvDTCrmM=', 'w70WW8Kdwqc=', 'w4RzRyvDkw==', 'PyjCqkjClw==', 'fhzDlMOmRA==', 'e8OZw6FjOw==', 'w53DqsKjw4c=', 'w6TDp8Oaw4PDqQ==', 'CBY5M3c=', 'w6HDjsOB', 'w4XDpBLCnko=', 'w67CosOWw65u', 'w6Nkw4cUXg==', 'X8K8wrxcwpY=', 'QsOVw7nDpcOq', 'WzLCgDR2', 'w7MaacKuwoc=', 'wr0NwpjCtsOP', 'Ch/Cl1jClg==', 'Y8OUw5DDrMOA', 'OQPDo37ChA==', 'OcOcGw==', 'cT4UM3A=', 'w6bDpsK+w6fCsA==', 'woRHwr8fw40=', 'Y8Ocw4VCOA==', 'JhY/', 'ZR/Cpw==', 'w7jDosO4', 'w7rDosO4', '54uV5p+y5Y2+77+OdsOb5Lyv5a+b5p+f5b6Z56iX772A6L2v6Ky/5pWL5o2d5oql5Lqy55ui5bW55L2R', 'RGEweMKc', 'w7xzbzPDrw==', 'wpTCiB9oYw==', 'w4jDv8KSw43CrQ==', 'w4bCo8K2TMOP', 'MUvDtzzChg==', 'wo0DA8Oew4o=', 'w71Yw7oIbw==', 'w7c5w6fCv30=', 'wp/CjSdWXQ==', 'XVQdW8Kc', 'FzR0w6hS', 'w4XCksKracOG', 'w5VLw6Uzfw==', 'dsKnw4DCg8OS', 'wqciPcOVMw==', 'dRbCq1/Dhw==', 'w6E8w73Dg8Kr', 'w6PDocOJw4nDosKa', 'PlnDvg==', 'wojCol0=', 'LcOvEBQtwq8=', 'EmbDpA==', 'wpbCkWg=', 'UC3Cvw==', 'w6s5w6Q=', 'w6d/w5YYaMKrw7TDg8K8', 'worCuMKywoTCgw16LsK9O2Qkw6Yf', '54ig5p2D5Y2D77yHwrvDheS9pOWtouadkOW/v+eqi+++vui8uOisjOaUvOaMouaJo+S6nueYq+W0u+S9tQ==', 'UQrCvxxp', 'w7XDmz3Ch3M=', 'CTLDjA==', 'w53DuRw=', 'KMOsEhEU', 'QsO8w6BtLg==', 'w6nDj8Kiw5rCsA==', 'w4XCj8KdXcO7', 'BQsuNH8=', 'KQnCsW/CtA==', 'w4DDrMOSw4XDmA==', 'w7ghdMKbwqQ=', 'w7FceSvDhA==', 'w45jUSrDiw==', 'GAHDkXrCkA==', 'AADDkWPCqw==', 'wrALwrQnw6w=', 'Ox/ClkLChA==', 'Mj3Dn0jCqA==', 'fcK9wrNRwoE=', 'w6l+w4Uvew==', 'w512w6IRYw==', 'HBjChV3Cqg==', 'w7DDpQHCgH8=', 'SwPDocO5RQ==', 'RDACPEU=', 'w7HDn8OQw7DDmQ==', 'EWHDnsKmNA==', 'JBfDjEPClA==', 'Ch3CnU/Cmg==', 'w4TDlsO8w6HDqQ==', 'acOjw6ZaGg==', 'wrDDucKSw7fCgA==', 'WcKfw6TCpMOH', 'w5jCscOOwphV', 'ZsOPw6hSNw==', 'YkQAV8Ks', 'XQ86IW8fJQ==', 'w5PDusOUw4vDpcKY', 'djvCskzDpWdCw4dfDsOcwpg7AhwbwoLDjkPCrx7Dq8OmRcO6QsOaEMOUwqvDlcKAw7Uwf8KgYsOYb8KSw6TCq8OxBMOyJEjCqEbCuSzDpmNJwpdtEsOSFcKVwodDXUjDosK2wrw/a8K4w47DsCNdw5TDo2t7w7XCsVfDhsKuwqbClsOcw4vClBDCtmh3w7/CpjjCgMOrMwwNTMKXa3I8w4lrCMKGw4sMFMOXSMOOwpTDqw5aw7XChSdrw4hWd8OMwqfDn8KOZ0DDpS8BN8KnwpvCjkbCkcKrWsOnw6poCcK2bsKPwpZ0XsOEwp90Dn3DgsKiLitEw6McTC1bwrrDm2nCrhzCocOew63CtjhVJ3AewpLDtBADJHQdFcOUw4vCj8O5FsOSwrXDgcOUw6/Di8KEQMK1DcKhDG4yGh8+fsOKwqhdw6XCp38mw5vDvT9nJ3lpQGHDpMOew6ljAHByw4pqIsKkMMO6FB/DrsKawqLDj8K1w4DCl8KQwopeKMOLw4rDjD7DosK1MMKJLjhNAMKCw514w5bDjDsCwrcowrrCnHgwdjVVQCDCjmsmK2LCniEWcTrCp1jDi8OnH8OdwqrCgjXCu3YtfsOucsOwwr/CkQPDg8KqGMORCknDuzjCnMKcAMKSDMKNcC8CwojDqA08wqHCiMKHKwPCrsO9w5LCmR8wwonCqMKxw47CkXw7w7x7BjhfwoLComMcw5fDmMObw6tGQ8K8LDrDi11hMXbDoTnCp8KTwrIhwr0nCmcEw7Nrw5NXQjXCi8OpwpZ5w7/CnAXDssOrWRbCs8Kdw7t4wqlswqbCvcKYw75Cw47CiyhLw7nCisKPw58Uw4Ubw5tqwpHDrcOKfnLDkcOfw6IPGHjDpXYtQ19MBjszIcKUNmpQwp7DnEvCqMKmZ1Zrw75FVFJLG2htw5QtCcObXQjDsh0tG8Kdw5rCoMKbwpoMwqIqwr7CukI7U8OYwpVvf8OTworDssKVwoN6wofDsk1cw69awoBSw6B7w6bCuydOORXDlcOAwrwUHWLDkHInwp7DhXDCqMOeQsODVMOgK8KTRsKfCAYKwqbDkhrCpFbCn8K0a8KMwrU
