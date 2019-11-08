// add hashtag to vlaue
export function addHashtag(array) {
    let startWithCharacter = "#"
    let replacementCharacter = "#"

    let cleanArray = array
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
