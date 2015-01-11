

var bio = {
  "bioName" : "Laurel Hechanova",
  "role" : "Designer, Developer",
  "welcomeMessage" : "Lorem ipsum dolor sit amet",
  "contacts" {
    "email" : "laurel@thisisaok.com",
    "twitter" : "http://twitter.com/hechanova"
  }
  "skills" : ["design", "illustration", "front-end development"]
};

var formattedName = HTMLheaderName.replace("%data%", "Laurel");

var formattedRole = HTMLheaderRole.replace("%data%", "designer");

$('#header').prepend(formattedName);

var work = {
    "job_01" : {
      "employer" : "mStoner",
      "title" : "Designer",
      "location" : "Chicago, IL",
      "dates" : "2007 to 2010",
      "description" : "Lorem ipsum dolor sit amet"
    },
    "job_02" : {
      "employer" : "mStoner",
      "title" : "Designer",
      "location" : "Chicago, IL",
      "dates" : "2007 to 2010",
      "description" : "Lorem ipsum dolor sit amet"
    },
    "job_03" : {
      "employer" : "mStoner",
      "title" : "Designer",
      "location" : "Chicago, IL",
      "dates" : "2007 to 2010",
      "description" : "Lorem ipsum dolor sit amet"
    }
};

var projects = {
  "project_01" : {
    "title" : "Pulmonary Exacerbation Risk Calculator",
    "dates" : "2012",
    "description" : "Lorem ipsum dolor sit amet",
    "images" : {
      "../images/01.jpg",
      "../images/02.jpg",
      "../images/03.jpg"
    }
  },
  "project_02" : {
    "title" : "Pulmonary Exacerbation Risk Calculator",
    "dates" : "2012",
    "description" : "Lorem ipsum dolor sit amet",
    "images" : {
      "../images/01.jpg",
      "../images/02.jpg",
      "../images/03.jpg"
    }
  },
  "project_03" : {
    "title" : "Pulmonary Exacerbation Risk Calculator",
    "dates" : "2012",
    "description" : "Lorem ipsum dolor sit amet",
    "images" : {
      "../images/01.jpg",
      "../images/02.jpg",
      "../images/03.jpg"
    }
  }
};

var education = {
  "school_01" : {
    "name" : "University of Guam",
    "location" : "Guam",
    "degree" : "N/A",
    "major" : "Fine Arts",
    "dates" : "1998 to 2000",
    "url" : "http://www.uog.edu"
  },
  "school_02" : {
    "name" : "University of Guam",
    "location" : "Guam",
    "degree" : "N/A",
    "major" : "Fine Arts",
    "dates" : "1998 to 2000",
    "url" : "http://www.uog.edu"
  },
  "onlineCourses" : {
    "course_01" : {
      "title" : "Front-end Nanodegree",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://udacity.com"
    },
    "course_02" : {
      "title" : "Front-end Nanodegree",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://udacity.com"
    }
  },
};
