//answer
let answers = [1,2];
//ac
let acs = document.querySelectorAll('.ac');
acs.forEach(function(car){
    car.addEventListener('click',function(){
        if(car.classList.contains('open') == false){
            car.classList.toggle('open');
            car.parentElement.querySelector('.acbox').style.height = car.parentElement.querySelector('.acbox').scrollHeight + 'px';
            setTimeout(() => {
                car.parentElement.querySelector('.acbox').style.height = 'auto';
            }, 1000);
        } else {
            car.classList.toggle('open');
            car.parentElement.querySelector('.acbox').style.height = car.parentElement.querySelector('.acbox').scrollHeight + 'px';
            setTimeout(() => {
                car.parentElement.querySelector('.acbox').style.height = '';
            }, 1);
        };
    });
});
//choice
let choices = document.querySelectorAll('.choice');
choices.forEach(function(car){
    car.addEventListener('click',function(){
        if(car.classList.contains('correct')){
            car.querySelector('div').style.border = 'red solid 5px';
            setTimeout(() => {
                car.parentElement.parentElement.querySelector('.aca').style.height = car.parentElement.parentElement.querySelector('.aca').scrollHeight + 'px';
                setTimeout(() => {
                    car.parentElement.parentElement.style.height = 'auto';
                }, 1000);
            }, 1000);
        } else {
            car.querySelector('div').style.background = 'black';
            car.querySelector('.damn').style.background = 'black';
        }
    })
})