$(document).ready(function() {
    $('.num-dice').click(function() {
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).siblings('.num-dice').removeClass('active');
        }
    });

    function rollDice() {
        var dice = Math.round((Math.random() * 5) + 1);
        
        switch(dice) {
            case 2:
            dice = "L";
            break;
            case 4:
            dice = "R";
            break;
            case 6:
            dice = "C";
            break;
            default:
            dice = "•";
            break;
        }
    
        return dice;
    }

    $('.roll').click(function() {
        $('.dice-container').html('');
        
        var numberOfDice = parseFloat($('.num-dice.active').html());
        
        for(var i = 1; i <= numberOfDice; i++) {
            var dice = rollDice();
            
            switch(dice) {
            case 'L':
                $('.dice-container').append('<div class="dice left d-flex align-items-center justify-content-center mx-2">' + dice + '</div>');
                break;
            case 'C':
                $('.dice-container').append('<div class="dice center d-flex align-items-center justify-content-center mx-2">' + dice + '</div>');
                break;
            case '•':
                $('.dice-container').append('<div class="dice dot d-flex align-items-center justify-content-center mx-2"></div>');
                break;
            default:
                $('.dice-container').append('<div class="dice d-flex align-items-center justify-content-center mx-2">' + dice + '</div>');
                break;
            }
        }
    });
});