/*
*
*
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/\$RCAnonymousID%3A[a-f0-9]+$ url script-response-body https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/test.js

[mitm]
hostname = api.revenuecat.com
*
*
*/



let obj = JSON.parse($response.body);


const productId = "your.product.id";
const entitlementId = "pro";

obj.subscriber.entitlements = {
  [entitlementId]: {
    expires_date: null,
    product_identifier: productId,
    purchase_date: "2025-04-06T06:09:13Z"
  }
};

obj.subscriber.subscriptions = {
  [productId]: {
    billing_issues_detected_at: null,
    expires_date: null,
    is_sandbox: false,
    original_purchase_date: "2025-04-06T06:09:13Z",
    period_type: "normal",
    purchase_date: "2025-04-06T06:09:13Z",
    store: "app_store",
    unsubscribe_detected_at: null
  }
};

$done({ body: JSON.stringify(obj) });