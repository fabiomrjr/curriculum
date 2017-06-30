$(document).ready(function() {
	$.getJSON('test.json', function(data) {
		
        $('#name').text(data.name);
		$('#job').text(data.job);
		$('#textIntro').text(data.textIntro);
		
		$.each(data.skills, function(i, item){
			addSkill(item);
		});
		
		$.each(data.knowledges, function(i, item){
			addKnowledge(item);
		});
		
		$.each(data.languages, function(i, item){
			addLanguage(item);
		});
    });
});

function addLanguage(item){
	
	var htmlParagrah = $("<p></p>").text(item.nameLanguage);
	var idProgressBar = "myBar" + item.nameLanguage;
		
	var htmlProgressBar = $('<div class="progress"><div id="'+ idProgressBar + '" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div>');
	
	$('#languages').append(htmlParagrah);
	$('#languages').append(htmlProgressBar);
	
	animateProgressBar(idProgressBar, item.languageLevel);
}

function addKnowledge(item){
	
	var htmlParagrah = $("<p></p>").text(item.nameKnowledge);
	var idProgressBar = "myBar" + item.nameKnowledge;
		
	var htmlProgressBar = $('<div class="progress"><div id="'+ idProgressBar + '" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div>');
	
	$('#knowledges').append(htmlParagrah);
	$('#knowledges').append(htmlProgressBar);
	
	animateProgressBar(idProgressBar, item.knowledgeLevel);
}

function addSkill(item){
	
	var htmlParagrah = $("<p></p>").text(item.nameSkill);
	var idProgressBar = "myBar" + item.nameSkill;
		
	var htmlProgressBar = $('<div class="progress"><div id="'+ idProgressBar + '" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div>');
	
	$('#skills').append(htmlParagrah);
	$('#skills').append(htmlProgressBar);
	
	animateProgressBar(idProgressBar, item.skillLevel);
}

function animateProgressBar(idElement, percentage){
	var elem = document.getElementById(idElement); 
		var width = 1;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
			} else if(width <= percentage){
				width++; 
				elem.style.width = width + '%'; 
			}
		}
}


