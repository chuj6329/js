/*
*
*
[rewrite_local]
^https:\/\/api\.pico\.bendingspoonsapps\.com\/v4\/events$ url script-response-body https://raw.githubusercontent.com/chuj6329/js/refs/heads/main/test.js

[mitm]
hostname = api.pico.bendingspoonsapps.com
*
*
*/



// fonts_isfree_unlock.js
let body = $request.body;

try {
  let obj = JSON.parse(body);

  let userInfo = obj?.events?.[0]?.user?.info;

  if (userInfo) {
    if (userInfo.is_free === false) {
      userInfo.is_free = true;
      console.log("✅ is_free → true");
    }

    if (userInfo.installed_before_pico === false) {
      userInfo.installed_before_pico = true;
      console.log("✅ installed_before_pico → true");
    }

    if (userInfo.is_baseline === false) {
      userInfo.is_baseline = true;
      console.log("✅ is_baseline → true");
    }
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("❌ JSON parse error:", e);
}

$done({ body });