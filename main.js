const mobile-menu = document.querySelector('.nav-mobile');
const  fa-open = document.getElementById('fa-open');
const  fa-close = document.getElementById('fa-close');

fa-open.addEventListener('click', function(){
if(mobile-menu.style.display === 'none'){
    mobile-menu.style.display = 'block';
    fa-open.style.display = 'none';
    fa-close.style.display = 'block';
}else{
    mobile-menu.style.display = 'none';
    fa-open.style.display = 'block';
    fa-close.style.display = 'none';
}
});


fa-close.addEventListener('click', function(){
    if(mobile-menu.style.display === 'block'){
        mobile-menu.style.display = 'none';
        fa-open.style.display = 'block';
        fa-close.style.display = 'none';
    }
    });