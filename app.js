import fetchLightHouseReport from "./utils/lighthouse.js"

// Fetching Nodes
const ratingLabel = document.getElementsByClassName("rating-label")
const starsFigureCollect = document.getElementById("star-collection-id")
const crawlBtn = document.getElementById("crawl-btn")
const inputClassElem = document.getElementsByClassName("input-class-elem")
const inputClassId = document.getElementById("input-class-id")
const inputLinkBtn = document.getElementById("link-input-btn")
const successAudio = document.getElementById("success")
const failureAudio = document.getElementById("failure")
const scoreCircles = document.getElementsByClassName("score-class")
const toggle = document.getElementById("show-btn")
const scoresWrap = document.getElementById("scores")
let scoresGlobal = {}

//toggle details
toggle.addEventListener("click", () => {
	if (scoresWrap.style.display == "none") {
		scoresWrap.style.display = "grid"
		displayScores(scoresGlobal)
		toggle.style.rotate = "180deg"

	}
	else {
		scoresWrap.style.display = "none"
		toggle.style.rotate = "0deg"
	}
})



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
	crawlBtn.style.display = "none"
	document.querySelector("#detailed-wrap").style.display = "none"
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
		ratingLabel[1].textContent = ""

		// getting points from rating object
		crawl(url)

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
		ratingLabel[1].textContent = "to this link"
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

const displayScores = (scores) => {

	document.getElementById("detailed-wrap").style.display = "flex"

	let score = Math.round(scores.performanceScore * 10)
	const performance = document.querySelector("#performance-id .progress-circle");
	let scoreVal = document.querySelector("#performance-id .score-value");
	let circumference = performance.getTotalLength();
	performance.style.strokeDashoffset = (1 - (scores.performanceScore)) * circumference;
	scoreVal.innerHTML = `${score}/10`;
	performance.style.stroke = getColor(score)


	score = Math.round(scores.seoScore * 10)
	const seo = document.querySelector("#seo-id .progress-circle");
	scoreVal = document.querySelector("#seo-id .score-value");
	seo.style.strokeDashoffset = (1 - (scores.seoScore)) * circumference;
	scoreVal.innerHTML = `${score}/10`;
	seo.style.stroke = getColor(score)


	score = Math.round(scores.accessibilityScore * 10)
	const accessibility = document.querySelector("#accessibility-id .progress-circle");
	scoreVal = document.querySelector("#accessibility-id .score-value");
	accessibility.style.strokeDashoffset = (1 - (scores.accessibilityScore)) * circumference;
	scoreVal.innerHTML = `${score}/10`;
	accessibility.style.stroke = getColor(score)


	score = Math.round(scores.bestPracticesScore * 10)
	const code = document.querySelector("#best-practices-id .progress-circle");
	scoreVal = document.querySelector("#best-practices-id .score-value");
	code.style.strokeDashoffset = (1 - (scores.bestPracticesScore)) * circumference;
	scoreVal.innerHTML = `${score}/10`;
	code.style.stroke = getColor(score)

}

// fetching current url
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     url = tabs[0].url
//     if (["http:", "https:"].includes(new URL(url).protocol)) {
//         //initialising rating object
//         ratingObj = new Rating(url)

//         // getting points from rating object
//         getPoints(ratingObj)
//     } else {
//         displayRating(undefined)
//     }
// })

// debugging

const randomURL = "https://snyk.io/advisor/npm-package/object-assign"


const crawl = async (url) => {
	scoresGlobal = await fetchLightHouseReport(url)
	const stars = calculateStars(scoresGlobal)
	displayRating(stars)
	console.log(scoresGlobal)
	console.log(stars)
	document.querySelector("#detailed-wrap").style.display = "flex"
	crawlBtn.style.display = "block"
}


const calculateStars = (scores) => {
	let star = 0
	for (let score of Object.values(scores)) {
		star += score
	}
	return star * 50 / 40
}


const getColor = (score) => {
	if (score > 7) return "green"
	else if (score > 5) return "yellow"
	else return "red"
}
crawl(randomURL)


