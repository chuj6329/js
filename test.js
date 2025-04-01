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

// 修改 `announcements_data` 以移除 Swiftgram Pro 订阅提醒
if (obj.global) {
    obj.global.announcements_data = "[]"; // 清空公告
    obj.global.payments_enabled = false; // 禁用付款提示
    obj.global.can_grant = true; // 允许解锁 Pro
}

// 直接赋值 Pro 功能
obj.user = obj.user || {};
obj.user.is_pro = true;  // 设定 Pro 状态
obj.user.can_buy_in_beta = true;  // 允许购买 Beta 版本
obj.user.can_send_telescope = true; // 允许 Telescope 发送功能

$done({ body: JSON.stringify(obj) });
