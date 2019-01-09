window.onload = function() { 

var slideImg = document.querySelectorAll('.facts .container .facts__items_item');
var slideCircle = document.querySelectorAll('.fa-circle');
var slidePrev = document.querySelector('.facts__items-prev');
var slideNext = document.querySelector('.facts__items-next');

i=0;


slidePrev.onclick = function(){
    slideImg[i].classList.toggle("show");
    slideCircle[i].classList.toggle("active");
  
    i--;

if(i<0){
 i= slideImg.length-1;
};
slideImg[i].classList.toggle("show");
slideCircle[i].classList.toggle("active"); 

};
slideNext.onclick = function(){
slideImg[i].classList.toggle("show");
slideCircle[i].classList.toggle("active");
i++;
if(i >= slideImg.length){
    i=0;
}
slideImg[i].classList.toggle("show");
slideCircle[i].classList.toggle("active");


}

    ymaps.ready(init); 

var myMap, 
myPlacemark1;

    function init(){ 
          
        var myMap = new ymaps.Map("map", {
            
            center: [55.7375,37.6554],
            
            zoom: 16
        });
 myMap.controls.remove('searchControl');
 myMap.controls.remove('trafficControl');
 myMap.controls.remove('rulerControl');
 myMap.behaviors.disable(['scrollZoom']);

myMap.behaviors.disable([
'drag',
'scrollZoom'
]);

        myPlacemark1 = new ymaps.Placemark([55.7361,37.6550],{
 balloonContentHeader: 'Однажды',
    balloonContentBody: 'В студеную зимнюю пору',
    balloonContentFooter: 'Мы пошли в гору',
    hintContent: 'Зимние происшествия'
        }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/ypin.png',
    iconImageSize: [60, 64],
    iconImageOffset: [-15, -70]
}

        );
       myMap.geoObjects.add(myPlacemark1);
    }
};