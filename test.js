/*
*
*
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/\$RCAnonymousID%3A[a-f0-9]+$

[mitm]
hostname = api.revenuecat.com
*
*
*/

const response = {
  request_date_ms: 1743919753314,
  request_date: "2025-04-06T06:09:13Z",
  subscriber: {
    non_subscriptions: {},
    first_seen: "2025-04-06T06:09:13Z",
    original_application_version: null,
    other_purchases: {},
    management_url: null,
    subscriptions: {},
    entitlements: {},
    original_purchase_date: true,
    original_app_user_id: "$RCAnonymousID:e976d945222e460aa3db76836fa4cbdd",
    last_seen: "2025-04-06T06:09:13Z"
  }
};


const modifiedResponse = {
  ...response,
  subscriber: {
    ...response.subscriber,
    entitlements: {
      pro: {
        expires_date: null,
        product_identifier: "your.product.id",
        purchase_date: "2025-04-06T06:09:13Z"
      }
    },
    subscriptions: {
      "your.product.id": {
        billing_issues_detected_at: null,
        expires_date: null,
        is_sandbox: false,
        original_purchase_date: "2025-04-06T06:09:13Z",
        period_type: "active",
        purchase_date: "2025-04-06T06:09:13Z",
        store: "app_store",
        unsubscribe_detected_at: null
      }
    }
  }
};

$done({ body: JSON.stringify(modifiedResponse) });