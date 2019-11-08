import {countCharacters} from './modules/countCharacters.js'
import {checkIfValueIsEmpty} from './modules/checkEmpty.js'
import {checkWords} from './modules/checkWords.js'
import {checkMultipleValuesInEntery} from './modules/checkMultipleValuesInEntery.js'
import {addHashtag} from './modules/addHashtagToString.js'

// set dataSource
const dataSource = 'data/enqete-raw.csv'

// Set here the rowname to edit
const rowToEdit = 'Kleur ogen (HEX code bijv.  #ff5733  )'


// run the code
cleanData(dataSource, rowToEdit)


// loadData and log row values
function cleanData(dataSource, rowToEdit) {
    const dataRow = d3.csv(dataSource, function (data) {
        return {
            column: data[rowToEdit]
        }
    }).then(data => countCharacters(data))
      .then(data => checkIfValueIsEmpty(data))
      .then(data => checkWords(data))
      .then(data => checkMultipleValuesInEntery(data))
      .then(data => addHashtag(data))
      .then(data => displayData(data))
      .catch(err => console.error(err))
    return dataRow
}



// display table with row
//source: https://code-boxx.com/create-table-from-array-javascript/
function displayData(array){

        let data = array

        // DRAW THE HTML TABLE
        let perrow = 1, // 3 items per row
            html = "<table><tr>"

        // Loop through array and add table cells
        for (let i=0; i<data.length; i++) {
            html += "<td>" + data[i] + "</td>"
            // Break into next row
            let next = i+1;
            if (next%perrow==0 && next!=data.length) {
                html += "</tr><tr>"
            }
        }
        html += "</tr></table>"

        // ATTACH HTML TO CONTAINER
        document.getElementById("container").innerHTML = html
}



