const addSwatches = (parent, totalSwatches) => {
    while (totalSwatches > 0) {
        parent.appendChild(document.createElement("div"))
        console.log("hey")
        totalSwatches--
    }
}

addSwatches(document.querySelector("#swatches"), 11);