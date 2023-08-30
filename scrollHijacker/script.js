const scrollHijack = document.getElementsByClassName("scroll-capture");

for (let i = 0; i < scrollHijack.length; i++) {
    let element = scrollHijack[i]

    console.log("test")

    element.addEventListener("scroll", () => {
        console.log(element.scrollHeight)
    })
}