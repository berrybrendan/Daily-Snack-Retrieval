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
})

var defaultUnchecked = $('.filled-in').attr('checked', false)
var nutAllergyEl = $('#nut-allergy')
var dairyAllergyEl = $('#dairy-allergy')
var eggAllergyEl = $('#egg-allergy')
var shellfishAllergyEl = $('#shellfish-allergy')
var wheatAllergyEl = $('#wheat-allergy')
var soyAllergyEl = $('#soy-allergy')
var fishAllergyEl = $('#fish-allergy')


//Add each part of the array separate from the queryURL 
//this way, if one array item needs to be removed, it can be done with ease
//the queryURL will be updated once our result button is pushed.
var allergyURLStr = []

nutAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[0])
        console.log(allergyURLStr)
    }
    else {
        console.log()
    }
});
dairyAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[1])
        console.log(allergyURLStr)
    }
    else {
        console.log(allergyURLStr)
        
    }
});
eggAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[2])
        console.log(allergyURLStr)
    }
    else {
        console.log(allergyURLStr)
        
    }
});
shellfishAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[3])
        console.log(allergyURLStr)
    }
    else {
        console.log(allergyURLStr)
        
    }
});
wheatAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[4])
        console.log(allergyURLStr)
    }
    else {
        console.log(allergyURLStr)
        
    }
});
soyAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[5])
        console.log(allergyURLStr)
    }
    else {
        console.log(allergyURLStr)
        
    }
});
fishAllergyEl.change(function () {
    if ($(this).is(':checked')) {
        allergyURLStr.push(qAllergyArray[6])
        console.log(allergyURLStr)
    }
    else {
        console.log(allergyURLStr)
        
    }
});