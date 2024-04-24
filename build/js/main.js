var playBtn = document.querySelector(".bonus__main-wheel-btn"), main = document.querySelector(".bonus__main"),
    wheel = document.querySelector(".bonus__main-wheel-reel"), mainWheel = document.querySelector(".bonus__main-wheel"),
    overlay = document.querySelector(".bonus__overlay"), popupFirst = document.querySelector(".bonus__firstWin"),
    popupFirstBtn = document.querySelector(".bonus__firstWin-btn"),
    popupSecond = document.querySelector(".bonus__secondWin"), overflow = document.querySelector("body"),
    wrapper = document.querySelector(".bonus"), rotateText = document.querySelector(".bonus__main-txt-center"),
    triesCounter = 0, textAfterRotate = "У тебе <span>1</span> спроба";

function runFirstRotation() {
    wheel.classList.add("reel-rotation-first"), playBtn.classList.remove("pulse-btn"), playBtn.style.cursor = "default", wrapper.style.pointerEvents = "none", setTimeout(function () {
        mainWheel.classList.add("_win")
    }, 6e3), setTimeout(function () {
        doAfterFirstRotation()
    }, 8e3), triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = "rotate(900deg)", wheel.classList.remove("reel-rotation-first"), displayPopup(popupFirst), wrapper.style.pointerEvents = "auto", overflow.style.overflow = "hidden", setTimeout(function () {
        playBtn.classList.add("pulse-btn"), playBtn.style.cursor = "pointer"
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add("reel-rotation-second"), playBtn.classList.remove("pulse-btn"), playBtn.style.cursor = "default", overflow.style.overflow = "hidden", wrapper.style.pointerEvents = "none", setTimeout(function () {
        mainWheel.classList.add("_win")
    }, 6e3), setTimeout(function () {
        doAfterSecondRotation()
    }, 8e3), triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond), wrapper.style.pointerEvents = "auto"
}

function displayPopup(e) {
    overlay.classList.remove("opacity-overlay"), e.classList.remove("hide")
}

playBtn.addEventListener("click", function () {
    0 === triesCounter ? (runFirstRotation(), rotateText.innerHTML = textAfterRotate) : runSecondRotation()
}), popupFirstBtn.addEventListener("click", function () {
    overlay.classList.add("opacity-overlay"), popupFirst.classList.add("hide"), overflow.style.overflow = "unset", mainWheel.classList.remove("_win")
}), function () {
    var e, a = new URL(window.location.href),
        n = ["l", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "param1", "param2", "param3", "param4", "creative_type", "creative_id"];
    a.searchParams.has("redirectUrl") && 4 === (e = new URL(a.searchParams.get("redirectUrl"))).href.match(/\//g).length && e.searchParams.get("l") && localStorage.setItem("redirectUrl", e.href), n.forEach(function (e) {
        a.searchParams.has(e) && localStorage.setItem(e, a.searchParams.get(e))
    }), ["affid", "cpaid"].forEach(function (e) {
        a.searchParams.has(e) && localStorage.setItem(e, a.searchParams.get(e))
    }), window.addEventListener("click", function (e) {
        var t, o, r = e.target.closest("a");
        "https://tds.favbet.partners" === r.getAttribute("href") && r && (e.preventDefault(), e = localStorage.getItem("affid"), o = localStorage.getItem("cpaid"), localStorage.getItem("redirectUrl") ? t = new URL(localStorage.getItem("redirectUrl")) : (t = new URL(r.href), e && o && (t.pathname = "/" + e + "/" + o)), n.forEach(function (e) {
            a.searchParams.has(e) && t.searchParams.set(e, localStorage.getItem(e))
        }), document.location.href = t)
    })
}();
