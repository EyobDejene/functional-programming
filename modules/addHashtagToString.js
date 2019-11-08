// add hashtag to vlaue
let startWithCharacter = "#"
let replacementCharacter = "#"

export function addHashtag(array) {
    const cleanArray = array
        .map(item => {
            if (!item.column.startsWith(startWithCharacter)) {
                if (item.column !== "null") {
                    item.column = replacementCharacter + item.column
                }
            }
            return item.column
        });

    return new Promise((resolve, reject) => {
        resolve(cleanArray)
    })
}
