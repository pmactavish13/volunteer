$(document).ready(function () {
    var $this = $(this);
    $this.find('.message:first').text('');

    $(".register").on("click", function (event) {
        var id = $(this).data("id");
        event.preventDefault();

        $.ajax("/api/register/" + id, {
            type: "POST",
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $("#findAll").on("click", function (event) {
    //     var id = $(this).data("id");
    //     event.preventDefault();

    //     $.ajax("/api/findAllMy/" + id, {
    //         type: "GET",
    //     }).then(
    //         function () {
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    // $("#search").on("submit", function (event) {
    
    //     var searchSkill = {};
    //     event.preventDefault();
        
    //     $('input[name="skillsSearch"]:checked').each(function () {
    //         searchSkill[this.value] = true;
    //     });

    //     console.log(searchSkill);

    //     $.ajax("/api/findAllMy", {
    //         type: "POST",
    //         data: searchSkill,
    //         xhrFields: {
    //             withCredentials: true
    //         }
    //     })


    // })
});