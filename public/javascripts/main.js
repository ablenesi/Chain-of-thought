$(function(){
    $('#viewStory').on('click', function(e){
        $.get( '/api/story', null , function(data) {
            $('#story').html(data.story);
        });
        return false;
    });
});

$(function(){
    $('#sendTough').on('click', function(e){
        var parameters = { thought: $('#input').val() };
        $.post( '/', parameters, function(data) {
            $('#thought').html(data.previous_thought);
        });
    });
});