/*
爱企查vip
^https:\//aiqicha.baidu.com\/usercenter\/getvipinfoajax url script-response-body https://raw.githubusercontent.com/mikoycc/QuantumultX/main/FX/AiQiCha/aqc.js
mitm= aiqicha.baidu.com
*/

var body = $response.body
    .replace(/\"svip\":\{\"status\":0,\"startTime\":\"\",\"endTime\":\"\"/, "\"svip\":\{\"status\":1,\"startTime\":\"\",\"endTime\":\"2099-12-31\"");
$done({ body });
