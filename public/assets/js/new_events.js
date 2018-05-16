// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#newEventsForm").on("submit", function (event) {
        event.preventDefault();
        if ($.trim($("#userName").val()) === "" || $.trim($("#userName").val()) === "User Name" || $.trim($("#userName").val()) === "Please enter a User Name") {
            $("#userName").val(" Please enter a User Name");
            return false;
        }
        if ($.trim($("#organizationName").val()) === "" || $.trim($("#organizationName").val()) === "Organization Name" || $.trim($("#organizationName").val()) === "Please enter your Organization Name") {
            $("#organizationName").val(" Please enter your Organization Name");
            return false;
        }
        if ($.trim($("#eventName").val()) === "" || $.trim($("#eventName").val()) === "Event Name" || $.trim($("#eventName").val()) === "Please enter your Event Name") {
            $("#eventName").val(" Please enter your Event Name");
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
        if ($.trim($("#eventPhotoUrl").val()) === "" || $.trim($("#eventPhotoUrl").val()) === "URL Address" || $.trim($("#eventPhotoUrl").val()) === "Please enter a valid URL address") {
            $("#eventPhotoUrl").val(" Please enter the URL address of your photo");
            return false;
        }
        if ($.trim($("#address").val()) === "" || $.trim($("#address").val()) === "1234 Main St." || $.trim($("#address").val()) === "Please enter the Address of your Event") {
            $("#address").val(" Please enter the Address of your Event");
            return false;
        }
        if ($.trim($("#city").val()) === "" || $.trim($("#city").val()) === "City" || $.trim($("#city").val()) === "Please enter a valid City") {
            $("#city").val(" Please enter a valid City");
            return false;
        }
        if ($("#state").val() === "" || $("#state").val() === "Choose..." || $("#photoUrl").val() === "Please enter a State") {
            $("#state").val(" Please choose a State");
            return false;
        }
        if ($.trim($("#zip").val()) === "" || $.trim($("#zip").val()) === "12345" || $.trim($("#zip").val()) === "Please enter a valid Zip Code") {
            $("#zip").val(" Please enter a valid Zip Code");
            return false;
        }
        if ($("#selectFrequency").val() === "" || $("#selectFrequency").val() === "Choose..." || $("#selectFrequency").val() === "Please select an option") {
            $("#selectFrequency").val(" Please select an option");
            return false;
        }
        if ($.trim($(".date").val()) === "" || $.trim($(".date").val()) === "mm/dd/yyyy" || $.trim($(".date").val()) === "Please enter a valid Date") {
            $(".date").val(" Please enter a valid Date");
            return false;
        } 
        if ($("#selectEventFrequency").val() === "" || $("#selectEventFrequency").val() === "Choose..." || $("#selectEventFrequency").val() === "Please select an option") {
            $("#selectEventFrequency").val(" Please select an option");
            return false;
        }
        if ($.trim($("#startTime").val()) === "" || $.trim($("#startTime").val()) === "HH:mm" || $.trim($("#startTime").val()) === "Please enter a valid Start Time") {
            $("#startTime").val(" Please enter a valid Start Time");
            return false;
        }
        if ($.trim($("#endTime").val()) === "" || $.trim($("#endTime").val()) === "HH:mm" || $.trim($("#endTime").val()) === "Please enter a valid End Time") {
            $("#endTime").val(" Please enter a valid End Time");
            return false;
        }
        if ($("#selectInOrOut").val() === "" || $("#selectInOrOut").val() === "Choose..." || $("#selectInOrOut").val() === "Please select an option") {
            $("#selectInOrOut").val(" Please select an option");
            return false;
        } 
        if ($.trim($("#volunteersNeeded").val()) === "" || $.trim($("#volunteersNeeded").val()) === "0" || $.trim($("#volunteersNeeded").val()) === "Please enter a valid Number") {
            $("#volunteersNeeded").val(" Please enter a valid Number");
            return false;
        }
        var newEvent = {
            user_name: $("#userName").val().trim(),
            organization_name: $("#organizationName").val().trim(),
            event_name: $("#eventName").val().trim(),
            phone: $("#phone").val().trim(),
            eMail: $("#eMail").val().trim(),
            event_photo_Url: $("#eventPhotoUrl").val().trim(),
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#selectState option:selected").text(),
            zip: $("#zip").val().trim(),
            frequency: $("#selectFrequency option:selected").text(),
            date: $("#date").val().trim(),
            event_frequency: $("#selectEventFrequency option:selected").text(),
            start_time: $("#startTime").val().trim(),
            end_time: $("#endTime").val().trim(),
            event_in_or_out:  $("#selectInOrOut option:selected").text(),
            volunteers_needed: $("#volunteerNumber").val().trim(),
        };
        
        $('input[name="skills"]:checked').each(function() {   
         newEvent[this.value] = true;
         });

        console.log(newEvent)
      
        // Send the POST request.
        $.ajax("/new_event", {
            type: "POST",
            data: newMember
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});