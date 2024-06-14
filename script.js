var toggleBtn = document.querySelector(".toggleBtn");
var menu = document.querySelector(".menu");

//gsap.from(".text-inner > *", 1, {
//	opacity: 0,
//	delay: 1,
//	stagger: 0.2
//})

gsap.from(".toggleBtn", 1, {
	x: -150,
	y: -150,
	delay: 0.3
})

//gsap.from(".stripe1 img", 1, {
//	y: 400,
//	opacity: 0,
//	delay: 1,
//	stagger: 0.4
//})

//gsap.from(".stripe2 img", 1, {
//	opacity: 0,
//	delay: 1,
//	stagger: 0.4
//})

var t1 = gsap.timeline({ paused: true });

t1.to(".menu-icon", 1, {
	opacity: 0,
	rotation: 180
})

t1.to(".close-icon", 1, {
	opacity: 1,
	rotation: 180
}, "-=0.9")

t1.to(".menu", 1, {
	scale: .8
}, "-=1")

t1.from(".menu li", 1, {
	opacity: 0,
	x: -100,
	stragger: .4
})

t1.reverse();

toggleBtn.onclick = function () {
	t1.reversed(!t1.reversed());
}