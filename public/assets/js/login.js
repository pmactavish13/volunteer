<<<<<<< HEAD
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
      
=======
$(document).ready(function () {

    $("#memberLoginForm").on("submit", function (event) {
        event.preventDefault();
        // if ($.trim($("#userName").val()) === "" || $.trim($("#userName").val()) === "User Name" || $.trim($("#userName").val()) === "Please enter a User Name") {
        //     $("#userName").val(" Please enter a User Name");
        //     return false;
        // }
        if ($.trim($("#email").val()) === "" || $.trim($("#email").val()) === "jDoe@email.com" || $.trim($("#email").val()) === "Please enter a valid e-mail Address") {
            $("#email").val(" Please enter your e-mail Address");
            return false;
        }
        if ($.trim($("#password").val()) === "" || $.trim($("#password").val()) === "Password" || $.trim($("#password").val()) === "Please enter a Password") {
            $("#password").val(" Please enter a Password");
            return false;
        }
        var memberLogin = {
            password: $("#password").val().trim(),
            email: $("#email").val().trim(),
        }

>>>>>>> bc1349b4622227b7d0babf18c09ba38ae1138e06
        // Send the POST request.
        $.ajax("/api/login", {
            type: "POST",
            data: memberLogin
        }).then(
            function () {
                // Reload the page to get the updated list
                // location.reload();
<<<<<<< HEAD
                $(location).attr('href', '/')
            }
        );
    });

=======
                $(location).attr('href', '/private')
            }
        );
    });
>>>>>>> bc1349b4622227b7d0babf18c09ba38ae1138e06
});