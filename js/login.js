var path = window.location.hostname;

$(document).ready(function () {


    $(".btn-user").on("click", function(){
        console.log(
            $('#form-user').find('input[name="email"]').val()
        );
        var email = $('#form-user').find('input[name="email"]').val();

        if(email != "" && email == 'Hiroko'){
            localStorage.setItem('user', '{"name" : "'+email+'"}');
            window.location.href = 'index.html';
        } 
        
    })

});


function init() {
}