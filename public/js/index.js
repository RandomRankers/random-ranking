$(document).ready(function() {
  /* global moment */
var newImageForm = $("#inputURL");
var newSubjectForm = $("#inputName");
var newTopicForm = $("#inputTopic");

$("#thanks").hide();

var rankingViews = $(".ranking_view");
var ranking = $("#ranking");

$("#newRanking").on("click", function(event){
	event.preventDefault();
	createModal();

	//createNewRow();
});

$("#submitButton").on("click", function(event){
event.preventDefault();
handleSubmit();
});


//function to get the inputs from the modal forms

function handleSubmit(event){
event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!newSubjectForm.val().trim().trim() || !newImageForm.val().trim().trim()||!newTopicForm.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    postRanking({
      topic: newSubjectForm
        .val()
        .trim(),
      topicURL: newImageForm
      	.val()
        .trim(),
       category : newTopicForm
		.val()
        .trim()
    });
  }


function postRanking(rankingData){
	$.post('api/topic', rankingData)
	.then(getRankings);
}


//getRankings();
function getRankings(){
	$.get('api/topic', function(data){
		console.log("rankings", data);
		var rankings = data;
		rankingViews.empthy();
		var rankingToAdd = [];
		for (var i = 0; i<rankings.length; i++){
			rankingToAdd.push(createNewRow(rankings[i]));
		}
		rankingViews.append(rankingToAdd);
		})
	};





function createNewRow(rankingData){

var newRankingPanel = $("<div href=/api/items></div>");
newRankingPanel.data("ranking",rankingData);
newRankingPanel.addClass("thumbnail placeholder");
var newRankImage = $("<img>");
newRankImage.addClass('ranking_image');
newRankImage.attr("src",rankingData.topicURL);


var newText = $("<div>");
newText.addClass("caption");
var newSubjectContent = $("<p>");
newSubjectContent.addClass("subject");
newSubjectContent.text("Subject: " +rankingData.topic);


var newTopicContent = $("<p>");
newTopicContent.addClass("topic");
newTopicContent.text("Topic: " +rankingData.category);


newRankingPanel.append(newRankImage);
newRankingPanel.append(newText);
newText.append(newSubjectContent);
newText.append(newTopicContent);

return newRankingPanel;

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




