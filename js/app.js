
//User Authentication

let mystorage = window.localStorage;
let isLoggedIn = mystorage.Subscribed;
if(isLoggedIn){
    let login_link = document.getElementById('login_user');
    login_link.setAttribute('href','./index.html');
    login_link.innerText ="Welcome "+mystorage.Username.split('@')[0];
} 

function showSubscribeWindow(){
    const parentWrapper = document.querySelector('.subscribe-wrapper');
    const subscribeContent = document.querySelector('.subscribe_content');
    const cross = document.querySelector('.cross');

    if(!mystorage.Subscribed){
        console.log(mystorage.Subscribed);
        parentWrapper.style.display="flex";
    }else{
        console.log("Already Subscribed");
        parentWrapper.style.display="flex";
        subscribeContent.innerHTML = `<h3>Already Subscribed, Enjoy Our service </h3>`    
    }
    cross.addEventListener('click',()=>{
        parentWrapper.style.display="none";
    });
}

window.setTimeout(function(){
    const cross = document.querySelector('.cross');
    const parentWrapper = document.querySelector('.subscribe-wrapper');
    console.log(mystorage.Subscribed);
    if(!mystorage.Subscribed){
        console.log(mystorage.Subscribed);
        parentWrapper.style.display="flex";
    }
    cross.addEventListener('click',()=>{
        parentWrapper.style.display="none";
    });
},18000000);


// Contact Us Pop-up window
function showContactUsPage(){
    console.log("Contact us");
    const contactPage = document.querySelector('.contact_us-popup_wrapper');
    contactPage.style.display="flex";
}
function closePopup(){
    
    const contactPage = document.querySelector('.contact_us-popup_wrapper');
    contactPage.style.display="none";
}

// Trending News :
const trendingNewses = [
    {
        imageUrl : "../src/img1.jpg",
        newsHeading :"Image for What went right this week: animal welfare, plastic progress and more positive news What went right this week: animal welfare, plastic progress and more positive news",
        newsDate : "Friday, 02 October 2020"
    },
    {
        imageUrl : "../src/img2.jpg",
        newsHeading :"Image for Growing back to school: one charity’s plan to encourage outdoor educationGrowing back to school: one charity's plan to encourage outdoor education",
        newsDate : "Friday, 03 October 2020"
    },
    {
        imageUrl : "../src/img3.jpg",
        newsHeading :"Why children, as well as adults, need stories about solutions",
        newsDate : "Friday, 04 October 2020"
    },
    {
        imageUrl : "../src/img4.jpg",
        newsHeading :"How an alliance of female leaders is helping close the gender gap",
        newsDate : "Friday, 04 October 2020"
    }
]
let currentInterval;
const trendingNews = document.getElementById('tranding-news');
const trendingNewsContent = document.getElementById('trending-news-content');
const bgImage = document.querySelector('.bg-image');
let currentNews = 0;

console.log(trendingNewsContent.childNodes[1].innerText);
const nextNews = ()=>{
    
    currentInterval = setInterval(() => {
        bgImage.style.backgroundImage = `url(${trendingNewses[currentNews].imageUrl})`;  
        trendingNewsContent.childNodes[1].innerText = trendingNewses[currentNews].newsHeading;
        trendingNewsContent.childNodes[3].innerText = trendingNewses[currentNews].newsDate;
        currentNews = (currentNews+1)%trendingNewses.length;

        // console.log(trendingNewsContent.childNodes[1].innerText);

        // slides[current].classList.add("current-slide")
        // trendingNews.onmouseover = () =>{
        //     clearInterval(currentInterval);
        //     console.log("Mouse Over");
        // }
        // trendingNews.onmouseout = () =>{
        //     console.log("Mouse Out");
        //     currentInterval = setInterval(nextNews,2000);
        // }
    }, 3000)
}

nextNews();
document.onload = () =>{
    setTimeout(nextNews,200);
}