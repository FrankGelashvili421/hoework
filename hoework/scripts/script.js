let buttons = document.querySelectorAll('.btn');

buttons.forEach(button =>{
    button.addEventListener('click' , () =>{
        let die = button.parentElement;
        die.remove();
    });
});



// let body = document.querySelector('body');
// let cursor = document.querySelector('#cursor');

// document.addEventListener('mousemove', (e) => {
//     body.style.backgroundPositionX = e.pageX/-4 + 'px';
//     body.style.backgroundPositionY = e.pageY/-4 + 'px';
// });  
// ეე არქნაა არადა მინდოდა საიტისთვის 3D ვიზუალი შემექნმა :(( 
// იუთუბ ტუტორიალში რაკარგად ჩანდა არადა მარა არგამომივიდა