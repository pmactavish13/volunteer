// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#newMemberForm").on("submit", function (event) {
        console.log("success")
        event.preventDefault();
        if ($.trim($("#userName").val()) === "" || $.trim($("#userName").val()) === "User Name" || $.trim($("#userName").val()) === "Please enter a User Name") {
            $("#userName").val(" Please enter a User Name");
            return false;
        }
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
        if ($.trim($("#eMail").val()) === "" || $.trim($("#eMail").val()) === "jDoe@email.com" || $.trim($("#eMail").val()) === "Please enter a valid e-mail Address") {
            $("#eMail").val(" Please enter your e-mail Address");
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
            user_name: $("#userName").val().trim(),
            password: $("#password").val().trim(),
            first_name: $("#firstName").val().trim(),
            last_name: $("#lastName").val().trim(),
            member_phone: $("#phone").val().trim(),
            member_eMail: $("#eMail").val().trim(),
            member_photoUrl: $("#photoUrl").val().trim(),
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