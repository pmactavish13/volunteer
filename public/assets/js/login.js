// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#memberLoginForm").on("submit", function (event) {
        console.log("success");
        event.preventDefault();
        if ($.trim($("#password").val()) === "") {
            return false;
        }
        if ($.trim($("#email").val()) === "") {
            return false;
        }
        
        var memberLogin = {
            password: $("#password").val().trim(),
            email: $("#email").val().trim(),
        };
        console.log(memberLogin);
      
        // Send the POST request.
        $.ajax("/api/login", {
            type: "POST",
            data: memberLogin
        }).then(
            function () {
                // Reload the page to get the updated list
                // location.reload();
                $(location).attr('href', '/')
            }
        );
    });

});