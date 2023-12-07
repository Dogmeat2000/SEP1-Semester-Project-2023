//script.js defines the custom javaScript functionality implemented on the company homepage.

//Import: JSON file containing the exported finished projects data information.
import ProjectsArray from "/Project Data Files/exported-FinishedProjects.json" assert {type: 'json'};

const image_defaultResidentialFinished = "/images/Paragraph_Photos/Ongoing_Residential_Projects/Paragraph_Ongoing_Residential4.webp"; //Default image to display on ongoing residential projects if user didn't define a picture.
const image_defaultCommercialFinished = "/images/Paragraph_Photos/Completed_Commercial_Projects/Paragraph_Completed_Commercial1.webp"; //Default image to display on ongoing commercial projects if user didn't define a picture.
const image_defaultIndustrialFinished = "/images/Paragraph_Photos/Completed_Industrial_Projects/Paragraph_Completed_Industrial7.webp"; //Default image to display on ongoing industrial projects if user didn't define a picture.
const image_defaultRoadFinished = "/images/Paragraph_Photos/Completed_Road_Projects/Paragraph_Completed_Road5.webp"; //Default image to display on ongoing road projects if user didn't define a picture.

console.log(ProjectsArray);
console.log("converting imported json data to html compatible format");

    let container = document.getElementById("content");
    

    //Function to get the projects and display them in the website
    //Author: Alperen Ö.
    function displayProjects()
    {

        //For loop which too repeat the same process for each project.
    for (let index = 0; index < ProjectsArray.finishedProjectArray.length;index++)
    {
        let currentProject = ProjectsArray.finishedProjectArray[index];
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card","col-12","col-lg-5","rounded-3","FrontPageSubElementBackground","justify-content-center","m-1");

            let Img = document.createElement("img");

                //If the project has an photo, then it will use the photoURL from the project, else use a default picture for each project type.
                if (currentProject.PhotoURL !== "")
                {
                    Img.src = currentProject.PhotoURL;
                }
                else if (currentProject.ProjectType === "Residential")
                {
                    Img.src = image_defaultResidentialFinished;
                }
                else if (currentProject.ProjectType === "Commercial")
                {
                    Img.src = image_defaultCommercialFinished;
                }
                else if (currentProject.ProjectType === "Industrial")
                {
                    Img.src = image_defaultIndustrialFinished;
                }
                else
                {
                    Img.src = image_defaultRoadFinished;
                };
            Img.alt = "Project Picture";
            Img.classList.add("card-img-top","pt-2","rounded-5");
            cardDiv.appendChild(Img);

            let cardBodyDiv = document.createElement("div");
            cardBodyDiv.classList.add("card-body");
                let name = document.createElement("h4");
                name.classList.add("card-title");
                name.textContent = currentProject.ProjectName;
                cardBodyDiv.appendChild(name);

                let projecttxt0 = document.createElement("p");
                projecttxt0.classList.add("card-text");
                projecttxt0.textContent = "Project type: " + currentProject.ProjectType;
                cardBodyDiv.appendChild(projecttxt0);

                let projecttxt1 = document.createElement("p");
                projecttxt1.classList.add("card-text");
                projecttxt1.textContent = currentProject.ProjectDescription;
                cardBodyDiv.appendChild(projecttxt1);

                let projecttxt2 = document.createElement("p");
                projecttxt2.classList.add("card-text");
                projecttxt2.textContent = "Project Finish Date: " + currentProject.ProjectEndDate;
                cardBodyDiv.appendChild(projecttxt2);

                let projecttxt3 = document.createElement("p");
                projecttxt3.classList.add("card-text");
                projecttxt3.textContent = "Total Price: " + "$" + currentProject.TotalBudget;
                cardBodyDiv.appendChild(projecttxt3);
            cardDiv.appendChild(cardBodyDiv);
                
        
        container.appendChild(cardDiv);
    }
}

displayProjects();