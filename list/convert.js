//単位群の選択
let tops = document.querySelectorAll('.emp');
let z = 1;
tops.forEach(function(car){
    car.addEventListener('click',function(){
        z = z + 1;
        if(car.classList.contains('lonn')){
            let aa = document.getElementById('lon');
            aa.style.zIndex = z;
        } else if (car.classList.contains('hevv')){
            let aa = document.getElementById('hev');
            aa.style.zIndex = z;
        }
    })
})

//各単位の基準単位に対する割合
var num1 = '';
var num2 = '';
function list(un){
    let abrate = ''
        if(un == 'nm'){
            abrate = new Decimal('0.000000001');
        } else if (un == 'μm'){
            abrate = new Decimal('0.000001');
        } else if (un == 'mm'){
            abrate = new Decimal('0.001');
        } else if (un == 'cm'){
            abrate = new Decimal('0.01');
        } else if (un == 'm'){
            abrate = new Decimal('1');
        } else if (un == 'km'){
            abrate = new Decimal('1000');
        } else if (un == '厘'){
            num1 = new Decimal('1');
            num2 = new Decimal('3300');
            abrate = num1.div(num2);
        } else if (un == '分'){
            num1 = new Decimal('1');
            num2 = new Decimal('330');
            abrate = num1.div(num2);
        } else if (un == '寸'){
            num1 = new Decimal('1');
            num2 = new Decimal('33');
            abrate = num1.div(num2);
        } else if (un == '尺'){
            num1 = new Decimal('10');
            num2 = new Decimal('33');
            abrate = num1.div(num2);
        } else if (un == '間'){
            num1 = new Decimal('60');
            num2 = new Decimal('33');
            abrate = num1.div(num2);
        } else if (un == '丈'){
            num1 = new Decimal('100');
            num2 = new Decimal('33');
            abrate = num1.div(num2);
        } else if (un == '町'){
            num1 = new Decimal('3600');
            num2 = new Decimal('33');
            abrate = num1.div(num2);
        } else if (un == '里'){
            num1 = new Decimal('129600');
            num2 = new Decimal('33');
            abrate = num1.div(num2);
        } else if (un == 'インチ'){
            abrate = new Decimal('0.0254');
        } else if (un == 'フィート'){
            abrate = new Decimal('0.3048');
        } else if (un == 'ヤード'){
            abrate = new Decimal('0.9144');
        } else if (un == 'チェーン'){
            abrate = new Decimal('20.1168');
        } else if (un == 'ハロン'){
            abrate = new Decimal('201.168');
        } else if (un == 'マイル'){
            abrate = new Decimal('1609.344');
        } else if (un == '光秒'){
            abrate = new Decimal('299792458');
        } else if (un == '光分'){
            abrate = new Decimal('17987547480');
        } else if (un == '光時'){
            abrate = new Decimal('1079252848800');
        } else if (un == '光日'){
            abrate = new Decimal('25902068371200');
        } else if (un == '光年'){
            abrate = new Decimal('9460730472580800');
        }
        return abrate;
}
//変換前の選択
let bl = document.querySelector('#belo');
let bu1 = bl.querySelectorAll('span');
let bh = document.querySelector('#behe');
let bu2 = bh.querySelectorAll('span');
let bunions = [...bu1,...bu2]
var brnum = '';
bunions.forEach(function(car){
    car.addEventListener('click',function(){
        let un = car.innerText; 
        document.getElementById('bfc').innerHTML = un;
        var brate = list(un);
        brnum = brate;
        rat(brnum,arnum);
        ooo();
        brate = brate.toNumber();
        if(brate >= 1000){
            if(Number.isInteger(brate)){
                brate = brate.toLocaleString();
            } else {
                var numbers = String(brate).split('.');
                brate = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
            }
        }
        document.getElementById('brate').innerHTML = brate + 'm';
    });
});
//変換後の選択
let al = document.querySelector('#aflo');
let au1 = al.querySelectorAll('span');
let ah = document.querySelector('#afhe');
let au2 = ah.querySelectorAll('span');
let aunions = [...au1,...au2]
var arnum = '';
aunions.forEach(function(car){
    car.addEventListener('click',function(){
        let un = car.innerText; 
        document.getElementById('afc').innerHTML = un;
        var arate = list(un);
        arnum = arate;
        rat(brnum,arnum);
        ooo();
        arate = arate.toNumber();
        if(arate >= 1000){
            if(Number.isInteger(arate)){
                arate = arate.toLocaleString();
            } else {
                var numbers = String(arate).split('.');
                arate = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
            }
        }
        document.getElementById('arate').innerHTML = arate + 'm';
    })
})
//倍率計算
function rat(b,a){
    if( b !== '' && a !== ''){
        var num1 = new Decimal(a);
        var num2 = new Decimal(b);
        last = num1.div(num2);
        var rate = last.toNumber();
        if(rate >= 1000){
            if(Number.isInteger(rate)){
                rate = rate.toLocaleString();
            } else {
                var numbers = String(rate).split('.');
                rate = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
            }
        }
        document.getElementById('rate').innerHTML = rate + '倍';
    };
};
//計算
var last = ''
let inp = document.querySelector('input');
let result = document.getElementById('result');
function ooo(){
    if(last !== ''){
        if(inp.value !== ''){
            console.log(last)
            let res = last.mul(inp.value).toNumber();
            if(res >= 1000){
                if(Number.isInteger(res)){
                    res = res.toLocaleString();
                } else {
                    var numbers = String(res).split('.');
                    res = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
                }
            }
            result.innerHTML = res;
        } else {
            result.innerHTML = '';
        }
    }
}
inp.addEventListener('keyup',function(){
    ooo();
});
inp.addEventListener('change',function(){
    ooo();
});
inp.addEventListener('DOMFocusOut',function(){
    ooo();
});
