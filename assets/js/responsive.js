const menuBtn = document.querySelector('#header .mobile-menu-btn .menu-icon')
const headerNode = document.querySelector('#header')
const headerNodeHeight = headerNode.clientHeight

menuBtn.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}

const navBand = document.querySelector('#nav .nav-band')
const navTour = document.querySelector('#nav .nav-tour')
const navContact = document.querySelector('#nav .nav-contact')

const navMore = document.querySelector('#nav .nav-more')



navBand.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}
navTour.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}
navContact.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}

console.log(navMore);

navMore.onclick = (event) => {
    event.preventDefault()
}

const subnavMer = document.querySelector('#nav .subnav li .subnav-mer')
const subnavExtra = document.querySelector('#nav .subnav li .subnav-extra')
const subnavMeida = document.querySelector('#nav .subnav li .subnav-media')

subnavMer.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}

subnavExtra.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}

subnavMeida.onclick = () => {
    if (headerNode.style.height === "auto") {
        headerNode.style.height = `${headerNodeHeight}px`
    } else {
        headerNode.style.height = "auto"

    }
}