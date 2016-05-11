'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#button').on('push', function () {
        $('#lcd').print('Hello');
        $('#lcd').setCursor(0, 1);
        $('#lcd').print('Ruff');
    });

    $('#button').on('release', function () {
        $('#lcd').clear();
    });

});

$.end(function () {
    $('#led-r').turnOff();
});
