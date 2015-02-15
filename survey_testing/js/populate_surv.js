Parse.initialize("auhX12Zx76VCpMi4N0WMdLGHVihxJ2BbNjaiAsiS", "0uqFNRAqTibGlpkcLVT9djbp4JuNPxmHBfF0qGg8");


//SweetAlert written by Tristan Edwards with free-use license
//http://tristanedwards.me/sweetalert
$.getScript("sweet-alert-lib/sweet-alert.min.js", function() { });

function populate_survey(form_name) {
  var quest_obj = Parse.Object.extend("Questions");
  var question_set = new Parse.Query(quest_obj);
  question_set.ascending("question_numb");
  
  question_set.find({
    success: function(results) {
      var questions = '';
      for (var i=0; i<results.length; i++) {
        questions += results[i].get("question") + '<br />'
        questions += '<input type="radio" id=q' + results[i].get("question_numb") + ' name=name' + results[i].get("question_numb") + ' value=' + results[i].get("a1") + '>' + results[i].get("a1") + '<br />';
        questions += '<input type="radio" id=q' + results[i].get("question_numb") + ' name=name' + results[i].get("question_numb") + ' value=' + results[i].get("a2") + '>' + results[i].get("a2") + '<br />';
        questions += '<input type="radio" id=q' + results[i].get("question_numb") + ' name=name' + results[i].get("question_numb") + ' value=' + results[i].get("a3") + '>' + results[i].get("a3") + '<br />';
        questions += '<input type="radio" id=q' + results[i].get("question_numb") + ' name=name' + results[i].get("question_numb") + ' value=' + results[i].get("a4") + '>' + results[i].get("a4") + '<br /><br />';
      }
      document.getElementById(form_name).innerHTML = questions;
    },
    error: function(error) {
      document.getElementById(form_name).innerHTML = "There was an error loading the form. Please refresh and try again.";
    }
  })
}
