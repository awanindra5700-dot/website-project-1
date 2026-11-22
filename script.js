// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




const div = document.querySelector('#new');
setInterval(() => {
    
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
    
}, 1000);



function firstpageanim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: '0',
      // opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
      stagger: .2,
    })
    .from("#herofooter", {
      y: '-10',
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
      // stagger: .2
    });
}


function mouseskew() {

  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {

    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.8, 1.2, 1 + xdiff * 0.01);
    yscale = gsap.utils.clamp(0.8, 1.2, 1 + ydiff * 0.01);

    xprev = dets.clientX;
    yprev = dets.clientY;

    gsap.to("#minicircle", {
      x: dets.clientX,
      y: dets.clientY,
      xPercent: -50,
      yPercent: -50,
      scaleX: xscale,
      scaleY: yscale,
      duration: 0.2,
      ease: "power3.out"
    });

  });
}

mouseskew();


// function mouseskew(){
//   // default scale value 
//   var xscale = 1;
//   var yscale = 1;


//   var xprev = 0;
//   var yprev = 0;
//   window.addEventListener("mousemove", function(dets){

//     xscale = gsap.utils.clamp(.8 ,1.2, dets.clientX - xprev);
//     yscale = gsap.utils.clamp(.8 ,1.2, dets.clientY - yprev);

//     xprev = dets.clientX;
//     yprev = dets.clientY;

//     circleMousefollower(xscale, yscale);
//   });
// }

// mouseskew();


// function circleMousefollower(xscale, yscale){
//   window.addEventListener("mousemove", function (dets) {
//     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px scale(${xscale}, ${yscale}))`;

//   })
// }

// circleMousefollower();
firstpageanim();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrof = 0;

  elem.addEventListener("mouseleave", function (dets) {
    
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
      duration: .5, 
    });
  });


  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrof = dets.clientX - rotate;
    rotate = dets.clientX;
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20,20,diffrof*0.5),
      
    });
  });
});