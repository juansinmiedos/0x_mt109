const array = [1, 2, 3, 4, 5]

const rotator = (arr, d) => {
    const rotatedArr = arr

    for(i = 0; i < d; i++){
        const firstElement = rotatedArr.shift()
        rotatedArr.push(firstElement)
    }

    //In the instructions the sample outputs are arrays, but to print it as a string of separeted values (as the last paragraph said) we do this aditional step
    
    return rotatedArr.map(String).join(' ')

    // otherwise we would only return rotatedArr
}

rotator(array, 4)