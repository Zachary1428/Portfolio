window.onload = function(){
    TextChanger();  
    
}

var arr_Titles = [
    "Ready to serve", "Game Development", "Unity 3D & 2D", "Game Modding",
    "Software Dev", "MVC ASP.NET", ".NET FRAMEWORK",
    "Databases", "MySQL", "SQLite", "Microsoft SQL", "NoSQL", "MonggoDB",
    "Web Development", "HTML", "CSS", "JS", "JSQuery", "AJAX", "Bootstrap"];
var timer = 0; var changeVal = 0;

async function TextChanger(){
    var portTitle = $("#changeText");

    portTitle.addClass("introText2");
    await FadeOutText(500);
    ChangeText(portTitle);
    await FadeOutText(300);
    portTitle.removeClass("introText2");
    await FadeOutText(300);
    
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

function ChangeText(portTitle){
    
    curr_title = portTitle.text();
    
    var curr_title;
    var arrval = arr_Titles.length - 1;

    console.log("val: " + changeVal);
    if(changeVal <= arrval){
        timer = 700;
        changeVal++;
    }
    if(changeVal > arrval){
        changeVal = 0;
        timer = 5000;
    }
    portTitle.text(arr_Titles[changeVal]);
    
}


