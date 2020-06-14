l
const navSide = (){
  
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');

    console.log("burger");
    
    burger.addEventListener('click', (){
        nav.classList.toggle('nav-active');
    });

}

// function callBacknavSlide(event) {

//     nav.classList.toggle('nav-active');

// }


navSide();