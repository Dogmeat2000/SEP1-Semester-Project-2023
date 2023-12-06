//script.js defines the custom javaScript functionality implemented on the company homepage.

//Import: JSON file containing the exported finished projects data information.
import ProjectsArray from './Project Data Files\exported-FinishedProjects.json';

const image_defaultResidentialOngoing = "images\Paragraph_Photos\Ongoing_Residential_Projects\Paragraph_Ongoing_Residential4.webp"; //Default image to display on ongoing residential projects if user didn't define a picture.
const image_defaultCommercialOngoing = "images\Paragraph_Photos\Completed_Commercial_Projects\Paragraph_Completed_Commercial1.webp"; //Default image to display on ongoing commercial projects if user didn't define a picture.
const image_defaultIndustrialOngoing = "/images\Paragraph_Photos\Completed_Industrial_Projects\Paragraph_Completed_Industrial7.webp"; //Default image to display on ongoing industrial projects if user didn't define a picture.
const image_defaultRoadOngoing = "/images\Paragraph_Photos\Completed_Road_Projects\Paragraph_Completed_Road5.webp"; //Default image to display on ongoing road projects if user didn't define a picture.

function convert_finishedProjectData_To_HTML_And_Display()
{
    console.log("converting imported json data to html compatible format");
    
    for (intex = 0; index < ProjectsArray.finishedProjectArray.length(); index++)
    {
        let currentProject = ProjectsArray.finishedProjectArray[index]

        let content = document.getElementById("content")

        let cardDiv = document.createElement('div')
        cardDiv.classList.add("card col-12 col-lg-5 rounded-3 FrontPageSubElementBackground justify-content-center m-1")

        let cardBodyDiv = document.createElement('div')
        cardBodyDiv.classList.add("card-body")
        
        
        let projectContent = {
            <div class="card col-12 col-lg-5 rounded-3 FrontPageSubElementBackground justify-content-center m-1">
                <img class="card-img-top pt-2 rounded-5"
                    src="images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential12.webp"
                    alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">Project name</h4>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
                </div>
            </div>

        }

    }
}
