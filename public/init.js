$(function () {

});

var init = init || {};

init.controls = function(){
    this.datePicker();
}

init.datePicker = function(){
    $('.date').datepicker({
        format: 'yyyy-mm-dd'
    });

    $(".date").on("changeDate", function(e) {
        $(e.target).data('date', e.date);
    });
}