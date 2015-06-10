var bio = {
	"name": "Herman Wu",
	"role": "Web Developer",
	"contacts": {
		"mobile": "678-986-1999",
		"email": "herman.wrt@gmail.com",
		"github": "hermanwu",
		"location": "Washington D.C."
	},
	"welcomeMessage0":"Welcome!",
	"skills": ["coding", "hacking"],
	"bioPic": "images/herman.jpg"
}

var work = {
	"jobs":[
		{
			"position": "Technical Account Manager",
			"employer": "VMware - AirWatch",
			"employerWebsite": "https://www.vmware.com/enterprise-mobility-management",
			"dates":  "JAN 2014 - APR 2015",
			"description": "Serve enterprise level customers"
		},
		{
			"position": "Software Engineer Co-op",
			"employer": "CafePress",
			"employerWebsite": "https://www.cafepress.com",
			"dates": "JAN 2012 - AUG 2013",
			"description": "Build Supply Chain Management Software using Visual Studio"
		},
		{
			"position": "Student Research Team Co-lead",
			"employer": "UPS",
			"employerWebsite": "https://www.ups.com",
			"dates": "JAN 2013 - MAY 2013",
			"description": "Model and Simulate UPS Aircraft Schedule"
		}
	]
};

var project = {
	"projects":[
		{
		 	"name": "Stats Portal"
		}
	]
}


var education = {
	"schools": [
		{
			"name": "Georgia Tech",
			"city": "Atlanta, GA, US",
			"degree": "BA",
			"major": ["Computer Science"]
		},
		{
			"name": "Georgia Tech",
			"city": "Atlanta, GA, US",
			"degree": "BA",
			"major": ["Industrial Engineering"]
		}

	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// contact html
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
//
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);


function displayWork()
{
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);

$("#header").append(formattedBioPic);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
}

for(jobIndex in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].position);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
	$(".work-entry:last").append(formattedDescription);
	
}
}

displayWork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});

$("#mapDiv").append(googleMap);