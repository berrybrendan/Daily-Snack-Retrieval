var appKey = '2b521dcbf46810d43deb4721045540f0';
var appId = 'b45790b7';
//var qSearch = $('#preference').val() 
var qSearch = 'ramen';
var qAllergyArray = ['&health=tree-nut-free&health=peanut-free',
    '&health=dairy-free', '&health=egg-free', '&health=shellfish-free',
    '&health=wheat-free', '&health=soy-free', '&health=fish-free'];

var fromQuery = '&from='
var toQuery = '&to='

//var queryURL = 'https://api.edamam.com/search?q=' + qSearch + '&app_id=$' + appId + '&app_key=$' + appKey + '&from=0&to=1';


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


$('#preferences').on('click', function(){
    window.localStorage.setItem('allergy', JSON.stringify(allergyURLArray))
    console.log(window.localStorage.getItem('allergy'))
})

if(localStorage.getItem('allergy') !== 'null'){
    var defaultChecked = $('.filled-in').attr('checked', false)
    var checker = JSON.parse(localStorage.getItem('allergy'))
    for(var i = 0; i< qAllergyArray.length; i++){
        // console.log(checker)
        for(var j = 0; j<checker.length; j++){
            
            if(qAllergyArray[i] === checker[j]){
                // console.log('hi')
                if(i===0){
                    $('#nut-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                if(i===1){
                    $('#dairy-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                if(i===2){
                    $('#egg-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                if(i===3){
                    $('#shellfish-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                if(i===4){
                    $('#wheat-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                if(i===5){
                    $('#soy-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                if(i===6){
                    $('#fish-allergy').attr('checked', true)
                    allergyURLArray.push(qAllergyArray[i])
                }
                
            }
        }
    }
}



// $('#search-button').on('click', function(){
    var queryURL = 'https://api.edamam.com/search?q=' + qSearch
    allergyURLArray.forEach(function(element){
        queryURL += element;
    })
    queryURL +='&app_id=$' + appId + '&app_key=$' + appKey;
    
    
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (list) {
        var totalNumber = list.count-1
        // if(totalNumber>100){
        //     totalNumber = 100
        // }
        var randNumber = Math.floor(Math.random() * totalNumber);
        var toNumber = randNumber+50;
        var fromNumber = randNumber-50;
        randNumber = Math.floor(Math.random() * 100);
        if(toNumber>totalNumber){
            toNumber=totalNumber;
            fromNumber= totalNumber -100;
        }
        if(fromNumber<0){
            fromNumber=0;
            toNumber=100;
        }


        //var toNumber = randNumber ++;
        queryURL += fromQuery + fromNumber + toQuery + toNumber;
        // console.log(queryURL)
        // console.log('here')
        // console.log(list)
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){

            for(var i=0; i<5; i++){
                randNumber = Math.floor(Math.random() * 100);
                // console.log(queryURL)
                // console.log(totalNumber)
                console.log(randNumber)
                var result = response.hits[randNumber].recipe;
                console.log('response')
                console.log(response)
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
                // console.log(resultIngredients)
                resultIngredients.forEach(function (element) {
                    // console.log(element)
                });
                // console.log(caloriesKiloCal, caloriesdaily)
            }
           
        
        })


    })
// })
