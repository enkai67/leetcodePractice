/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0
    for (let i = 0 ; i < columnTitle.length; i++){
        //charCodeAt 用 utf-16, 找到A === 65, 因此將此變數-64
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - (i + 1))
    }
    return result
};