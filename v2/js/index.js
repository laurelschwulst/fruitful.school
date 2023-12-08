document.getElementById("fruit").style.borderTopRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("fruit").style.borderTopLeftRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("fruit").style.borderBottomRightRadius =
  Math.random() * 60 + 40 + "%";
document.getElementById("fruit").style.borderBottomLeftRadius =
  Math.random() * 60 + 40 + "%";

var fruit = ["🍊", "🍋", "🍒", "🍉", "🍇", "🥭", "🍎", "🍐", "🍏", "🍑", "🍈"];

function updateClock() {
  var d = new Date();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var hours = d.getHours();

  if (hours > 0 && hours <= 12) {
    hours = hours;
  } else if (hours > 12) {
    hours = hours - 12;
  } else if (hours == 0) {
    hours = 12;
  }

  var hoursE = "";
  var minutesE = "";
  var secondsE = "";

  for (i = 0; i < hours.toString().length; i++) {
    var stringH = hours.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);
    hoursE += fruit[numberH];
  }

  for (i = 0; i < minutes.toString().length; i++) {
    var stringH = minutes.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);

    minutesE += fruit[numberH];
  }

  for (i = 0; i < seconds.toString().length; i++) {
    var stringH = seconds.toString().charAt(i);
    // convert the first digit back to an integer
    var numberH = parseInt(stringH);

    secondsE += fruit[numberH];
  }

  document.getElementById("minutes").innerHTML = minutesE;
  document.getElementById("seconds").innerHTML = secondsE;
  document.getElementById("hours").innerHTML = hoursE;
}

updateClock();

setInterval(function () {
  updateClock();
}, 1000);

$(".about").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#about").toggle();
});

$(".fruitful").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#fruitful").toggle();
});

$(".people").click(function (e) {
  e.preventDefault();
  swap();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#people").css("display", "block");
});

$(".faq").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#faq").toggle();
});

$(".conduct").click(function (e) {
  e.preventDefault();
  $(".topnav").removeClass("current");
  $(this).addClass("current");
  $(".toggle").css("display", "none");
  $("#conduct").toggle();
});

$("a.button.apply").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("pressed");
  $("#apply").toggle();
});

function none() {
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
  $("#conduct").css("display", "none");
}

$(".press").click(function () {
  $(this).find(".answer").toggle();
  $(this).find(".expand").toggle();
  $(this).find(".disband").toggle();
});

// randomize teachers order

const teachers = Array.from(document.querySelectorAll("#people .teachers p"));

function swap() {
  const list = teachers.map((ele) => ele.innerHTML);

  teachers.forEach((ele) => {
    const index = Math.floor(Math.random() * list.length);
    ele.innerHTML = list.splice(index, 1);
  });
}

swap();

//table sorting

jQuery(window).load(function () {
  $("table")
    .tablesorter()
    .bind("sortStart", function () {
      var hasRowspans = false;

      $("[rowspan]", this).each(function () {
        hasRowspans = true;

        var rowspan = parseInt($(this).attr("rowspan"));

        // remove the rowspan attribute
        $(this).removeAttr("rowspan");

        var trIndex = $(this)
          .parentsUntil("table")
          .children("tr")
          .index($(this).parent());

        var tdIndex = $(this).parent().children("td").index(this);

        // traverse each row, and repopulate / reclone the values for rows with rowspan
        for (var tr = trIndex + 1; tr < trIndex + rowspan; ++tr) {
          var $row = $(this).parentsUntil("table").children("tr").eq(tr);

          if (tdIndex == 0) $row.prepend($(this).clone());
          else
            $row
              .children("td")
              .eq(tdIndex - 1)
              .after($(this).clone());
        }
      });

      if (hasRowspans) $(this).trigger("update");
    });
});

// permalinks

var hash = window.location.hash;
if (hash != "") {
  $('a[href="' + hash + '"]').click();
}

if (location.hash) {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
}

jQuery.fn.center = function () {
  this.css("position", "fixed");
  this.css(
    "top",
    Math.max(
      0,
      ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop()
    ) + "px"
  );
  this.css(
    "left",
    Math.max(
      0,
      ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()
    ) + "px"
  );
  return this;
};

$(".no-style").click(function () {
  console.log("no style please");

  function no_style() {
    var links = document.querySelectorAll("link");

    document.querySelectorAll("link, style").forEach(function (node) {
      node.parentNode.removeChild(node);
    });

    document.querySelectorAll("*").forEach(function (node) {
      node.removeAttribute("style");
    });

    console.log("there are no styles");

    $("html,body").scrollTop(0);
  }

  no_style();
});

//countdown

// var countDownDate = new Date("October 1, 2020 23:59:59").getTime();

//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//      hours = (days * 24) + hours;

var fruitHTML = " ";
for (i = 0; i < hours; i++) {
  var random = fruit[Math.floor(Math.random() * fruit.length)];
  fruitHTML += " " + random;
  //  document.getElementById("loader").innerHTML = fruitHTML + "<br> <span class='small'> ( " + hours +  "  hours left to apply ) </span>"
}
