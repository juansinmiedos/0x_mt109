const array = [1, 2, 3, 4, 5]

const rotator = (arr, d) => {
    const rotatedArr = arr

    for(i = 0; i < d; i++){
        const firstElement = rotatedArr.shift()
        rotatedArr.push(firstElement)
    }

    return rotatedArr
}

rotator(array, 4)