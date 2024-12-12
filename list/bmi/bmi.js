document.querySelector('html').addEventListener('click',function(){
    cal()
})

var cm = document.getElementById('cm');
var kg = document.getElementById('kg');
function cal(){
    var hei = new Decimal(cm.value);
    var wid = new Decimal(kg.value);
    var sou = new Decimal('10000');
    document.getElementById('result').innerHTML = wid.div((hei.mul(hei).div(sou))).toNumber();
}

//addevent
cm.addEventListener('keyup',function(){
    cal();
});
kg.addEventListener('keyup',function(){
    cal();
});
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

var den = document.getElementById('den');
var dens = document.querySelectorAll('.den')
let all = document.querySelector('html');
all.addEventListener('click',function(e){
    if(den.classList.contains('sm') && e.target.classList.contains('no')){
        dens.forEach(function(car){
            car.classList.toggle('sm');
            car.classList.toggle('bg');
            document.getElementById('cm').style.border = 'black solid 2px';
        });
    } else if (den.classList.contains('bg') && e.target.classList.contains('no') == false){
        dens.forEach(function(car){
            car.classList.toggle('sm');
            car.classList.toggle('bg');
            document.getElementById('cm').style.border = '';
            document.getElementById('kg').style.border = '';
            if(den.classList.contains('topinp') == false){
                den.classList.toggle('topinp')
            }
        });
    };
});

let numkeys = document.querySelectorAll('.numkey');
let topinput = document.getElementById('cm');
let botinput = document.getElementById('kg');
numkeys.forEach(function(car){
    car.addEventListener('click',function(){
        if(den.classList.contains('topinp')){
            if(den.classList.contains('bg')){
                if(car.classList.contains('dot')){
                    document.getElementById('cm').value = document.getElementById('cm').value + '.';
                } else if(car.classList.contains('change')){
                    document.getElementById('kg').style.border = 'black solid 2px';
                    document.getElementById('cm').style.border = '';
                    den.classList.toggle('topinp');
                } else {
                    document.getElementById('cm').value = document.getElementById('cm').value + car.getAttribute('id');
                }
                cal();
            }
        } else {
            if(den.classList.contains('bg')){
                if(car.classList.contains('dot')){
                    document.getElementById('kg').value = document.getElementById('kg').value + '.';
                } else if(car.classList.contains('change')){
                    document.getElementById('cm').style.border = 'black solid 2px';
                    document.getElementById('kg').style.border = '';
                    den.classList.toggle('topinp');
                } else {
                    document.getElementById('kg').value = document.getElementById('kg').value + car.getAttribute('id');
                }
                cal();
            }
        }
    })
})
document.getElementById('clear').addEventListener('click',function(){
    if(den.classList.contains('topinp')){
        document.getElementById('cm').value = document.getElementById('cm').value.substring(0,document.getElementById('cm').value.length-1);
        cal();
    } else {
        document.getElementById('kg').value = document.getElementById('kg').value.substring(0,document.getElementById('kg').value.length-1);
        cal();
    }
})
document.getElementById('allclear').addEventListener('click',function(){
    if(den.classList.contains('topinp')){
        document.getElementById('cm').value = '';
        cal();
    } else {
        document.getElementById('kg').value = '';
        cal();
    }
})