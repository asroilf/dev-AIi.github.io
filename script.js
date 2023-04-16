let nbar = document.getElementById("navbar");
let still = nbar.offsetTop;

window.onscroll = function(){
  if(window.pageYOffset >= still){
    nbar.classList.add("still")
  }else{
    nbar.classList.remove("still");
  }
};
