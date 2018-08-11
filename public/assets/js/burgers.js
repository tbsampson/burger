$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devoured: newDevour
    };

    $.ajax("/api/burgers/" + id, { // ----------------------------------- PUT
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });

  $(".order-form").on("submit", function(event) {
    event.preventDefault(); //prevent refresh
    var newBurger = {
      name: $("#input").val().trim(),
      devoured: 0
    };
    console.log(newBurger);

    $.ajax("/api/burgers", { // ------------------------------------------ POST
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {  // ----------------------------------- DELETE
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
