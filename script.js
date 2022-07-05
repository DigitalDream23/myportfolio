/* projects */
let autonomus = document.getElementById("autonomus");
let vegan = document.getElementById("vegan");
let lone = document.getElementById("lone");
let ciervo = document.getElementById("ciervo");
let maseta = document.getElementById("maseta");
let blop = document.getElementById("blop");
let CMYK = document.getElementById("CMYK");
let hardy = document.getElementById("hardy")

/* Project Description */
let autonomusInfo = document.getElementById("autonomusinfo");
let veganInfo = document.getElementById("veganinfo");
let loneInfo = document.getElementById("loneinfo");
let ciervoInfo = document.getElementById("ciervoinfo");
let masetaInfo = document.getElementById("masetainfo");
let blopInfo = document.getElementById("blopinfo");
let CMYKInfo = document.getElementById("CMYKinfo");
let hardyInfo = document.getElementById("hardyinfo");


function showInfo (event){
    event.style.display="inline-block";
}
function hideInfo(event){
    event.style.display="none";
}


function handler(proj, information){
    
    proj.onmouseover=function(){
        showInfo(information)
    };
    proj.onmouseout=function(){
        hideInfo(information)
    };
};

handler(autonomus, autonomusInfo);
handler(vegan, veganInfo);
handler(lone, loneInfo);
handler(ciervo, ciervoInfo);
handler(maseta, masetaInfo);
handler(blop, blopInfo);
handler(CMYK, CMYKInfo);
handler(hardy, hardyInfo);

