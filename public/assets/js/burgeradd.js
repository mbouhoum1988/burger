$(function() {
  $(".change-devoure").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newDev = {
      burger_name: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
    console.log(newDev);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newDev
    }).then(
      function() {
       
        location.reload();
      }
    );
  });
});
