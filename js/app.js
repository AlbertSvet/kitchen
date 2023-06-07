new Swiper('.osob__slider',{
    navigation: {
        nextEl: '.salon__right',
        prevEl: '.salon__left',
    },
     slidesPerView:1,
     loop:true,
     spaceBetween:20,
     speed:2000,
     centeredSlide: true,
    
     
   
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        type: 'bullets',
    }, 
    autoplay: {
        delay: 500,

    }, 

    breakpoints: {
        320: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:1,
            
        },
        768: {
            slidesPerView:1,
        }
        

        
       

    },

});
new Swiper('.trad__slider',{
    navigation: {
        nextEl: '.salon__right',
        prevEl: '.salon__left',
    },
     slidesPerView:2,    
     spaceBetween:20,
     speed:1000,
     centeredSlide: true,
    
     
   
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        type: 'bullets',
    }, 
   

    breakpoints: {
        320: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:1,
            
        },
        768: {
            slidesPerView:2,
        }
        

        
       

    },

});


// =============================================================================================================//
// Бургер-меню
// const iconMenu = document.querySelector('.header__icon');
// const menuBody = document.querySelector('.header__body');
// const lis = document.querySelector('.header__lis');
// if (iconMenu) {
//     iconMenu.addEventListener("click", function (e) {
//         iconMenu.classList.toggle('_active');   
//         menuBody.classList.toggle('_active');
//         lis.classList.toggle('_active');
//     });
// }

// =============================================================================================================//



// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


