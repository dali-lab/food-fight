Parse.initialize("auhX12Zx76VCpMi4N0WMdLGHVihxJ2BbNjaiAsiS", "0uqFNRAqTibGlpkcLVT9djbp4JuNPxmHBfF0qGg8");

function submit(form_name) {
  
  var Survey = Parse.Object.extend("Survey");
  var survey = new Survey();
  
  var survdata = document.getElementById(form_name).elements;
    
  for (var i = 0; i < survdata.length; i++) {
    
    if (survdata[i].type == "radio") {
      if (survdata[i].checked) {
        survey.set(survdata[i].name, survdata[i].value);
      }
      else { }
    }
    
    else {
      survey.set(survdata[i].name, survdata[i].value);
    }
    
  }
  
  survey.save(null, {
    success: function(survey) {
      alert('Thank you for taking the survey!');
    },
    error: function(survey, error) {
      alert("Failed to collect data - please try again!");
    }
  });
  
}