// Navbar berubah saat scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        nav.style.background="rgba(0,0,0,.85)";
        nav.style.boxShadow="0 10px 35px rgba(0,0,0,.4)";

    }else{

        nav.style.background="rgba(0,0,0,.35)";
        nav.style.boxShadow="none";

    }

});


// Animasi muncul

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// BUY BUTTON

document.querySelectorAll(".buy,.buyButton").forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

alert("🚀 BUY LINK COMING SOON");

});

});