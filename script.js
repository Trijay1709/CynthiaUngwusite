

const scroll = new LocomotiveScroll({
    el: document.querySelector('#container'),
    smooth: true
});

var timeout;

function Circlemouse(xs,ys){
    
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(${xs},${ys})`;
    })
}
// function AnimExp1(){
    
    
//     gsap.utils.toArray(".experience1").forEach(experience => {
//         let hover = gsap.to(".experience1 img", {scale: 1.12 ,display :block,opacity :10, duration: 1.5, paused: true, ease: "power1.inOut"})
//         hover=gsap.from(".experience1 img" , {
//             opacity :0,
//             display :none
//         })
//         experience.addEventListener("mouseenter", () => hover.play());
//         experience.addEventListener("mouseleave", () => hover.reverse());
//       })
// }

function mainanim(){
    var t1=gsap.timeline();
    t1.from(".nav",{
        y:'-10',
        opacity :0,
        ease : Expo.easeInOut,
        duration :1.5
    }
    )
    .from(".footer",{
        y:'-10',
        opacity :0,
        ease : Expo.easeInOut,
        duration :1.5,
        delay:-0.5
    }
    )
    .to(".boundingelem",{
        y:'0',
        // opacity :0,
        ease : Expo.easeInOut,
        duration :1,
        stagger: 0.2,
        delay:-1.5
    }
    )
}
function circleskew(){
    
    var xs=1;
    var ys=1;
    var xpre=0;
    var ypre=0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        var xdiff=dets.clientX-xpre;
        var ydiff=dets.clientY-ypre;
        xs=gsap.utils.clamp(0.5,1.5,xdiff);
        ys=gsap.utils.clamp(0.5,1.5,ydiff);
        xpre=dets.clientX;
        ypre=dets.clientY;
        Circlemouse(xs,ys);
        console.log(xs,ys);
        timeout=setTimeout(function()
        {
            document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        })
    })
}
Circlemouse();
mainanim();
circleskew();
AnimExp1();