var main = function() {
    $('.arrow').click(function() {
        $('#sidebar').animate({
            marginLeft: "-375px"
        }, 400)
        $('#container').animate({
            paddingLeft: "20px"
        }, 1000)
    });
    $('.arrow2').click(function() {
        $('#sidebar').animate({
            marginLeft: "0px"
        }, 300)
        $('#container').animate({
            paddingLeft: "250px"
        }, 300)
    });
};

$(document).ready(main);