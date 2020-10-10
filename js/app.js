// console.log("Call")
setCurrentDate();
//User Authentication

let mystorage = window.localStorage;
let isLoggedIn = mystorage.Username==''?false : true;
if(isLoggedIn){
    let login_link = document.getElementById('login_user');
    login_link.setAttribute('href','./index.html');
    login_link.innerText ="Welcome "+mystorage.Username.split('@')[0];

    var li = document.createElement('li');
    li.innerHTML = `<a href="./index.html">Logout</a>`;
    li.classList.add('logout');
    document.querySelector('.nav-links').appendChild(li);
}

if(isLoggedIn){
    var logoutBtn = document.querySelector('.logout');
    logoutBtn.addEventListener('click',()=>{
    mystorage.Username = '';
    mystorage.Password = '';
    window.location.href="./index.html";
    logoutBtn.style.display="none";
});
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

const allNewses = document.querySelectorAll('.news__post');
let maxNews= allNewses.length;
let currentNewsIndex = 0;

let next = document.querySelector('.buttons #btn-next');
let prev = document.querySelector('.buttons #btn-prev');

const intervalId = window.setInterval(()=>{
    allNewses[currentNewsIndex].classList.remove('current_news'); 
    currentNewsIndex = (currentNewsIndex+1)%maxNews;
    allNewses[currentNewsIndex].classList.add('current_news');
},4000);


const nextNews = () => {
    console.log('Next News')
    const current_news = document.querySelector(".current_news");
    current_news.classList.remove("current_news");
    currentNewsIndex = (currentNewsIndex + 1) % maxNews;
    allNewses[currentNewsIndex].classList.add("current_news");
}

const previouNews = () => {
    console.log('Previous News')

    const curren_news = document.querySelector(".current_news");
    curren_news.classList.remove("current_news");

    if (currentNewsIndex == 0) {
        currentNewsIndex = maxNews - 1;
    } else {
        currentNewsIndex--;
    }

    allNewses[currentNewsIndex].classList.add("current-slide");
}

next.addEventListener("click", nextNews);
prev.addEventListener("click", previouNews);




// Set current Date
function setCurrentDate(){    
    let weekdays = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thrusday",
        5:"Friday",
        6:"Saturday"
    }
    let currentDate = new Date();
    let current_date = document.querySelectorAll('.current_date');

    let day = weekdays[currentDate.getDay()];
    let date = currentDate.getDate()>9 ? currentDate.getDate() : '0'+currentDate.getDate();
    let month = (currentDate.getMonth()+1)>9 ? currentDate.getMonth()+1 : '0'+currentDate.getMonth();
    const today = `${day} - ${date}/${month}/${currentDate.getFullYear()}`; 
    current_date.forEach(element => {
        element.innerText=today;
    });
}