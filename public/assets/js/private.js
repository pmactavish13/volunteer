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

});