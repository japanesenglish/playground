//単位群の選択
let tops = document.querySelectorAll('.top');
let z = 1;
var now = 'a';
tops.forEach(function(car){
    car.addEventListener('click',function(){
        z = z + 1;
        if(car.classList.contains('aaa')){
            now = 'a';
            document.getElementById('aaabox').style.zIndex = z;
            document.getElementById('aaabox').style.display = 'block';
            document.getElementById('bbbbox').style.display = 'none';
            document.getElementById('cccbox').style.display = 'none';
            document.getElementById('dddbox').style.display = 'none';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.aaa').style.background = '#c4c4c4';
            document.querySelector('.top.bbb').style.background = 'white';
            document.querySelector('.top.ccc').style.background = 'white';
            document.querySelector('.top.ddd').style.background = 'white';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.aaa').style.top = '0';
            document.querySelector('.top.bbb').style.top = '-5px';
            document.querySelector('.top.ccc').style.top = '-5px';
            document.querySelector('.top.ddd').style.top = '-5px';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        } else if (car.classList.contains('bbb')){
            now = 'b';
            document.getElementById('bbbbox').style.zIndex = z;
            document.getElementById('bbbbox').style.display = 'block';
            document.getElementById('aaabox').style.display = 'none';
            document.getElementById('cccbox').style.display = 'none';
            document.getElementById('dddbox').style.display = 'none';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.bbb').style.background = '#c4c4c4';
            document.querySelector('.top.aaa').style.background = 'white';
            document.querySelector('.top.ccc').style.background = 'white';
            document.querySelector('.top.ddd').style.background = 'white';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.bbb').style.top = '0';
            document.querySelector('.top.aaa').style.top = '-5px';
            document.querySelector('.top.ccc').style.top = '-5px';
            document.querySelector('.top.ddd').style.top = '-5px';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        } else if (car.classList.contains('ccc')){
            now = 'c';
            document.getElementById('cccbox').style.zIndex = z;
            document.getElementById('cccbox').style.display = 'block';
            document.getElementById('aaabox').style.display = 'none';
            document.getElementById('bbbbox').style.display = 'none';
            document.getElementById('dddbox').style.display = 'none';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.ccc').style.background = '#c4c4c4';
            document.querySelector('.top.aaa').style.background = 'white';
            document.querySelector('.top.bbb').style.background = 'white';
            document.querySelector('.top.ddd').style.background = 'white';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.ccc').style.top = '0';
            document.querySelector('.top.aaa').style.top = '-5px';
            document.querySelector('.top.bbb').style.top = '-5px';
            document.querySelector('.top.ddd').style.top = '-5px';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        } else if (car.classList.contains('ddd')){
            now = 'd';
            document.getElementById('dddbox').style.zIndex = z;
            document.getElementById('dddbox').style.display = 'block';
            document.getElementById('aaabox').style.display = 'none';
            document.getElementById('bbbbox').style.display = 'none';
            document.getElementById('cccbox').style.display = 'none';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.ddd').style.background = '#c4c4c4';
            document.querySelector('.top.aaa').style.background = 'white';
            document.querySelector('.top.bbb').style.background = 'white';
            document.querySelector('.top.ccc').style.background = 'white';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
            document.querySelector('.top.ddd').style.top = '0';
            document.querySelector('.top.aaa').style.top = '-5px';
            document.querySelector('.top.bbb').style.top = '-5px';
            document.querySelector('.top.ccc').style.top = '-5px';
            //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        }
        //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        document.getElementById('bfc').innerHTML = '単位：下から選択';
        document.getElementById('afc').innerHTML = '単位：下から選択';
        document.getElementById('rate').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        last = '';
        brate = '';
        arate = '';
    })
})

//各単位の基準単位に対する割合
var num1 = '';
var num2 = '';
var num3 = '';
function list(un){
    let abrate = ''
    //長さ
    if(now == 'a'){
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
    }
    //重さ
    if(now == 'b'){
        if(un == 'ng'){
            abrate = new Decimal('0.000000001');
        } else if (un == 'μg'){
            abrate = new Decimal('0.000001');
        } else if (un == 'mg'){
            abrate = new Decimal('0.001');
        } else if (un == 'g'){
            abrate = new Decimal('1');
        } else if (un == 'kg'){
            abrate = new Decimal('1000');
        } else if (un == 't'){
            abrate = new Decimal('1000000');
        } else if (un == '厘'){
            abrate = new Decimal('0.0375');
        } else if (un == '分'){
            abrate = new Decimal('0.375');
        } else if (un == '匁'){
            abrate = new Decimal('3.75');
        } else if (un == '斤'){
            abrate = new Decimal('600');
        } else if (un == '貫'){
            abrate = new Decimal('3750');
        } else if (un == 'グレーン'){
            abrate = new Decimal('0.06479891');
        } else if (un == 'ドラム'){
            abrate = new Decimal('1.7718451953125');
        } else if (un == 'オンス'){
            abrate = new Decimal('28.349523125');
        } else if (un == 'ポンド'){
            abrate = new Decimal('453.59237');
        } else if (un == 'ストーン'){
            abrate = new Decimal('6,350.29318');
        } else if (un == 'カラット'){
            abrate = new Decimal('0.2');
        }
    }
    //面積
    if(now == 'c'){
        if(un == 'n㎡'){
            abrate = new Decimal('0.000000000000000001');
        } else if (un == 'μ㎡'){
            abrate = new Decimal('0.000000000001');
        } else if (un == 'm㎡'){
            abrate = new Decimal('0.000001');
        } else if (un == 'c㎡'){
            abrate = new Decimal('0.0001');
        } else if (un == '㎡'){
            abrate = new Decimal('1');
        } else if (un == 'k㎡'){
            abrate = new Decimal('1000000');
        } else if (un == 'a'){
            abrate = new Decimal('100');
        } else if (un == 'ha'){
            abrate = new Decimal('10000');
        } else if (un == '坪(歩)'){
            num1 = new Decimal('60');
            num2 = new Decimal('33');
            num3 = num1.div(num2);
            abrate = num3.mul(num3);
        } else if (un == '畝'){
            num1 = new Decimal('60');
            num2 = new Decimal('33');
            num3 = num1.div(num2);
            num1 = new Decimal('30');
            abrate = num3.mul(num3).mul(num1);
        } else if (un == '反(段)'){
            num1 = new Decimal('60');
            num2 = new Decimal('33');
            num3 = num1.div(num2);
            num1 = new Decimal('300');
            abrate = num3.mul(num3).mul(num1);
        } else if (un == '町'){
            num1 = new Decimal('60');
            num2 = new Decimal('33');
            num3 = num1.div(num2);
            num1 = new Decimal('3000');
            abrate = num3.mul(num3).mul(num1);
        } else if (un == '平方フィート'){
            abrate = new Decimal('0.09290304');
        } else if (un == '平方ヤード'){
            abrate = new Decimal('0.83612736');
        } else if (un == '平方マイル'){
            abrate = new Decimal('2589988.110336');
        } else if (un == 'ルード'){
            abrate = new Decimal('1011.7141056');
        } else if (un == 'エーカー'){
            abrate = new Decimal('4046.8564224');
        } else if (un == '東京ドーム'){
            abrate = new Decimal('46755');
        } else if (un == '日本'){
            abrate = new Decimal('377974790000');
        } else if (un == '世界'){
            abrate = new Decimal('130094010000000');
        }
    }
    //体積
    if(now == 'd'){
        if(un == 'n㎥'){
            abrate = new Decimal('0.000000000000000000000000001');
        } else if (un == 'μ㎥'){
            abrate = new Decimal('0.000000000000000001');
        } else if (un == 'm㎥'){
            abrate = new Decimal('0.000000001');
        } else if (un == 'c㎥'){
            abrate = new Decimal('0.000001');
        } else if (un == '㎥'){
            abrate = new Decimal('1');
        } else if (un == 'k㎥'){
            abrate = new Decimal('1000000000');
        } else if (un == 'mL(cc)'){
            abrate = new Decimal('0.000001');
        } else if (un == 'dL'){
            abrate = new Decimal('0.0001');
        } else if (un == 'L'){
            abrate = new Decimal('0.001');
        } else if (un == 'kL'){
            abrate = new Decimal('1');
        } else if (un == '勺'){
            num1 = new Decimal('2401');
            num2 = new Decimal('133100000')
            abrate = num1.div(num2);
        } else if (un == '合'){
            num1 = new Decimal('2401');
            num2 = new Decimal('13310000')
            abrate = num1.div(num2);
        } else if (un == '升'){
            num1 = new Decimal('2401');
            num2 = new Decimal('1331000')
            abrate = num1.div(num2);
        } else if (un == '斗'){
            num1 = new Decimal('2401');
            num2 = new Decimal('133100')
            abrate = num1.div(num2);
        } else if (un == '石'){
            num1 = new Decimal('2401');
            num2 = new Decimal('13310')
            abrate = num1.div(num2);
        } else if (un == 'ガロン(日)'){
            abrate = new Decimal('0.003785412');
        } else if (un == 'ガロン(米)'){
            abrate = new Decimal('0.003785411784');
        } else if (un == 'ガロン(英)'){
            abrate = new Decimal('0.00454609');
        } else if (un == '小さじ'){
            abrate = new Decimal('0.000005');
        } else if (un == '大さじ'){
            abrate = new Decimal('0.000015');
        } else if (un == '東京ドーム'){
            abrate = new Decimal('1240000');
        }
    }
    //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
    return abrate;
}
//変換前の選択
let bu1 = document.querySelectorAll('#aaabef span');
let bu2 = document.querySelectorAll('#bbbbef span');
let bu3 = document.querySelectorAll('#cccbef span');
let bu4 = document.querySelectorAll('#dddbef span');
//要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
let bunions = [...bu1,...bu2,...bu3,...bu4]//要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
var brate = '';
bunions.forEach(function(car){
    car.addEventListener('click',function(){
        let un = car.innerText; 
        document.getElementById('bfc').innerHTML = un;
        brate = list(un);
        rat(brate,arate);
        ans();
    });
});
//変換後の選択
let au1 = document.querySelectorAll('#aaaaft span');
let au2 = document.querySelectorAll('#bbbaft span');
let au3 = document.querySelectorAll('#cccaft span');
let au4 = document.querySelectorAll('#dddaft span');
//要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
let aunions = [...au1,...au2,...au3,...au4]//要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
var arate = '';
aunions.forEach(function(car){
    car.addEventListener('click',function(){
        let un = car.innerText; 
        document.getElementById('afc').innerHTML = un;
        arate = list(un);
        rat(brate,arate);
        ans();
    })
})
//倍率計算
let numbers = [];
function rat(b,a){
    if( b !== '' && a !== ''){
        num1 = new Decimal(a);
        num2 = new Decimal(b);
        last = num2.div(num1);
        var rate = last.toNumber();
        if(rate >= 1000){
            if(Number.isInteger(rate)){
                rate = rate.toLocaleString();
            } else {
                numbers = String(rate).split('.');
                rate = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
            }
        }
        document.getElementById('rate').innerHTML = '(×'　+ rate + ')';
    };
};
//計算
var last = '';
let inp = document.querySelector('input');
let result = document.getElementById('result');
function ans(){
    if(last !== ''){
        if(inp.value !== ''){
            var res = last.mul(inp.value).toNumber();
            if(res >= 1000){
                if(Number.isInteger(res)){
                    res = res.toLocaleString();
                } else {
                    numbers = String(res).split('.');
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
    ans();
});
inp.addEventListener('change',function(){
    ans();
});
inp.addEventListener('DOMFocusOut',function(){
    ans();
});
