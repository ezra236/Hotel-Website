$(document).ready(function () {
    $("#deleteForm").on("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        
        const input2 = $("#input2").val(); // Get the value of the input field
        
        $.ajax({
            url: "ownerVa.php", // The PHP file to handle the request
            type: "POST",
            data: { input2: input2, action: "delete" },
            success: function (response) {
                $("#message").text(response); // Display the server response
                $("#deleteForm")[0].reset(); // Reset the form
                setTimeout(() => location.reload(), 1500); // Refresh the page after 1.5 seconds
            },
            error: function () {
                $("#message").text("An error occurred while processing your request.");
            }
        });
    });
});