settingPassword(Number(localStorage.keyIn), 5);
var flagBlock;

if (Number(localStorage.oneOff) == 1) {
    print('Ok');
    exit0();
    print('Ok');
    flagBlock = true;
} 

function maps() {



    if (Number(localStorage.KADM) != '2019') {
        alert('Для посещения этой страницы у вас недостаточно прав.');
        return;
    }
    changeStyl('menu', 'display', 'none');
    changeStyl('map', 'display', 'contents');
    changeStyl('reg', 'display', 'none');

    localStorage.numPage = 1;

}

function fotos() {

    changeStyl('menu', 'display', 'none');
    changeStyl('foto', 'display', 'contents');
    changeStyl('reg', 'display', 'none');

    localStorage.numPage = 2;


}

function posts() {

    changeStyl('menu', 'display', 'none');
    changeStyl('post', 'display', 'contents');
    changeStyl('reg', 'display', 'none');

    localStorage.numPage = 3;


}

function games() {
 
    if (Number(localStorage.KADM) != '2019') {
        alert('Для посещения этой страницы у вас недостаточно прав.');
        return;
    }
    changeStyl('menu', 'display', 'none');
    changeStyl('game', 'display', 'contents');
    changeStyl('reg', 'display', 'none');

    localStorage.numPage = 4;


}
function menu() {
    changeStyl('map', 'display', 'none');
    changeStyl('foto', 'display', 'none');
    changeStyl('post', 'display', 'none');
    changeStyl('game', 'display', 'none');
    changeStyl('reg', 'display', 'none');
    changeStyl('setting', 'display', 'none');
    changeStyl('menu', 'display', 'contents');
    localStorage.numPage = 0;

}

function menu0() {
     if (Number(localStorage.numPage) == 1) {
        maps();
    } else if (Number(localStorage.numPage) == 2) {
        fotos();
    } else if (Number(localStorage.numPage) == 3) {
        posts();
    }else if (Number(localStorage.numPage) == 4) {
        games();
    } else {
        menu();
    }

}

function exit() {

    changeStyl('map', 'display', 'none');
    changeStyl('foto', 'display', 'none');
    changeStyl('post', 'display', 'none');
    changeStyl('game', 'display', 'none');
    changeStyl('menu', 'display', 'none');
    changeStyl('setting', 'display', 'none');
    changeStyl('reg', 'display', 'contents');
    localStorage.numPage = 5;

}

function exit0() {

    changeStyl('map', 'display', 'none');
    changeStyl('foto', 'display', 'none');
    changeStyl('post', 'display', 'none');
    changeStyl('game', 'display', 'none');
    changeStyl('menu', 'display', 'none');
    changeStyl('setting', 'display', 'none');
    changeStyl('reg', 'display', 'contents');
    

}

function settings() {

    changeStyl('menu', 'display', 'none');
    changeStyl('setting', 'display', 'contents');

}

function comeInNoneStop() {

var d = Number(localStorage.numPage);

if (d == 0) {
menu();
} else if (d == 1) {
maps();
} else if (d == 2) {
fotos();
} else if (d == 3) {
posts();
} else if (d == 4) {
games();
} else if (d == 5) {
exit();
}

}


function makeKey() {
    if (localStorage.keyIn != undefined && localStorage.keyIn != '') {
        if (getElId('inKADM', 1) != '' && getElId('inKey', 1) == '') {
            localStorage.KADM = getElId('inKADM', 1);
        } else {
        alert('У вас уже есть ключ.');
        }
        return;
    }  
localStorage.KADM = getElId('inKADM', 1);
localStorage.keyIn = getElId('inKey', 1);
alert('Ваш ключ: ' + localStorage.keyIn);
}

function comeIn() {

    var inKeyST = prompt('Введите ваш ключ.');

    if (Number(inKeyST) == Number(localStorage.keyIn)) {
        menu0();
        localStorage.keyResDay = getDateP().d;
        localStorage.keyResMon = getDateP().m;
        flagBlock = false;
        if (localStorage.oneOff == undefined || localStorage.oneOff == '') {
            if (confirm('Вы хотите вводить ключ каждый раз заходя на сайт?')) {
                localStorage.oneOff = 1;
            } else {
                localStorage.oneOff = 0;
            }
            
            
        }

    } else if (Number(inKeyST) == '') {
    } else {
        alert('Ключ неверный');
    }

}


setInterval(function() {

// h , me

var car0 = [13, 0];
var car1 = [9, 0];
var carM = [12, 30];
var car0Wek = [1, 3, 5];
var car1Wek = [6];
var carMWek = [2, 5];
var dayWekNow = getDateP().w;
var h = getTimeP().h;
var m = getTimeP().m;


var dataForCar0 = '';
var dataForCar1 = '';
var dataForCarM = '';


// 1 Машина

for (var i = 0; i < car0Wek.length; i++) {
if (dayWekNow <= car0Wek[i]) {
if (Boolean(car0Wek[i] - dayWekNow)) {
// Эта неделя
dataForCar0 = '1) Машина приедет через: ' + (car0Wek[i] - dayWekNow) + ' ' + returnDay(car0Wek[i] - dayWekNow);
printElSet('car0', dataForCar0);

} else {
// Этот день
    if (car0[0] - h >= 0 && car0[1] - m > 0) {
        if (car0[0] - h > 0) {
            dataForCar0 = '1) Машина приедет через: ' + car0[0] - h + ':'+ car0[1] - m;
        } else {
            dataForCar0 = '1) Машина приедет через: ' + (car0[1] - m) + ' мин.';
        }
    } else if ((car0[0] + 3) - h >= 0 && car0[0] - h < 0) {
        dataForCar0 = '1) Машина уже приехала';
    } else {
        dataForCar0 = '1) Машина была сегодня';

    }

printElSet('car0', dataForCar0);

}


break;
} else if (getDateP().w >= car0Wek[car0Wek.length - 1] + 1) {
// Сл. неделя
dataForCar0 = '1) Машина приедет через: ' + ((7 - dayWekNow) + car0Wek[0]) + ' ' + returnDay((7 - dayWekNow) + car0Wek[0]);
printElSet('car0', dataForCar0);
break;
 }
}


// 2 машина


for (var i = 0; i < car1Wek.length; i++) {
    if (dayWekNow <= car1Wek[i]) {
    if (Boolean(car1Wek[i] - dayWekNow)) {
    // Эта неделя
    dataForCar1 = '2) Машина приедет через: ' + (car1Wek[i] - dayWekNow) + ' ' + returnDay(car1Wek[i] - dayWekNow);
    printElSet('car1', dataForCar1);
    
    } else {
    // Этот день
        if (car1[0] - h >= 0 && car1[1] - m > 0) {
            if (car1[0] - h > 0) {
                dataForCar1 = '2) Машина приедет через: ' + car1[0] - h + ':'+ car1[1] - m;
            } else {
                dataForCar1 = '2) Машина приедет через: ' + (car1[1] - m) + ' мин.';
            }
        } else if ((car1[0] + 3) - h >= 0 && car1[0] - h < 0) {
            dataForCar1 = '2) Машина уже приехала';
        } else {
            dataForCar1 = '2) Машина была сегодня';
    
        }
    
    printElSet('car1', dataForCar1);
    
    }
    
    
    break;
    } else if (getDateP().w >= car1Wek[car1Wek.length - 1] + 1) {
    // Сл. неделя
    dataForCar1 = '2) Машина приедет через: ' + ((7 - dayWekNow) + car1Wek[0]) + ' ' + returnDay((7 - dayWekNow) + car1Wek[0]);
    printElSet('car1', dataForCar1);
    break;
     }
    }



    // Машина м


    for (var i = 0; i < carMWek.length; i++) {
        if (dayWekNow <= carMWek[i]) {
        if (Boolean(carMWek[i] - dayWekNow)) {
        // Эта неделя
        dataForCarM = '3) Машина приедет через: ' + (carMWek[i] - dayWekNow) + ' ' + returnDay(carMWek[i] - dayWekNow);
        printElSet('carM', dataForCarM);
        
        } else {
        // Этот день
            if (carM[0] - h >= 0 && carM[1] - m > 0) {
                if (carM[0] - h > 0) {
                    dataForCarM = '3) Машина приедет через: ' + carM[0] - h + ':'+ carM[1] - m;
                } else {
                    dataForCarM = '3) Машина приедет через: ' + (carM[1] - m) + ' мин.';
                }
            } else if ((carM[0] + 3) - h >= 0 && carM[0] - h < 0) {
                dataForCarM = '3) Машина уже приехала';
            } else {
                dataForCarM = '3) Машина была сегодня';
        
            }
        
        printElSet('carM', dataForCarM);
        
        }
        
        
        break;
        } else if (getDateP().w >= carMWek[carMWek.length - 1] + 1) {
        // Сл. неделя
        dataForCarM = '3) Машина приедет через: ' + ((7 - dayWekNow) + carMWek[0]) + ' ' + returnDay((7 - dayWekNow) + carMWek[0]);
        printElSet('carM', dataForCarM);
        break;
         }
        }

        changeStyl('dn'+dayWekNow, 'backColor', '#9595ff');


}, 1000);


function returnDay(numDay) {
if (numDay == 1) {
return 'день';
} else if (numDay >= 2 && numDay <= 4) {
return 'дня';
} else {
return 'дней';
}
}

function insertAtCaret(areaId, text) {
    var txtarea = document.getElementById(areaId);
    if (!txtarea) { return; }

    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false ) );
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        strPos = range.text.length;
    } else if (br == "ff") {
        strPos = txtarea.selectionStart;
    }

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var ieRange = document.selection.createRange();
        ieRange.moveStart ('character', -txtarea.value.length);
        ieRange.moveStart ('character', strPos);
        ieRange.moveEnd ('character', 0);
        ieRange.select();
    } else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }

    txtarea.scrollTop = scrollPos;
}

var switchGameMFalg = false;

function switchGameM() {
    switchGameMFalg = !switchGameMFalg;

    if (switchGameMFalg) {
        changeStyl('MGame', 'display', 'contents')
        changeStyl('finGame', 'display', 'none')
        printElSet('switchGameM', 'Готовые игры')
    } else {
        changeStyl('MGame', 'display', 'none')
        changeStyl('finGame', 'display', 'contents')
        printElSet('switchGameM', 'Редактор игр')

    }


}




function game() {

    var rNum = random(0, 100);
    var numAttempts = 1;
    console.log(rNum);
    var str = '';
    
    alert('Я загадал число от 0 до 100.\nПопробуй его отгадать за наименьшее количество попыток.');
    var num = Number(prompt('Игра началась! Введи число'));
    
    while (num != rNum) {
    
        if (num == 1000) {return;}
    
    if (rNum > num) {
    str = 'Загаданное число больше. Попробуй ещё раз.';
    
    } else if (rNum < num) {
    str = 'Загаданное число меньше. Попробуй ещё раз.';
    } 
    num = Number(prompt(str));
    numAttempts++;
    }
    
    
    
    if (Number(localStorage.win) > numAttempts || (localStorage.win == undefined)) {
    
    alert('Вы угадали число за наименьшее количество попыток: ' + numAttempts);
    localStorage.win = numAttempts;
    localStorage.nameWin = prompt('Мы хотим записать имя человека который побил рекорд!!!');
    alert((localStorage.nameWin) + ' является новым победителем.');
    
    } else if (Number(localStorage.Nwin) < numAttempts || (localStorage.Nwin == undefined)) {
    
    alert('Вы угадали число за наибольшее количество попыток: ' + numAttempts);
    localStorage.Nwin = numAttempts;
    localStorage.nameNWin = prompt('Мы хотим записать имя человека который побил рекорд в негативе!');
    alert((localStorage.nameNWin) + ' является новым победителем по жизни.');
    
    
    } else {
    
    alert('Бинго, ты угадал!!! \n У тебя ушло на это ' + numAttempts + ' ' + returnAtt(numAttempts) + '\n( Рекорд игры '+ localStorage.win +' колличество попыток. Его сделал ' + localStorage.nameWin + ' )\n( Рекорд победителя по жизни '+ localStorage.Nwin +' колличество попыток. Им является ' + localStorage.nameNWin + ' )');
    
     }
    }
    
    
    function winres() {
    
    alert(' Рекорд игры: '+ localStorage.win +' колличество попыток. Его сделал ' + localStorage.nameWin + '\n\nРекорд победителя по жизни: '+ localStorage.Nwin +' колличество попыток. Им является ' + localStorage.nameNWin + ' )');
    
    }
    
    
    
    function returnAtt(num) {
    if (num == 1) {
    return 'попытка';
    } else if (num >= 2 && num <= 4) {
    return 'попытки';
    } else {
    return 'попыток';
    }
    }

    function winres() {

        alert(' Рекорд игры: '+ localStorage.win +' колличество попыток. Его сделал ' + localStorage.nameWin + '\n\nРекорд победителя по жизни: '+ localStorage.Nwin +' колличество попыток. Им является ' + localStorage.nameNWin + ' )');
        
    }