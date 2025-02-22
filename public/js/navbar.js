var toggler = document.getElementById("toggler");
var overlay = document.getElementById("overlay");
var ln1 = document.getElementById("ln1");
var ln2 = document.getElementById("ln2");
var toggleflag = 0;

var intro = document.getElementById('intro-div');
var about = document.getElementById('about-div');
var services = document.getElementById('services-div');
var careers = document.getElementById('careers-div');
var contact = document.getElementById('contact-div');


function mobilenav()
{
    if (toggleflag == 0)
    {
        overlay.style.display = "flex";
        ln1.style.transform = "rotate(50deg)";
        ln2.style.transform = "rotate(-50deg)";
        toggler.style.height = "1px";
        intro.style.display = 'none';
        about.style.display = 'none';
        services.style.display = 'none';
       
        careers.style.display = 'none';
        contact.style.display = 'none';
        toggleflag = 1;
    }
    else
    {
        overlay.style.display = "none";
        ln1.style.transform = "rotate(0deg)";
        ln2.style.transform = "rotate(0deg)";
        toggler.style.height = "40%";
        intro.style.display = 'flex';
        about.style.display = 'flex';
        services.style.display = 'flex';
      
        careers.style.display = 'flex';
        contact.style.display = 'flex';
        toggleflag = 0;
    }
}

function navigation()
{
    overlay.style.display = "none";
    ln1.style.transform = "rotate(0deg)";
    ln2.style.transform = "rotate(0deg)";
    toggler.style.height = "40%";
    intro.style.display = 'flex';
    about.style.display = 'flex';
    services.style.display = 'flex';
   
    careers.style.display = 'flex';
    contact.style.display = 'flex';
    toggleflag = 0;
}