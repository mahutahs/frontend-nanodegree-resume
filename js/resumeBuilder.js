

var education = {
  "schools": [
  {
    "name": "Enspiral Dev Academy",
    "location": "Wellington, New Zealand",
    "degree": "Dev Bootcamp",
    "date": "2015"
  },
  {
    "name": "New Zealand School of Dance",
    "location": "Wellington","New Zealand",
    "degree": "Degree in Performing arts",
    "major": "Dance",
    "date" :"2011",
  }
  ]
}

function displayEducation(){
  for (var i =0; i < education.schools.length; i++){
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName= HTMLschoolName.replace ("%data%", education.schools[i].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDates= HTMLschoolDates.replace ("%data%", education.schools[i].date);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolDegree= HTMLschoolDegree.replace ("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolMajor= HTMLschoolMajor.replace ("%data%", education.schools[i].major);
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolLocation= HTMLschoolLocation.replace ("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedSchoolLocation);
  }
};

displayEducation();

var projects ={
  "projects": [
    {
      "dates" : "2015",
      "title" : "MMA - training",
      "description" : "Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
     },
     {"dates"  : "13 May 2016",
     "title" : "Become a developer",
     "description" : "Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
    },
    {"dates"  : "June - December 2010",
     "title" : "Started Dance school",
     "description" : "ICurabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
    }

  ]

};


projects.display = function(){

for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

var formattedTitle = HTMLprojectTitle.replace ("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);

var formattedDates= HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);

var formattedDescription = HTMLprojectDescription.replace ("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

//if (projects.projects[project].image.length < 0){

  for (image in projects.projects[project].images) {
 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
    }
  }
};

projects.display();

 var bio = {
    "name": "Mahuta Hoerara-Smith",
    "role": "Web developer",
    "contacts": {
                "email" : "mahutahs@yahoo.co.nz",
                "mobile" : "027 230 8050",
                "github" : "mahutahs"
              },
    "location": "Wellington, NZ",
    "skills" : ["Kind", "Hard Worker", "Team Player", "Super Nerd" ],
    "welcomeMessage" : "Welcome to my online resume.",
    "bioPic": "images/fry.jpg"
  };

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedwelcomeMessage);


if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill= HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};


function inName(bioName){
    var finalName = bio.name.split(" ");
    var firstName = finalName.shift().toLowerCase();
    var firstLetter = firstName.substring(0,1).toUpperCase();
    var lastName = finalName.pop().toUpperCase();
    inName = firstLetter + firstName.slice(1) + " " + lastName;

    return inName;
  }


$("#header").append(internationalizeButton);


var work ={
  "jobs": [
    {
      "employer":"Te Puni Kokiri",
      "location": "Wellington NZ",
      "dates" : "2013 - 2015",
      "title" : ["File Clerk"],
      "description" : " I was providiing administrative support for the Education team at Te Puni Kokiri."
    },
    {
      "employer" : "Kahui Legal",
      "location" : "Wellington, NZ",
      "dates":  "Janurary - August 2015",
      "title" : "Secretary / Administrator",
      "description": "I was both the secretary and the admin support to all the layers and partners of the firm. Organising travel, meetings, accomidation, events."
    }
  ]
};

function displayWork(){
  for (var job =0; job < work.jobs.length; job++){
    $ ("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();

// adding where there are clicks

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
    });


//adding the map
$("#mapDiv").append(googleMap);
