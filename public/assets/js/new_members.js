// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {
    if ($(".modal-title").text() == "My Profile") {
        $("#newEmail").attr("readonly", true);
    }
    $("#newMemberRegistration").on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        $this.find('.message:first').text('');

        if ($(this).data("action")=='create') {
            methodType = "POST";
        } else {
            methodType = "PUT";
        }
        var newMember = validateForm();
        if (newMember) {
            // Send the POST request.
            $.ajax("/api/signup", {
                type: methodType,
                data: newMember
            }).then(
                function (response) {
                    window.location.href = response.redirectTo;
                },
                function(error) {
                    console.log(error);
                    $this.find('.message:first').text('That email account is already in use.');
                }
            );
        }
    });

    function validateForm() {
        var newMember = {
            password: $("#newPassword").val().trim(),
            email: $("#newEmail").val().trim(),
            first_name: $("#firstName").val().trim(),
            last_name: $("#lastName").val().trim(),
            phone: $("#phone").val().trim(),
            // photoUrl: $("#photoUrl").val().trim(),
            inOrOut: $("#selectInOrOut option:selected").text(),
        };

        $('input[name="skills"]:checked').each(function () {
            newMember[this.value] = true;
        });
        return newMember;
    }
});