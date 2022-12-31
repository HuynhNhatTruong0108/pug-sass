//slide
        var slideIndex = 1;
        displaySlide(slideIndex);
  
        function moveSlides(n) {
            displaySlide(slideIndex += n);
        }
  
        function activeSlide(n) {
            displaySlide(slideIndex = n);
        }
  
        /* Main function */
        function displaySlide(n) {
            var i;
            var totalslides =
                document.getElementsByClassName("slide");
             
            var totaldots =
                document.getElementsByClassName("footerdot");
             
            if (n > totalslides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = totalslides.length;
            }
            for (i = 0; i < totalslides.length; i++) {
                totalslides[i].style.display = "none";
            }
            for (i = 0; i < totaldots.length; i++) {
                totaldots[i].className =
                totaldots[i].className.replace(" active", "");
            }
            totalslides[slideIndex - 1].style.display = "block";
            totaldots[slideIndex - 1].className += " active";
        }
//chuyen dong slide

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 4 seconds
}


//menu
