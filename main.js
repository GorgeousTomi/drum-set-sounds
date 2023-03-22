var trackingTextElement = document.getElementsByClassName('tracking-text')

function makeSound(link){
    var sound = new Audio(link)
    sound.play()
}

function trackingText(newText){
    trackingTextElement[0].innerHTML = `You played ${newText} drum`
}

document.addEventListener("keypress", function(event) {
    playSound(event.key);

});

function playSound(drumPart){
    switch (drumPart) {
        case 'w':
            trackingText('crash')
            makeSound('sounds/sounds_crash.mp3')
            break;

        case 'a':
            trackingText('Tom1')
            makeSound('sounds/sounds_tom-1.mp3')
            break;

        case 's':
            trackingText('Tom2')
            makeSound('sounds/sounds_tom-2.mp3')
            break;

        case 'd':
            trackingText('Tom3')
            makeSound('sounds/sounds_tom-3.mp3')
            break;

        case 'f':
            trackingText('snare')
            makeSound('sounds/sounds_snare.mp3')
            break;

        case 'z':
            trackingText('kick-bass')
            makeSound('sounds/sounds_kick-bass.mp3')
            break;

        case 'x':
            trackingText('Tom4')
            makeSound('sounds/sounds_tom-4.mp3')
            break;
    }


}