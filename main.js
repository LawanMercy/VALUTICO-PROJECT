const mobile-menu = document.querySelector('.nav-mobile');
const  menu-open = document.getElementById('fa-open');
const  menu-close = document.getElementById('fa-close');

menu-open.addEventListener('click', function(){
if(mobile-menu.style.display === 'none'){
    mobile-menu.style.display = 'block';
    menu-open.style.display = 'none';
    menu-close.style.display = 'block';
}else{
    mobile-menu.style.display = 'none';
    menu-open.style.display = 'block';
    menu-close.style.display = 'none';
}
});


menu-close.addEventListener('click', function(){
    if(mobile-menu.style.display === 'block'){
        mobile-menu.style.display = 'none';
        menu-open.style.display = 'block';
       menu-close.style.display = 'none';
    }
    });