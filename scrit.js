// let nbar = document.getElementById("navbar");
// let still = nbar.offsetTop;

// window.onscroll = function(){
//   if(window.pageYOffset >= still){
//     nbar.classList.add("still")
//   }else{
//     nbar.classList.remove("still");
//   }
// };

window.onscroll = function() {foo()};

function foo() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}
