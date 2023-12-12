var fruit = ["🍊", "🍋", "🍒", "🍇", "🍉", "🍌", "🍓"];
var fav = ["imgs/orange/favicon.ico", "imgs/lemon/favicon.ico", "imgs/cherry/favicon.ico", "imgs/grape/favicon.ico", "imgs/watermelon/favicon.ico", "imgs/bannana/favicon.ico", "imgs/strawberry/favicon.ico"];

var w = window.innerWidth;
var h = window.innerHeight;

var randomFruit = Math.floor(Math.random() * fruit.length);
document.getElementById("fruitEmoji").innerHTML = fruit[randomFruit];

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = fav[randomFruit];
document.getElementsByTagName('head')[0].appendChild(link);






$('.item.expandable').click(function(e) {

  var perma_id = $(this).attr('href');
  console.log(perma_id);
  window.location.hash = perma_id;

  e.preventDefault();
  $('.content').css('display', 'none')
  var number = $(this).index();
  $('.content').eq(number - $('.content').length).css('display', "block");

  if (w < 700) {
  //  $('html, body').animate({
  //    scrollTop: $('.content').eq(number - $('.content').length).offset().top
 //   }, 500);
  };


    if(!$(this).is('.select')) {

  $('.item').removeClass('select')
  $(this).addClass('select')


}
    else{
        $('.content').css('display', 'none');
          $('.item').removeClass('select');
window.location.replace("#");

// slice off the remaining '#' in HTML5:
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}

    }







  document.getElementById("fruitEmoji").innerHTML = fruit[number];
  document.getElementById("fruitEmoji").innerHTML = fruit[number];

  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = fav[number];
  document.getElementsByTagName('head')[0].appendChild(link);

  document.getElementById("fruit").style.borderTopRightRadius = Math.random() * 60 + 40 + "%";
  document.getElementById("fruit").style.borderTopLeftRadius = Math.random() * 60 + 40 + "%";
  document.getElementById("fruit").style.borderBottomRightRadius = Math.random() * 60 + 40 + "%";
  document.getElementById("fruit").style.borderBottomLeftRadius = Math.random() * 60 + 40 + "%";
});




$('.question').click(function(e) {
  var answer = $(this).find(".answer");
  answer.toggle();
  $(this).find(".expand").toggle();
  e.preventDefault();

})


function fruit() {

}

// permalinks

var hash = window.location.hash;
if (hash != '') {
  $('a[href="'+hash+'"]').click();
}

// countdown

var countDownDate = new Date("Dec 23, 2019 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

            updateClock();

}, 1000);





        //clock
            var fruit = ["🍊", "🍋", "🍒", "🍉", "🍇", "🍌", "🍎", "🍐", "🍏", "🍑", "🍈"];
            function updateClock(){
            var d = new Date();
            var minutes =  d.getMinutes();
            var seconds = d.getSeconds();
            var hours =  d.getHours();
            console.log(hours);

                            if (hours > 0 && hours <= 12) {
                  hours= hours;
                } else if (hours > 12) {
                  hours=(hours - 12);
                } else if (hours == 0) {
                  hours= 12;
                    }

              var hoursE = "";
              var minutesE = "";
              var secondsE = "";



            for (i=0; i < hours.toString().length; i++){
            var stringH =  hours.toString().charAt(i);
            // convert the first digit back to an integer
            var numberH = parseInt(stringH)
            console.log(numberH)
            hoursE += fruit[numberH];
            };

            for (i=0; i < minutes.toString().length; i++){
            var stringH =  minutes.toString().charAt(i);
            // convert the first digit back to an integer
            var numberH = parseInt(stringH)
            console.log(numberH)

            minutesE += fruit[numberH];
            };


            for (i=0; i < seconds.toString().length; i++){
            var stringH =  seconds.toString().charAt(i);
            // convert the first digit back to an integer
            var numberH = parseInt(stringH)
            console.log(numberH)

            secondsE += fruit[numberH];
            };

  document.getElementById("minutes").innerHTML = minutesE;
document.getElementById("seconds").innerHTML = secondsE;
document.getElementById("hours").innerHTML = hoursE;

            }

        updateClock();
