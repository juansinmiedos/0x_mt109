const stringOfDigits = '49142'

const seriesOfDigits = (string, lengthOfEachSubstring) => {
    const stringToArray = string.split('')

    if(stringToArray.length < lengthOfEachSubstring){
        return "You deserve whatever you get!"
    } else if(stringToArray.length === lengthOfEachSubstring){
        return string
    } else if(stringToArray.length > lengthOfEachSubstring){
        const arrOfCombinations = stringToArray.map((el, id, arr)=> {
            const aux = []

            for(i = id; i < (lengthOfEachSubstring + id); i++){
                aux.push(stringToArray[i])
            }

            return aux.join('')
        })

        for(i = 0; i < (lengthOfEachSubstring - 1); i++){
            arrOfCombinations.pop()
        }

        return arrOfCombinations
    }
}

seriesOfDigits(stringOfDigits, 3)
seriesOfDigits(stringOfDigits, 4)