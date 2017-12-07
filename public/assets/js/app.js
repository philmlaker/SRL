
    $(document).ready(function () {




      
        $('.dropdown-toggle').dropdown();

        var testValue;  
        var testDesript;
        /*  Front-End
 * ========================= */





$(document).on('click', '#test', function(){

  window.scrollTo(811, 550);

  $('#results').empty();
  $('#results').show();
    $(".test").css("color", "rgb(0, 43, 92)");
     $(this).css("color", "rgb(227, 25, 55)");

  console.log( $(this).attr( "value" ));
  var testValue = $(this).attr( "value" );
  var testValuePlus = "/find/" + testValue;
  console.log(testValuePlus);


$.ajax({
    type: "GET",
    url: "/find/" + testValue,
    success: function(data) {


      console.log(data);

      console.log(data[0].Test);
      var dept = data[0].ResponsibleDept;
       console.log("this is the department" + dept);

      if(dept === "Molecular" || dept === "Analytical Chemistry"){
        console.log("Match");
        dept = data[0].ResponsibleDept + " Laboratory";
      }else{console.log("not match")};

   


      var testName = data[0].TestName;
      var testCode = data[0].Test;
      var mnemonic = data[0].Mnemonic;
      var sampleType = data[0].SampleType;
      var perferredContain = data[0].PreferredContainer;
      var alternateContain = data[0].AlternateContainer;
      var tat = data[0].ExpectedTurnAround;
      var testContains = data[0].LOINC;
      var matrix = data[0].SampleType;
      var volume = data[0].SampleVolume;
      var handling = data[0].HandlingInstructions;
      var transport = data[0].Transport;
      var stability = data[0].SpecimenStability;
      var unsuitable = data[0].UnsuitableSpecimen;
      var frequency = data[0].Frequency;
      var ref = data[0].ReferenceRange;
      var ref = data[0].ReferenceRange;
      var NYSDOH = data[0].NYSDOHApprovalStatus || 0;
      var CPT = data[0].CPT;
      var method = data[0].Methodology;
      var compliance = data[0].COMPLIANCESTATEMENT || 0;


        console.log(testContains);
$.ajax({
    type: "GET",
    url: "/find/dept2/" + testValue,
    success: function(data) {
      
      console.log("APP.js:sdfsdfs " + data[0].OrderingRecommendation);

       testDesript = data[0].OrderingRecommendation;
  





      $("#results").empty();
      $("#results").append("<h2>" + testName + "<hr>" + "</h2>" + 
                      "<div id='testSummary'>" +
                 "<p id='testDescript'>" + testDesript + "</p><br>" +
                 "<p><img id='glass' src='assets/images/testCode.svg'>Test Code: " + testCode + "</p><br>" +
                 "<p><img id='timer' src='assets/images/timer.svg'> Expected Turn Around: " + tat + "</p><br>" +
                 "<p><img id='matrix' src='assets/images/matrix.svg'> " + matrix + "</p><br>" +
                 "<H6>Click on the button below for full test details.</h6><br>" +
              "</div>" + 
                "<div class='text-right'><button class='btn btn-secondary' id='testCollectionDetails'>Test Collection Details</button></div>" + 
                "<div id='additionalInfo'>" + 
                "<h4 id='testHeader'> Test Information: </h4>" +
                "<div id='contents'>" + 
                "<h5> Also known as:</h5> " + mnemonic + "<br>" +
                "<h5>Test: </h5> " + testCode + "<br>" + 
                "<h5>Test Contains (LOINC):</h5> " + testContains + "<br>" +
                "</div>" + 
                 "<h4 id='testHeader'> Specimen Requirements: </h4>" +
                  "<div id='contents'>" + 
                "<h5>Sample Type:</h5> " + matrix + "<br>" +
                "<h5>Perferred Container:</h5> " + perferredContain + "<br>" +
                "<h5>Alternate Container:</h5> " + alternateContain + "<br>" +
                "<h5>Sample Volume:</h5> " + volume + "<br>" +
                "<h5>Handling Instructions:</h5> " + handling + "<br>" +
                "<h5>Transport:</h5> " + transport + "<br>" +
                "<h5>Specimen Stability:</h5> " + stability + "<br>" +
                "<h5>Unsuitable Specimen:</h5> " + unsuitable + "<br>" +
                  "</div>" +
                  "<h4 id='testHeader'> Testing: </h4>" +
                  "<div id='contents'>" + 
                  "<h5>Frequency:</h5> " + frequency + "<br>" +
                  "<h5>Expected Turn Around Time:</h5> " + tat + "<br>" +
                  "<h5>Reference Range:</h5> " + ref + "<br>" +
                  "<h5>Responsible Deptartment:</h5> " + dept + "<br>" +
                  "<div id='NYSDOHDiv'></div>" +
                  "<h5>CPT:</h5> " + CPT + "<br>" +
                  "<h5>Methodology:</h5> " + method + "<br>" +
                  "<div id='complianceDiv'></div>");


            if(compliance == 0){
                console.log("NYSDOH = undefined");

              }else{
                console.log("NYSDOH = defined");
                 $("#complianceDiv").html(
                  "<h5>Compliance Statement:</h5> " + compliance + "<br>" +
                   "</div>" +
                   "</div>"
                   );
              };


                if(NYSDOH == 0){
                console.log("compliance = undefined");

              }else{
                console.log("compliance = defined");
                 $("#NYSDOHDiv").html(
                  "<h5>NYSDOH Approval Status:</h5> " + NYSDOH + "<br>" +
                   "</div>" +
                   "</div>"
                   );
              };

  }
  });


    }
  });







});

$(document).on('click', '#testCollectionDetails', function(){
     $("#additionalInfo").toggle();
       
 

});



$(document).keypress(function(e){
        if(e.which == 13){//Enter key pressed
               console.log("working");
     var searchText = $("#txtSearch").val();
     console.log(searchText);
      
      $(".category").css("color", "#002b5c");
    
$.ajax({
    type: "GET",
    url: "/find2/" + searchText,
    success: function(data) {
      console.log("FROM app" + data);
      $("#results2").empty();
  $("#results2").append("<h5 id='testCategoryHeader'>Search Results<hr></h5>");
        for(var i = 0; i < data.length; i++){
        

          // arr.push(data[i].TestName);
          // console.log(arr);




$("#results2").append("<h3 value=" + data[i].Test + " id='test' class='test'>" + data[i].TestName +"</h3>");
      };


}

});



$("#txtSearch").val('');

        }
    });



$(document).on('click', '#submit', function(){
     console.log("working");
     var searchText = $("#txtSearch").val();
     console.log(searchText);
      $("#searchText").val("");
      $(".category").css("color", "#002b5c");
                $("#results2").empty();
        $("#results").empty();

$.ajax({
    type: "GET",
    url: "/find2/" + searchText,
    success: function(data) {
      console.log("FROM app" + data);
      $("#results2").empty();

        console.log(data);
        $("#results2").append("<h5 id='testCategoryHeader'>Search Results<hr></h5>");
        for(var i = 0; i < data.length; i++){
        

          // arr.push(data[i].TestName);
          // console.log(arr);




      $("#results2").append("<h3 value=" + data[i].Test + " id='test' class='test'>" + data[i].TestName +"</h3>");
      };
  
  

}
});
$("#txtSearch").val('');
});








$(document).on('click', '#dept', function(){
       $(".category").css("color", "#002b5c");
      $(this).css("color", "#e31937");

  console.log($(this).html());
  deptValue = $(this).html();
  console.log("CLICK ON: " + deptValue);


$.ajax({
    type: "GET",
    url: "/find/dept/" + deptValue,
    success: function(data) {
      console.log("APP.js: " + data);
        $("#results2").empty();
        $("#results").empty();
        $("#deptName").html(deptValue);
      
 $("#results2").append("<h5 id='testCategoryHeader'>" + deptValue + "<hr></h5>");
      // for(var i = 0; i < data.length; i++){
      //   console.log(data[i].TestName);

      //  $("#results2").append("<h3 id='test' class='test'>" + data[i].TestName+"</h3>");
      // };
       var arr = [];


       for(var i = 0; i < data.length; i++){
          arr.push({TestName: data[i].TestName, TestSet:data[i].TestSet });
             // $("#results2").append("<h3 value=" + data[i].TestSet + " id='test' class='test'>" + data[i].TestName +"</h3>");

       };
      

       console.log(arr);

                    var arrSORT = arr.sort(function(a, b){
                        if(a.TestName < b.TestName) return -1;
                        if(a.TestName > b.TestName) return 1;
                        return 0;
                    });

           console.log("LAL" + arrSORT);


            for(var i = 0; i < arrSORT.length; i++){
                   
                    

                         $("#results2").append("<h3 value=" + arrSORT[i].TestSet + " id='test' class='test'>" + arrSORT[i].TestName +"</h3>");
                  };

    }
  });


});

$('#results').hide();




$(document).on('click', '#geneticScreen', function(){
  console.log("clicked!");


      $("#results").show();
  
      var testValue = $(this).attr("value");
      console.log(testValue);





$.ajax({
    type: "GET",
    url: "/find/" + testValue,
    success: function(data) {
      console.log(compliance);

     

      var dept = data[0].ResponsibleDept;
       
      var TestName = data[0].TestName;
      var testCode = data[0].Test;
      var mnemonic = data[0].Mnemonic;
      var sampleType = data[0].SampleType;
      var perferredContain = data[0].PreferredContainer;
      var alternateContain = data[0].AlternateContainer;
      var tat = data[0].ExpectedTurnAround;
      var testContains = data[0].LOINC;
      var matrix = data[0].SampleType;
      var volume = data[0].SampleVolume;
      var handling = data[0].HandlingInstructions;
      var transport = data[0].Transport;
      var stability = data[0].SpecimenStability;
      var unsuitable = data[0].UnsuitableSpecimen;
      var frequency = data[0].Frequency;
      var ref = data[0].ReferenceRange;
      var ref = data[0].ReferenceRange;
      var NYSDOH = data[0].NYSDOH || 0;
      var CPT = data[0].CPT;
      var method = data[0].Methodology;
      var compliance = data[0].COMPLIANCESTATEMENT || 0;


      $("#results").empty();
      $("#results").append("<h2>" + TestName + "<hr>" + "</h2>" + 
                      "<div id='testSummary'>" +
                 
                 "<p><img id='glass' src='assets/images/testCode.svg'>Test Code: " + testCode + "</p><br>" +
                 "<p><img id='timer' src='assets/images/timer.svg'> Expected Turn Around: " + tat + "</p><br>" +
                 "<p><img id='matrix' src='assets/images/matrix.svg'> " + matrix + "</p><br>" +
                 "<H6>Click on the button below for full test details.</h6><br>" +
              "</div>" + 
                "<div class='text-right'><button class='btn btn-secondary' id='testCollectionDetails'>Test Collection Details</button></div>" + 
                "<div id='additionalInfo'>" + 
                "<h4 id='testHeader'> Test Information: </h4>" +
                "<div id='contents'>" + 
                "<h5> Also known as:</h5> " + mnemonic + "<br>" +
                "<h5>Test: </h5> " + testCode + "<br>" + 
                "<h5>Test Contains (LOINC):</h5> " + testContains + "<br>" +
                "</div>" + 
                 "<h4 id='testHeader'> Specimen Requirements: </h4>" +
                  "<div id='contents'>" + 
                "<h5>Sample Type:</h5> " + matrix + "<br>" +
                "<h5>Perferred Container:</h5> " + perferredContain + "<br>" +
                "<h5>Alternate Container:</h5> " + alternateContain + "<br>" +
                "<h5>Sample Volume:</h5> " + volume + "<br>" +
                "<h5>Handling Instructions:</h5> " + handling + "<br>" +
                "<h5>Transport:</h5> " + transport + "<br>" +
                "<h5>Specimen Stability:</h5> " + stability + "<br>" +
                "<h5>Unsuitable Specimen:</h5> " + unsuitable + "<br>" +
                  "</div>" +
                  "<h4 id='testHeader'> Testing: </h4>" +
                  "<div id='contents'>" + 
                  "<h5>Frequency:</h5> " + frequency + "<br>" +
                  "<h5>Expected Turn Around Time:</h5> " + tat + "<br>" +
                  "<h5>Reference Range:</h5> " + ref + "<br>" +
                  "<h5>Responsible Deptartment:</h5> " + dept + "<br>" +
                  "<div id='NYSDOHDiv'></div>" +
                  "<h5>CPT:</h5> " + CPT + "<br>" +
                  "<h5>Methodology:</h5> " + method + "<br>" +
                    "<div id='complianceDiv'></div>");



            if(compliance == 0){
                console.log("compliance = undefined");

              }else{
                console.log("compliance = defined");
                 $("#complianceDiv").html(
                  "<h5>Compliance Statement:</h5> " + compliance + "<br>" +
                   "</div>" +
                   "</div>"
                   );
              };

                if(NYSDOH == 0){
                console.log("NYSDOH = undefined");
                 $("#NYSDOHDiv").remove();

              }else{
                console.log("NYSDOH = defined");
                 $("#NYSDOHDiv").html(
                  "<h5>NYSDOH Approval Status:</h5> " + NYSDOH + "<br>" +
                   "</div>" +
                   "</div>"
                   );
              };



    }
  });

});









$(document).on('click', '#brca', function(){
  console.log("clicked!");


      $("#results").toggle();
  
      var testValue = $(this).attr("value");
      console.log(testValue);





$.ajax({
    type: "GET",
    url: "/find/" + testValue,
    success: function(data) {
      console.log(compliance);

     

      var dept = data[0].ResponsibleDept;
       
      var TestName = data[0].TestName;
      var testCode = data[0].Test;
      var mnemonic = data[0].Mnemonic;
      var sampleType = data[0].SampleType;
      var perferredContain = data[0].PreferredContainer;
      var alternateContain = data[0].AlternateContainer;
      var tat = data[0].ExpectedTurnAround;
      var testContains = data[0].LOINC;
      var matrix = data[0].SampleType;
      var volume = data[0].SampleVolume;
      var handling = data[0].HandlingInstructions;
      var transport = data[0].Transport;
      var stability = data[0].SpecimenStability;
      var unsuitable = data[0].UnsuitableSpecimen;
      var frequency = data[0].Frequency;
      var ref = data[0].ReferenceRange;
      var ref = data[0].ReferenceRange;
      var NYSDOH = data[0].NYSDOH || 0;
      var CPT = data[0].CPT;
      var method = data[0].Methodology;
      var compliance = data[0].COMPLIANCESTATEMENT || 0;


      $("#results").empty();
      $("#results").append("<h2>" + TestName + "<hr>" + "</h2>" + 
                      "<div id='testSummary'>" +
                 
                 "<p><img id='glass' src='assets/images/testCode.svg'>Test Code: " + testCode + "</p><br>" +
                 "<p><img id='timer' src='assets/images/timer.svg'> Expected Turn Around: " + tat + "</p><br>" +
                 "<p><img id='matrix' src='assets/images/matrix.svg'> " + matrix + "</p><br>" +
                 "<H6>Click on the button below for full test details.</h6><br>" +
              "</div>" + 
                "<div class='text-right'><button class='btn btn-secondary' id='testCollectionDetails'>Test Collection Details</button></div>" + 
                "<div id='additionalInfo'>" + 
                "<h4 id='testHeader'> Test Information: </h4>" +
                "<div id='contents'>" + 
                "<h5> Also known as:</h5> " + mnemonic + "<br>" +
                "<h5>Test: </h5> " + testCode + "<br>" + 
                "<h5>Test Contains (LOINC):</h5> " + testContains + "<br>" +
                "</div>" + 
                 "<h4 id='testHeader'> Specimen Requirements: </h4>" +
                  "<div id='contents'>" + 
                "<h5>Sample Type:</h5> " + matrix + "<br>" +
                "<h5>Perferred Container:</h5> " + perferredContain + "<br>" +
                "<h5>Alternate Container:</h5> " + alternateContain + "<br>" +
                "<h5>Sample Volume:</h5> " + volume + "<br>" +
                "<h5>Handling Instructions:</h5> " + handling + "<br>" +
                "<h5>Transport:</h5> " + transport + "<br>" +
                "<h5>Specimen Stability:</h5> " + stability + "<br>" +
                "<h5>Unsuitable Specimen:</h5> " + unsuitable + "<br>" +
                  "</div>" +
                  "<h4 id='testHeader'> Testing: </h4>" +
                  "<div id='contents'>" + 
                  "<h5>Frequency:</h5> " + frequency + "<br>" +
                  "<h5>Expected Turn Around Time:</h5> " + tat + "<br>" +
                  "<h5>Reference Range:</h5> " + ref + "<br>" +
                  "<h5>Responsible Deptartment:</h5> " + dept + "<br>" +
                 "<div id='NYSDOHDiv'></div>" +
                  "<h5>CPT:</h5> " + CPT + "<br>" +
                  "<h5>Methodology:</h5> " + method + "<br>" +
                    "<div id='complianceDiv'></div>");



            if(compliance == 0){
                console.log("compliance = undefined");


              }else{
                console.log("compliance = defined");
                 $("#complianceDiv").html(
                  "<h5>Compliance Statement:</h5> " + compliance + "<br>" +
                   "</div>" +
                   "</div>"
                   );
              };

              if(NYSDOH == 0){
                console.log("NYSDOH = undefined");
                $("#NYSDOHDiv").remove();

              }else{
                console.log("NYSDOH = defined");
                 $("#NYSDOHDiv").html(
                  "<h5>NYSDOH Approval Status:</h5> " + NYSDOH + "<br>" +
                   "</div>" +
                   "</div>"
                   );
              };

    }
  });

});





    });



