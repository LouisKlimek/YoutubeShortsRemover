function hideShorts() {

    const findAncestorElemWithTagName = (elem) => {
        if(elem.tagName.toLowerCase() === "body") {
            // iterated to top of body -> element wasn't found
            console.warn("Couldn't find Youtube Shorts Section");
            return undefined;
        }
        if((elem.tagName.toLowerCase() === "ytd-rich-section-renderer") || (elem.tagName.toLowerCase() === "ytd-guide-entry-renderer")) {
            return elem;
        }
        return findAncestorElemWithTagName(elem.parentElement);
    };
    
    const potentialShortsSectionHeadlineElems = document.querySelectorAll("span#title.style-scope.ytd-rich-shelf-renderer");
    for(const elem of potentialShortsSectionHeadlineElems) {
        if(elem.innerHTML === "Shorts") {
            const parentElem = findAncestorElemWithTagName(elem.parentElement);
            parentElem.style.display = "none";
        }
    }
    
    const potentialShortsGuideEntryHeadlineElems = document.querySelectorAll("yt-formatted-string.title.style-scope.ytd-guide-entry-renderer");
    for(const elem of potentialShortsGuideEntryHeadlineElems) {
        if(elem.innerHTML === "Shorts") {
            const parentElem = findAncestorElemWithTagName(elem.parentElement);
            parentElem.style.display = "none";
        }
    }

    // Hide Shorts on the video page
    // <ytm-shorts-lockup-view-model-v2>
    const potentialShortsVideoPageElems = document.querySelectorAll("ytm-shorts-lockup-view-model-v2");
    for(const elem of potentialShortsVideoPageElems) {
        elem.style.display = "none";
    }

    const potentialShortsVideoPageElems2 = document.querySelectorAll("ytm-shorts-lockup-view-model-v3");
    for(const elem of potentialShortsVideoPageElems2) {
        elem.style.display = "none";
    }

    // Remove shorts on channel page
    const potentialShortsChannelPageElems = document.querySelectorAll("div.ytd-reel-shelf-renderer");
    for(const elem of potentialShortsChannelPageElems) {
        console.log("Checking potential shorts section on channel page");
        elem.style.display = "none";
    }

    // Hide Shorts tab on channel page
    const potentialShortsChannelPageTabElems = document.querySelectorAll(".yt-tab-shape__tab");
    for(const elem of potentialShortsChannelPageTabElems) {
        if(elem.innerText == "Shorts") {
            // Get Parent of the tab element, which is the actual tab button. its a <yt-tab-shape> element
            const parentElem = elem.parentElement;
            parentElem.style.display = "none";
        }
    }

    // Hide shorts in search results
    //style-scope yt-chip-cloud-renderer iron-selected
    const potentialShortsSearchResultElems = document.querySelectorAll("yt-chip-cloud-chip-renderer");
    for(const elem of potentialShortsSearchResultElems) {
        if(elem.innerText == "Shorts") {
            elem.style.display = "none";
        }
    }

}

// Run the function on script load
hideShorts();

// Re-run when the DOM changes
const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });