function makeSound(link){
    var sound = new Audio(link)
    sound.play()
}

function playSound(drumPart){
    switch (drumPart) {
        case 'crash':
            makeSound('sounds/sounds_crash.mp3')
            break;

        case 'tom1':
            makeSound('sounds/sounds_tom-1.mp3')
            break;

        case 'tom2':
            makeSound('sounds/sounds_tom-2.mp3')
            break;

        case 'tom3':
            makeSound('sounds/sounds_tom-3.mp3')
            break;

        case 'snare':
            makeSound('sounds/sounds_snare.mp3')
            break;

        case 'kick-bass':
            makeSound('sounds/sounds_kick-bass.mp3')
            break;

        case 'tom4':
            makeSound('sounds/sounds_tom-4.mp3')
            break;
    }


}