// 秒转换分钟00:00:00格式
function timeToMinute(times){
    console.log('zyc11122');
    console.log('zyc111');
       var t;
        if(times > -1){
            var hour = Math.floor(times/3600);
            var min = Math.floor(times/60) % 60;
            var sec = times % 60;
            if(hour < 10) {
                t = '0'+ hour + ":";
            } else {
                t = hour + ":";
            }
            if(min < 10){t += "0";}
            t += min + ":";
            if(sec < 10){t += "0";}
            t += sec.toFixed(2);
        }
        t=t.substring(0,t.length-3);
        return t;
        console.log(456);
}
