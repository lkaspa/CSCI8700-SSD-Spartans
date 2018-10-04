$(document).ready(function () {

    // check login
    $("#login_form").submit(function (e) {
        e.preventDefault();
        var data = {};
        $.each($(this).serializeArray(), function (i, field) {
            data[field.name] = field.value;
        });
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/adminLogin.csv",
            dataType: "text",
            success: function(data) {validateCredentials(data);}
         });


    });

    function validateCredentials(allData) {
        var allTextLines = allData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
    
        for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
    
                var tarr = [];
                for (var j=0; j<headers.length; j++) {
                    tarr.push(headers[j]+":"+data[j]); 
                }
                lines.push(tarr);
            }
        }
        console.log(lines)
    }




});