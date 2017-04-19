$(function(){
    var clock = document.getElementById("clock");
    function initNumXY(){
        // 1、12个数字的位置设置
        var radius = 160;//大圆半价
        var dot_num = 360/$(".dot").length;//每个div对应的弧度数
        //每一个dot对应的弧度;
        var ahd = dot_num*Math.PI/180;
        $(".dot").each(function(index, el) {
            $(this).css({
                "left":180+Math.sin((ahd*index))*radius,
                "top":180+Math.cos((ahd*index))*radius
            });
        });
        // 2、刻钟设置
        for(var i = 0; i < 60; i++) {
            clock.innerHTML += "<div class='clock-scale'> " +
                   "<div class='scale-hidden'></div>" +
                   "<div class='scale-show'></div>" +
                  "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
            for(var i = 0; i < scale.length; i++) {
                scale[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
        }
    }
    initNumXY();//调用上面的函数
    //获取时钟id
    var hour_line = document.getElementById("hour_line"),
        minute_line = document.getElementById("minute_line"),
        second_line = document.getElementById("second_line"),
        date_info=document.getElementById("date_info"),//获取date_info
        hour_time = document.getElementById("hour_time"),// 获去时间id
        minute_time = document.getElementById("minute_time"),
        second_time = document.getElementById("second_time");
    //3、设置动态时间
    function setTime(){
        var nowdate = new Date();
        //获取年月日时分秒
        var year = nowdate.getFullYear(),
            month = nowdate.getMonth()+1,
            date = nowdate.getDate(),
            day = nowdate.getDay(),
            hours = nowdate.getHours(),
            minutes = nowdate.getMinutes(),
            seconds = nowdate.getSeconds();
        var weekday =["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        // 获取日期id
        date_info.innerHTML=year+"年"+month+"月"+date+"日   "+weekday[day];
        hour_time.innerHTML = hours >=10 ? hours : "0"+hours;
        minute_time.innerHTML = minutes >=10 ? minutes : "0"+minutes;
        second_time.innerHTML = seconds >=10 ? seconds : "0"+seconds;
        //时分秒针设置
        var hour_rotate = (hours*30-90) + (Math.floor(minutes / 12) * 6);
        hour_line.style.transform = 'rotate(' + hour_rotate + 'deg)';
        minute_line.style.transform = 'rotate(' + (minutes*6 - 90) + 'deg)';
        second_line.style.transform = 'rotate(' + (seconds*6 - 90)+'deg)';
    }
    // setTime();
    setInterval(setTime, 1000);
});
