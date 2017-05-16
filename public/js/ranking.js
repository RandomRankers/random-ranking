$(document).ready(function() {
//modal


$("#thanks").hide();

$("#newRanking").on("click", function(event){
event.preventDefault();
createModal();
});

	$("#submitButton").on("click", function(event){
	event.preventDefault();
	createNewRow();
	});


//row
function createNewRow(){

var newItem = $("<div>");
newItem.addClass("itemRow row")

var newImageCol = $("<div>");
newImageCol.addClass('col-lg-2');
var newImage = $("<img>");
newImage.addClass('itemImage');
var newImageForm = $("#itemURLImput").val().trim();
newImage.attr("src",newImageForm);


var newText = $("<div>");
newText.addClass("col-lg-8 item");
var newItemForm = $("#itemNameImput").val().trim();
var score = "50";
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

$(".item_view").append(newItem);


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


