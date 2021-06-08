$(function(){
    /*var select = $("#tuq6");
    var slider = $("<div id='slider' class='form-range slider' style='max-width:300px'></div>").insertAfter(select).slider({
        min: 1,
        max: 7,
        range: "min",
        value: select[0].selectedIndex + 1,
        slide: function(event, ui) {
            select[0].selectedIndex = ui.value - 1;
        }
    });
    $("#tuq6").on("change", function() {
        slider.slider("value", this.selectedIndex + 1 );
    });*/

    $('#tuq6').barrating('show', {
        theme: 'bars-movie'
    });
    $('#tuq8').barrating('show', {
        theme: 'bars-movie'
    });
    $('#tuq10').barrating('show', {
        theme: 'bars-movie'
    });

    var bodyContent = document.getElementsByTagName('div');

    for(var i = 0; i < bodyContent.length; i++) {
        var styleI = window.getComputedStyle(bodyContent[i], null).getPropertyValue('font-size');
        var fontSizeI = parseFloat(styleI);
        bodyContent[i].style.fontSize = (fontSizeI + 1) + 'px';
    }
});

function calculateProbability()
{   
    var totalpointsGss = 0, probabilityGss = 0;
    var totalpointsSoc = 0, probabilitySoc = 0;
    var tuq6 = parseInt(jQuery("#tuq6").val());
    var tuq8 = parseInt(jQuery("#tuq8").val());
    var tuq10 = parseInt(jQuery("#tuq10").val());
    var gender = $("input[name=genderRadio]:checked").val();
    var age = parseInt(jQuery("#age").val());

    switch(tuq6){
        case 1: totalpointsGss += 0;
            totalpointsSoc += 0;
            break;
        case 2: totalpointsGss += 17;
            totalpointsSoc += 11;
            break;
        case 3: totalpointsGss += 33;
            totalpointsSoc += 22;
            break;
        case 4: totalpointsGss += 50;
            totalpointsSoc += 34;
            break;
        case 5: totalpointsGss += 67;
            totalpointsSoc += 45;
            break;
        case 6: totalpointsGss += 83;
            totalpointsSoc += 56;
            break;
        case 7: totalpointsGss += 100;
            totalpointsSoc += 67;
            break;

    }

    switch(tuq8){
        case 1: totalpointsGss += 0;
            totalpointsSoc += 0;
            break;
        case 2: totalpointsGss += 12;
            totalpointsSoc += 2;
            break;
        case 3: totalpointsGss += 24;
            totalpointsSoc += 3;
            break;
        case 4: totalpointsGss += 36;
            totalpointsSoc += 5;
            break;
        case 5: totalpointsGss += 48;
            totalpointsSoc += 6;
            break;
        case 6: totalpointsGss += 60;
            totalpointsSoc += 8;
            break;
        case 7: totalpointsGss += 73;
            totalpointsSoc += 9;
            break;

    }

    switch(tuq10){
        case 1: totalpointsGss += 0;
            totalpointsSoc += 0;
            break;
        case 2: totalpointsGss += 12;
            totalpointsSoc += 17;
            break;
        case 3: totalpointsGss += 24;
            totalpointsSoc += 33;
            break;
        case 4: totalpointsGss += 35;
            totalpointsSoc += 50;
            break;
        case 5: totalpointsGss += 47;
            totalpointsSoc += 67;
            break;
        case 6: totalpointsGss += 59;
            totalpointsSoc += 83;
            break;
        case 7: totalpointsGss += 71;
            totalpointsSoc += 100;
            break;

    }

    if(!gender.includes("female")){
        totalpointsGss += 25;
        totalpointsSoc += 15;
    }

    if(age >= 70){
        totalpointsGss += 8;
    } else {
        totalpointsSoc += 3;
    }

    console.log("Total points (GSS): " + totalpointsGss);
    console.log("Total points (Standard of Care): " + totalpointsSoc);

    var resultGss = "";
    if(totalpointsGss < 73) {
        resultGss = "Not satisfied with telemedicine";
    } else {
        resultGss = "Satisfied with telemedicine";
    }
    var resultSoc = "";
    if(totalpointsSoc < 87) {
        resultSoc = "The patient will NOT consider telemedicine as the ";
    } else {
        resultSoc = "The patient will consider telemedicine as the ";
    }

    // Interpolation
    var x1, x2, y1, y2;
    if(totalpointsGss >= 111){
        x1 = 111;
        x2 = 277;
        y1 = 0.9;
        y2 = 1;
    } else if(totalpointsGss > 97){
        x1 = 97;
        x2 = 111;
        y1 = 0.8;
        y2 = 0.9;
    } else if(totalpointsGss > 88){
        x1 = 88;
        x2 = 97;
        y1 = 0.7;
        y2 = 0.8;
    } else if(totalpointsGss > 80){
        x1 = 80;
        x2 = 88;
        y1 = 0.6;
        y2 = 0.7;
    } else if(totalpointsGss > 73){
        x1 = 73;
        x2 = 80;
        y1 = 0.5;
        y2 = 0.6;
    } else if(totalpointsGss > 66){
        x1 = 66;
        x2 = 73;
        y1 = 0.4;
        y2 = 0.5;
    } else if(totalpointsGss > 58){
        x1 = 58;
        x2 = 66;
        y1 = 0.3;
        y2 = 0.4;
    } else if(totalpointsGss > 49){
        x1 = 49;
        x2 = 58;
        y1 = 0.2;
        y2 = 0.3;
    } else if(totalpointsGss > 35){
        x1 = 35;
        x2 = 49;
        y1 = 0.1;
        y2 = 0.2;
    } else {
        x1 = 0;
        x2 = 35;
        y1 = 0.0;
        y2 = 0.1;
    }

    probabilityGss = (y1 + ((y2-y1)/(x2-x1))*(totalpointsGss-x1)) * 100;

    if(totalpointsSoc >= 178){
        x1 = 178;
        x2 = 194;
        y1 = 0.9;
        y2 = 1;
    } else if(totalpointsSoc > 145){
        x1 = 145;
        x2 = 178;
        y1 = 0.8;
        y2 = 0.9;
    } else if(totalpointsSoc > 122){
        x1 = 122;
        x2 = 145;
        y1 = 0.7;
        y2 = 0.8;
    } else if(totalpointsSoc > 104){
        x1 = 104;
        x2 = 122;
        y1 = 0.6;
        y2 = 0.7;
    } else if(totalpointsSoc > 87){
        x1 = 87;
        x2 = 104;
        y1 = 0.5;
        y2 = 0.6;
    } else if(totalpointsSoc > 71){
        x1 = 71;
        x2 = 87;
        y1 = 0.4;
        y2 = 0.5;
    } else if(totalpointsSoc > 52){
        x1 = 52;
        x2 = 71;
        y1 = 0.3;
        y2 = 0.4;
    } else if(totalpointsSoc > 30){
        x1 = 30;
        x2 = 52;
        y1 = 0.2;
        y2 = 0.3;
    } else if(totalpointsSoc > -4){
        x1 = -4;
        x2 = 30;
        y1 = 0.1;
        y2 = 0.2;
    } else {
        x1 = -5;
        x2 = -4;
        y1 = 0.0;
        y2 = 0.1;
    }
        
    probabilitySoc = (y1 + ((y2-y1)/(x2-x1))*(totalpointsSoc-x1)) * 100;

    jQuery("#gss").html("<br><b>Global Satisfaction Score (GSS)</b>: " + resultGss + " with probability " + probabilityGss.toFixed(2) + "%<br>");
    jQuery("#soc").html("<br>" + resultSoc + "<b>Standard of care</b> with a probability of " + probabilitySoc.toFixed(2) + "%<br><br>");

    window.scrollTo(0,document.body.scrollHeight);
}

/*function tuqchanger(tuq){
    var newValue = "";
    switch(parseInt(tuq.value)){
        case 1: newValue = "Totally disagree";
            break;
        case 2: newValue = "Strongly disagree";
            break;
        case 3: newValue = "Disagree";
            break;
        case 4: newValue = "Neither agree nor disagree";
            break;
        case 5: newValue = "Agree";
            break;
        case 6: newValue = "Strongly agree";
            break;
        case 7: newValue = "Totally agree";
            break;
    }
    $("#" + tuq.id + "output").val(newValue);
}*/