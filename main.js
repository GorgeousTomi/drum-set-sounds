var trackingTextElement = document.getElementsByClassName('tracking-text')
console.log(trackingTextElement)

function makeSound(link){
    var sound = new Audio(link)
    sound.play()
}

function trackingText(newText){
    trackingTextElement[0].innerHTML = `You played ${newText} drum`
}

function playSound(drumPart){
    switch (drumPart) {
        case 'crash':
            trackingText('crash')
            makeSound('sounds/sounds_crash.mp3')

            break;

        case 'tom1':
            trackingText('Tom1')
            makeSound('sounds/sounds_tom-1.mp3')
            break;

        case 'tom2':
            trackingText('Tom2')
            makeSound('sounds/sounds_tom-2.mp3')
            break;

        case 'tom3':
            trackingText('Tom3')
            makeSound('sounds/sounds_tom-3.mp3')
            break;

        case 'snare':
            trackingText('snare')
            makeSound('sounds/sounds_snare.mp3')
            break;

        case 'kick-bass':
            trackingText('kick-bass')
            makeSound('sounds/sounds_kick-bass.mp3')
            break;

        case 'tom4':
            trackingText('Tom4')
            makeSound('sounds/sounds_tom-4.mp3')
            break;
    }


}