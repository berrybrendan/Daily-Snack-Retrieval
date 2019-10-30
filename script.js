var appKey = '2b521dcbf46810d43deb4721045540f0';
var appId = 'b45790b7';
//var qSearch = $('#preference').val() 
var qSearch = 'ramen';
var qAllergyArray = ['&health=tree-nut-free&health=peanut-free',
    '&health=dairy-free', '&health=egg-free', '&health=shellfish-free',
    '&health=wheat-free', '&health=soy-free', '&health=fish-free'];

var queryURL = 'https://api.edamam.com/search?q=' + qSearch + '&app_id=$' + appId + '&app_key=$' + appKey + '&from=0&to=1';

$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function (response) {
    var result = response.hits[0].recipe;
    console.log(response.hits[0])
    var resultIngredients = result.ingredientLines;
    var resultInstructionsURL = result.url;
    var resultImageURL = result.image;
    var resultLabel = result.label;
    var resultHealthLabel = result.healthLabels;
    var nutri = result.digest;
    var caloriesKiloCal = parseInt(result.totalNutrients.ENERC_KCAL.quantity);
    var caloriesdaily = caloriesKiloCal / 20; //This is in percent
    var fat = nutri[0];
    var carbs = nutri[1];
    var protein = nutri[2];
    var cholestrol = nutri[3];
    var sodium = nutri[4];
    console.log(resultIngredients)
    resultIngredients.forEach(function (element) {
        console.log(element)
    });
    console.log(caloriesKiloCal, caloriesdaily)
    console.log(resultLabel)
})

var defaultUnchecked = $('.filled-in').attr('checked', false)
var nutAllergyEl = $('#nut-allergy')
var dairyAllergyEl = $('#dairy-allergy')
var eggAllergyEl = $('#egg-allergy')
var shellfishAllergyEl = $('#shellfish-allergy')
var wheatAllergyEl = $('#wheat-allergy')
var soyAllergyEl = $('#soy-allergy')
var fishAllergyEl = $('#fish-allergy')

//Empty array that will contain URL parameters depending on checked allergies
var allergyURLArray = []

nutAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[0])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=tree-nut-free&health=peanut-free')
        console.log()
    }
});
dairyAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[1])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=dairy-free')
        console.log(allergyURLArray)
        
    }
});
eggAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[2])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=egg-free')
        console.log(allergyURLArray)
        
    }
});
shellfishAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[3])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=shellfish-free')
        console.log(allergyURLArray)
        
    }
});
wheatAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[4])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=wheat-free')
        console.log(allergyURLArray)
        
    }
});
soyAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[5])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=soy-free')
        console.log(allergyURLArray)
        
    }
});
fishAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLArray.push(qAllergyArray[6])
        console.log(allergyURLArray)
    }
    else {
        allergyURLArray = allergyURLArray.filter(item => item !== '&health=fish-free')
        console.log(allergyURLArray)
        
    }
});

var balancedMealEl = document.getElementById('balanced')
var balancedMeal = '&diet=balanced'
var highProteinEl = document.getElementById('high-protein')
var highProteinMeal = '&diet=high-protein'
var highFiberEl = document.getElementById('high-fiber')
var highFiberMeal = '&diet=high-fiber'
var lowFatEl = document.getElementById('low-fat')
var lowFatMeal = '&diet=low-fat'
var lowCarbEl = document.getElementById('low-carb')
var lowCarbMeal = '&diet=low-carb'
var lowSodiumEl = document.getElementById('low-sodium')
var lowSodiumMeal = '&diet=low-sodium'


function mealPrefCheck(mealEl){
    var isChecked = mealEl.checked
    console.log(isChecked)
}

var resultsContainerEL = $(".results-container")
for (i=0; i<5; i++){
    var outerDiv = $("<div class='row'></div>")
    var outerInnerDiv = $("<div class='col s12 m6></div>")
    var styleDiv = $("<div class='card #fafafa grey lighten-5'></div>")
    var contentDiv = $("<div class='card-content'><div>")
    var cardImage = $("<img src=" + resultImageURL + ">")
    var cardTitle = $("<span class='card-title'>" + resultLabel + "<span>")
    var 
}