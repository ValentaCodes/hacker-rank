const reverseArray = (a) => {
    let returnArray = [];
    for (let i = a.length; i >= 1; i--) {
        returnArray.push(a[i - 1])
    }
    console.log(returnArray)
}

reverseArray([1,2,3,4,5])