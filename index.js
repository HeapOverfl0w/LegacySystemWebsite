var logoClicked = false;

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    logoClicked = window.sessionStorage.getItem("logoClicked");
    if (logoClicked == undefined)
        logoClicked = false;
    if (logoClicked == "true")
    {
        logoClicked = false;
        OnLogoClicked();
    }
    else
        logoClicked = false;
  });

function OnLogoMouseOver()
{
    if (!logoClicked)
        document.getElementById('logo').src = "./images/LegacySystemLogo_mouseover.png";
}

function OnLogoMouseLeave()
{
    if (!logoClicked)
        document.getElementById('logo').src = "./images/LegacySystemLogo.png"
}

function ChangeCss(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function OnLogoClicked()
{
    logoClicked = !logoClicked;
    if (logoClicked)
    {
        //set new CSS
        ChangeCss("./vapedstyle.css", 0);
        document.getElementById('twitter').src = "./images/Twitter_vaped.png";
    }
    else
    {
        ChangeCss("./style.css", 0);
        document.getElementById('twitter').src = "./images/Twitter.png";
    }
    window.sessionStorage.setItem("logoClicked", logoClicked);
}