var password=0;var numberAttempts=0;var attemp=0;var blFlag=true;function print(data){console.log(data);}
function getElId(id,flag=0){var d;if(flag==0){d = document.getElementById(id);}else if(flag==1){d=document.getElementById(id).value;}
else if(flag==2){d=document.getElementById(id).checked;}return d;}function printElSet(id,text,setting=0){if(setting==0){var d=document.getElementById(id);  d.innerText=text;
}else if(setting==1){var d=document.getElementById(id).href=text;}else if(setting==2){var d=document.getElementById(id).onclick=text;}}
function changeStyl(id,stil,con){var d=document.getElementById(id);if(stil=="display"){d.style.display=con;}else if(stil=="color")
{d.style.color=con;}else if(stil=="size"){d.style.fontSize=con;}else if(stil=="bord"){d.style.border=con;}else if(stil=="bordR")
{d.style.borderRadius=con;}else if(stil=="txtA"){d.style.textAlign=con;}else if(stil=="margin"){d.style.margin=con;}else if(stil=="backColor")
{d.style.backgroundColor=con;}else if(stil=="x"){d.style.width=con;}else if(stil=="y"){d.style.height=con;}}function random(from=0,before){var rand=Number((Math.random()*before).toFixed());
while(rand<from){rand=Number((Math.random()*before).toFixed());}return Number(rand);}function settingPassword(password0,numberAttempts0){password0=String(password0);password=password0;
numberAttempts=numberAttempts0;}function blockRes(){blFlag=true;}function blocking(rel=false){if(blFlag){if(attemp==0){var pas=String(prompt("Введите ключ"));}else{var pas=String(prompt("Ключ неверный \n Введите ключ"));}attemp++;
if(password!=pas&&attemp<numberAttempts){blocking();}if(attemp>numberAttempts){while(true){}}attemp=0;if(rel){blFlag = false;}}}function countStr(string){return eval(string);}
function numSi(num,of,to){var res=0;of=Number(of);to=Number(to);num=num;if(of==10){res=num.toString(to);return res;}else if(to==10){res=parseInt(num,of);return res;}
else{res=parseInt(num,of);res=res.toString(to);return res;}}function getTimeP(){var time=new Date();var t={s: time.getSeconds(),m: time.getMinutes(),h: time.getHours()};
return t;}function getDateP(){var date=new Date; var wek; if (date.getDay() == 0) {wek = 7;} else {wek = date.getDay();}var d={y: date.getFullYear(),m: date.getMonth(),d: date.getDate(),w: wek};return d;}function countNumSi(num0, s0, sign, num1, s1, s2) {
if(s0>10){num0=String(num0);}else{num0=Number(num0);}if(s1>10){num1=String(num1);}else{num1=Number(num1);}return numSi(countStr(String(numSi(num0,s0,10))+sign+String(numSi(num1,s1,10))),10,s2);}
function map(num,num_min,num_max,new_min,new_max){var num_range=num_max-num_min;var new_range=new_max-new_min;var converted=((num-num_min)*new_range/num_range)+new_min;return converted;}
function exeStr(strCode){eval(strCode);}