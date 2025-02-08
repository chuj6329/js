/**
 * Surge 远程订阅脚本示例（带 $argument 参数）
 *
 * 说明：
 *  - 本脚本用于处理 HTTP 响应，将返回的 JSON 数据中的会员状态修改为指定值。
 *  - 默认情况下将会员状态设为 1（表示“是”）。
 *  - 你可以通过 $argument 参数来自定义修改的值，例如：
 *      is_a_member=0   // 将会员状态设为 0，表示非会员
 *      is_a_member=1   // 将会员状态设为 1，表示会员（默认值）
 *
 * 使用方法：
 * 1. 将此脚本部署到你的远程服务器，使其能通过 URL 访问。
 * 2. 在 Surge 配置文件中添加如下规则（请根据实际 URL 修改匹配规则和 script-path）：
 *
 *    [Script]
 *    http-response ^https:\/\/example\.com\/api\/user$ script-path=https://yourserver.com/path/to/modifyMember.js,requires-body=true
 *
 * 3. 如需自定义会员状态，可在 Surge 配置中为该规则设置 $argument 参数，例如：
 *
 *    is_a_member=0
 */

if ($response) {
  let body = $response.body;
  let obj;

  // 解析响应体为 JSON 对象
  try {
    obj = JSON.parse(body);
  } catch (e) {
    console.error("JSON解析错误: " + e);
    $done({ body });
    return;
  }

  // 默认会员状态设为 1（表示“是”）
  let memberStatus = 1;

  // 如果存在 $argument，则解析参数（格式：key=value&key2=value2）
  if ($argument) {
    let args = {};
    $argument.split('&').forEach(pair => {
      let [key, value] = pair.split('=');
      if (key && value !== undefined) {
        args[key.trim()] = value.trim();
      }
    });
    if (args.hasOwnProperty("is_a_member")) {
      let parsedValue = parseInt(args["is_a_member"]);
      if (!isNaN(parsedValue)) {
        memberStatus = parsedValue;
      }
    }
  }

  // 检查是否存在用户账号数据，并修改会员状态
  if (obj.data && obj.data.account) {
    obj.data.account.is_a_member = memberStatus;
    console.log("已将会员状态修改为：", memberStatus);
  } else {
    console.log("未找到 account 数据，无法修改会员状态");
  }

  // 返回修改后的响应体
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}