// check if there are multiple wo
export function checkMultipleValuesInEntery(array) {
    const cleanArray = array
        .filter(item => {
            if (item.column.includes("&") || item.column.split(",").length > 1) {
                //remove all character after & sign
                item.column = item.column.substring(0, item.column.indexOf('&'))
            }
            return item.column
        });
    return new Promise((resolve, reject) => {
        resolve(cleanArray)
    })
}
