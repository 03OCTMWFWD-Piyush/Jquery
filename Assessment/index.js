function showCustomDayandMonth(){
    let dateObject = new Date();
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satursday"];
    let months =["January","February","March","April","May","June","July","August","Septmber","October","November","December"];
    let day = dateObject.getDay();
    let month = dateObject.getMonth();
    let date = dateObject.getDate();
    let year = dateObject.getFullYear(); 

    let customDayMonth = days[day] + "," + date + "" + months[month] + "" + "," + year;
    document.getElementById("date").innerHTML = customDayMonth;
    console.log(customDayMonth);

}







function showTime(){
    let time  = new Date();
    let h =time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();


    let session = "AM";
    if(h==0)
    {
        h=12;
    }
    
    if(h>12){
        h=h-12;
        session="PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    } 


document.getElementById("time").innerHTML= h + ":" + m + ":" + s + " " + session;

setInterval(showTime,1000);
}
showTime();
showCustomDayandMonth();