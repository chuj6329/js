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



let body = $request.body;

try {
  let obj = JSON.parse(body);

  if (obj?.events?.[0]?.user?.info?.is_free === false) {
    obj.events[0].user.info.is_free = true;
    console.log("is_free modified to true in request");
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("JSON parse error:", e);
}

$done({ body });
