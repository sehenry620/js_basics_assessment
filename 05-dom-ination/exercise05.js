/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {

    //your code here


    let currentColor = "black";
    
    document.querySelector("h1").addEventListener("click", function (){
        // console.log("bazinga")
        if (currentColor == "black"){
            document.querySelector("h1").style.color = "red";
            currentColor = "red";
        }else {
            document.querySelector("h1").style.color = "black";
            currentColor = "black";
        }
    })
    function changeColor(){
        
    }
    changeColor()
    changeColor()

//....................................................................

    let links = document.querySelectorAll(".section-container section:nth-child(2n-1)");
    
        // console.log(links)

        for (i = 0; i < links.length; i++){
            links[i].style.display = "none";
            // console.log(links[i])
        }
//......................................................................

    let notBody = document.querySelectorAll(".row .post");
        

    for(i = 0; i < notBody.length; i++){
        notBody[i].innerHTML = notBody[i].innerHTML.replace(/Bacon/g, "LASER VISON");
    }

//...................................................................

    let sectionPar = document.querySelectorAll(".row.post:nth-last-of-type(2)");
        // console.log(sectionPar)
        for (i = 0; i < sectionPar.length; i++){
            sectionPar[i].style.display = "none";
        }

    let sectionPar2 = document.querySelectorAll(".row.post:nth-last-of-type(1)");
        for(i = 0; i < sectionPar2.length; i++){
            sectionPar2[i].style.display = "none";
        }

    
//.......................................................................

    let adPics = document.querySelector("aside");
        console.log(adPics)
        adPics.innerHTML = "";

})();