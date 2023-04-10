const dataSet = {
    part1: [
        'love', 'money', 'food', 'cars', 'houses', 'fortune'
    ],
    part2: [
        'sun', 'moon', 'star', 'comet'
    ],
    part3: [
        'run outside', 'chase your dreams', 'stay inside', 'take a nap', 'eat something delicious', 'do something with a friend'
    ]
}
function randomPicker() {
    return Math.floor(Math.random()*6)
}

const button = document.querySelector('button');

function changeParagraph() {
    let element = document.getElementById('fortune')
    let generatedArray = []

    for ( let part in dataSet) {
        let indexPick = randomPicker()
    
            switch (part) {
                case 'part1': 
                    generatedArray.push(`You will get ${dataSet.part1[indexPick]}`)
                    break;
                case 'part2':
                    generatedArray.push(`Your current sign is ${dataSet.part2[indexPick]}`)
                    break;
                case 'part3':
                    generatedArray.push(`Today you should ${dataSet.part3[indexPick]}`)
                    break
                default: 
                    generatedArray.push('Not enough information today')
            }
    }
    function formatArray(array) {
        const formatted = array.join(' ')
        return formatted
    }
    let finalArray = formatArray(generatedArray)
    return element.innerHTML = `${finalArray}`
}