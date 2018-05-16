// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#newEventsForm").on("submit", function (event) {
        event.preventDefault();
        if ($.trim($("#userName").val()) === "" || $.trim($("#userName").val()) === "User Name" || $.trim($("#userName").val()) === "Please enter a User Name") {
            $("#userName").val(" Please enter a User Name");
            return false;
        }
        if ($.trim($("#eventName").val()) === "" || $.trim($("#eventName").val()) === "Event Name" || $.trim($("#eventName").val()) === "Please enter your Event Name") {
            $("#eventName").val(" Please enter your Event Name");
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
        if ($.trim($(".startDate").val()) === "" || $.trim($(".startDate").val()) === "MM/DD/YY" || $.trim($(".startDate").val()) === "Please enter a valid Date") {
            $(".startDate").val(" Please enter a valid Date");
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
        var eventSignUp = {
            user_name: $("#userName").val().trim(),
            event_name: $("#eventName").val().trim(),
            member_frequency: $("#selectFrequency option:selected").text(),
            start_date: $("#startDate").val().trim(),
            member_start_time: $("#startTime").val().trim(),
            member_end_time: $("#endTime").val().trim(),
            member_in_or_out: $("#selectInOrOut option:selected").text(),
        };

        // Send the POST request to add an event
        $.ajax("/event_sign_up", {
            type: "POST",
            data: eventSignUp
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );

        var updateMember = {
            member_address: $("#address").val().trim(),
            member_city: $("#city").val().trim(),
            member_state: $("#selectState option:selected").text(),
            member_zip: $("#zip").val().trim(),
        }

        // Send the PUT request to update member.
        $.ajax("/api/member/" + id, {
            type: "PUT",
            data: updateMember
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});