const tabs = document.querySelectorAll(".tab_btn");
const content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    content.forEach((content) => {
      content.classList.remove("active");
    });
    content[index].classList.add("active");
  });
});
const tabs2 = document.querySelectorAll(".tab_btn_two");
const content2 = document.querySelectorAll(".content_two");

tabs2.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs2.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    content2.forEach((content2) => {
      content2.classList.remove("active");
    });
    content2[index].classList.add("active");
  });
});

let navbar = document.getElementById("navbar");
document.addEventListener('scroll',()=>{
    if(scrollY>2){
        navbar.classList.add("back")
    }
    else{
        navbar.classList.remove("back");
    }
})