Parse.initialize("auhX12Zx76VCpMi4N0WMdLGHVihxJ2BbNjaiAsiS", "0uqFNRAqTibGlpkcLVT9djbp4JuNPxmHBfF0qGg8");

//SweetAlert written by Tristan Edwards with free-use license
//http://tristanedwards.me/sweetalert
$.getScript("sweet-alert-lib/sweet-alert.min.js", function() { });


function populate_qanda(qandaname) {
    
    var QandAClass = Parse.Object.extend("QandA");
    var qanda = new Parse.Query(QandAClass);
    var qandastring = '';
    
    qanda.find ({
        success: function(qandaresults) {
            for (var i=0; i < qandaresults.length; i++) {
                if (qandaresults[i].get("Show") == "T") {
                    date = String(qandaresults[i].updatedAt);
                    qandastring += '<div align="right">' + date.substring(4, 15) + '</div>';
                    qandastring += '<div class="question" align="right">' + qandaresults[i].get("Question") + '</div> <br />';
                    qandastring += '<div class="answer" align="left">' + qandaresults[i].get("Answer") + '</div><br /><br />';
                    qandastring += '<img class="separator" src="images/dashed%20separator.png" alt="" width="500" height="4">'
                }
            }
            document.getElementById(qandaname).innerHTML = qandastring;
            
        },
        error: function(error) {
            console.log("error");
        }
    })
       
}

function submit_q(form_name) {
    var QandA = Parse.Object.extend("QandA");
    var question = new QandA();
    
    var sub_data = document.getElementById(form_name).elements;

    question.set("Name", sub_data[1].value);
    question.set("Email", sub_data[2].value);
    question.set("Question", sub_data[3].value);
    question.set("Show", "F");
    
    question.save(null, {
        success: function(question) {
            swal({
                title: 'Thank you for the question!',
                text: 'It will be reviewed and answered in the next few days',
                type: "success",
                confirmButtonText: "OK"
            });
        },
        
        error: function(question, error) {
            swal("Failed to collect data - please try again!");
        }
    });
}