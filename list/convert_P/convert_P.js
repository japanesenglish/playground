//各単位の基準単位に対する割合
var num1 = '';
var num2 = '';
var num3 = '';
function list(un){
    let abrate = ''
    //長さ
    if(now == 0){
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
        } else if (un == 'inch'){
            abrate = new Decimal('0.0254');
        } else if (un == 'feet'){
            abrate = new Decimal('0.3048');
        } else if (un == 'yard'){
            abrate = new Decimal('0.9144');
        } else if (un == 'chain'){
            abrate = new Decimal('20.1168');
        } else if (un == 'furlong'){
            abrate = new Decimal('201.168');
        } else if (un == 'mile'){
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
    if(now == 1){
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
    if(now == 2){
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
    if(now == 3){
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

//単位選択ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let changes = document.querySelectorAll('.ABorBA')
var brate = '';
var arate = '';
function cal_ALL(){
    var un = unit_change[now].value;
    var nu = '';
    dis.forEach(function(car){
        if(car.classList.contains('open')){
            if(car.querySelector('.on') != null){
                nu = car.querySelector('.on').parentElement.querySelector('span:nth-of-type(1)').innerHTML;
                if(changes[now].value == 1){
                    brate = list(nu);
                    arate = list(un);
                    document.getElementById('bfc').innerHTML = nu;
                    document.getElementById('afc').innerHTML = un;
                } else if (changes[now].value == 2){
                    brate = list(un);
                    arate = list(nu);
                    document.getElementById('bfc').innerHTML = un;
                    document.getElementById('afc').innerHTML = nu;
                };
                rat(brate,arate);
                cal();
            } else {
                nu = '▷単位';
                if(changes[now].value == 1){
                    document.getElementById('bfc').innerHTML = nu;
                    document.getElementById('afc').innerHTML = un;
                } else if (changes[now].value == 2){
                    document.getElementById('bfc').innerHTML = un;
                    document.getElementById('afc').innerHTML = nu;
                };
            };
        };
    });
};
//selectの選択ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var unit_change = document.querySelectorAll('.convert_ALL');
function con(){
    units[now].forEach(function(car){
        if(changes[now].value == 1){
            let num_rate = list(car.innerHTML).div(list(unit_change[now].value));
            if(String(num_rate).split('.').length <= 4){

            }
            car.parentElement.querySelector('span:nth-of-type(2)').innerHTML = Number(num_rate).toExponential(4);
        } else if (changes[now].value == 2){
            let num_rate = list(unit_change[now].value).div(list(car.innerHTML));
            car.parentElement.querySelector('span:nth-of-type(2)').innerHTML = Number(num_rate).toExponential(4);
        };
    });
};
function uniuni(){
    units[now].forEach(function(car){
        if(changes[now].value == 1){
            car.parentElement.querySelector('span:nth-of-type(3)').innerHTML = '　' + unit_change[now].value;
        } else if (changes[now].value == 2){
            car.parentElement.querySelector('span:nth-of-type(3)').innerHTML = '　' + car.innerHTML;
        }
    })
}
//▷の選択
let goes = document.querySelectorAll('.go');
var pushed = [];
goes.forEach(function(car){
    car.addEventListener('click',function(){
        if(pushed[now] != null){
            pushed[now].style.background = '';
            pushed[now].classList.toggle('on');
        }
        pushed[now] = car;
        pushed[now].style.background = '#0000006c';
        pushed[now].classList.toggle('on');
        cal_ALL();
    })
})
//倍率計算
var rate ='';
let numbers = [];
function rat(b,a){
    if( b !== '' && a !== ''){
        num1 = new Decimal(a);
        num2 = new Decimal(b);
        rate = num2.div(num1);
        let rate_num = Number(rate);
        if(rate >= 1000){
            if(Number.isInteger(rate_num)){
                rate_num = rate_num.toLocaleString();
            } else {
                numbers = String(rate).split('.');
                rate_num = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
            }
        } else {
            rate_num = rate;
        }
        document.getElementById('rate').innerHTML = '(×'　+ rate_num + ')';
    };
};
//計算
var inp = document.querySelector('input');
let result = document.getElementById('result');
function cal(){
    inp = String(document.querySelector('input').value).replaceAll(',','');
    if(rate !== ''){
        if(inp !== ''){
            dinp = new Decimal(inp);
            var res = rate.mul(dinp);
            let res_num = Number(res);
            if(res >= 1000){
                if(Number.isInteger(res_num)){
                    res = res_num.toLocaleString();
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
    //入力欄のコンマ付け
    if(inp >= 1000){
        if(String(inp).includes('.') == false){
            document.querySelector('input').value = Number(inp).toLocaleString();
        } else {
            numbers = String(inp).split('.');
            res = Number(numbers[0]).toLocaleString() + '.' + numbers[1];
        }
    } else {
        document.querySelector('input').value = inp;
    }
}

//単位群の選択
let tops = document.querySelectorAll('.top');
var now = 0;
var dis = document.querySelectorAll('#unit_box>div');
tops.forEach(function(car){
    car.addEventListener('click',function(){
        if(car.getAttribute('id') == 'long_button'){
            now = 0;
            dis.forEach(function(dar){
                if(dar.classList.contains('open')){
                    dar.classList.toggle('open');
                };
            });
            document.getElementById('long_box').classList.toggle('open');
            dis.forEach(function(dar){
                dar.style.display = 'none';
            });
            document.getElementById('long_box').style.display = 'block';
            let white = document.querySelectorAll('.top');
            white.forEach(function(dar){
                dar.style.background = 'white';
                dar.style.top = '-5px';
            });
            document.getElementById('long_button').style.background = '#7a7a7a';
            document.getElementById('long_button').style.top = '0px';
        } else if (car.getAttribute('id') == 'heavy_button'){
            now = 1;
            dis.forEach(function(dar){
                if(dar.classList.contains('open')){
                    dar.classList.toggle('open');
                };
            });
            document.getElementById('heavy_box').classList.toggle('open');
            dis.forEach(function(dar){
                dar.style.display = 'none';
            });
            document.getElementById('heavy_box').style.display = 'block';
            let white = document.querySelectorAll('.top');
            white.forEach(function(dar){
                dar.style.background = 'white';
                dar.style.top = '-5px';
            });
            document.getElementById('heavy_button').style.background = '#7a7a7a';
            document.getElementById('heavy_button').style.top = '0px';
        } else if (car.getAttribute('id') == 'erea_button'){
            now = 2;
            dis.forEach(function(dar){
                if(dar.classList.contains('open')){
                    dar.classList.toggle('open');
                };
            });
            document.getElementById('erea_box').classList.toggle('open');
            dis.forEach(function(dar){
                dar.style.display = 'none';
            });
            document.getElementById('erea_box').style.display = 'block';
            let white = document.querySelectorAll('.top');
            white.forEach(function(dar){
                dar.style.background = 'white';
                dar.style.top = '-5px';
            });
            document.getElementById('erea_button').style.background = '#7a7a7a';
            document.getElementById('erea_button').style.top = '0px';
        } else if (car.getAttribute('id') == 'volume_button'){
            now = 3;
            dis.forEach(function(dar){
                if(dar.classList.contains('open')){
                    dar.classList.toggle('open');
                };
            });
            document.getElementById('volume_box').classList.toggle('open');
            dis.forEach(function(dar){
                dar.style.display = 'none';
            });
            document.getElementById('volume_box').style.display = 'block';
            let white = document.querySelectorAll('.top');
            white.forEach(function(dar){
                dar.style.background = 'white';
                dar.style.top = '-5px';
            });
            document.getElementById('volume_button').style.background = '#7a7a7a';
            document.getElementById('volume_button').style.top = '0px³';
        }
        //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        document.getElementById('rate').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        cal_ALL();
        uniuni();
    })
})
//文字（昇順・降順）ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var units = [document.querySelectorAll('#long_box>div:nth-of-type(2)>div>span:nth-of-type(1)'),document.querySelectorAll('#heavy_box>div:nth-of-type(2)>div>span:nth-of-type(1)'),document.querySelectorAll('#erea_box>div:nth-of-type(2)>div>span:nth-of-type(1)'),document.querySelectorAll('#volume_box>div:nth-of-type(2)>div>span:nth-of-type(1)')];
var units_asc = [];
var units_des = [];
units.forEach(function(car){
    let hairetu = [...car];
    hairetu.sort((a,b)=>{
        if(a.innerHTML > b.innerHTML){
            return 1;
        } else if (a.innerHTML < b.innerHTML){
            return -1;
        } else {
            return 0;
        };
    });
    units_asc.push(hairetu);
});
units.forEach(function(car){
    let hairetu = [...car];
    hairetu.sort((a,b)=>{
        if(a.innerHTML > b.innerHTML){
            return -1;
        } else if (a.innerHTML < b.innerHTML){
            return 1;
        } else {
            return 0;
        };
    });
    units_des.push(hairetu);
});
//数字（昇順・降順）ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var nums = [document.querySelectorAll('#long_box>div:nth-of-type(2)>div>span:nth-of-type(2)'),document.querySelectorAll('#heavy_box>div:nth-of-type(2)>div>span:nth-of-type(2)'),document.querySelectorAll('#erea_box>div:nth-of-type(2)>div>span:nth-of-type(2)'),document.querySelectorAll('#volume_box>div:nth-of-type(2)>div>span:nth-of-type(2)')];
var nums_asc = [];
var nums_des = [];
nums.forEach(function(car){
    let hairetu = [...car];
    hairetu.sort((a,b)=>{
        return Number(a.innerHTML) - Number(b.innerHTML);
    });
    nums_asc.push(hairetu);
});
nums.forEach(function(car){
    let hairetu = [...car];
    hairetu.sort((a,b)=>{
        return Number(b.innerHTML) - Number(a.innerHTML);
    });
    nums_des.push(hairetu);
})
//並び替え
let orders = document.querySelectorAll('.order');
orders.forEach(function(car){
    car.addEventListener('change',function(e){
        if(e.target.value == 1){
            units[now].forEach(function(car){
                car.parentElement.parentElement.appendChild(car.parentElement);
            });
        } else if (e.target.value == 2){
            units_asc[now].forEach(function(car){
                car.parentElement.parentElement.appendChild(car.parentElement);
            });
        } else if (e.target.value == 3){
            units_des[now].forEach(function(car){
                car.parentElement.parentElement.appendChild(car.parentElement);
            });
        } else if (e.target.value == 4){
            nums_asc[now].forEach(function(car){
                car.parentElement.parentElement.appendChild(car.parentElement);
            });
        } else if (e.target.value == 5){
            nums_des[now].forEach(function(car){
                car.parentElement.parentElement.appendChild(car.parentElement);
            });
        };
    });
});
//詳細オープン
let ac = document.querySelectorAll('#unit_box>div>div:nth-of-type(2)>div');
ac.forEach(function(car){
    car.addEventListener('click',function(e){
        if(e.target.classList.contains('go') == false && e.target.classList.contains('definition') == false){
            if(car.classList.contains('open') == false){
                car.classList.toggle('open');
                car.querySelector('div').style.height = car.querySelector('div').scrollHeight + 'px';
                setTimeout(() => {
                    car.querySelector('div').style.height = 'auto';
                }, 300);
            } else {
                car.classList.toggle('open');
                car.querySelector('div').style.height = car.querySelector('div').scrollHeight + 'px';
                setTimeout(() => {
                    car.querySelector('div').style.height = '';
                }, 1);
            }
        }
    })
})

//電卓
var den = document.getElementById('den');
var dens = document.querySelectorAll('.den')
let all = document.querySelector('html');
let cicon = document.querySelector('.iconc');
all.addEventListener('click',function(e){
    if(den.classList.contains('in') == false && e.target.classList.contains('iconc')){
        dens.forEach(function(car){
            car.classList.toggle('in');
        });
        cicon.classList.toggle('out');
    } else if (den.classList.contains('in') && e.target.classList.contains('no') == false){
        dens.forEach(function(car){
            car.classList.toggle('in');
        });
        cicon.classList.toggle('out');
    };
});
let numkeys = document.querySelectorAll('.numkey');
numkeys.forEach(function(car){
    car.addEventListener('click',function(){
        if(den.classList.contains('in')){
            if(car.classList.contains('dot')){
                document.querySelector('input').value = document.querySelector('input').value + '.';
            } else {
                document.querySelector('input').value = document.querySelector('input').value + car.getAttribute('id');
            }
            cal();
        }
    })
})
document.getElementById('clear').addEventListener('click',function(){
    document.querySelector('input').value = document.querySelector('input').value.substring(0,document.querySelector('input').value.length-1);
    cal();
})
document.getElementById('allclear').addEventListener('click',function(){
    document.querySelector('input').value = '';
    cal();
})

//function発動タイミング
inp.addEventListener('keyup',function(){
    cal();
});
inp.addEventListener('change',function(){
    cal();
});
inp.addEventListener('DOMFocusOut',function(){
    cal();
});
unit_change.forEach(function(car){
    car.addEventListener('change',function(){
        cal_ALL();
        con();
        uniuni();
    });
})
changes.forEach(function(car){
    car.addEventListener('change',function(){
        cal_ALL();
        con();
        uniuni();
    });
});
window.addEventListener('DOMContentLoaded',cal_ALL(),con(),uniuni());
