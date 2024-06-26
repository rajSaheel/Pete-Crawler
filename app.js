import Rating from "./rating-scripts/Rating.js"

// Fetching Nodes
const ratingLabel = document.getElementsByClassName("rating-label")
const starsFigureCollect = document.getElementById("star-collection-id")
const crawlBtn = document.getElementById("crawl-btn")
const inputClassElem = document.getElementsByClassName("input-class-elem")
const inputClassId = document.getElementById("input-class-id")
const inputLinkBtn = document.getElementById("link-input-btn")
const successAudio = document.getElementById("success")
const failureAudio = document.getElementById("failure")

//Grabing Star Figures in a list
const starArr = []
for (let index = 1; index < starsFigureCollect.childNodes.length; index += 2) {
    starArr.push(starsFigureCollect.childNodes[index])
}

let url
let ratingObj
let points

// Providing input bar
const getInputElem = () => {
    crawlBtn.style.display = "none"
    inputClassElem[0].style.display = "flex"
}

// Button to get input bar
crawlBtn.addEventListener("click", getInputElem)

// getting rating of input link
const crawlInputLink = () => {
    inputClassElem[0].style.display = "none"
    crawlBtn.style.display = "flex"
    url = document.getElementById("link-input-id").value
    document.getElementById("link-input-id").value = ""
    if (
        url.match(
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        )
    ) {
        for (let i = 0; i < 5; i++) {
            starArr[i].style.color = "rgb(206, 213, 219)"
            starArr[i].style.display = "none"
        }
        ratingLabel[0].textContent = "Loading...please wait"
        ratingObj = new Rating(url)
        ratingLabel[1].textContent = ""

        // getting points from rating object
        getPoints(ratingObj)
    } else {
        displayRating(undefined)
    }
}

inputLinkBtn.addEventListener("click", crawlInputLink)

//
const getPoints = async (obj) => {
    try {
        points = await obj.getPoints()
        if (Number.isFinite(points)) displayRating(points)
        else {
            failureAudio.play()
            ratingLabel[0].textContent = "Something went wrong"
        }
    } catch {
        failureAudio.play()
        ratingLabel[0].textContent = "Something went wrong"
    }
}

//Display Stars
const displayRating = (points) => {
    if (points != undefined) {
        const pointsFloor = Math.floor(points)
        const rem = (points - pointsFloor) * 100
        ratingLabel[0].textContent = "Peté gives"
        ratingLabel[1].textContent = "to this site"
        let i = 0
        for (i; i < 5; i++) {
            if (i < pointsFloor) {
                starArr[i].style.display = "flex"
                starArr[i].style.color = `#FFD700`
            } else {
                starArr[i].style.display = "flex"
            }
        }
        successAudio.play()
        return
    } else {
        ratingLabel[0].textContent = "No website Found"
        ratingLabel[1].textContent = ""
        for (let i = 0; i < 5; i++) {
            starArr[i].style.color = "rgb(206, 213, 219)"
            starArr[i].style.display = "none"
        }
        failureAudio.play()
        return
    }
}

// fetching current url
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    url = tabs[0].url
    if (["http:", "https:"].includes(new URL(url).protocol)) {
        //initialising rating object
        ratingObj = new Rating(url)

        // getting points from rating object
        getPoints(ratingObj)
    } else {
        displayRating(undefined)
    }
})

// debugging

//initialising rating object
// ratingObj = new Rating(`https://www.linkedin.com/feed/`)

// // getting points from rating object
// getPoints(ratingObj)
