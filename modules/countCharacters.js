// count characters
export function countCharacters(array) {
    const cleanArray = array
        .filter(item => {
            // if count characters is low then 5 set value to null
            if (item.column.length < 5) {
                item.column = "null"
            }
            return item.column
        });

    return new Promise((resolve, reject) => {
        resolve(cleanArray)
    })

}
