var prev = -1;
var c = -1;
var flag = 0;
var presstime;

$(document).ready(function () {
    $("#phone").find("button").mouseup(function (event) {
        clearTimeout(presstime);
        var button_pressed = $(event.currentTarget).data("value");
        t = window.setTimeout(function () {
            prev = -1;
            c = -1;
        }, 500);
        if (flag != 1)
            $("#result").val(t9($(event.currentTarget).children('span').html(), $("#result").val(), button_pressed));
        return false;
    }).mousedown(function (event) {
        var button_pressed = $(event.currentTarget).data("value");
        flag = 0;
        presstime = window.setTimeout(function () {
            flag = 1;
            $("#result").val(t9($(event.currentTarget).children('span').html(), $("#result").val(), button_pressed));
        }, 1000);
        return false;
    });
})

function t9(valids, text, button_pressed) {
    if (flag) {
        return text + button_pressed;
    }
    if (valids == undefined) {
        return text + button_pressed;
    }
    valids = valids.split(" ");
    if (prev != button_pressed) {
        prev = button_pressed;
        c = 0;
        text = text + valids[c];
    } else {
        c = c + 1;
        text = text.substring(0, text.length - 1);
        if (c >= valids.length) {
            c = 0;
        }
        text = text + valids[c];
    }
    return text;
}