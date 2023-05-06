$(document).ready(function () {
    var bulbs = $('.bulb');

    bulbs.click(function () {
        var colorPicker = $('#color-picker');
        var bulb = $(this);

        colorPicker.change(function () {
            var color = $(this).val();
            bulb.css('background-color', color);
        });

        colorPicker.click();
    });
});
