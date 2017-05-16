$(document).ready(function() {
  /* global moment */

$("#thanks").hide();
$(".inside_ranking_view").hide();

var rankingViews = $(".ranking_view");
var ranking = $("#ranking");

$("#newRanking").on("click", function(event){
	event.preventDefault();
	createModal();

	//createNewRow();
});

$("#submitButton").on("click", function(event){
event.preventDefault();

createNewRow();

});





//getRankings();


function getRankings(){
	$.get('api/rankings', function(data){
		console.log("rankings", data);
		rankings = data;
		rankingViews.empthy();
		var rankingToAdd = [];
		for (var i = 0; i<rankings.length; i++){
			rankingToAdd.push(createNewRow(rankings[i]));
		}
		rankingViews.append(rankingToAdd);
		})
	};


function postRanking(){
	$.post('api/rankings', function(data){
	console.log(data);
	}).then(function(result){
		data.json(result)
	})
}


function createNewRow(){


var newRankingPanel = $("<div>");
newRankingPanel.addClass("thumbnail placeholder")
var newRankImage = $("<img>");
newRankImage.addClass('ranking_image');
var newImageForm = $("#inputURL").val().trim();
newRankImage.attr("src",newImageForm);


var newText = $("<div>");
newText.addClass("caption");
var newSubjectForm = $("#inputName").val().trim();
var newSubjectContent = $("<p>");
newSubjectContent.addClass("subject");
newSubjectContent.text("Subject: " +newSubjectForm);


var newTopicForm = $("#inputTopic").val().trim();
var newTopicContent = $("<p>");
newTopicContent.addClass("topic");
newTopicContent.text("Topic: " +newTopicForm);


newRankingPanel.append(newRankImage);
newRankingPanel.append(newText);
newText.append(newSubjectContent);
newText.append(newTopicContent);
newRankingPanel.data("ranking","ranking");
$(".ranking_view").append(newRankingPanel);

$("#thanks").show();
$("#form").hide();

}


function createModal(){
$('.modal').modal('toggle')
$("#form").show();
$("#thanks").hide();
}

headerDesign();
function headerDesign(){
	var header = $(".header");
 	header.css({
    "background-image": "url('./img/header.png')"
 })
};

});




