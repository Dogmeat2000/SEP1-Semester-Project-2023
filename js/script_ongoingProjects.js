//script.js defines the custom javaScript functionality implemented on the company homepage.

//Import: JSON file containing the exported ongoing project data information.
import JSON_ProjectsArray from '/Project Data Files/exported-OngoingProjects.json' assert {type: 'json'};

//Attributes:
const todayDate = new Date(); //Contains todays date.

//Declare some arrays that hold our test images. At the moment these are assigned randomly, however we have prepared for the option of adding pictures to projects at a later date.
const randomResidentialOngoingImages_Array = [
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential1.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential2.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential3.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential4.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential5.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential6.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential7.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential8.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential9.webp",
"/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential10.webp"
];

const randomCommercialOngoingImages_Array = [
  "/images/Paragraph_Photos/Ongoing_Commercial_Projects/Paragraph_Ongoing_Commercial1.webp",
  "/images/Paragraph_Photos/Ongoing_Commercial_Projects/Paragraph_Ongoing_Commercial2.webp",
  "/images/Paragraph_Photos/Ongoing_Commercial_Projects/Paragraph_Ongoing_Commercial3.webp",
  "/images/Paragraph_Photos/Ongoing_Commercial_Projects/Paragraph_Ongoing_Commercial4.webp"
];

const randomIndustrialOngoingImages_Array = [
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial1.webp",
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial2.webp",
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial3.webp",
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial4.webp",
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial5.webp",
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial6.webp",
  "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial7.webp"
];

const randomRoadOngoingImages_Array = [
  "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road1.webp",
  "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road2.webp",
  "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road3.webp",
  "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road4.webp",
  "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road5.webp",
  "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road6.webp"
];

var htmlFormated_Data = ""; //Contains the HTML formated ongoing residential project data for display on webpage.

var quotationChar = String.fromCharCode(34); //Ascii value for the ' " ' char, that is needed when converting this to the desired html format.

//This function converts the imported JSON array into the proper html formatted version for compatible with display on the webpage:
//Project type/Parameter is one of these: "Residential", "Road", "Industrial" or "Commercial". Anything else will result in an error, since these do not exist in the exported data.
//Author: K. Dashnaw
function convert_OngoingProjectData_To_HTML(projectTypeToConvert)
{
  console.log("converting imported json data to html compatible formats of type: " + projectTypeToConvert);
  let projectCounter = 0; //Used to evaluate if there are any projects of this type in the system. Else display an information text on the website informing of no current projects of this type.
  htmlFormated_Data = ""; //Reset html data container.
  
  //Display a sorting bar:
  htmlFormated_Data += "<nav class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "navbar navbar-expand-md navbar-dark navigationBarBackground shadow-md rounded-3";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><div class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "collapse navbar-collapse d-flex justify-content-center";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><div class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "navbar-header";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><p class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "text-light mx-3 m-auto";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Sort by:</p></div><button class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "navbar-toggler ms-auto mx-1 bg-secondary";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " type=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "button";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " data-bs-toggle=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "collapse";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " data-bs-target=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "#sorting_Bar";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><span class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "navbar-toggler-icon";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "></span></button><div class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "collapse navbar-collapse justify-content-center";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " id=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "sorting_Bar";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><ul class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav navbar-nav";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><li class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav-item";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><button id=";
  htmlFormated_Data += quotationChar;
  if(projectTypeToConvert === "Residential")
  {
    htmlFormated_Data += "sortProjectsbyNameAscending1";
  }
  else if(projectTypeToConvert === "Commercial")
  {
    htmlFormated_Data += "sortProjectsbyNameAscending2";
  }
  else if(projectTypeToConvert === "Industrial")
  {
    htmlFormated_Data += "sortProjectsbyNameAscending3";
  }
  else
  {
    htmlFormated_Data += "sortProjectsbyNameAscending4";
  }
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "btn btn-secondary btn-sm me-1 mt-1 mb-1";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Name<br>(Ascending)</button></li><li class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav-item";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><button id=";
  htmlFormated_Data += quotationChar;
  if(projectTypeToConvert === "Residential")
  {
    htmlFormated_Data += "sortProjectByNameDescending1";
  }
  else if(projectTypeToConvert === "Commercial")
  {
    htmlFormated_Data += "sortProjectByNameDescending2";
  }
  else if(projectTypeToConvert === "Industrial")
  {
    htmlFormated_Data += "sortProjectByNameDescending3";
  }
  else
  {
    htmlFormated_Data += "sortProjectByNameDescending4";
  }
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "btn btn-secondary btn-sm me-1 mt-1 mb-1";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Name<br>(Descending)</button></li><li class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav-item";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><button id=";
  htmlFormated_Data += quotationChar;
  if(projectTypeToConvert === "Residential")
  {
    htmlFormated_Data += "sortProjectByBudgetAscending1";
  }
  else if(projectTypeToConvert === "Commercial")
  {
    htmlFormated_Data += "sortProjectByBudgetAscending2";
  }
  else if(projectTypeToConvert === "Industrial")
  {
    htmlFormated_Data += "sortProjectByBudgetAscending3";
  }
  else
  {
    htmlFormated_Data += "sortProjectByBudgetAscending4";
  }
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "btn btn-secondary btn-sm me-1 mt-1 mb-1";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Budget<br>(Ascending)</button></li><li class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav-item";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><button id=";
  htmlFormated_Data += quotationChar;
  if(projectTypeToConvert === "Residential")
  {
    htmlFormated_Data += "sortProjectByBudgetDescending1";
  }
  else if(projectTypeToConvert === "Commercial")
  {
    htmlFormated_Data += "sortProjectByBudgetDescending2";
  }
  else if(projectTypeToConvert === "Industrial")
  {
    htmlFormated_Data += "sortProjectByBudgetDescending3";
  }
  else
  {
    htmlFormated_Data += "sortProjectByBudgetDescending4";
  }
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "btn btn-secondary btn-sm me-1 mt-1 mb-1";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Budget<br>(Descending)</button></li><li class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav-item";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><button id=";
  htmlFormated_Data += quotationChar;
  if(projectTypeToConvert === "Residential")
  {
    htmlFormated_Data += "sortProjectByProgressAscending1";
  }
  else if(projectTypeToConvert === "Commercial")
  {
    htmlFormated_Data += "sortProjectByProgressAscending2";
  }
  else if(projectTypeToConvert === "Industrial")
  {
    htmlFormated_Data += "sortProjectByProgressAscending3";
  }
  else
  {
    htmlFormated_Data += "sortProjectByProgressAscending4";
  }
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "btn btn-secondary btn-sm me-1 mt-1 mb-1";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Progress<br>(Ascending)</button></li><li class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "nav-item";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "><button id=";
  htmlFormated_Data += quotationChar;
  if(projectTypeToConvert === "Residential")
  {
    htmlFormated_Data += "sortProjectByProgressDescending1";
  }
  else if(projectTypeToConvert === "Commercial")
  {
    htmlFormated_Data += "sortProjectByProgressDescending2";
  }
  else if(projectTypeToConvert === "Industrial")
  {
    htmlFormated_Data += "sortProjectByProgressDescending3";
  }
  else
  {
    htmlFormated_Data += "sortProjectByProgressDescending4";
  }
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += " class=";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += "btn btn-secondary btn-sm me-1 mt-1 mb-1";
  htmlFormated_Data += quotationChar;
  htmlFormated_Data += ">Progress<br>(Descending)</button></li></ul></div></div></nav>";

  console.log(JSON_ProjectsArray);




  //From here an below we add the project data information. Above was only the sorting bar funktionality!

  for (let index = 0; index < JSON_ProjectsArray.ongoingProjectArray.length; index++) 
  {
    //Extract the project on array index i, to easier work with.
    let currentproject = JSON_ProjectsArray.ongoingProjectArray[index];

    //If the project is of the given type, we convert it, else we skip it.
    if(currentproject.ProjectType === projectTypeToConvert)
    {
      projectCounter++;
      //[1] Convert main div wrapper: <div class="row justify-content-center mb-3 mx-0">
      htmlFormated_Data += "<div class=";
      htmlFormated_Data += quotationChar;
      htmlFormated_Data += "row justify-content-center mb-3 mx-0";
      htmlFormated_Data += quotationChar;
      htmlFormated_Data += ">";

        //[2] Convert 2nd div wrapper: <div class="col-sm-12 col-md-6 col-lg-6 mt-auto mb-auto">
        htmlFormated_Data += "<div class=";
        htmlFormated_Data += quotationChar;
        htmlFormated_Data += "col-sm-12 col-md-6 col-lg-6 mt-auto mb-auto";
        htmlFormated_Data += quotationChar;
        htmlFormated_Data += ">";

          //INSERT PROJECT IMAGE
          //[3] Convert project image
          htmlFormated_Data += "<img class=";
          htmlFormated_Data += quotationChar;
          htmlFormated_Data += "rounded-2 mt-2 mb-2 img-fluid";
          htmlFormated_Data += quotationChar;
          htmlFormated_Data += "src=";
          htmlFormated_Data += quotationChar;
          if(currentproject.PhotoURL != "")
          {
            htmlFormated_Data += currentproject.PhotoURL;
          }
          else
          {
            if(projectTypeToConvert === "Residential")
            {
              htmlFormated_Data += randomResidentialOngoingImages_Array[Math.floor(Math.random() * (9))];
              currentproject.PhotoURL = randomResidentialOngoingImages_Array[Math.floor(Math.random() * (9))];
            }
            else if(projectTypeToConvert === "Commercial")
            {
              htmlFormated_Data += randomCommercialOngoingImages_Array[Math.floor(Math.random() * (3))];
              currentproject.PhotoURL = randomCommercialOngoingImages_Array[Math.floor(Math.random() * (3))];
            }
            else if(projectTypeToConvert === "Industrial")
            {
              htmlFormated_Data += randomIndustrialOngoingImages_Array[Math.floor(Math.random() * (6))];
              currentproject.PhotoURL = randomIndustrialOngoingImages_Array[Math.floor(Math.random() * (6))];
            }
            else
            {
              htmlFormated_Data += randomRoadOngoingImages_Array[Math.floor(Math.random() * (5))];
              currentproject.PhotoURL = randomRoadOngoingImages_Array[Math.floor(Math.random() * (5))];
            }
            
          }
          htmlFormated_Data += quotationChar;
          htmlFormated_Data += ">";

        //[2] Close 2nd div wrapper.
        htmlFormated_Data += "</div>";


        //[2]: Convert 3rd div wrapper: <div class="col-sm-12 col-md-6 col-lg-6 rounded-5 d-flex mt-2 mb-2">
        htmlFormated_Data += "<div class=";
        htmlFormated_Data += quotationChar;
        htmlFormated_Data += "col-sm-12 col-md-6 col-lg-6 rounded-5 d-flex mt-2 mb-2";
        htmlFormated_Data += quotationChar;
        htmlFormated_Data += ">";

          //[3] Open 4th div wrapper: <div class="card FrontPage_Background justify-content-start">
          htmlFormated_Data += "<div class=";
          htmlFormated_Data += quotationChar;
          htmlFormated_Data += "card FrontPage_Background justify-content-start w-100";
          htmlFormated_Data += quotationChar;
          htmlFormated_Data += ">";

            //Insert PROJECT NAME!
            //[4] Open <h4> wrapper: <h4 class="card-title FrontPage_Background rounded-3 p-1 text-center">typeOfProject (Residential): </h4>
            htmlFormated_Data += "<h4 class=";
            htmlFormated_Data += quotationChar;
            htmlFormated_Data += "card-title FrontPage_Background rounded-3 p-1 text-center";
            htmlFormated_Data += quotationChar;
            htmlFormated_Data += ">";
            htmlFormated_Data += currentproject.ProjectName;
            
            //[4] Close <h4> wrapper:
            htmlFormated_Data += "</h4>";

            //INSERT PROJECT DESCRIPTION
            //[4] Open <p> wrapper:  <p class="card-text text-center p-1"> PROJECT DESCRIPTION </p>
            htmlFormated_Data += "<p class=";
            htmlFormated_Data += quotationChar;
            htmlFormated_Data += "card-text text-center p-1";
            htmlFormated_Data += quotationChar;
            htmlFormated_Data += ">";
            htmlFormated_Data += currentproject.ProjectDescription;

            //[4] Close <p> wrapper.
            htmlFormated_Data += "</p>";


            //INSERT PROGRES DATA:
            //[4] Open 5th div wrapper: <div class="p-1 mt-auto">
            htmlFormated_Data += "<div class=";
            htmlFormated_Data += quotationChar;
            htmlFormated_Data += "p-1 mt-auto";
            htmlFormated_Data += quotationChar;
            htmlFormated_Data += ">";

              //INSERT FINANTIAL INFORMATION:
              //[5] Open 6th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Current Material Expenses&nbsp;&nbsp;: $";
              htmlFormated_Data += currentproject.MaterialExpences;

              //[5] Close 6th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 7th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Expected Total Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: $";
              htmlFormated_Data += currentproject.TotalBudget;

              //[5] Close 7th div wrapper.
              htmlFormated_Data += "</div>";

              //INSERT MAN HOURS INFORMATION:
              //[5] Open 8th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Man-hours currently spent&nbsp;: ";
              htmlFormated_Data += currentproject.ManHoursSpent;

              //[5] Close 8th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 9th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Man-hours currently spent&nbsp;: ";
              htmlFormated_Data += currentproject.TotalManHoursNeeded;

              //[5] Close 9th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 10th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Project Started&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ";
              htmlFormated_Data += currentproject.ProjectStartDate;

              //[5] Close 10th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 11th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Project Deadline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ";
              htmlFormated_Data += currentproject.ProjectEndDate;

              //[5] Close 11th div wrapper.
              htmlFormated_Data += "</div>";

              //INSERT PROGRESS INFORMATION:
              //[5] Open 12th div wrapper: <br><div class="text-center">Progress</div>
              htmlFormated_Data += "<br><div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "text-center";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Progress";

              //[5] Close 12th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 13th div wrapper: <div class="progress w-75 mx-auto rounded-0 border border-1 border-dark mb-2">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "progress w-75 mx-auto rounded-0 border border-1 border-dark mb-2";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";

                //[6] Open 14th div wrapper: <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="PERCENTAGE" aria-valuemin="0" aria-valuemax="100" style="width:PERCENTAGE">PERCENTAGE
                //Calculate actual progress given todays date, start date and end date information from the project.
                //Check if today is later than the projected end date.

                let startDate_split = currentproject.ProjectStartDate.split(".");
                let startDate_day = Number(startDate_split[0]);
                let startDate_month = Number(startDate_split[1]);
                let startDate_year = Number(startDate_split[2]);
                let startDate_OBJ = new Date(startDate_year, startDate_month-1, startDate_day);                  

                let endDate_split = currentproject.ProjectEndDate.split(".");
                let endDate_day = Number(endDate_split[0]);
                let endDate_month = Number(endDate_split[1]);
                let endDate_year = Number(endDate_split[2]);
                let endDate_OBJ = new Date(endDate_year, endDate_month-1, endDate_day);

                let percentageCompleted = 100;

                //Check if project has started yet:
                if(isBefore(todayDate,startDate_OBJ) === true)
                {
                  percentageCompleted = 0;
                }
                //Check if today is before the project end date;
                else if(isBefore(todayDate,endDate_OBJ) === true)
                {
                  //Today is before the projected deadline. Calculate percentage days remaining.
                  let totalProjectDuration_days = Number(daysBetweenDates(currentproject.ProjectStartDate, currentproject.ProjectEndDate));

                  let projectDurationRemaining_days = Number(daysBetweenDates("" + todayDate.getDate() + "." + (todayDate.getMonth()-1) + "." + todayDate.getFullYear(), currentproject.ProjectEndDate));
                  percentageCompleted = Math.floor(100 - ((projectDurationRemaining_days/totalProjectDuration_days)*100));
                }

              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "progress-bar progress-bar-striped active";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += " role=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += " progressbar";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += " aria-valuenow=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "" + percentageCompleted; //<---- INSERT ACTUAL PERCENTAGE. USE CALCULATIONS!
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += " aria-valuemin=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "0";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += " aria-valuemax=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "100";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += " style=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "width:" + percentageCompleted + "%";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">" + percentageCompleted + "%";


                //[6] Close 14th div wrapper.
                htmlFormated_Data += "</div>";

              //[5] Close 13th div wrapper.
              htmlFormated_Data += "</div>";

            //[4] Close 5th div wrapper.
            htmlFormated_Data += "</div>";

          //[3] Close 4th div wrapper.
          htmlFormated_Data += "</div>";

        //[2] Close 3rd div wrapper.
        htmlFormated_Data += "</div>";

      //[1] Close main div.
      htmlFormated_Data += "</div>";
    }
  }

  //Finally check if there were any projects that fulfilled the "ongoing project" requirement. If not, we simply display a short text explaining that there are no ongoing projects of this type to the user on the webpage.
  if(projectCounter === 0)
  {
    //[1] Open 1st div wrapper: <div class="card FrontPage_Background justify-content-start">
    htmlFormated_Data += "<div class=";
    htmlFormated_Data += quotationChar;
    htmlFormated_Data += "card FrontPage_Background justify-content-start";
    htmlFormated_Data += quotationChar;
    htmlFormated_Data += ">";

      //Insert INFORMATION!
      //[2] Open <h4> wrapper: <h4 class="card-title FrontPage_Background rounded-3 p-1 text-center w-100"> INFORMATION TEXT </h4>
      htmlFormated_Data += "<h4 class=";
      htmlFormated_Data += quotationChar;
      htmlFormated_Data += "card-title FrontPage_Background rounded-3 p-1 text-center";
      htmlFormated_Data += quotationChar;
      htmlFormated_Data += ">";
      htmlFormated_Data += "We currently don't have any ongoing projects of this type";
      
      //[2] Close <h4> wrapper:
      htmlFormated_Data += "</h4>";

    //[1] Close 1st div wrapper.
    htmlFormated_Data += "</div>";
  }
}

//Function to calculate the number of days between 2 dates.
//Paramteres are "date1" and "date2", which both are String representations of dates in the form of "DD/MM/YYYY".
//Author: K. Dashnaw
function daysBetweenDates(date1, date2)
{
  const projectStartDate = date1; //First date to evaluate in the form "DD.MM.YYYY"
  //console.log("start: " + projectStartDate);
  const projectEndDate = date2; //Second date to evaluate in the form "DD.MM.YYYY"
  //console.log("end: " + projectEndDate);

  //Split given String dates into day, month, year:
  let date1_split = projectStartDate.split(".");
  //console.log(date1_split);
  let date1_day = Number(date1_split[0]);
  //console.log("date: " + date1_day);
  let date1_month = Number(date1_split[1]);
 // console.log("month: " + date1_month);
  let date1_year = Number(date1_split[2]);
  //console.log("year: " + date1_year);

  let date2_split = projectEndDate.split(".");
  let date2_day = Number(date2_split[0]);
  let date2_month = Number(date2_split[1]);
  let date2_year = Number(date2_split[2]);

  //Convert these strings to proper date objects:
  let Date1_OBJ = new Date(date1_year, date1_month-1, date1_day);
  //console.log("day1=" + Date1_OBJ.getDate() + " month1=" + Date1_OBJ.getMonth() + " year1=" + Date1_OBJ.getFullYear());
  //console.log(Date1_OBJ);
  let Date2_OBJ = new Date(date2_year, date2_month-1, date2_day);
  //console.log("day2=" + Date2_OBJ.getDate() + " month2=" + Date2_OBJ.getMonth() + " year2=" + Date2_OBJ.getFullYear());

  //Calculate number of days between the 2 dates:
  let counterDate = 0; //Used to count the number of days between the two.
  let safetyShutOff = 10000; //Used to ensure that while loop doesn't run for more than 10.000 iterations (prevents eternal loops).

  //Check which of the 2 dates is the earlist:
  if(isBefore(Date1_OBJ, Date2_OBJ) === true)
  {
    //console.log("before");
    while(isBefore(Date1_OBJ, Date2_OBJ) === true && counterDate < safetyShutOff)
    {
      counterDate++;
      //Increment the day with 1 if the given day is less than the last day of the given month.
      if (Date1_OBJ.getDate() < 28)
      {
        Date1_OBJ.setDate(Date1_OBJ.getDate()+1);
      }
      //Increment the day with 1, but this loop catches the specifics around february and leap years.
      else if (Date1_OBJ.getDate() === 28 && Date1_OBJ.getMonth() === 1 && isDateLeapYear(Date1_OBJ) === false)
      {
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(2);
      }
      else if(Date1_OBJ.getDate() === 29 && Date1_OBJ.getMonth() === 1 && isDateLeapYear(Date1_OBJ) === true)
      {
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(2);
      }
      //Check if the date is not the last day of the month (even months) and increment with 1.
      else if(Date1_OBJ.getDate() < 30)
      {
        Date1_OBJ.setDate(Date1_OBJ.getDate()+1);
      }
      else if(Date1_OBJ.getDate() === 31 && numberOfDaysInMonth(Date1_OBJ) === 31 && Date1_OBJ.getMonth() === 11)
      {
        //This is december... increase the year by one.
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(0);
        Date1_OBJ.setFullYear(Date1_OBJ.getFullYear()+1);
      }
      else if((Date1_OBJ.getDate() === 30 && numberOfDaysInMonth(Date1_OBJ) === 30) || (Date1_OBJ.getDate() === 31 && numberOfDaysInMonth(Date1_OBJ) === 31))
      {
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(Date1_OBJ.getMonth()+1);
      }
      else
      {
        //Add a single day, as this remaining loop will only run if the day is nr. 30, but the number of days in the month is 31!
        Date1_OBJ.setDate(Date1_OBJ.getDate()+1);
      }
    }
  }
  else if(isBefore(Date1_OBJ, Date2_OBJ) === false)
  {
    while(isBefore(Date2_OBJ, Date1_OBJ) === true && counterDate < safetyShutOff)
    {
      counterDate++;
      //Increment the day with 1 if the given day is less than the last day of the given month.
      if (Date2_OBJ.getDate() < 28)
      {
        Date1_OBJ.setDate(Date1_OBJ.getDate()+1);
      }
      //Increment the day with 1, but this loop catches the specifics around february and leap years.
      else if (Date2_OBJ.getDate() === 28 && Date2_OBJ.getMonth() === 1 && isDateLeapYear(Date2_OBJ) === false)
      {
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(2);
      }
      else if(Date2_OBJ.getDate() === 29 && Date2_OBJ.getMonth() === 1 && isDateLeapYear(Date2_OBJ) === true)
      {
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(2);
      }
      //Check if the date is not the last day of the month (even months) and increment with 1.
      else if(Date2_OBJ.getDate() < 30)
      {
        Date1_OBJ.setDate(Date1_OBJ.getDate()+1);
      }
      else if(Date2_OBJ.getDate() === 31 && numberOfDaysInMonth(Date2_OBJ) === 31 && Date2_OBJ.getMonth() === 11)
      {
        //This is december... increase the year by one.
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(0);
        Date1_OBJ.setFullYear(Date1_OBJ.getFullYear()+1);
      }
      else if((Date2_OBJ.getDate() === 30 && numberOfDaysInMonth(Date2_OBJ) === 30) || (Date2_OBJ.getDate() === 31 && numberOfDaysInMonth(Date2_OBJ) === 31))
      {
        Date1_OBJ.setDate(1);
        Date1_OBJ.setMonth(Date1_OBJ.getMonth()+1);
      }
      else
      {
        //Add a single day, as this remaining loop will only run if the day is nr. 30, but the number of days in the month is 31!
        Date1_OBJ.setDate(Date1_OBJ.getDate()+1);
      }
    }
  }
  else
  {
    return 0; //Unknown error caused no difference to be returned.
  }

  //Return the number of days between
  safetyShutOff = 0;
  return counterDate;
}

//Checks if the passed Date Object is a leap year.
//Attribute 'date' must be a Date object!
//Author: K. Dashnaw
function isDateLeapYear(date)
{
  if ((date.getFullYear() % 4 === 0 && date.getFullYear() % 100 != 0) || (date.getFullYear() % 400 === 0))
  {
    return true;
  }
  else
  {
    return false;
  }
}

//Checks if the Early date parater is before the LateDate paramter. Returns true if Early date is the earliest or false if not.
//Passed attributes MUST be Date() objects!
//Author: K. Dashnaw
function isBefore(EarlyDate, LateDate)
{
  if (EarlyDate.getFullYear() < LateDate.getFullYear())
  {
    //console.log("is before = true");
    return true;
  }
  else if (EarlyDate.getFullYear() > LateDate.getFullYear())
  {
    return false;
  }
  else if (EarlyDate.getMonth() < LateDate.getMonth())
  {
    return true;
  }
  else if (EarlyDate.getMonth() > LateDate.getMonth())
  {
    return false;
  }
  else if (EarlyDate.getDate() < LateDate.getDate())
  {
    return true;
  }
  else
  {
    return false;
  }
}

//Returns the number of days in the passed date objects month:
//Attribute 'date' must be a Date object!
//Author: K. Dashnaw
function numberOfDaysInMonth(date)
{
  if (date.getMonth() === 0 || date.getMonth() === 2 || date.getMonth() === 4 || date.getMonth() === 6 || date.getMonth() === 7 || date.getMonth() === 9 || date.getMonth() === 11)
  {
    return 31; //Days in uneven months.
  }
  else if (date.getMonth() === 3 || date.getMonth() === 5 || date.getMonth() === 8 || date.getMonth() === 10)
  {
    return 30; //Days in uneven months.
  }
  else if (date.getMonth() === 1)
  {
    if (isDateLeapYear(date) === true)
    {
      return 29; //Leap year
    }
    else
    {
      return 28; //not leap year.
    }
  }
  else
  {
    return 0; //Unknown error!
  }
}


//Function to display the ongoing residential project data to the ongoing page:
//Author: K. Dashnaw
function display_OngoingResidentialProjects(htmlFormatedProjectData)
{
  console.log("Displaying converted html compatible residential projects on page");
  $("#jScript_DisplayOngoingProjects_Residential").html(htmlFormatedProjectData);
}

//Function to display the ongoing commercial project data to the ongoing page:
//Author: K. Dashnaw
function display_OngoingCommercialProjects(htmlFormatedProjectData)
{
  console.log("Displaying converted html compatible commercial projects on page");
  $("#jScript_DisplayOngoingProjects_Commercial").html(htmlFormatedProjectData);
}

//Function to display the ongoing industrial project data to the ongoing page:
//Author: K. Dashnaw
function display_OngoingIndustrialProjects(htmlFormatedProjectData)
{
  console.log("Displaying converted html compatible industrial projects on page");
  $("#jScript_DisplayOngoingProjects_Industrial").html(htmlFormatedProjectData);
}

//Function to display the ongoing road project data to the ongoing page:
//Author: K. Dashnaw
function display_OngoingRoadProjects(htmlFormatedProjectData)
{
  console.log("Displaying converted html compatible road projects on page");
  $("#jScript_DisplayOngoingProjects_Road").html(htmlFormatedProjectData);
}


//adds eventhandlers (onClick) to the buttons created in the main display script.
//Author: K. Dashnaw
function updateButtonReferences(projectTypeToConvert)
{
  if(projectTypeToConvert === "Residential")
  {
    $("#sortProjectsbyNameAscending1" ).on( "click", sortProjectByNameAscending);
    $("#sortProjectByNameDescending1" ).on( "click", sortProjectByNameDescending);
    $("#sortProjectByBudgetAscending1" ).on( "click", sortProjectByBudgetAscending);
    $("#sortProjectByBudgetDescending1" ).on( "click", sortProjectByBudgetDescending);
    $("#sortProjectByProgressAscending1" ).on( "click", sortProjectByProgressAscending);
    $("#sortProjectByProgressDescending1" ).on( "click", sortProjectByProgressDescending);
  }
  else if(projectTypeToConvert === "Commercial")
  {
    $("#sortProjectsbyNameAscending2" ).on( "click", sortProjectByNameAscending);
    $("#sortProjectByNameDescending2" ).on( "click", sortProjectByNameDescending);
    $("#sortProjectByBudgetAscending2" ).on( "click", sortProjectByBudgetAscending);
    $("#sortProjectByBudgetDescending2" ).on( "click", sortProjectByBudgetDescending);
    $("#sortProjectByProgressAscending2" ).on( "click", sortProjectByProgressAscending);
    $("#sortProjectByProgressDescending2" ).on( "click", sortProjectByProgressDescending);
  }
  else if(projectTypeToConvert === "Industrial")
  {
    $("#sortProjectsbyNameAscending3" ).on( "click", sortProjectByNameAscending);
    $("#sortProjectByNameDescending3" ).on( "click", sortProjectByNameDescending);
    $("#sortProjectByBudgetAscending3" ).on( "click", sortProjectByBudgetAscending);
    $("#sortProjectByBudgetDescending3" ).on( "click", sortProjectByBudgetDescending);
    $("#sortProjectByProgressAscending3" ).on( "click", sortProjectByProgressAscending);
    $("#sortProjectByProgressDescending3" ).on( "click", sortProjectByProgressDescending);
  }
  else
  {
    $("#sortProjectsbyNameAscending4" ).on( "click", sortProjectByNameAscending);
    $("#sortProjectByNameDescending4" ).on( "click", sortProjectByNameDescending);
    $("#sortProjectByBudgetAscending4" ).on( "click", sortProjectByBudgetAscending);
    $("#sortProjectByBudgetDescending4" ).on( "click", sortProjectByBudgetDescending);
    $("#sortProjectByProgressAscending4" ).on( "click", sortProjectByProgressAscending);
    $("#sortProjectByProgressDescending4" ).on( "click", sortProjectByProgressDescending);
  }
}



//Function to convert and display project data. We chain the functions together in order to ensure that they load in the proper sequential order.
//Author: K. Dashnaw
function displayProjectData()
{
$.when(convert_OngoingProjectData_To_HTML("Residential")).then(display_OngoingResidentialProjects(htmlFormated_Data)).then(updateButtonReferences("Residential"));
$.when(convert_OngoingProjectData_To_HTML("Commercial")).then(display_OngoingCommercialProjects(htmlFormated_Data)).then(updateButtonReferences("Commercial"));
$.when(convert_OngoingProjectData_To_HTML("Industrial")).then(display_OngoingIndustrialProjects(htmlFormated_Data)).then(updateButtonReferences("Industrial"));
$.when(convert_OngoingProjectData_To_HTML("Road")).then(display_OngoingRoadProjects(htmlFormated_Data)).then(updateButtonReferences("Road"));
}

//Sort function, to sort by name (Ascending)
//Author: K. Dashnaw
function sortProjectByNameAscending()
{
  JSON_ProjectsArray.ongoingProjectArray = JSON_ProjectsArray.ongoingProjectArray.sort((a, b) => {
    if (a.ProjectName < b.ProjectName) {
      return -1;
    }
  });
  displayProjectData();
}

//Sort function, to sort by name (Descending)
//Author: K. Dashnaw
function sortProjectByNameDescending()
{
  JSON_ProjectsArray.ongoingProjectArray = JSON_ProjectsArray.ongoingProjectArray.sort((a, b) => {
    if (b.ProjectName < a.ProjectName) {
      return -1;
    }
  });
  displayProjectData();
}

//Sort function, to sort by budget size (Ascending)
//Author: K. Dashnaw
function sortProjectByBudgetAscending()
{
  JSON_ProjectsArray.ongoingProjectArray = JSON_ProjectsArray.ongoingProjectArray.sort((a, b) => {    
    if (a.TotalBudget < b.TotalBudget) {
      return -1;
    }
  });
  displayProjectData();
}

//Sort function, to sort by budget size (Descending)
//Author: K. Dashnaw
function sortProjectByBudgetDescending()
{
  JSON_ProjectsArray.ongoingProjectArray = JSON_ProjectsArray.ongoingProjectArray.sort((a, b) => {   
    if (a.TotalBudget > b.TotalBudget) {
      return -1;
    }
  });
  displayProjectData();
}

//Sort function, to sort by progress (Ascending)
//Author: K. Dashnaw
function sortProjectByProgressAscending()
{
  JSON_ProjectsArray.ongoingProjectArray = JSON_ProjectsArray.ongoingProjectArray.sort((a, b) => {

    //Calculate progress of element a:
    let startDate_split = a.ProjectStartDate.split(".");
    let startDate_day = Number(startDate_split[0]);
    let startDate_month = Number(startDate_split[1]);
    let startDate_year = Number(startDate_split[2]);
    let startDate_OBJ = new Date(startDate_year, startDate_month-1, startDate_day);                  

    let endDate_split = a.ProjectEndDate.split(".");
    let endDate_day = Number(endDate_split[0]);
    let endDate_month = Number(endDate_split[1]);
    let endDate_year = Number(endDate_split[2]);
    let endDate_OBJ = new Date(endDate_year, endDate_month-1, endDate_day);

    let a_percentageCompleted = 100;

    //Check if project has started yet:
    if(isBefore(todayDate,startDate_OBJ) === true)
    {
      a_percentageCompleted = 0;
    }
    //Check if today is before the project end date;
    else if(isBefore(todayDate,endDate_OBJ) === true)
    {
      //Today is before the projected deadline. Calculate percentage days remaining.
      let totalProjectDuration_days = Number(daysBetweenDates(a.ProjectStartDate, a.ProjectEndDate));

      let projectDurationRemaining_days = Number(daysBetweenDates("" + todayDate.getDate() + "." + (todayDate.getMonth()-1) + "." + todayDate.getFullYear(), a.ProjectEndDate));
      a_percentageCompleted = Math.floor(100 - ((projectDurationRemaining_days/totalProjectDuration_days)*100));
    }

      //Calculate progress of element a:
      startDate_split = b.ProjectStartDate.split(".");
      startDate_day = Number(startDate_split[0]);
      startDate_month = Number(startDate_split[1]);
      startDate_year = Number(startDate_split[2]);
      startDate_OBJ = new Date(startDate_year, startDate_month-1, startDate_day);                  
  
      endDate_split = b.ProjectEndDate.split(".");
      endDate_day = Number(endDate_split[0]);
      endDate_month = Number(endDate_split[1]);
      endDate_year = Number(endDate_split[2]);
      endDate_OBJ = new Date(endDate_year, endDate_month-1, endDate_day);
  
      let b_percentageCompleted = 100;
  
      //Check if project has started yet:
      if(isBefore(todayDate,startDate_OBJ) === true)
      {
        b_percentageCompleted = 0;
      }
      //Check if today is before the project end date;
      else if(isBefore(todayDate,endDate_OBJ) === true)
      {
        //Today is before the projected deadline. Calculate percentage days remaining.
        let totalProjectDuration_days = Number(daysBetweenDates(b.ProjectStartDate, b.ProjectEndDate));
  
        let projectDurationRemaining_days = Number(daysBetweenDates("" + todayDate.getDate() + "." + (todayDate.getMonth()-1) + "." + todayDate.getFullYear(), b.ProjectEndDate));
        b_percentageCompleted = Math.floor(100 - ((projectDurationRemaining_days/totalProjectDuration_days)*100));
      }


    if (a_percentageCompleted < b_percentageCompleted) {
      return -1;
    }
  });
  displayProjectData();
}


//Sort function, to sort by progress (Descending)
//Author: K. Dashnaw
function sortProjectByProgressDescending()
{
  JSON_ProjectsArray.ongoingProjectArray = JSON_ProjectsArray.ongoingProjectArray.sort((a, b) => {

    //Calculate progress of element a:
    let startDate_split = a.ProjectStartDate.split(".");
    let startDate_day = Number(startDate_split[0]);
    let startDate_month = Number(startDate_split[1]);
    let startDate_year = Number(startDate_split[2]);
    let startDate_OBJ = new Date(startDate_year, startDate_month-1, startDate_day);                  

    let endDate_split = a.ProjectEndDate.split(".");
    let endDate_day = Number(endDate_split[0]);
    let endDate_month = Number(endDate_split[1]);
    let endDate_year = Number(endDate_split[2]);
    let endDate_OBJ = new Date(endDate_year, endDate_month-1, endDate_day);

    let a_percentageCompleted = 100;

    //Check if project has started yet:
    if(isBefore(todayDate,startDate_OBJ) === true)
    {
      a_percentageCompleted = 0;
    }
    //Check if today is before the project end date;
    else if(isBefore(todayDate,endDate_OBJ) === true)
    {
      //Today is before the projected deadline. Calculate percentage days remaining.
      let totalProjectDuration_days = Number(daysBetweenDates(a.ProjectStartDate, a.ProjectEndDate));

      let projectDurationRemaining_days = Number(daysBetweenDates("" + todayDate.getDate() + "." + (todayDate.getMonth()-1) + "." + todayDate.getFullYear(), a.ProjectEndDate));
      a_percentageCompleted = Math.floor(100 - ((projectDurationRemaining_days/totalProjectDuration_days)*100));
    }

      //Calculate progress of element a:
      startDate_split = b.ProjectStartDate.split(".");
      startDate_day = Number(startDate_split[0]);
      startDate_month = Number(startDate_split[1]);
      startDate_year = Number(startDate_split[2]);
      startDate_OBJ = new Date(startDate_year, startDate_month-1, startDate_day);                  
  
      endDate_split = b.ProjectEndDate.split(".");
      endDate_day = Number(endDate_split[0]);
      endDate_month = Number(endDate_split[1]);
      endDate_year = Number(endDate_split[2]);
      endDate_OBJ = new Date(endDate_year, endDate_month-1, endDate_day);
  
      let b_percentageCompleted = 100;
  
      //Check if project has started yet:
      if(isBefore(todayDate,startDate_OBJ) === true)
      {
        b_percentageCompleted = 0;
      }
      //Check if today is before the project end date;
      else if(isBefore(todayDate,endDate_OBJ) === true)
      {
        //Today is before the projected deadline. Calculate percentage days remaining.
        let totalProjectDuration_days = Number(daysBetweenDates(b.ProjectStartDate, b.ProjectEndDate));
  
        let projectDurationRemaining_days = Number(daysBetweenDates("" + todayDate.getDate() + "." + (todayDate.getMonth()-1) + "." + todayDate.getFullYear(), b.ProjectEndDate));
        b_percentageCompleted = Math.floor(100 - ((projectDurationRemaining_days/totalProjectDuration_days)*100));
      }


    if (a_percentageCompleted > b_percentageCompleted) {
      return -1;
    }
  });
  displayProjectData();
}



//Display the project information in the proper sections:
sortProjectByNameAscending();