$(document).ready(function () {
   
    $("#signin").on("submit", function (event) {
        
        var $this = $(this);
        $this.find('.message:first').text('');
        
        event.preventDefault();
        if ($.trim($("#email").val()) === "" || $.trim($("#email").val()) === "jDoe@email.com" || $.trim($("#email").val()) === "Please enter a valid e-mail Address") {
            $("#email").val(" Please enter your e-mail Address");
            return false;
        }
        if ($.trim($("#password").val()) === "" || $.trim($("#password").val()) === "Password" || $.trim($("#password").val()) === "Please enter a Password") {
            $("#password").val(" Please enter a Password");
            return false;
        }
        var signin = {
            password: $("#password").val().trim(),
            email: $("#email").val().trim(),
        }

        // Send the POST request.
        $.ajax("/api/signin", {
            type: "POST",
            data: signin
        }).then(
            function (response) {
                window.location.href = response.redirectTo;
            },
            function(error) {
                $this.find('.message:first').text('Username and/or password incorrect');
            }
        );
    });
});