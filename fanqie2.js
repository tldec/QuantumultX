
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
obj.data= {
};
obj.message = "success";
$done({body:JSON.stringify(obj)});
