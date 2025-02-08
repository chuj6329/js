

if ($response) {
  let body = $response.body;
  let obj;

  try {
    obj = JSON.parse(body);
  } catch (e) {
    console.error("JSON解析错误: " + e);
    // JSON 解析失败则原样返回响应
    $done({ body });
    return;
  }

  // 检查是否包含用户账号数据
  if (obj.data && obj.data.account) {
    // 修改会员状态为“是”（设为 1）
    obj.data.account.is_a_member = 1;
    console.log("已将会员状态修改为：是");
  } else {
    console.log("未找到 account 数据，无法修改会员状态");
  }

  // 返回修改后的响应体
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}