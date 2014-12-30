var main = function() {
    $('.arrow').click(function() {
        $('#sidebar').animate({
            marginLeft: "-375px"
        }, 400)
        $('#container').animate({
            paddingLeft: "20px"
        }, 1000)
        $('#container2').animate({
            marginLeft: "0px"
        }, 1000)
        $('.arrow2').animate({
            marginLeft: "1%"
        }, 1000)
        $('#container').css({
            float: "none"
        }, 1000)  
    });
    //z-index are used as variables for window resize
    $('.arrow2').click(function() {
        $('#sidebar').animate({
            marginLeft: "0px"
        }, 300)
        if($('#container').css("z-index") == "6" || $('#container').css("z-index") == "5") {
                $('#container').animate({paddingLeft: "40%"})
            } else {
                $('#container').animate({paddingLeft: "350px"})
        }
        if($('#container2').css("z-index") == "6" || $('#container').css("z-index") == "5") {
                $('#container2').animate({marginLeft: "0px"})          
            } else {
                $('#container2').animate({marginLeft: "150px"})
            }
        $('.arrow2').animate({
            marginLeft: "-4%"
        }, 1000)            
    });
    $(window).resize(function(){	
        if($('#container').css("z-index") == "6" ||             $('#container').css("z-index") == "5") {
                $('#container').animate({paddingLeft: "40%"})
                $('#container2').animate({marginLeft: "0px"})
        }
    });
};

$(document).ready(main);