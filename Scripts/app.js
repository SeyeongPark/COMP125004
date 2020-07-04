"use strict";
/*File name : app.js
  Author's name : Seyeong Park
  Web site name : SYeong
  File description: This JavaScript code is for html file */

// IIFE -Immediately Ivoked Function Expression
(function(){

    function highlightActiveLink() 
    {
        let title = document.title;

        title = title.toLowerCase();

        console.log(`The title of the page is ${title}`);

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }

    function addParagraphsToAboutmeJumbotron() {
        //step 1 hook into the spot {element} on the page
        let aboutjumbotron = document.getElementById("IndexJumbotron");
        
        if (aboutjumbotron) 
        {       
            let newDiv = document.createElement("div");
            newDiv.innerText =
                `          
                To do well by doing good while supporting and elevating those around me  `;
            aboutjumbotron.appendChild(newDiv);

            document.getElementsByTagName("div")[0].innerText = newDiv;

            return true;
        }
        return false;        
       
    }


    function addParagraphsToJumbotron() 
    {
        // step 1 hook into the spot (element) on the page
        let jumbotron = document.getElementsByClassName("jumbotron")[0];

        if (jumbotron) 
        {
            let project1text = 
            ` I love to take photos and share them with friends. When I was high-school student, I had worked as a leader of Film club for 2 years.
            Whenever my friends and family set their profile image is took by me in social media, I feel like I am over the moon. 
            Though I have been taking photos with my cell phone now, I will buy my own professional camera after earn money myself.
            `;
            let project2text = 
            ` I restarted to play the guitar. When I was young, my father toughs me how to play the guitar. However, I had not played that for a long time.
            Recently, I set a goal that is showing my playing guitar to my family and friends on the street. For this goal, I need to practice a lot.
            And also I like to sing, so I want to sing with my guitar.`;
             let project3text = 
            `I like to dance with k-pop music. So that reason, I had participated in every school talent show. I joined a team for the dance showcase since February 2020.
            I was supposed to deliver a performance in April this year, but It is postponed due to COVID-19. I hope to meet my team member and the music on the stage.
            `
           
            document.getElementsByTagName("h2")[0].innerText =  "Taking pictures";
            document.getElementsByTagName("p")[0].innerText = project1text;
            document.getElementsByTagName("h2")[1].innerText = "Playing the guitar";
            document.getElementsByTagName("p")[1].innerText = project2text;
            document.getElementsByTagName("h2")[2].innerText = "Dancing";
            document.getElementsByTagName("p")[2].innerText = project3text;
            // step 2 create a new element
            let newParagraph = document.createElement("p");

            return true;

        }

        return false;
    }

    

    function validateForm()
    {
        let contactForm = document.forms[0];

        if(contactForm)
        {
            contactForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => 
            {
                if(firstName.value.length < 2)
                {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => 
            {
                if(lastName.value.length < 2)
                {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters"; 
                }
                else
                {
                    errorMessage.hidden = true;
                }
            });



            // creates a "hook" or reference to the button element with an id of "submitButton"
            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) =>
            {
                event.preventDefault();
                console.log("Submit Button Clicked");
            });
        }
        return false;
    }


    // named function
    function Start()
    {
       console.log('%cApp Started...', "color:white; font-size: 24px;");   

       let title = highlightActiveLink();

       let success = addParagraphsToJumbotron();

       if(success) 
       {
        console.log("successfully added paragraphs to jumbotron");
       }
       else
       {
        console.warn("content not added to jumbotron - does not exist");
       }

       let formValidated = validateForm();
       if(formValidated)
       {
        console.log("successfully validated form");
       }
       else
       {
        console.warn("form not validated - does not exist");
       }

    } 

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }


    window.addEventListener("load", Start);

})();




