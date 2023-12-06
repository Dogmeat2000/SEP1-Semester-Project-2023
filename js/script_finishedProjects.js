//script.js defines the custom javaScript functionality implemented on the company homepage.

//Import: JSON file containing the exported finished projects data information.
import ProjectsArray from "/Project Data Files\exported-FinishedProjects.json";

const image_defaultResidentialFinished = "images\Paragraph_Photos\Ongoing_Residential_Projects\Paragraph_Ongoing_Residential4.webp"; //Default image to display on ongoing residential projects if user didn't define a picture.
const image_defaultCommercialFinished = "images\Paragraph_Photos\Completed_Commercial_Projects\Paragraph_Completed_Commercial1.webp"; //Default image to display on ongoing commercial projects if user didn't define a picture.
const image_defaultIndustrialFinished = "/images\Paragraph_Photos\Completed_Industrial_Projects\Paragraph_Completed_Industrial7.webp"; //Default image to display on ongoing industrial projects if user didn't define a picture.
const image_defaultRoadFinished = "/images\Paragraph_Photos\Completed_Road_Projects\Paragraph_Completed_Road5.webp"; //Default image to display on ongoing road projects if user didn't define a picture.


console.log("converting imported json data to html compatible format");
    
    for (intex = 0; index < ProjectsArray.finishedProjectArray.length(); index++)
    {
        let currentProject = ProjectsArray.finishedProjectArray[index]
        let content = document.getElementById("content")

        content.innerHTML =+ '<div class="card col-12 col-lg-5 rounded-3 FrontPageSubElementBackground justify-content-center m-1">'
        content.innerHTML =+ '<img class="card-img-top pt-2 rounded-5"'

        if (currentProject.PhotoURL !== "")
        {
           content.innerHTML =+ 'src=' + currentProject.PhotoURL + 'alt="Card image">' 
        }
        else if (currentProject.ProjectType === "Residential")
        {
            content.innerHTML =+ 'src=' + image_defaultResidentialFinished + 'alt="Card image">'
        }
        else if (currentProject.ProjectType === "Commercial")
        {
            content.innerHTML =+ 'src=' + image_defaultCommercialFinished + 'alt="Card image">'
        }
        else if (currentProject.ProjectType === "Industrial")
        {
            content.innerHTML =+ 'src=' + image_defaultIndustrialFinished + 'alt="Card image">'
        }
        else if (currentProject.ProjectType === "Road")
        {
            content.innerHTML =+ 'src=' + image_defaultRoadFinished + 'alt="Card image">'
        }
        
        content.innerHTML =+ '<div class="card-body">'
        content.innerHTML =+ '<h4 class="card-title">' + currentProject.ProjectName + '</h4>'
        content.innerHTML =+ '<p class="card-text">' + currentProject.ProjectDescription + '</p>'
        content.innerHTML =+ '</div></div>'
    }
