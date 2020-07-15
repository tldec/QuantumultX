/*
{
    "code":0,
    "data":{
        "interactivation_count":"0",
        "notification_count":"0",
        "total":"0"
    },
    "message":"success"
}
*/
var obj = JSON.parse($response.body);
obj.ad_item = null;
obj.ext ="{\"need_xs_ad\":false,\"xs_strategy_index\":10,\"need_backup_ad\":false,\"remaining_new_user_protect_time\":-1}"

$done({body:JSON.stringify(obj)});
