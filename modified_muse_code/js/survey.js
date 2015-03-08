Parse.initialize("auhX12Zx76VCpMi4N0WMdLGHVihxJ2BbNjaiAsiS", "0uqFNRAqTibGlpkcLVT9djbp4JuNPxmHBfF0qGg8");

//SweetAlert written by Tristan Edwards with free-use license
//http://tristanedwards.me/sweetalert
$.getScript("sweet-alert-lib/sweet-alert.min.js", function() { });

var Questions = Parse.Object.extend("Questions");
var questions = new Parse.Query(Questions);
questions.ascending("question_numb");

questions.find({
  success: function(results) {
    globresults = results;
  },
  error: function(error) {
    alert("Error");
  }
})

function submit(form_name, url) {
  var Responses = Parse.Object.extend("Responses");
  var survey = new Responses();

  var survdata = document.getElementById(form_name).elements;
  var wrongans = '';
  
  for (var i = 0; i < survdata.length; i++) {
    
    if (survdata[i].type == "radio") {
      if (survdata[i].checked) {
        
        survey.set(survdata[i].id, survdata[i].value);
        
        var questnumb = survdata[i].id.substring(1);

        if (survdata[i].value != globresults[questnumb - 1].get("correct")) {

          wrongans += "You got \"" + globresults[questnumb - 1].get("question") + "\" incorrect.\nThe correct answer is: \"";
          wrongans += globresults[questnumb - 1].get("correct") + "\" because " + globresults[questnumb - 1].get("explanation") + ".\n\n";
        }
        
      }
      else { }
    }
    
    else {
      survey.set(survdata[i].id, survdata[i].value);
    }
    
  }
  
  survey.save(null, {
    success: function(survey) {
      if (wrongans != '') {  
        swal({
          title: 'Thank you for taking the quiz! But you got a few questions wrong...',
          text: wrongans,
          type:"error",
          confirmButtonText: "Ok, I'm ready for the next section!"
        },
        function() {
          window.location.href = url;
        });
      }
      else {
        swal({
          title: 'Thank you for taking the quiz!',
          text:'You got all the answers correct.',
          type:"success",
          confirmButtonText: "Ok, I'm ready for the next section!"
        },
        function() {
          window.location.href = url;
        });
      }
    },
    error: function(survey, error) {
      swal("Failed to collect data - please try again!");
    }
  });
  
}