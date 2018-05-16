// Make sure to wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {

    $("#newOpportunityForm").on("submit", function (event) {
        event.preventDefault();
        if ($.trim($("#userName").val()) === "" || $.trim($("#userName").val()) === "User Name" || $.trim($("#userName").val()) === "Please enter a User Name") {
            $("#userName").val(" Please enter a User Name");
            return false;
        }
        if ($.trim($("#organizationName").val()) === "" || $.trim($("#organizationName").val()) === "Organization Name" || $.trim($("#organizationName").val()) === "Please enter your Organization Name") {
            $("#organizationName").val(" Please enter your Organization Name");
            return false;
        }
        if ($.trim($("#opportunityName").val()) === "" || $.trim($("#opportunityName").val()) === "Event Name" || $.trim($("#opportunityName").val()) === "Please enter your Event Name") {
            $("#opportunityName").val(" Please enter your Event Name");
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
        if ($.trim($("#opportunityPhotoUrl").val()) === "" || $.trim($("#opportunityPhotoUrl").val()) === "URL Address" || $.trim($("#opportunityPhotoUrl").val()) === "Please enter a valid URL address") {
            $("#opportunityPhotoUrl").val(" Please enter the URL address of your photo");
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
        if ($.trim($(".date").val()) === "" || $.trim($(".date").val()) === "MM/DD/YY" || $.trim($(".date").val()) === "Please enter a valid Date") {
            $(".date").val(" Please enter a valid Date");
            return false;
        } 
        if ($("#selectOpportunityFrequency").val() === "" || $("#selectOpportunityFrequency").val() === "Choose..." || $("#selectOpportunityFrequency").val() === "Please select an option") {
            $("#selectOpportunityFrequency").val(" Please select an option");
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
        var newOpportunity = {
            user_name: $("#userName").val().trim(),
            organization_name: $("#organizationName").val().trim(),
            opportunity_name: $("#opportunityName").val().trim(),
            organization_phone: $("#phone").val().trim(),
            organization_eMail: $("#eMail").val().trim(),
            organization_photo_Url: $("#opportunityPhotoUrl").val().trim(),
            organization_address: $("#address").val().trim(),
            organization_city: $("#city").val().trim(),
            organization_state: $("#selectState option:selected").text(),
            organization_zip: $("#zip").val().trim(),
            organization_frequency: $("#selectFrequency option:selected").text(),
            opportunity_date: $("#date").val().trim(),
            opportunity_frequency: $("#selectOpportunityFrequency option:selected").text(),
            opportunity_start_time: $("#startTime").val().trim(),
            opportunity_end_time: $("#endTime").val().trim(),
            opportunity_in_or_out:  $("#selectInOrOut option:selected").text(),
            volunteers_needed: $("#volunteerNumber").val().trim(),
        };
        
        $('input[name="skills"]:checked').each(function() {   
         newOpportunity[this.value] = true;
         });

        console.log(newOpportunity)
      
        // Send the POST request.
        $.ajax("/new_opportunities", {
            type: "POST",
            data: newOpportunity
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});