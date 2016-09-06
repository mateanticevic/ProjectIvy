$(function () {
    $('.date').datepicker({
        format: 'yyyy-mm-dd'
    });

    $(".date").on("changeDate", function(e) {
        $(e.target).data('date', e.date);
    });
});