let MusicCounter=0;
// List of Music and Cover
let Music=[
    {
        Band:"Marshmello",
        trackName:"Marshmello - Alone",
        cover:"alone.jpeg",
        trackMusic:"alone.mp3"
    },
    {
        Band:"ColdPlay",
        trackName:"ColdPlay - A Sky Full Of Stars",
        cover:"a_sky_full_of_stars.jpg",
        trackMusic:"a_sky_full_of_stars.mp3"
    },
    {
        Band:"Kygo",
        trackName:"Kygo - Firestone",
        cover:"firestone.jpg",
        trackMusic:"firestone.mp3"
    },
    {
        Band:"Imagine Dragons",
        trackName:"Imagine Dragons - Bleeding Out",
        cover:"bleedingOut.jpg",
        trackMusic:"bleedingOut.mp3"
    },
    {
        Band:"Alec Benjamin",
        trackName:"Let me Down Slowly",
        cover:"letMeDownSlowly.jpg",
        trackMusic:"let_me_down_slowly.mp3"
    },
    {
        Band:"Marcus Warner",
        trackName:"Marcus Warner - Telescope",
        cover:"telescope.jpeg",
        trackMusic:"telescope.mp3"
    },
    {
        Band:"Avicii",
        trackName:"Avicii - The Nights",
        cover:"the_nights.jpg",
        trackMusic:"the_nights.mp3"
    },
    {
        Band:"Eminem",
        trackName:"Eminem - Till i Collapse",
        cover:"till_i_collapse.jpeg",
        trackMusic:"till_i_collapse.mp3"
    },
    {
        Band:"Kodaline",
        trackName:"Kodaline - What it is",
        cover:"what_It_is.jpg",
        trackMusic:"what_It_is.mp3"
    }
];
// Play or Pauses the Music (Called on Play or Pause Icon click)
let isPaused=true;
function playPauseMusic(){
    if(isPaused){
        $("#playPauseMusic").removeClass("fa-play"); 
        $("#playPauseMusic").addClass("fa-pause"); 
        $("#audio").get(0).play();
    }else{
        $("#playPauseMusic").addClass("fa-play"); 
        $("#playPauseMusic").removeClass("fa-pause");
        $("#audio").get(0).pause();
    }
    isPaused=!isPaused;
   
}
// Change the Value of Slider,Update the Played Time text
$("#audio").bind('timeupdate', (event)=>{
    let Audioseconds=$("#audio").get(0).currentTime;

    var minutes = "0" + Math.floor(Audioseconds / 60);
    var seconds = "0" +  Math.floor(Audioseconds - minutes * 60);
    var dur = minutes.substr(-2) + ":" + seconds.substr(-2);
    $("#currentPoint").html(dur);
    var valueSlider = 0;
    if (Audioseconds > 0) {
        valueSlider = Math.floor((100 / $("#audio").get(0).duration) *  Audioseconds);
    }
    $('#musicRange').val(valueSlider);
    $("#audio").on("loadedmetadata", function() {
        if($("#audio").get(0).currentTime>=$("#audio").get(0).duration){
            $("#audio").get(0).play();
            
        }
    }); 
});
// Range Slider Moved, Change the value of text and the Music duration
$("#musicRange").on('mouseup touchend',function(e){
    var leftOffset = e.pageX - $(this).offset().left;
    var songPercents = leftOffset / $('#musicRange').width();
    $("#audio").get(0).currentTime = songPercents * $("#audio").get(0).duration;
 }); 
// Play the Next Music, Change Music and Cover
 function nextMusic(){
    ++MusicCounter;
    if(MusicCounter>=Music.length){
        MusicCounter=0;
    }
    $("#playPauseMusic").removeClass("fa-play"); 
        $("#playPauseMusic").addClass("fa-pause"); 
    $("#bandName").text(Music[MusicCounter].Band);
    $("#trackName").text(Music[MusicCounter].trackName);
    $("#musicCover").attr("src",`/assets/Music_Photos/${Music[MusicCounter].cover}`);
    $("#mobileContentOverlayImg").css({"background-image":`url(/assets/Music_Photos/${Music[MusicCounter].cover})`});
    
    var audio = $("#audio");      
    $("#ogg_src").attr("src", `/assets/Music/${Music[MusicCounter].trackMusic}`);
    audio[0].pause();
    audio[0].load();
    audio[0].oncanplaythrough = audio[0].play();
    $("#audio").on("loadedmetadata", function() {
        let AudioDuration=$("#audio").get(0).duration;
        var minutes = "0" + Math.floor(AudioDuration / 60);
        var seconds = "0" +  Math.floor(AudioDuration - minutes * 60);
        var dur = minutes.substr(-2) + ":" + seconds.substr(-2);
        $("#endingPoint").html(dur);
    }); 
 }
//  Play the Previous Music
 function prevMusic(){
    --MusicCounter;
    if(MusicCounter<0){
        MusicCounter=Music.length-1;
    }
    $("#playPauseMusic").removeClass("fa-play"); 
        $("#playPauseMusic").addClass("fa-pause"); 
    $("#bandName").text(Music[MusicCounter].Band);
    $("#trackName").text(Music[MusicCounter].trackName);
    $("#musicCover").attr("src",`/assets/Music_Photos/${Music[MusicCounter].cover}`);
    $("#mobileContentOverlayImg").css({"background-image":`url(/assets/Music_Photos/${Music[MusicCounter].cover})`});
    
    var audio = $("#audio");      
    $("#ogg_src").attr("src", `/assets/Music/${Music[MusicCounter].trackMusic}`);
    audio[0].pause();
    audio[0].load();
    audio[0].oncanplaythrough = audio[0].play();
  
    $("#audio").on("loadedmetadata", function() {
        let AudioDuration=$("#audio").get(0).duration;
    var minutes = "0" + Math.floor(AudioDuration / 60);
    var seconds = "0" +  Math.floor(AudioDuration - minutes * 60);
    var dur = minutes.substr(-2) + ":" + seconds.substr(-2);
    $("#endingPoint").html(dur);
    }); 
 }
// Play Next Music when current one ends
 $("#audio").on('ended',function(e){
     nextMusic();
 });
//  Load the First Music when Page Loads
$(document).ready(function(){
    setTimeout(() => {
        $("#loaderGif").css({"display":"none"})
        $("#bandName").text(Music[MusicCounter].Band);
        $("#trackName").text(Music[MusicCounter].trackName);
        $("#musicCover").attr("src",`/assets/Music_Photos/${Music[MusicCounter].cover}`);
        $("#mobileContentOverlayImg").css({"background-image":`url(/assets/Music_Photos/${Music[MusicCounter].cover})`});
        
        var audio = $("#audio");      
        $("#ogg_src").attr("src", `/assets/Music/${Music[MusicCounter].trackMusic}`);
        audio[0].pause();
        audio[0].load();
        $("#audio").on("loadedmetadata", function() {
            let AudioDuration=$("#audio").get(0).duration;
            var minutes = "0" + Math.floor(AudioDuration / 60);
            var seconds = "0" +  Math.floor(AudioDuration - minutes * 60);
            var dur = minutes.substr(-2) + ":" + seconds.substr(-2);
            $("#endingPoint").html(dur);
        }); 
        $('#musicRange').val(0);        
    }, 1700);

});
