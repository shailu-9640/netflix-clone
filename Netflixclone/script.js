window.addEventListener('scroll',()=>{
    const navbar=document.querySelector(".navbar");
    if(window.scrollY>100){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});

const profileIcon=document.querySelector(".profile-icon");
profileIcon.addEventListener("click",()=>{
    window.location.href="profile.html";
});

const moviecard=document.querySelector(".movie-card");
moviecard.forEach((card)=>{

    card.addEventListener("mouseEnter",()=>{
     card.style.transform="scale(1.05)";
    });
    card.addEventListener("mouseleave",()=>{
     card.style.transform="scale(1)";
    });


   
})