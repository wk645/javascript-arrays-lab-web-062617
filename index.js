const app = "I don't do much."

function destructivelyAppendKitten(kitten){
    kittens.push(kitten);
}

function destructivelyPrependKitten(kitten){
    kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten){
    kittens.pop(kitten);
}

function destructivelyRemoveFirstKitten(kitten){
    kittens.shift(kitten);
}
function appendKitten(kitten){
    let kittensCopy = kittens.slice(0);
    kittensCopy.push(kitten);
    return kittensCopy;
}

function prependKitten(kitten){
    let kittensCopy = kittens.slice(0);
    kittensCopy.unshift(kitten);
    return kittensCopy;
}

function removeLastKitten(kitten){
    let kittensCopy = kittens.slice(0);
    kittensCopy.pop(kitten);
    return kittensCopy;
}

function removeFirstKitten(kitten){
    let kittensCopy = kittens.slice(0);
    kittensCopy.shift(kitten);
    return kittensCopy;
}