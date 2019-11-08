// check if the value is empty
export function checkIfValueIsEmpty(array) {
    const cleanArray = array
        .filter(item => {
            //if the value is empty set value to null
            if (item.column === "") {
                item.column = "null"
            }
            return item.column
        });

    return new Promise((resolve, reject) => {
        resolve(cleanArray)
    })
}