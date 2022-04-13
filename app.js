import Rating from './Rating.js'

// Fetching Nodes
const ratingLabel = document.getElementsByClassName("rating-label")
const starsFigureCollect = document.getElementById("star-collection-id")
const crawlBtn = document.getElementById("crawl-btn")
const inputClassElem = document.getElementsByClassName('input-class-elem')
const inputClassId = document.getElementById("input-class-id")
const inputLinkBtn = document.getElementById("link-input-btn")

let url
let ratingObj
let points

// Providing input bar
const getInputElem = () => {
    crawlBtn.style.display = "none"
    inputClassElem[0].style.display = "flex"
}

//Button to get input bar
crawlBtn.addEventListener('click', getInputElem)

// getting rating of input link
const crawlInputLink = () => {

    inputClassElem[0].style.display = "none"
    crawlBtn.style.display = "flex"

    url = document.getElementById("link-input-id").value
    ratingObj = new Rating(url)

    // getting points from rating object
    points = ratingObj.getPoints()
    displayRating(points)
}

inputLinkBtn.addEventListener('click',crawlInputLink)

//Grabing Star Figures in a list
const starArr = []
for (let index = 1; index < starsFigureCollect.childNodes.length; index += 2) {
    starArr.push(starsFigureCollect.childNodes[index])
}

//Display Stars
const displayRating = (points) => {
    if (points) {
        const pointsFloor = Math.floor(points)
        const rem = (points - pointsFloor) * 100
        ratingLabel[0].textContent = "Peté gives"
        ratingLabel[1].textContent = "to this site"
        let i = 0
        for (i; i < 5; i++) {
            if(i<pointsFloor){
            starArr[i].style.display = "flex"
            starArr[i].style.color = `#FFD700`
            }else{
                starArr[i].style.display = "flex"
            }
        }
    }
}

// // fetching current url
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     url = tabs[0].url
//     //initialising rating object
//     ratingObj = new Rating(url)

// // getting points from rating object
//     points = ratingObj.getPoints()

//     //displaying points
//     displayRating(4)
// })

    //initialising rating object
    ratingObj = new Rating(url)

// getting points from rating object
    points = ratingObj.getPoints()

    //displaying points
    displayRating(5)


