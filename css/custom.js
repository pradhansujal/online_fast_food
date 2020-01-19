$(document).ready(function(){
    $("nav ul li").hover(function() {
        // $(this).children('ul').addClass("show");
        $(this).toggleClass('active');
        
        // $("nav li ul").bind("mouseleave",function(){
        //     $(this).fadeOut();
        // });
    });
});

//slide animation with intersection observer
let sildeItems = document.querySelectorAll('.slide');

let sliderOptions = {
    rootMargin : "0px 0px -150px 0px"
};

let sliderObserver = new IntersectionObserver(function(entries, sliderObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }

        if(entry.target.classList.contains('slide-right')){
            entry.target.classList.remove('slide-right');
            entry.target.style.opacity = "1";
            console.log(entry.target);
        }else if(entry.target.classList.contains('slide-left')){
            entry.target.classList.remove('slide-left');
            entry.target.style.opacity = "1";
        }else if(entry.target.classList.contains('slide-up')){
            entry.target.classList.remove('slide-up');
            entry.target.style.opacity = "1";
        }

        sliderObserver.unobserve(entry.target);
    });
}, sliderOptions);

sildeItems.forEach(sildeItem =>{
    sliderObserver.observe(sildeItem);
});