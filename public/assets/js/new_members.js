// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#newMemberForm").on("submit", function (event) {
        console.log("success")
        event.preventDefault();
        if ($.trim($("#password").val()) === "" || $.trim($("#password").val()) === "Password" || $.trim($("#password").val()) === "Please enter a Password") {
            $("#password").val(" Please enter a Password");
            return false;
        }
        if ($.trim($("#firstName").val()) === "" || $.trim($("#firstName").val()) === "First Name" || $.trim($("#firstName").val()) === "Please enter your First Name") {
            $("#firstName").val(" Please enter your First Name");
            return false;
        }
        if ($.trim($("#lastName").val()) === "" || $.trim($("#lastName").val()) === "Last Name" || $.trim($("#lastName").val()) === "Please enter your Last Name") {
            $("#lastName").val(" Please enter your Last Name");
            return false;
        }
        if ($.trim($("#phone").val()) === "" || $.trim($("#phone").val()) === "123-456-7890" || $.trim($("#phone").val()) === "Please enter your Contact Number") {
            $("#phone").val(" Please enter your Contact Number");
            return false;
        }
        if ($.trim($("#email").val()) === "" || $.trim($("#email").val()) === "jDoe@email.com" || $.trim($("#email").val()) === "Please enter a valid e-mail Address") {
            $("#email").val(" Please enter your e-mail Address");
            return false;
        }
        if ($.trim($("#photoUrl").val()) === "" || $.trim($("#photoUrl").val()) === "URL Address" || $.trim($("#photoUrl").val()) === "Please enter a valid URL address") {
            $("#photoUrl").val(" Please enter the URL address of your photo");
            return false;
        }
        if ($("#selectFrequency").val() === "" || $("#selectFrequency").val() === "Choose..." || $("#selectFrequency").val() === "Please select an option") {
            $("#selectFrequency").val(" Please select an option");
            return false;
        }
        if ($("#selectInOrOut").val() === "" || $("#selectInOrOut").val() === "Choose..." || $("#selectInOrOut").val() === "Please select an option") {
            $("#selectInOrOut").val(" Please select an option");
            return false;
        } 
        var newMember = {
            password: $("#password").val().trim(),
            firstname: $("#firstName").val().trim(),
            lastname: $("#lastName").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            photoUrl: $("#photoUrl").val().trim(),
            member_frequency_preference: $("#selectFrequency option:selected").text(),
            member_inOrOut:  $("#selectInOrOut option:selected").text(),
        };
        
        $('input[name="skills"]:checked').each(function() {   
         newMember[this.value] = true;
         });

        console.log(newMember)
      
        // Send the POST request.
        $.ajax("/api/new_members", {
            type: "POST",
            data: newMember
        }).then(
            function () {
                // Reload the page to get the updated list
                // location.reload();
                $(location).attr('href', '/')
            }
        );
    });

});