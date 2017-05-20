$(document).ready(function() {

var newImageForm = $("#itemURLInput");
var newItemForm = $("#itemNameInput");

var itemViews = $(".item_view");

//modal

var str = window.location.search;
var res = str.substr(4);
var theRes = parseInt(res);

$("#thanks").hide();


$("#newRanking").on("click", function(event){
event.preventDefault();
createModal();
$("#thanks").hide();
});

	$("#submitButton").on("click", function(event){
	event.preventDefault();
	handleSubmit();
	$("#thanks").show();
	$("#form").hide();
	});


function handleSubmit(event){

    // Don't do anything if the name fields hasn't been filled out
    if (!newItemForm.val().trim().trim() || !newImageForm.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    postItem({
      name: newItemForm
        .val()
        .trim(),
      imgURL: newImageForm
      	.val()
        .trim(),
      score: 0, 
      TopicId: res
    });
  }

function postItem(itemData){
	$.post('api/items', itemData)
	.then(getItems);
}

getItems();

function getItems(){

	$.get('api/items/', function(data){
		console.log("items", data);
		var items = data;
		
		var itemsToAdd = [];
		for (var i = 0; i<items.length; i++){
		if(items[i].TopicId==res){
			itemsToAdd.push(createNewRow(items[i]));
		}
		}
		
		itemViews.append(itemsToAdd);
	
		})
	};





//row
function createNewRow(itemData){

var newItem = $("<div>");
newItem.data("items", itemData)
newItem.addClass("itemRow row")

var newImageCol = $("<div>");
newImageCol.addClass('col-lg-2');
var newImage = $("<img>");
newImage.addClass('itemImage');

newImage.attr("src",itemData.imgURL);


var newText = $("<div>");
newText.addClass("col-lg-8 item");
var itemForm = itemData.name;
var score = itemData.score;
var insideItem = $("<p>{<span>"+itemForm+"</span>}.(<span id='itemPoints'>"+score+"</span>)</p>")

var newButtons = $("<div>");
newButtons.addClass("col-lg-2")

var newTopButton = $("<div>");
newTopButton.addClass("row")
var TopButton = $("<button>");
TopButton.addClass("voteBtn btn btn-success");
TopButton.text("+1");
TopButton.on('click', function () {
	$.ajax({
		path: '/api/items/increment/:id/:score',
		method: "PUT",
	});
});

//TopButton.on('click', function (){
//
//	$.ajax({
//		url: '/api/items',
//		method: "PUT",
//		where: {
//			id:itemData.id
//		},
//		success: function (){
//			console.log("it worked!")
//		}
//	});
//});

var newBottomButton = $("<div>");
newBottomButton.addClass("row")
var BottomButton = $("<button>");
BottomButton.addClass("voteBtn btn btn-danger");



<<<<<<< HEAD
BottomButton.on('click', function (url, data, method, success,id) {
	$.ajax({
		url: '/api/items/decrement/id='+itemData.id,
		data: data, 
		method: "PUT",
		success: function (data){
			console.log("it worked!")
		}
	});
});
=======
//BottomButton.on('click', function (){
//	$.ajax({
//		url: '/api/items',
//		method: "PUT",
//		where:{
//			id:itemData.id
//		},
//		success: function (){
//			console.log("it worked!")
//		}
//	});
//});
>>>>>>> c90a54455ade78cf4087b69744904ec380c0a996


BottomButton.text("-1");


newImageCol.append(newImage);
newItem.append(newImageCol);

newText.append(insideItem);
newItem.append(newText);

newTopButton.append(TopButton);
newBottomButton.append(BottomButton);
newButtons.append(newTopButton);
newButtons.append(newBottomButton);
newItem.append(newButtons);

return newItem;


$("#thanks").show();
$("#form").hide();



};


function createModal(){
	$('.modal').modal('toggle');
	$("#form").show();
	$("#thanks").hide();

};
rankingDesign();
function rankingDesign(){
	$.get("/api/topics", function(rankingData){
		for (var i=0; i<rankingData.length; i++){
			
			if(rankingData[i].id==res){
		var currentRanking = rankingData[i].name;
		var rankingName = $("#rankingName");
		rankingName.html(currentRanking);
		var headerImage = $(".header");
	 	headerImage.css({
	    "background-image": "url('"+rankingData[i].topicURL+"')"
 });
}
}
});
};
<<<<<<< HEAD
=======




>>>>>>> c90a54455ade78cf4087b69744904ec380c0a996


});

//add on click functions that link the buttons th the database
//window.location!!

<<<<<<< HEAD

=======
>>>>>>> c90a54455ade78cf4087b69744904ec380c0a996
