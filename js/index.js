const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $fordward = document.querySelector('#fordward')
const $progress = document.querySelector('#progress')
$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}
function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

$backward.addEventListener('click',handleBackward)
function handleBackward(){
    $video.currentTime -= 10
}

$fordward.addEventListener('click',handleFordward)
function handleFordward(){
    $video.currentTime += 10
}

$video.addEventListener('loadedmetadata', handleLoaded)
function handleLoaded(){
    $progress.max = $video.duration
    $progress.step = $video.duration/100
}

$video.addEventListener('timeupdate', handleUpdate)
function handleUpdate(){
    $progress.value = $video.currentTime
    if($progress.value == $progress.max){
        $play.hidden = false
        $pause.hidden = true
    }
}

$progress.addEventListener('input', handleInput)
function handleInput(){
    $video.currentTime = $progress.value
}