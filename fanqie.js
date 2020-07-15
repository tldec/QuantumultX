
/*
{
    "video_info":{
        "data":{
            "dynamic_video":null,
            "dns_info":null
        },
        "message":"success",
        "code":0,
        "total":4
    },
    "message":"success",
    "code":0,
    "data":{
    }
}
*/
var obj = JSON.parse($response.body);
obj.video_info = {};
$done({body:JSON.stringify(obj)});
