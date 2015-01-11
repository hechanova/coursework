var bio = {
  "name" : "Laurel Hechanova",
  "role" : "Designer, Developer",
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", "designer");

$('#header').prepend(formattedName);
