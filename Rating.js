import HTMLRating from "./HTMLRating.js"
import CSSRating from "./CSSRating.js"
import ScriptRating from "./ScriptRating.js"

export default class Rating {
    constructor(url) {
        this.url = url
        this.getSourceContent(this.url)

    }

    getSourceContent = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                this.sourceContent = data
                this.logProp()
                console.log(this.sourceContent.length);
            })
    }

    logProp = () => {
        console.log(this.sourceContent);
    }

}