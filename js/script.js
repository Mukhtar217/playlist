/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Beasty"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://images.genius.com/557f4ca436aaabc4210bd3850f96b954.1000x1000x1.jpg"];
var artists = ["A.Boggie"];
var lengths = ["2:32"];
var links = ["https://www.youtube.com/watch?v=4KqMpj1L0L0"];


function displayInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    
    songs.forEach(function(song){
        $("#songs").append("<p>" +song+ "</p>");
    });
    images.forEach(function(image) {
        $("#images").append("<img src=" +image+ ">");
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>" +artist+ "</p>");
    });
    lengths.forEach(function(length){
        $("#lengths").append("<p>" +length+ "</p>");
    });
    links.forEach(function(link){
        $("#links").append('<a href="'+link+'" track="on"><img src="https://lh3.googleusercontent.com/-XeLkthjVGVo/Wzhj0JZLYmI/AAAAAAAAoYw/GbkL4jDV4UAAfz-uppwkXHmDEefYeV9EQCJoC/w1000-h1000/IMG_0525.JPG" class="linkLogo"></a>');
    });
}

function emptyInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}


function addInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var addSong = $("#song").val();
    songs.push(addSong);
    var addImage = $("#image").val();
    images.push(addImage);
    var addArtists = $("#artist").val();
    artists.push(addArtists);
    var addLengths = $("#length").val();
    lengths.push(addLengths);
    var addLinks = $("#link").val();
    links.push(addLinks);
    console.log(addSong);
}

$("#add").click(function() {
    emptyInfo();
    addInfo();
    displayInfo();
});

displayInfo();
