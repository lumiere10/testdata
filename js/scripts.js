$(document).mousemove(function(e) {
	mouseport: jQuery("#slider_wrapper");
let obj_1 = document.querySelector('.obj_1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
   });

let  obj_2= document.querySelector('.obj_2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_2.style.transform = 'translate(' + x * 20 + 'px, ' + y * 0 + 'px)';
});

let obj_3 = document.querySelector('.obj_3');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_3.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 20 + 'px)';
});

let obj_4 = document.querySelector('.obj_4');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_4.style.transform = 'translate(' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let obj_5 = document.querySelector('.obj_5');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_5.style.transform = 'translate(-' + x * 30 + 'px, ' + y * 20 + 'px)';
});
let obj_6 = document.querySelector('.obj_6');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_6.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

let obj_7 = document.querySelector('.obj_7');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_7.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

let obj_8 = document.querySelector('.obj_8');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_8.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

let obj_9 = document.querySelector('.obj_9');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_9.style.transform = 'translate(' + x * 20 + 'px, ' + y * 20 + 'px)';
});

let obj_10 = document.querySelector('.obj_10');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    obj_10.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
});