"use strict";

let animItems = document.querySelectorAll('.anim_text')
let anim = document.querySelectorAll('.anim')

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll() {
      for (let i = 0; i < anim.length; i++) {
        const animItem = anim[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
  
        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("active");
        } else {
          if (!animItem.classList.contains("anim__no-hide")) {
            animItem.classList.remove("active");
          }
        }
      }
    }
  
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYoffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  setInterval(() => {
    animScroll();
  }, 300);
    // setTimeout(() => {
    //   animScroll();
    // }, 300);
  }
 
  // mobile menu
  
  let burger = document.querySelector('.burger'),
   burgerSpanBefore = document.querySelector('.burger span::before'),
   burgerSpanAfter = document.querySelector('.burger span::after'),
   burgerSpan = document.querySelector('.burger span'),
    menu = document.querySelector('.header__nav-content'),
    mobile = document.querySelectorAll('.mobile'),
    body = document.querySelector('body')
    
    for (let i = 0; i < mobile.length; i++) {
        burger.addEventListener('click', ()=>{
         
            menu.classList.toggle('active')
            burger.classList.toggle('active')
            burgerSpan.classList.toggle('active')
            mobile[i].classList.add('active')
            body.classList.toggle('active')
        });
        
    }
    
  
   
 
/****slider****/

// const slider = document.querySelector(".swiper");
// let mySwiper;
// function mobileSlider() {
//   if (window.innerWidth <= 768 && slider.dataset.mobile == "false") {
//     mySwiper = new Swiper(slider, {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       // pagination: {
//       //   el: ".swiper-pagination",
//       //   clickable: true,
//       // },
//       // autoplay:true, 
//       loop: true,
//       slideClass: "swiper-slide",
//     });

//     slider.dataset.mobile = true;
//   } else if (window.innerWidth > 768 && mySwiper) {
//     slider.dataset.mobile = false;
//     mySwiper.destroy();
//   }
// }

// mobileSlider();

// window.addEventListener("resize", () => {
//   mobileSlider();
// });


//player

// let playVideo = document.querySelectorAll('#play')
// let stopPlay = document.querySelectorAll('#stop')
// let speedUp = document.querySelectorAll('#speed-up')
// let speedDown = document.querySelectorAll('#speed-down')
// let videoVolume = document.querySelectorAll('#volume')
// let volumeMute = document.querySelectorAll('#volume_mute')
// let progressBar = document.querySelectorAll('#progress')
// let videoStart = document.querySelectorAll('#videoStart')
// let videoDuration = document.querySelectorAll('#videoDuration')

// let isPause = false;
// let isMuted = false;
// let video = document.querySelectorAll('#video-player')
// let display;



// video player
// for (let i = 0; i < video.length; i++) {
//   playVideo[i].addEventListener('click', function(){

//     if (playVideo[i].classList.contains('active')) {
//       playVideo[i].classList.remove('active');
//     }else{
//       playVideo[i].classList.add('active');
      
//     }
//     playVideoState()
//   });
//   speedUp[i].addEventListener('click', playFaster);
//   speedDown[i].addEventListener('click', playSlower);
//   videoVolume[i].addEventListener('input', videoVolumeState);
//   volumeMute[i].addEventListener('click', function() {
//     volumeMute[i].classList.toggle('active');
//     muteVideoState()
//   });
  
//   video[i].ontimeupdate = progressUpdate;
//   if (progressBar[i]) {
//     progressBar[i].addEventListener('click', videoRewind);
   
//   }
 
  // progress bar
  // function progressUpdate() {
  //   let current = video[i].currentTime;
  //   let duration = video[i].duration;
  //   progressBar[i].value = (100 * current) / duration;
  //   videoDuration[i].textContent = secondsToTime(duration);
  //   videoStart[i].textContent = secondsToTime(current);
  // }

  
  //video rewind
  
  // function videoRewind() {
  //   let progressWidth = this.offsetWidth;
  //   let currentOffset = event.offsetX;
  //   this.value = (currentOffset / progressWidth) * 100;
  //   video[i].pause();
  //   video[i].currentTime = video[i].duration * (currentOffset / progressWidth);
  //   video[i].play();
  // }

  // convert seconds to 00:00 format
  // function secondsToTime(time){      
  //   var h = Math.floor(time / (60 * 60)),
  //       dm = time % (60 * 60),
  //       m = Math.floor(dm / 60),
  //       ds = dm % 60,
  //       s = Math.ceil(ds);
  //   if (s === 60) {
  //       s = 0;
  //       m = m + 1;
  //   }
  //   if (s < 10) {
  //       s = '0' + s;
  //   }
  //   if (m === 60) {
  //       m = 0;
  //       h = h + 1;
  //   }
  //   if (m < 10) {
  //       m = '0' + m;
  //   }
  //   if (h == 0) {
  //     time = m + ':' + s;
  //   } else {
  //     time = h + ':' + m + ':' + s;
  //   }
  //   return time;
  // }
  
  // play video
  // function playVideoState() {
    
  //     if (isPause == false) {
  //       isPause = true;
  //       video[i].play();
  //       video[i].playbackRate = 1;
  //       playVideo[i].classList.add('active');
  //     }
  //     else{
  //       isPause = false;
  //       video[i].pause();
  //       playVideo[i].classList.remove('active');
  //     }

    
  // }  
  // play faster
  // function playFaster() {
  //     video[i].play();
  //     video[i].playbackRate += 1;
  // }
  
  // play slower
  // function playSlower() {
  //     video[i].play();
  //     video[i].playbackRate -= 1;
  //     if(video[i].playbackRate <= 0){
  //       video[i].playbackRate = 1;
  //     }
  // }
  
  // video volume
  // function videoVolumeState(){
  //     let v = this.value;
  //     video[i].volume = v/100;
  // }
  
  //mute video
//   function muteVideoState(){
//       isMuted = !isMuted;
//       if (isMuted == true) {
//         video[i].muted = true;
//       }
//        else{
//         video[i].muted = false;
//        }
//   }

// }




/*input range*/
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

/**********************************************************************************/

