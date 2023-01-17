
const playBtn = document.querySelector('.bonus__main-wheel-btn'),
      main = document.querySelector('.bonus__main'),
      wheel = document.querySelector('.bonus__main-wheel-reel'),
      mainWheel = document.querySelector('.bonus__main-wheel'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      overflow = document.querySelector('body'),
      wrapper = document.querySelector('.bonus'),
      musicBtn = document.querySelector('.bonus__music'),
      audio = document.querySelector('.audio'),
      rotateText = document.querySelector('.bonus__main-txt-center'),
      audioWheel = document.querySelector('.audio-wheel'),
      audioWin = document.querySelector('.audio-coin')

audioWheel.volume = '0.3'

musicBtn.addEventListener('click', ()=>{
    if(musicBtn.classList.contains('on')){
        musicOff()
    } else {
        musicOn()
    }
})

function musicOn(){
    musicBtn.classList.add('on')
    musicBtn.querySelector('img').setAttribute('src', 'img/music-on.svg')
    audio.play()

}

function musicOff(){
    musicBtn.classList.remove('on')
    musicBtn.querySelector('img').setAttribute('src', 'img/music-off.svg')
    audio.pause()

}

let triesCounter = 0
let textAfterRotate = 'У тебе <span>1</span> спроби';

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
        musicOn()
        rotateText.innerHTML = textAfterRotate;

    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    audioWheel.play()
    setTimeout(() => {
        mainWheel.classList.add('_win')
    }, 6000)
    setTimeout(() => {
        doAfterFirstRotation()
    }, 8000)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    audioWheel.play()
    setTimeout(() => {
        mainWheel.classList.add('_win')
    }, 6000)
    setTimeout(() => {
        doAfterSecondRotation()
    }, 8000)
    triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}


popupFirstBtn.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    mainWheel.classList.remove('_win')
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    audioWin.play()
}

