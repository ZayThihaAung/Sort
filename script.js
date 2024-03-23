// Sort()
// To sort number array in descending order (from larger to smaller numbers)
/* 
let numbers = [5, 2, 10, 8, 3];
numbers.sort((a, b) => b - a);
output : [10, 8, 5, 3, 2];
*/

// To sort number array in scending order (from samller to larger numbers);
/*
let numbers = [5, 2, 10, 8, 3];
numbers.sort((a, b) => a - b);
output : [2, 3, 8, 5, 10];
*/

const containerTag = document.querySelector(".container");
const sortTags = document.querySelectorAll(".dropdown-item");

sortTags.forEach((element) => {
    element.addEventListener("click", (event)=> {
        const sorted = event.target.id;
        if (sorted === "ascending"){
            console.log("Clicked the Ascending button");
            const videoSortedAscendingOrder = videos.sort((a,b)=> 
                a.budget - b.budget
            );
            console.log(videoSortedAscendingOrder);
            updateUISortedVideos(videoSortedAscendingOrder);
        };
        if (sorted === "descending") {
            console.log("Clicked the Descending button");
            const videoSortedDescendingOrder = videos.sort((a,b)=> 
                b.budget - a.budget
            );
            console.log(videoSortedDescendingOrder);
            updateUISortedVideos(videoSortedDescendingOrder);
        };
    });
}); 

const videos = [
    {
        title : "Inception",
        thumbNail : `Inception.jpg`,
        uploadedDate : new Date(2010, 6, 29),
        enjoyability : '9.1/10',
        budget : 160000000
    }, 
    {
        title : "Peaky Blinders",
        thumbNail : `https://m.media-amazon.com/images/I/71mXmB41psS._AC_UF894,1000_QL80_.jpg`,
        uploadedDate : new Date(2013, 8, 12),
        enjoyability : '11/10',
        budget : 1500000
    },
    {
        title : "Star Wars Revenge Of The Sith", 
        thumbNail : `https://riotheatre.ca/wp-content/uploads/2023/06/sith-banner-1-1024x527.jpg`,
        uploadedDate : new Date(2009, 4, 19),
        enjoyability : '8.2/10',
        budget : 113000000
    },
    {
        title : "Wednesday",
        thumbNail : "Wednesday.jpg",
        uploadedDate : new Date(2022, 9, 23),
        enjoyability : '8.8/10',
        budget :24000000
    },
    {
        title : "harry potter and the philosopher's stone",
        thumbNail : `Harry Potter 1.jpg`,
        uploadedDate : new Date(2001, 7, 16),
        enjoyability : '9.2/10',
        budget : 125000000
    },
    {
        title : "Stranger Things", 
        thumbNail : `StrangerThings.jpg`,
        uploadedDate : new Date(2016, 6, 15),
        enjoyability : '9/10',
        budget : 350000
    }
];

const updateUISortedVideos = (videos) => {
    containerTag.innerHTML = "";
    videos.forEach((video) => {
        const videosTag = 
            `<div class="videoContainer">
            <img src = '${video.thumbNail}' class="img">
            <h6>${video.title}</h6>
            <p>${video.uploadedDate.toLocaleDateString()}</p>
            <p>My rate : ${video.enjoyability}</p>
            <p>Budget is : ${video.budget}</p>
            </div>`
        containerTag.innerHTML += videosTag;
    });
};

updateUISortedVideos(videos);
