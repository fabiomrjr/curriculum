$(document).ready(function() {
	$.getJSON('datafile.json', function(data) {
		
        $('#programmerName').text(data.programmerName);
		$('#job').text(data.job);
		$('#textIntro').text(data.textIntro);

		var pagebody = $('#pageBody');

		addSoftwareSkill(data);
		addLanguageSkill(data);
		addEducation(data);
		addJobExperiences(data);
    });
});

function addEducation(data){
	
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><div class='zeroPadding' id='professionalExperienceImage'><h4 class='text-right'><span class='fa fa-graduation-cap' aria-hidden='true'></span></h4></div></td><td class='col-xs-8 col-md-8'><div class='zeroPadding' id='educationTitle'> <h4 class='text-left animated bounceInRight title'>EDUCATION</h4></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
	
	$.each(data.Education, function(i, item){
		addHead(item.Date, item.University);
		addBody(item.Course, "");	
	});
}

function addJobExperiences(data){
	
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><div class='zeroPadding' id='professionalExperienceImage'><h4 class='text-right'><span class='fa fa-suitcase' aria-hidden='true'></span></h4></div></td><td class='col-xs-8 col-md-8'><div class='zeroPadding' id='professionalExperienceTitle'> <h4 class='text-left animated bounceInRight title'>PROFESSIONAL EXPERIENCE</h4></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
	
	$.each(data.JobExperiences, function(i, item){
		addHead(item.Date, item.Job);
		addBody(item.Company, item.JobDescription);	
	});
}

function addBody(Company, JobDescription){
	
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><div class='zeroPadding'></div></td><td class='col-xs-8 col-md-8 teste3'><div class='zeroPadding2' id='professionalExperienceCompany'> <h4 id='teste'>" + Company + "</h4><h5 id='professionalExperienceCompanyText'>" + JobDescription + "</h5></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
}

function addHead(Date, Job){
	var htmlParagrah = $("<tr><td class='col-xs-4 col-md-4'><p class='arrow_box paragraf arrow_text'>" + Date + "</p></td><td class='col-xs-8 col-md-8 teste2'><div class='zeroPadding' id='professionalExperienceJob'><h4 class='titleSecondary'>" + Job + "</h4></div></td></tr>");
	
	$('#tableCareer').append(htmlParagrah);
}

function addSoftwareSkill(data){

	console.log(data.skills.length)
	if(data.skills.length !== 0){

		if(data.skills.length === 1){
			addGeneralSkill(data.skills[i-1], '#softwareSkillCol1');
			$('#softwareSkillCol2').remove();
		}
		else{
			for (var i = 1; i < data.skills.length + 1; i++) {
				if(i % 2){
					addGeneralSkill(data.skills[i-1], '#softwareSkillCol1');
				}
				else{
					addGeneralSkill(data.skills[i-1], '#softwareSkillCol2');
				}
			}
		}
	}
	else{
		$('#softwareSkills').remove();
	}
}

function addLanguageSkill(data){
	if(data.languages.length !== 0){
		$.each(data.languages, function(i, item){
			addGeneralSkill(item, '#languages');
		});
	}
	else{
		$('#languageSkills').remove();
	}
}

function addGeneralSkill(item, col){
	
	var htmlParagrah = $("<h5 class='skill'></h5>").text(item.name);
	var idProgressBar = "myBar" + item.name;
	//<div class="progress">
	var htmlProgressBar = $('<div class="progress"><div id="'+ idProgressBar + '" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div>');
	

	$(col).append(htmlParagrah);
	$(col).append(htmlProgressBar);
	
	animateProgressBar(idProgressBar, item.level);
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


