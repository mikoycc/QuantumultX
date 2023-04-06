# 脚本作者：彭于晏💞
# 更新时间：2022-10-8
# TG频道群：https://t.me/py996


[mitm] 
hostname=restore-access.indream.app

[rewrite_local]
https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\d{5,10} url echo-response text/json echo-response https://raw.githubusercontent.com/mikoycc/QuantumultX/main/FX/Nicegram/ng.js
