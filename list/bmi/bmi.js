//計算
var cm = document.getElementById('cm');
var kg = document.getElementById('kg');
function cal(){
    //dot移動
    if(cm.value == ''){
        document.getElementById('dot').style.top = '';
    } else {
        document.getElementById('dot').style.top = cm.value - 2 + 'px';
    };
    if(kg.value == ''){
        document.getElementById('dot').style.left = '';
    } else {
        document.getElementById('dot').style.left = kg.value * 2 - 2 + 'px';
    };
    //bar移動
    let gcm = cm.value;
    let num1 = 16 * gcm * gcm / 20000;
    let num2 = 17 * gcm * gcm / 20000;
    let num3 = 18.5 * gcm * gcm / 20000;
    let num4 = 25 * gcm * gcm / 20000;
    let num5 = 30 * gcm * gcm / 20000;
    let num6 = 35 * gcm * gcm / 20000;
    let num7 = 40 * gcm * gcm / 20000;
    let gggg = 'linear-gradient(to right, rgb(85, 85, 255) ' + num1 + '%,'
                + ' rgb(170, 170, 255) ' + num2 + '%,'
                + ' white ' + num3 + '%,'
                + ' white ' + num4 + '%,'
                + ' rgb(255, 192, 192) ' + num5 + '%,'
                + ' rgb(255, 128, 128) ' + num6 + '%,'
                + ' rgb(255, 64, 64) ' + num7 + '%';
    document.getElementById('bar').style.background = gggg;
    document.getElementById('sitaya').style.left = kg.value * 2 - 8 + 'px';
    //BMI計算
    if(cm.value !== '' && kg.value !== ''){
        var hei = new Decimal(cm.value);
        var wid = new Decimal(kg.value);
        var sou = new Decimal('10000');
        var res = wid.div((hei.mul(hei).div(sou))).toNumber();
        document.getElementById('result').innerHTML = res;
    }
    //who基準
    let cell = document.querySelectorAll('td');
    if(res < 16){
        document.getElementById('migiya').style.top = 41 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('aa')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res <= 16.99){
        document.getElementById('migiya').style.top = 74 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('bb')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res <= 18.49){
        document.getElementById('migiya').style.top = 107 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('cc')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res <= 24.99){
        document.getElementById('migiya').style.top = 140 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('dd')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res <= 29.99){
        document.getElementById('migiya').style.top = 173 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('ee')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res <= 34.99){
        document.getElementById('migiya').style.top = 206 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('ff')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res <= 39.99){
        document.getElementById('migiya').style.top = 239 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('gg')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else if (res > 39.99){
        document.getElementById('migiya').style.top = 272 + 'px';
        cell.forEach(function(car){
            if(car.classList.contains('hh')){
                car.style.background = '#00000042';
            } else {
                car.style.background = '';
            };
        });
    } else {
        document.getElementById('migiya').style.top = '';
        cell.forEach(function(car){
            car.style.background = '';
        });
    };
};

//bar
let bars = document.querySelectorAll('.line');
let barcount = -1;
bars.forEach(function(car){
    console.log(car,barcount)
    car.style.left = barcount + 'px';
    barcount = barcount + 20;
})

//グラデーション
let grad = document.querySelectorAll('.grad');
let gcm = 0;
grad.forEach(function(car){
    gcm = gcm + 1;
    let num1 = 16 * gcm * gcm / 20000;
    let num2 = 17 * gcm * gcm / 20000;
    let num3 = 18.5 * gcm * gcm / 20000;
    let num4 = 25 * gcm * gcm / 20000;
    let num5 = 30 * gcm * gcm / 20000;
    let num6 = 35 * gcm * gcm / 20000;
    let num7 = 40 * gcm * gcm / 20000;
    let gggg = 'linear-gradient(to right, rgb(85, 85, 255) ' + num1 + '%,'
                + ' rgb(170, 170, 255) ' + num2 + '%,'
                + ' white ' + num3 + '%,'
                + ' white ' + num4 + '%,'
                + ' rgb(255, 192, 192) ' + num5 + '%,'
                + ' rgb(255, 128, 128) ' + num6 + '%,'
                + ' rgb(255, 64, 64) ' + num7 + '%';
    car.style.background = gggg;
})

//addevent
cm.addEventListener('keyup',function(){
    cal();
});
kg.addEventListener('keyup',function(){
    cal();
});
cm.addEventListener('DOMFocusOut',function(){
    cal();
});
kg.addEventListener('DOMFocusOut',function(){
    cal();
});

//電卓
var den = document.getElementById('den');
var dens = document.querySelectorAll('.den')
let all = document.querySelector('html');
let cicon = document.querySelector('.iconc');
all.addEventListener('click',function(e){
    if(den.classList.contains('in') == false && e.target.classList.contains('iconc')){
        dens.forEach(function(car){
            car.classList.toggle('in');
            document.getElementById('cm').style.border = 'black solid 2px';
        });
        cicon.classList.toggle('out');
    } else if (den.classList.contains('in') && e.target.classList.contains('no') == false){
        dens.forEach(function(car){
            car.classList.toggle('in');
            document.getElementById('cm').style.border = '';
            document.getElementById('kg').style.border = '';
            if(den.classList.contains('topinp') == false){
                den.classList.toggle('topinp');
            };
        });
        cicon.classList.toggle('out');
    };
});

let numkeys = document.querySelectorAll('.numkey');
numkeys.forEach(function(car){
    car.addEventListener('click',function(){
        if(den.classList.contains('topinp')){
            if(den.classList.contains('in')){
                if(car.classList.contains('dot')){
                    document.getElementById('cm').value = document.getElementById('cm').value + '.';
                } else if(car.classList.contains('change')){
                    document.getElementById('kg').style.border = 'black solid 2px';
                    document.getElementById('cm').style.border = '';
                    document.getElementById('kg').value = '';
                    den.classList.toggle('topinp');
                } else {
                    document.getElementById('cm').value = document.getElementById('cm').value + car.getAttribute('id');
                }
            }
        } else {
            if(den.classList.contains('in')){
                if(car.classList.contains('dot')){
                    document.getElementById('kg').value = document.getElementById('kg').value + '.';
                } else if(car.classList.contains('change')){
                    document.getElementById('cm').style.border = 'black solid 2px';
                    document.getElementById('kg').style.border = '';
                    document.getElementById('cm').value = '';
                    den.classList.toggle('topinp');
                } else {
                    document.getElementById('kg').value = document.getElementById('kg').value + car.getAttribute('id');
                }
            }
        }
        cal();
    })
})
document.getElementById('clear').addEventListener('click',function(){
    if(den.classList.contains('topinp')){
        document.getElementById('cm').value = document.getElementById('cm').value.substring(0,document.getElementById('cm').value.length-1);
    } else {
        document.getElementById('kg').value = document.getElementById('kg').value.substring(0,document.getElementById('kg').value.length-1);
    }
    cal();
})
document.getElementById('allclear').addEventListener('click',function(){
    if(den.classList.contains('topinp')){
        document.getElementById('cm').value = '';
    } else {
        document.getElementById('kg').value = '';
    }
    cal();
})