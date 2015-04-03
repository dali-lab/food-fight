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
                qandastring += qandaresults[i].get("Question") + '<br />';
                qandastring += '----------------------------------------------------------------------------------------------<br />';
                qandastring += '<div align=\'right\'>' + qandaresults[i].get("Answer") + '</div><br /><br />';
            }
            
            document.getElementById(qandaname).innerHTML = qandastring;
            
        },
        error: function(error) {
            console.log("error");
        }
    })
    
    
    
}