$(document).ready(function() {

var newImageForm = $("#itemURLImput");
var newItemForm = $("#itemNameImput");

var itemViews = $(".item_view");

//modal


$("#thanks").hide();

$("#newRanking").on("click", function(event){
event.preventDefault();
createModal();
});

	$("#submitButton").on("click", function(event){
	event.preventDefault();
	handleSubmit();
	});


function handleSubmit(event){
event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!newItemForm.val().trim().trim() || !newImageForm.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    postRanking({
      item: newItemForm
        .val()
        .trim(),
      itemURL: newImageForm
      	.val()
        .trim()
    });
  }

function postItem(itemData){
	$.post('api/items', itemData)
	.then(getItems);
}



function getItems(){
	$.get('api/items', function(data){
		console.log("items", data);
		var items = data;
		itemViews.empthy();
		var itemsToAdd = [];
		for (var i = 0; i<items.length; i++){
			itemsToAdd.push(createNewRow(items[i]));
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

newImage.attr("src",itemData.itemURL);


var newText = $("<div>");
newText.addClass("col-lg-8 item");
newItemForm = itemData.item;
var score = itemData.score;
var insideItem = $("<p>{<span>"+newItemForm+"</span>}.(<span id='itemPoints'>"+score+"</span>)</p>")

var newButtons = $("<div>");
newButtons.addClass("col-lg-2")

var newTopButton = $("<div>");
newTopButton.addClass("row")
var TopButton = $("<button>");
TopButton.addClass("voteBtn btn btn-success");
TopButton.text("+1");

var newBottomButton = $("<div>");
newBottomButton.addClass("row")
var BottomButton = $("<button>");
BottomButton.addClass("voteBtn btn btn-danger");
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
	var currentRanking = "Pirates";
	var rankingName = $("#rankingName");
	rankingName.html(currentRanking);
	var headerImage = $(".header");
 	headerImage.css({
    "background-image": "url('http://images.hellogiggles.com/uploads/2017/03/26031222/pirates-jack-sparrow.jpg')"
 });
};


})


