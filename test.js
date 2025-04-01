/*
*
*
[rewrite_local]
^https:\/\/api\.swiftgram\.app\/v0\/settings$ response-body swiftgram_pro.js

[mitm]
hostname = api.swiftgram.app

*
*
*

let obj = JSON.parse($response.body);


if (obj.global) {
    obj.global.announcements_data = "[]"; 
    obj.global.payments_enabled = false; 
    obj.global.can_grant = true; 
}


obj.user = obj.user || {};
obj.user.is_pro = true;  
obj.user.can_buy_in_beta = true;  
obj.user.can_send_telescope = true; 

$done({ body: JSON.stringify(obj) });
