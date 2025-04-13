/*
*
*
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/\$RCAnonymousID%3A9b7eeae656a24635bd5e0198e32c871e$ url script-response-body https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/test.js

[mitm]
hostname = api.revenuecat.com
*
*
*/



let obj = JSON.parse($response.body);

obj.subscriber.subscriptions = {
  "pro.monthly": {
    "expires_date": "2099-12-31T23:59:59Z",
    "original_purchase_date": "2022-01-01T00:00:00Z",
    "purchase_date": "2022-01-01T00:00:00Z",
    "store": "app_store",
    "ownership_type": "PURCHASED"
  }
};

obj.subscriber.entitlements = {
  "pro": {
    "product_identifier": "pro.monthly",
    "expires_date": "2099-12-31T23:59:59Z"
  }
};

$done({ body: JSON.stringify(obj) });