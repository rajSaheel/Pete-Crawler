import Rating from './Rating.js'

// Fetching Nodes
const crawlBtn = document.getElementById("crawl-btn")
const inputClassId = document.getElementById("input-class-id")
const starsFigureCollect = document.getElementById("star-collection-id")
const ratingLabel = document.getElementsByClassName("rating-label")
const inputClassElem = `<div class="input-class-elem"><input name="link-input" id="link-input-id" type="text" placeholder="Enter the link"/><a class="bn39"><span class="bn39span">Go</span></a></div>`
let url

// Providing input bar
const getInputElem = () => {
    inputClassId.innerHTML = inputClassElem
    document.getElementById("link-input-id").value = url
}

//Grabing Star Figures in a list
const starArr = []
for (let index = 1; index < starsFigureCollect.childNodes.length; index += 2) {
    starArr.push(starsFigureCollect.childNodes[index])
}

//Display Stars
const displayRating = (point) => {
    if (point) {
        const pointFloor = Math.floor(point)
        const rem = Math.floor((point - pointFloor) * 20)
        ratingLabel[0].textContent = "Peté gives"
        ratingLabel[1].textContent = "to this site"
        let i = 0
        for (i; i < pointFloor; i++) {
            starArr[i].style.display = "flex"
        }
        starArr[i].style.display = "flex"
        starArr[i].style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0% 100%)`
    }
}

// displayRating(4.5)

//Button to get input bar
crawlBtn.addEventListener('click', getInputElem)

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     url = tabs[0].url
// })

const ratingObj = new Rating("https://business.codechef.com/?itm_medium=navmenu&itm_campaign=business")
    // ratingObj.getSourceContent()

displayRating(undefined)