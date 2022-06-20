
$("#searchTheKey").on('keyup', function(){
    var value = $(this).val().toLowerCase();
    $("#network", "#operations", "#sales","#sharedss", "#software").each(function () {
       if ($(this).text().toLowerCase().search(value) > -1) {
          $(this).show();
          $(this).prev('.subjectName').last().show();
       } else {
          $(this).hide();
       }
    });
 })

