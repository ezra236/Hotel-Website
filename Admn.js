$(document).ready(function () {
    // Book Form Submission
    $("#bookForm").on("submit", function (e) {
        e.preventDefault();
        const input1 = $("#input1").val();
        $.ajax({
            url: "process.php",
            type: "POST",
            data: { input1: input1, action: "book" },
            success: function (response) {
                $("#message").text(response);
                $("#bookForm")[0].reset();
                setTimeout(() => location.reload(), 1500); // Refresh page after 1.5 seconds
            },
            error: function () {
                $("#message").text("An error occurred.");
            }
        });
    });

    // Delete Form Submission
    $("#deleteForm").on("submit", function (e) {
        e.preventDefault();
        const input2 = $("#input2").val();
        $.ajax({
            url: "process.php",
            type: "POST",
            data: { input2: input2, action: "delete" },
            success: function (response) {
                $("#message").text(response);
                $("#deleteForm")[0].reset();
                setTimeout(() => location.reload(), 1500); // Refresh page after 1.5 seconds
            },
            error: function () {
                $("#message").text("An error occurred.");
            }
        });
    });


        // Unroom Form Submission
        $("#unavaila").on("submit", function (e) {
            e.preventDefault();
            const id = $("#roomu").val();
            $.ajax({
                url: "process.php",
                type: "POST",
                data: { id: id, action: "remove" },
                success: function (response) {
                    $("#message").text(response);
                    $("#unavaila")[0].reset();
                    setTimeout(() => location.reload(), 1500); // Refresh page after 1.5 seconds
                },
                error: function () {
                    $("#message").text("An error occurred.");
                }
            });
        });
    
});



$(document).ready(function () {
    // Room Form Submission
    $("#Roomform").on("submit", function (e) {
        e.preventDefault();
        
        const id = $("#idInput").val();
        const room1 = $("#room1").val();
        const room2 = $("#room2").val();
        const room3 = $("#room3").val();
        const rooms = [room1, room2, room3].filter(room => room !== ""); // Only include non-empty inputs

        // Validate room numbers
        const invalidRooms = rooms.filter(room => parseInt(room, 10) > 10);
        if (invalidRooms.length > 0) {
            $("#message").text("Error: Room numbers must not exceed 10.");
            return; // Stop form submission
        }
        
        $.ajax({
            url: "process.php",
            type: "POST",
            data: { id: id, rooms: rooms.join(","), action: "room" }, // Combine rooms into a comma-separated string
            success: function (response) {
                $("#message").text(response);
                $("#Roomform")[0].reset();
                setTimeout(() => location.reload(), 1500); // Refresh page after 1.5 seconds
            },
            error: function () {
                $("#message").text("An error occurred.");
            }
        });
    });
});





