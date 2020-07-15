var obj = JSON.parse($response.body);
if(obj.vido_info){
    obj.video_info = {};
}
if (obj.message){
  obj.message = "success";
}
if (obj.data){
  obj.data= {};
}
if (obj.ad_item){
   obj.ad_item = null;
}
if (obj.extra){
   obj.extra ="{\"need_xs_ad\":false,\"xs_strategy_index\":1,\"need_backup_ad\":false,\"remaining_new_user_protect_time\":-1}"
}
$done({body:JSON.stringify(obj)});  


/*
var obj = JSON.parse($response.body);
obj.data= {
};
obj.message = "";
$done({body:JSON.stringify(obj)});
*/
