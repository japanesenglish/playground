//単位群の選択
let tops = document.querySelectorAll('.top');
let z = 1;
var now = 'long';
tops.forEach(function(car){
    car.addEventListener('click',function(){
        z = z + 1;
        if(car.getAttribute('id') == 'long_button'){
            now = 'long';
            let dis = document.getElementById('unit_box').querySelectorAll('#unit_box>div');
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
            now = 'heavy';
            let dis = document.getElementById('unit_box').querySelectorAll('#unit_box>div');
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
            now = 'erea';
            let dis = document.getElementById('unit_box').querySelectorAll('#unit_box>div');
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
            now = 'volume';
            let dis = document.getElementById('unit_box').querySelectorAll('#unit_box>div');
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
            document.getElementById('volume_button').style.top = '0px';
        }
        //要追加ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
        document.getElementById('bfc').innerHTML = '単位：下から選択';
        document.getElementById('afc').innerHTML = '単位：下から選択';
        document.getElementById('rate').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        last = '';
        brate = '';
        arate = '';
        if(before_unit !== ''){
            before_unit.style.background = 'white';
        };
        if(after_unit !== ''){
            after_unit.style.background = 'white';
        };
    })
})
//詳細オープン
let ac = document.querySelectorAll('#unit_box>div>div');
ac.forEach(function(car){
    car.addEventListener('click',function(e){
        if(e.target.classList.contains('before') == false && e.target.classList.contains('after') == false && e.target.classList.contains('definition') == false){
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
//文字並べ替え
var units = [document.querySelectorAll('#long_box>div>span:nth-of-type(1)'),document.querySelectorAll('#heavy_box>div>span:nth-of-type(1)'),document.querySelectorAll('#erea_box>div>span:nth-of-type(1)'),document.querySelectorAll('#volume_box>div>span:nth-of-type(1)')];
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
let unit_order_button = document.getElementById('unit_order');
unit_order_button.addEventListener('click',function(){
    if(unit_order_button.classList.contains('asc') == false){
        unit_order_button.classList.toggle('asc');
        units_asc.forEach(function(car){
            car.forEach(function(dar){
                dar.parentElement.parentElement.appendChild(dar.parentElement);
            });
        });
    } else if (unit_order_button.classList.contains('asc') && unit_order_button.classList.contains('des') == false){
        unit_order_button.classList.toggle('des');
        units_des.forEach(function(car){
            car.forEach(function(dar){
                dar.parentElement.parentElement.appendChild(dar.parentElement);
            });
        });
    } else {
        unit_order_button.classList.toggle('asc');
        unit_order_button.classList.toggle('des');
        units.forEach(function(car){
            car.forEach(function(dar){
                dar.parentElement.parentElement.appendChild(dar.parentElement);
            });
        });
    };
});
//数字並び替え
var nums = [document.querySelectorAll('#long_box>div>span:nth-of-type(2)'),document.querySelectorAll('#heavy_box>div>span:nth-of-type(2)'),document.querySelectorAll('#erea_box>div>span:nth-of-type(2)'),document.querySelectorAll('#volume_box>div>span:nth-of-type(2)')];
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
let num_order_button = document.getElementById('num_order');
num_order_button.addEventListener('click',function(){
    if(num_order_button.classList.contains('asc') == false){
        num_order_button.classList.toggle('asc');
        nums_asc.forEach(function(car){
            car.forEach(function(dar){
                dar.parentElement.parentElement.appendChild(dar.parentElement);
            });
        });
    } else if (num_order_button.classList.contains('asc') && num_order_button.classList.contains('des') == false){
        num_order_button.classList.toggle('des');
        nums_des.forEach(function(car){
            car.forEach(function(dar){
                dar.parentElement.parentElement.appendChild(dar.parentElement);
            });
        });
    } else {
        num_order_button.classList.toggle('asc');
        num_order_button.classList.toggle('des');
        nums.forEach(function(car){
            car.forEach(function(dar){
                dar.parentElement.parentElement.appendChild(dar.parentElement);
            });
        });
    };
});


//各単位の基準単位に対する割合
var num1 = '';
var num2 = '';
var num3 = '';
function list(un){
    let abrate = ''
    //長さ
    if(now == 'long'){
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
    if(now == 'heavy'){
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
    if(now == 'erea'){
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
    if(now == 'volume'){
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
let bunions = document.querySelectorAll('.before');
var brate = '';
var before_unit = '';
bunions.forEach(function(car){
    car.addEventListener('click',function(){
        let un = car.parentElement.querySelector('span').innerText;
        if(before_unit !== ''){
            before_unit.style.background = '';
        };
        before_unit = car;
        before_unit.style.background = '#0000006c';
        document.getElementById('bfc').innerHTML = un;
        brate = list(un);
        rat(brate,arate);
        cal();
    });
});
//変換後の選択
let aunions = document.querySelectorAll('.after');
var arate = '';
var after_unit = '';
aunions.forEach(function(car){
    car.addEventListener('click',function(){
        let un = car.parentElement.querySelector('span').innerText;
        if(after_unit !== ''){
            after_unit.style.background = '';
        };
        after_unit = car;
        after_unit.style.background = '#0000006c';
        document.getElementById('afc').innerHTML = un;
        arate = list(un);
        rat(brate,arate);
        cal();
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
    inp = document.querySelector('input');
    inp = String(inp.value).replaceAll(',','');
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
inp.addEventListener('keyup',function(){
    cal();
});
inp.addEventListener('change',function(){
    cal();
});
inp.addEventListener('DOMFocusOut',function(){
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
