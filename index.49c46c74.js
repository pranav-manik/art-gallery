!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=e.parcelRequiredfe1;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,i.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){t[e]=r},e.parcelRequiredfe1=i),i.register;var o=i("1OZqT"),n=i("jRi9f"),l=i("cH00A"),a=i("hxuKX");(0,l.gsap).registerPlugin(a.ScrollTrigger);let s=[...document.querySelectorAll(".grid > .grid__item")];(0,o.preloadImages)(".grid__item-img").then(e=>{document.body.classList.remove("loading");let r=new n.default({lerp:.1,smooth:!0}),t=()=>{r.raf(),requestAnimationFrame(t)};requestAnimationFrame(t),s.forEach(e=>{let r=e.querySelector(".grid__item-img");(0,l.gsap).timeline({scrollTrigger:{trigger:e,start:"top top",end:"bottom top",scrub:!0}}).set(r,{transformOrigin:`${(0,l.gsap).utils.random(0,1)>.5?0:100}% 100%`}).to(r,{ease:"none",scale:0})})})}();