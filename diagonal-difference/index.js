const squareMatrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

absoluteDifference = (arrOfarrs) => {
    const firstDiagonal = arrOfarrs.map((el, i) => el[i])
    const secondDiagonal = arrOfarrs.map((el, i, arr) => el[arr.length - i -1])

    const absoluteDifference = Math.abs(firstDiagonal.reduce((acc, curr) => acc + curr) - secondDiagonal.reduce((acc, curr) => acc + curr))

    return absoluteDifference
}

absoluteDifference(squareMatrix)