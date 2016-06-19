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
                        }
                    });
                    
                    


                });             
            });