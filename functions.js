$(document).ready(function() {
	$.getJSON('test.json', function(data) {
		
        $('#name').text(data.name);
		$('#job').text(data.job);
		$('#textIntro').text(data.textIntro);
		
		addSkillsLanguages(data);
		addJobExperiences(data);
    });
});

function addJobExperiences(data){
	
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><div class='zeroPadding' id='professionalExperienceImage'><h4 class='text-right'><span class='fa fa-suitcase' aria-hidden='true'></span></h4></div></td><td class='col-xs-8 col-md-8'><div class='zeroPadding' id='professionalExperienceTitle'> <h4 class='text-left animated bounceInRight'>Professional Experience</h4></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
	
	$.each(data.JobExperiences, function(i, item){
		addHead(item);
		addBody(item);	
	});
}

function addBody(JobExperience){
	
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><div class='zeroPadding'></div></td><td class='col-xs-8 col-md-8 teste3'><div class='zeroPadding2' id='professionalExperienceCompany'> <h4 id='teste'>" + JobExperience.JobCompany + "</h4><h5 id='professionalExperienceCompanyText'>" + JobExperience.JobDescription + "</h5></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
}

function addHead(JobExperience){
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><h4 class='arrow_box teste45'>" + JobExperience.JobDate + "</h4></td><td class='col-xs-8 col-md-8 teste2'><div class='zeroPadding' id='professionalExperienceJob'><h4 id='professionalExperienceJobText'>" + JobExperience.Job + "</h4></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
}

function addSkillsLanguages(data){
	if(data.skills.length === 1)
		{
			addSkill(data.skills[i-1], '#skillsCol1');
			$('#skillsCol2').remove();
		}
		else{
			for (var i = 1; i < data.skills.length + 1; i++) {
				if(i % 2){
					addSkill(data.skills[i-1], '#skillsCol1');
				}
				else{
					addSkill(data.skills[i-1], '#skillsCol2');
				}
			}
		}
		
		$.each(data.languages, function(i, item){
			addLanguage(item);
		});
}

function addLanguage(item){
	
	var htmlParagrah = $("<h5></h5>").text(item.nameLanguage);
	var idProgressBar = "myBar" + item.nameLanguage;
		
	var htmlProgressBar = $('<div class="progress"><div id="'+ idProgressBar + '" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div>');
	
	$('#languages').append(htmlParagrah);
	$('#languages').append(htmlProgressBar);
	
	animateProgressBar(idProgressBar, item.languageLevel);
}

function addSkill(item, col){
	
	var htmlParagrah = $("<h5></h5>").text(item.nameSkill);
	var idProgressBar = "myBar" + item.nameSkill;
		
	var htmlProgressBar = $('<div class="progress"><div id="'+ idProgressBar + '" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div>');
	
	$(col).append(htmlParagrah);
	$(col).append(htmlProgressBar);
	
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


