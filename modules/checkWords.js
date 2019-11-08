// check if the value contains only letters and check if there a multiple words
export function checkWords(array) {
    const cleanArray = array
        .filter(item => {
            // check if sting only contains letters or sting contains multiple words if so set the value to null
            if (!/[^a-zA-Z]/.test(item.column)) {
                if (item.column !== "null") {
                    item.column = "null"
                }
            }
            return item.column
        });

    // run next function
    return new Promise((resolve, reject) => {
        resolve(cleanArray)
    })
}