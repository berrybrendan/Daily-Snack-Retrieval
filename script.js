var appKey = '2b521dcbf46810d43deb4721045540f0'
var appId = 'b45790b7'
//var qSearch = $('#preference').val() 
var qSearch = 'ramen' 

var queryURL = 'https://api.edamam.com/search?q=' + qSearch +'&app_id=$' + appId + '&app_key=$' + appKey + '&from=0&to=1';
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    var result = response.hits[0].recipe;
    console.log(response.hits[0])
    var resultIngredients = result.ingredientLines
    var resultInstructionsURL = result.url
    var resultImageURL = result.image;
    var resultLabel = result.label;
    var resultHealthLabel = result.healthLabels;
    var nutri = result.digest;
    var caloriesKiloCal = parseInt(result.totalNutrients.ENERC_KCAL.quantity)
    var caloriesdaily = caloriesKiloCal/20; //This is in percent
    var fat = nutri[0];
    var carbs = nutri[1];
    var protein = nutri[2];
    var cholestrol = nutri[3];
    var sodium = nutri[4];
    console.log(resultIngredients)
    resultIngredients.forEach(function(element){
        console.log(element)
    });
    console.log(caloriesKiloCal,caloriesdaily)
})