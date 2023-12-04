//script.js defines the custom javaScript functionality implemented on the company homepage.

//Import: JSON file containing the exported ongoing project data information.
import JSON_ProjectsArray from '/Project Data Files/exported-OngoingProjects.json' assert {type: 'json'};

//Attributes:
const image_defaultResidentialOngoing = "/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential3.webp"; //Default image to display on ongoing residential projects if user didn't define a picture.
const image_defaultCommercialOngoing = "/images/Paragraph_Photos/Ongoing_Commercial_Projects/Paragraph_Ongoing_Commercial2.webp"; //Default image to display on ongoing commercial projects if user didn't define a picture.
const image_defaultIndustrialOngoing = "/images/Paragraph_Photos/Ongoing_Industrial_Projects/Paragraph_Ongoing_Industrial4.webp"; //Default image to display on ongoing industrial projects if user didn't define a picture.
const image_defaultRoadOngoing = "/images/Paragraph_Photos/Ongoing_Road_Projects/Paragraph_Ongoing_Road5.webp"; //Default image to display on ongoing road projects if user didn't define a picture.
const todayDate = new Date(); //Contains todays date.

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
              htmlFormated_Data += image_defaultResidentialOngoing;
            }
            else if(projectTypeToConvert === "Commercial")
            {
              htmlFormated_Data += image_defaultCommercialOngoing;
            }
            else if(projectTypeToConvert === "Industrial")
            {
              htmlFormated_Data += image_defaultIndustrialOngoing;
            }
            else
            {
              htmlFormated_Data += image_defaultRoadOngoing;
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
              htmlFormated_Data += "Current Material Expenses: $";
              htmlFormated_Data += currentproject.MaterialExpences;

              //[5] Close 6th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 7th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Expected Toal Price: $";
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
              htmlFormated_Data += "Man-hours currently spent: ";
              htmlFormated_Data += currentproject.ManHoursSpent;

              //[5] Close 8th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 9th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Man-hours currently spent: ";
              htmlFormated_Data += currentproject.TotalManHoursNeeded;

              //[5] Close 9th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 10th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Project Started: ";
              htmlFormated_Data += currentproject.ProjectStartDate;

              //[5] Close 10th div wrapper.
              htmlFormated_Data += "</div>";

              //[5] Open 11th div wrapper: <div class="row text-center ms-3">
              htmlFormated_Data += "<div class=";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += "row text-center ms-3";
              htmlFormated_Data += quotationChar;
              htmlFormated_Data += ">";
              htmlFormated_Data += "Project Deadline: ";
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


                let startDate_split = currentproject.ProjectStartDate.split("/");
                let startDate_day = Number(startDate_split[0]);
                let startDate_month = Number(startDate_split[1]);
                let startDate_year = Number(startDate_split[2]);
                let startDate_OBJ = new Date(startDate_year, startDate_month-1, startDate_day);                  

                let endDate_split = currentproject.ProjectEndDate.split("/");
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

                  let projectDurationRemaining_days = Number(daysBetweenDates("" + todayDate.getDate() + "/" + (todayDate.getMonth()-1) + "/" + todayDate.getFullYear(), currentproject.ProjectEndDate));
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
  let date1_split = projectStartDate.split("/");
  //console.log(date1_split);
  let date1_day = Number(date1_split[0]);
  //console.log("date: " + date1_day);
  let date1_month = Number(date1_split[1]);
 // console.log("month: " + date1_month);
  let date1_year = Number(date1_split[2]);
  //console.log("year: " + date1_year);

  let date2_split = projectEndDate.split("/");
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
      //console.log("+1");
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
      //console.log(Date1_OBJ.getDate() + " " + numberOfDaysInMonth(Date1_OBJ) + " " + Date1_OBJ.getMonth() + " " + Date1_OBJ.getFullYear());
    }
  }
  else if(isBefore(Date1_OBJ, Date2_OBJ) === false)
  {
    //console.log("after");
    while(isBefore(Date2_OBJ, Date1_OBJ) === true && counterDate < safetyShutOff)
    {
      counterDate++;
      //console.log("+1");
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

//Import and display project data. We chain the functions together in order to ensure that they load in the proper sequential order.
$.when(convert_OngoingProjectData_To_HTML("Residential")).then(display_OngoingResidentialProjects(htmlFormated_Data));
$.when(convert_OngoingProjectData_To_HTML("Commercial")).then(display_OngoingCommercialProjects(htmlFormated_Data));
$.when(convert_OngoingProjectData_To_HTML("Industrial")).then(display_OngoingIndustrialProjects(htmlFormated_Data));
$.when(convert_OngoingProjectData_To_HTML("Road")).then(display_OngoingRoadProjects(htmlFormated_Data));


