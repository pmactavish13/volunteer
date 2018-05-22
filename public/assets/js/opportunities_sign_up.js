// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#newOpportunityForm").on("submit", function (event) {
        event.preventDefault();
        if ($.trim($("#opportunityName").val()) === "" || $.trim($("#opportunityName").val()) === "Event Name" || $.trim($("#opportunityName").val()) === "Please enter your Event Name") {
            $("#opportunityName").val(" Please enter your Event Name");
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
        // if ($("#selectFrequency").val() === "" || $("#selectFrequency").val() === "Choose..." || $("#selectFrequency").val() === "Please select an option") {
        //     $("#selectFrequency").val(" Please select an option");
        //     return false;
        // }
        // if ($.trim($(".startDate").val()) === "" || $.trim($(".startDate").val()) === "MM/DD/YY" || $.trim($(".startDate").val()) === "Please enter a valid Date") {
        //     $(".startDate").val(" Please enter a valid Date");
        //     return false;
        // }
        // if ($.trim($("#startTime").val()) === "" || $.trim($("#startTime").val()) === "HH:mm" || $.trim($("#startTime").val()) === "Please enter a valid Start Time") {
        //     $("#startTime").val(" Please enter a valid Start Time");
        //     return false;
        // }
        // if ($.trim($("#endTime").val()) === "" || $.trim($("#endTime").val()) === "HH:mm" || $.trim($("#endTime").val()) === "Please enter a valid End Time") {
        //     $("#endTime").val(" Please enter a valid End Time");
        //     return false;
        // }
        // if ($("#selectInOrOut").val() === "" || $("#selectInOrOut").val() === "Choose..." || $("#selectInOrOut").val() === "Please select an option") {
        //     $("#selectInOrOut").val(" Please select an option");
        //     return false;
        // }
        var opportunitySignUp = {
            opportunity_name: $("#opportunityName").val().trim(),
            // member_frequency: $("#selectFrequency option:selected").text(),
            // member_start_date: $("#startDate").val().trim(),
            // member_start_time: $("#startTime").val().trim(),
            // member_end_time: $("#endTime").val().trim(),
            // member_in_or_out: $("#selectInOrOut option:selected").text(),
        };

        //***********************************************/
        //  GET THE MEMBER ID
        //  GET THE OPPORTUNITY ID
        // THEN POST

        // Send the POST request to add an event
        $.ajax("/new_opportunity", {
            type: "POST",
            data: opportunitySignUp
        }).then(
            function () {
                // Reload the page to get the updated list
                // location.reload();
            }
        );

        var updateMember = {
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#selectState option:selected").text(),
            zip: $("#zip").val().trim(),
        }

        // Send the PUT request to update member.
        $.ajax("/api/user", {
            type: "PUT",
            data: updateMember
        }).then(
            function () {
                // Reload the page to get the updated list
                // location.reload();
                $(location).attr('href', '/private')
            }
        );
    });
});