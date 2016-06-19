$(function(){               
                $('#submitButton').click(function(e){
                    e.preventDefault();
                    console.log('submit clicked');

                    var data = {};
                    data.destination = $('#destination option:selected').val();
                    data.passport = $('#passport option:selected').val();
                    data.duration = $('#duration option:selected').val();
                    

                    $.ajax({
                        type: 'GET',
                        data: data,
                        contentType: 'application/json',
                        url: '/endpoint',                   
                        success: function(data) {
                            console.log('success');
                            console.log(data);
					
					var output, i;
					output="<ul><li><strong>Application Fee:</strong>"+data.cost+"</li>"+
					"<li><strong>Required Forms:</strong></li>";
					var forms=data.requiredDoc;                        
					for (i=0; i<forms.length;i++){
						output=output+"<li>"+forms[i]+"</li>";
					}
					output+="</ul>"
                    document.getElementById("result").innerHTML=output;
                        }
                    });
                });             
            });