window.onload = function(){
    InitializeTitles();
    TextChanger();  
    
}

var arr_Titles;
var timer = 2000; var titleVal = 0;
var subVal = 0; var cts = false;

function InitializeTitles(){
    var misc = {Title: "Ready to serve:", Content: ["Front-end", "Back-end", "Fullstack", "Software Dev"] };
    var gD = {
        Title:"Game Dev:", 
        Content: [
            "Unity 3D",
            "Unity 2D",
            "Features Dev",
            "Game Design",
            "Pixel Art",
            "Game Modding"
        ] 
    };

    var softDev = {
        Title:"Software Dev:", 
        Content: [
            ".Net Framework",
            "Windows Forms",
            "Systems Development",
            "Backend APIs",
            "Integrations"
        ] 
    };

    var fullStack = {
        Title:"Web Stack:", 
        Content: [
            "MVC ASP.NET",
            "RESTful APIs Dev",
            "HTML/CSS",
            "JavaScript",
            "AJAX", "JQuery",
            "Bootstrap", "WordPress"
        ] 
    };
    var dB = {
        Title:"Database Stack:", 
        Content: [
            "MySQL",
            "SQLlite",
            "MonggoDB",
            "Microsoft SQL",
        ] 
    };

    arr_Titles = [ misc, gD, softDev, fullStack, dB ];
}

async function TextChanger(){
    var portTitle = $("#changeTextTitle");
    var portSub = $("#changeTextSubtitle");

    ChangeTextTitle(portTitle, portSub);
    FadeOutText(250);
    setTimeout(TextChanger, timer);
}

async function FadeOutText(ms){
    var doneFade = new Promise(function(result){
        setTimeout(function(){
            result(true);
        },ms);
    });
    return doneFade;
}

async function ChangeTextTitle(portTitle, portSub){
    
    var arrval = arr_Titles.length - 1;
    var tempval = titleVal;
    if(cts == true){
        titleVal++;
        cts = false;
    }
    console.log("titleVal: " + titleVal + "\narrval: " + arrval);
    if(titleVal == arrval){
        titleVal = 0;
        console.log("Firing?");
    }

    if(tempval == titleVal){
        portTitle.text(arr_Titles[titleVal].Title);
        cts = await ChangeTextSub(portSub);
    }
    else{
        if(titleVal <= arrval){
            portTitle.addClass("introText2");
            portSub.addClass("introText2");
            await FadeOutText(750);
            portTitle.text(arr_Titles[titleVal].Title);
            portSub.text(arr_Titles[titleVal].Content[subVal]);
            await FadeOutText(500);
            portTitle.removeClass("introText2");
            portSub.removeClass("introText2");
            subVal++;
        }
    }

}

async function ChangeTextSub(portSub){
    
    var continueNext = false;
    var arrval = arr_Titles[titleVal].Content.length - 1;

    portSub.addClass("introText2");
    await FadeOutText(750);
    portSub.text(arr_Titles[titleVal].Content[subVal]);
    await FadeOutText(500);
    portSub.removeClass("introText2");

    if(subVal >= arrval){
        continueNext = true;
        subVal = 0;
    }
    else{
        subVal++;
    }
    return continueNext;
}
