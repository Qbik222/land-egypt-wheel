
const playBtn = document.querySelector('.bonus__main-wheel-btn'),
      main = document.querySelector('.bonus__main'),
      wheel = document.querySelector('.bonus__main-wheel-reel'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      overflow = document.querySelector('body'),
      wrapper = document.querySelector('.bonus'),
      wheelReel = document.querySelector('.bonus__main-wheel-reel'),
      musicBtn = document.querySelector('.bonus__music'),
      audio = document.querySelector('.audio'),
      man1 = document.querySelector('.bonus__main-man'),
      man2 = document.querySelector('.bonus__main-man2'),
      audioFireworks = document.querySelector('.audio-fireworks'),
      audioWheel = document.querySelector('.audio-wheel'),
      audioWin = document.querySelector('.audio-coin')

audio.volume = '0.4'
audioFireworks.volume= '0.5'


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
    audioFireworks.play()
}

function musicOff(){
    musicBtn.classList.remove('on')
    musicBtn.querySelector('img').setAttribute('src', 'img/music-off.svg')
    audio.pause()
    audioFireworks.pause()
}

let triesCounter = 0

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
        musicOn()

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
        doAfterFirstRotation()
    }, 6000)
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
        wheelReel.classList.add('_secondRotate')
        man1.style.display = 'none'
        man2.style.display = 'block'
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
        doAfterSecondRotation()
    }, 6000)
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
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    audioWin.play()
}

