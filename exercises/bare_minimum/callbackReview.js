/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // if(true){
    fs.readFile(filePath, 'utf8', function (err, content) {
    console.log('Example from callbackReview.js')
    if (err) {
      callback(err);
    } else {
      //process content to return 1st line
      // callback(null, 'This is a file to read', content);
      callback(null, content.split('\n')[0], content);
    }
  // }

});
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
