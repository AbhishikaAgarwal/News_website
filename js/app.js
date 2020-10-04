

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