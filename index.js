let op = document.getElementById('op');
let li = document.querySelector('iframe');
op.addEventListener('click',function(){
    if(op.classList.contains('open') == false){
        op.classList.toggle('open');
        li.style.height = '400px';
        li.style.width = '200px'
    } else {
        op.classList.toggle('open');
        li.style.height = '';
        li.style.width = '';
    }
});
