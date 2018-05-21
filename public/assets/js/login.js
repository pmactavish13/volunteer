$(document).ready(function () {

    $("#memberLoginForm").on("submit", function (event) {
        event.preventDefault();
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

        // Send the POST request.
        $.ajax("/api/login", {
            type: "POST",
            data: memberLogin
        }).then(
            function () {
                $(location).attr('href', '/private')
            }
        );
    });
});