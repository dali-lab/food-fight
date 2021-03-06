Parse.initialize("auhX12Zx76VCpMi4N0WMdLGHVihxJ2BbNjaiAsiS", "0uqFNRAqTibGlpkcLVT9djbp4JuNPxmHBfF0qGg8");

//SweetAlert written by Tristan Edwards with free-use license
//http://tristanedwards.me/sweetalert
$.getScript("sweet-alert-lib/sweet-alert.min.js", function() { });

function populate_survey(form_name, survey_name) {
  

  var Survey = Parse.Object.extend("Survey");
  var survey_set = new Parse.Query(Survey);
  survey_set.equalTo("name", survey_name);
  survey_set.limit(1);
  
  var Question = Parse.Object.extend("Questions");
  var question_set = new Parse.Query(Question);
  var quest_array;
        
  survey_set.find({
    success: function(questionresults) {
      
      quest_array = questionresults[0].get("questions");
        
      question_set.find({
        success: function(results) {

          var questions = "";
          
          for (var i=0; i < results.length; i++) {
            if ($.inArray(results[i].get("question_numb"), quest_array) != -1) {
                var pref = "a"
                var question = 1;
                var quest_name = pref.concat(question);
                
                questions += results[i].get("question") + "<br />";
                while (results[i].get(quest_name) != " ") {
                  questions += '<input type="radio" id=\"q' + results[i].get("question_numb") + '\" name=name' + results[i].get("question_numb") + ' value=\"' + results[i].get(quest_name) + '\"> ' + results[i].get(quest_name) + "<br />";
                  question = question + 1;
                  quest_name = pref.concat(question);
                }
                questions += "<br />";

               }
          }
          

          document.getElementById(form_name).innerHTML = questions;
          
        },
        
        error: function(error) {
          document.getElementById(form_name).innerHTML = "There was an error loading the form. Please refresh and try again.";
        }
        
      });
      
    },
    
    error: function(error) {
      console.error(error);
      document.getElementById(form_name).innerHTML = "There was an error loading the form. Please refresh and try again.";
    }
  })

}
