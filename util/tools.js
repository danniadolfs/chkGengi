/* TOOLS.js */

// tools.js
// ========
module.exports = function() {
	var carResults = [];
    this.sum = function(a,b) { return a+b };
    
    this.multiply = function(a,b) { return a*b };
    
    this.carsApi = function(number){
    	return fetch('http://apis.is/car?number=' + number)
      .then((response) => response.json())
      .then((responseJson) => {
      	carResults.push(responseJson.results[0].type);
      	carResults.push(responseJson.results[0].subType);
      	carResults.push(responseJson.results[0].registryNumber);
      	carResults.push(responseJson.results[0].number);
      	carResults.push(responseJson.results[0].factoryNumber);
      	carResults.push(responseJson.results[0].registeredAt);
      	carResults.push(responseJson.results[0].pollution);
      	carResults.push(responseJson.results[0].weight);
      	carResults.push(responseJson.results[0].status);
      	carResults.push(responseJson.results[0].nextCheck);
      	console.log("Array of result: ", carResults);
        return carResults;
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }