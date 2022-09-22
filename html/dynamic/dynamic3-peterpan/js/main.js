function HideLists(){
    document.getElementById('indianCamp').style.opacity ="0";
    document.getElementById('lostBoys').style.opacity ="0";
    document.getElementById('cannibalCove').style.opacity ="0";
    document.getElementById('mermaidLagoon').style.opacity ="0";
    document.getElementById('crocodileCreek').style.opacity ="0";
    
    document.getElementById('indianCamp').style.bottom = "-450px";
    document.getElementById('lostBoys').style.bottom = "-450px";
    document.getElementById('cannibalCove').style.bottom = "-450px";
    document.getElementById('mermaidLagoon').style.bottom = "-450px";
    document.getElementById('crocodileCreek').style.bottom = "-450px";

    document.getElementById('indianCampMap').style.border = "3px dashed rgba(253,216,53,0.2)";
    document.getElementById('lostBoysMap').style.border = "3px dashed rgba(253,216,53,0.2)";
    document.getElementById('cannibalCoveMap').style.border = "3px dashed rgba(253,216,53,0.2)";
    document.getElementById('mermaidLagoonMap').style.border = "3px dashed rgba(253,216,53,0.2)";
    document.getElementById('crocodileCreekMap').style.border = "3px dashed rgba(253,216,53,0.2)";
    
    document.getElementById('indianCampMap').style.boxShadow = "none";
    document.getElementById('lostBoysMap').style.boxShadow = "none";
    document.getElementById('cannibalCoveMap').style.boxShadow = "none";
    document.getElementById('mermaidLagoonMap').style.boxShadow = "none";
    document.getElementById('crocodileCreekMap').style.boxShadow = "none";
}


function Area(name){    
    HideLists();
    document.getElementById(name).style.opacity ="1";
    document.getElementById(name).style.bottom = "-70px";
    document.getElementById(name+'Map').style.boxShadow = "0px 0px 200px #000";
    document.getElementById(name+'Map').style.border = "3px solid #b71c1c";
    document.getElementById('Close').style.display ="block";
}

function CloseButton(){
    HideLists();
    document.getElementById('Close').style.display ="none";
}



// chapters
function viewMore() {
    document.getElementById('hidden').style.display = "block";
    document.getElementById('btnView').style.display = "none";
}