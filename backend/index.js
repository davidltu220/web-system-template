var likes = Math.floor(Math.random()*10000);

$(document).ready(function() {
    $('.likes').append(likes);
});



$.getJSON("https://api.chucknorris.io/jokes/random", function(data){
    var id = data.id;
    var value = data.value;

    $('.id').append(id);
    $('.value').append(value);

});

$(document).ready(function(){
    $("#likesButton").click(function(){
      likes++;
      $("#likesButton").hide();
      $('.likes').empty();
      $('.likes').append(likes);
    });
});

$(document).ready(function(){
    $("#uploadButton").click(function(){
        const imageUrl = document.getElementById('pictureUrl').value;
        $("#Heseesyou" ).attr('src', imageUrl);
        $("#uploadButton").hide();
        $("#pictureUrl").hide();
    });
});