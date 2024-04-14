$(document).ready(function() {
  var numOfMines = Math.floor(Math.random()*65 + 1)
  var actuallMines = numOfMines;
  var minesLeft = actuallMines - minesCaught;
  minesLeft = actuallMines
  var minesCaught = 0;
  var countDown = 30;
  var lives = 30;
  var numMulti = 100;
  var winLose = 0
  for (var i = 0; i < 100; i++) {
  var newGridItem = $("<div class='grid-item'></div>");
  $(".container").append(newGridItem);
}

function randomCheck() {}
if($(".Random").hasClass("selected")) {
  if ($(".easy").hasClass("selected")) {lives = 10}
  else  if ($(".medium").hasClass("selected")) {lives = 30}
  else  if ($(".hard").hasClass("selected")) {lives = 45}
}
  

  $(".grid-diff").click(function() {
    $(".grid-diff").removeClass("selected")
    $(this).addClass("selected")

    if ($(this).hasClass("easy")) {
       numOfMines = Math.floor(Math.random()*20 + 1)
       actuallMines = numOfMines;
      while ($(".grid-item").length > 0) {
        $(".container").children().last().remove();}
                        for (var i = 0; i < 36; i++) {
              var newGridItem = $("<div class='grid-item'></div>");
    $(".container").append(newGridItem);
      }
      $(".container").css({
        "grid-template-columns": "repeat(6, 50px)",
        "grid-template-rows": "repeat(6, 50px)",
        "margin-left": (window.innerWidth - 350) / 2 + "px"
      })
      $(".containers-container").css("margin", "0px")
      if ( $(".Easy").hasClass("selected")) {
    numMulti = 36;// Assuming button 6 corresponds to the first difficulty choice
    actuallMines = 15;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 15;
    countDown = 15;
    console.log(lives + "lives")
  } else if ( $(".Medium").hasClass("selected")) { // Assuming button 7 corresponds to the second difficulty choice
    actuallMines = 11;
    numMulti = 64;
    minesLeft = actuallMines;
    lives = 10;
    countDown = 30;
  } else if ( $(".Hard").hasClass("selected")) { // Assuming button 8 corresponds to the third difficulty choice
    actuallMines = 25;
    numMulti = 100;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 5;
    countDown = 30;
  } else if ($(".Random").hasClass("selected")) {
    lives = 10;
  }
    }

    if ($(this).hasClass("medium")) {
      while ($(".grid-item").length > 0) {
        $(".container").children().last().remove();}
                        for (var i = 0; i < 64; i++) {
              var newGridItem = $("<div class='grid-item'></div>");
    $(".container").append(newGridItem);
      }
      $(".container").css({
        "grid-template-columns": "repeat(8, 50px)",
        "grid-template-rows": "repeat(8, 50px)",
        "margin-left": (window.innerWidth - 470) / 2 + "px"
      })
      $(".containers-container").css("margin", "0px")
      if ( $(".Easy").hasClass("selected")) {
    numMulti = 36;// Assuming button 6 corresponds to the first difficulty choice
    actuallMines = 10;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 10;
    console.log(lives + "lives")
  } else if ( $(".Medium").hasClass("selected")) { // Assuming button 7 corresponds to the second difficulty choice
    actuallMines = 25;
    numMulti = 64;
    minesLeft = actuallMines;
    lives = 25;
  } else if ( $(".Hard").hasClass("selected")) { // Assuming button 8 corresponds to the third difficulty choice
    actuallMines = 30;
    numMulti = 100;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 15;
  } else if ($(".Random").hasClass("selected")) {
    lives = 30;
  }
    }

    if ($(this).hasClass("hard")) {

      while ($(".grid-item").length > 0) {
        $(".container").children().last().remove();}
                        for (var i = 0; i < 100; i++) {
              var newGridItem = $("<div class='grid-item'></div>");
    $(".container").append(newGridItem);
      }
      $(".container").css({
        "grid-template-columns": "repeat(10, 50px)",
        "grid-template-rows": "repeat(10, 50px)",
        "margin-left": (window.innerWidth - 590) / 2 + "px"
      })
      $(".containers-container").css("margin", "0px")
      if ( $(".Easy").hasClass("selected")) {
    numMulti = 36;// Assuming button 6 corresponds to the first difficulty choice
    actuallMines = 10;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 10;
    console.log(lives + "lives")
  } else if ( $(".Medium").hasClass("selected")) { // Assuming button 7 corresponds to the second difficulty choice
    actuallMines = 25;
    numMulti = 64;
    minesLeft = actuallMines;
    lives = 25;
  } else if ( $(".Hard").hasClass("selected")) { // Assuming button 8 corresponds to the third difficulty choice
    actuallMines = 50;
    numMulti = 100;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 25;
  } else if ($(".Random").hasClass("selected")) {
    lives = 45;
  }
    }

    })


  $(".containers-container").css({
    "margin-left": (window.innerWidth - 590) / 2,
    "margin-right": (window.innerWidth - 590) / 2,
  })

      $(".level-diff").click(function() {
    $(".level-diff").removeClass("selected")
    $(this).addClass("selected")
    
    if ($(this).hasClass("Easy")) {
  if ( $(".easy").hasClass("selected")) {
    numMulti = 36;// Assuming button 6 corresponds to the first difficulty choice
    actuallMines = 15;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 15;
    countDown = 15;
    console.log(lives + "lives")
  } else if ( $(".medium").hasClass("selected")) { // Assuming button 7 corresponds to the second difficulty choice
    actuallMines = 35;
    numMulti = 64;
    minesLeft = actuallMines;
    lives = 20;
    countDown = 30;
  } else if ( $(".hard").hasClass("selected")) { // Assuming button 8 corresponds to the third difficulty choice
    actuallMines = 25;
    numMulti = 100;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 60;
    countDown = 30;
  }

} else if ($(this).hasClass("Medium")) {
      if ( $(".easy").hasClass("selected")) {
    numMulti = 36;// Assuming button 6 corresponds to the first difficulty choice
    actuallMines = 10;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 10;
    console.log(lives + "lives")
  } else if ( $(".medium").hasClass("selected")) { // Assuming button 7 corresponds to the second difficulty choice
    actuallMines = 25;
    numMulti = 64;
    minesLeft = actuallMines;
    lives = 25;
  } else if ( $(".hard").hasClass("selected")) { // Assuming button 8 corresponds to the third difficulty choice
    actuallMines = 50;
    numMulti = 100;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 25;
  }

    } else if ($(this).hasClass("Hard")) {
    if ( $(".easy").hasClass("selected")) {
    numMulti = 36;// Assuming button 6 corresponds to the first difficulty choice
    actuallMines = 20;
    numOfMines = actuallMines;
    minesLeft = actuallMines;
    lives = 5;
    console.log(lives + "lives")
  } else if ( $(".medium").hasClass("selected")) { // Assuming button 7 corresponds to the second difficulty choice
    actuallMines = 30;
    numMulti = 64;
    minesLeft = actuallMines;
    lives = 15;
  } else if ( $(".hard").hasClass("selected")) { // Assuming button 8 corresponds to the third difficulty choice
      actuallMines = 75;
      numMulti = 100;
      numOfMines = actuallMines;
      minesLeft = actuallMines
      lives = 10
  }
  } else if ($(this).hasClass("Random")){
    if ( $(".easy").hasClass("selected")) {
      lives = 10
      numMulti = 36;
      numOfMines = Math.floor(Math.random()*numMulti + 1)
      actuallMines = numOfMines;
      minesLeft = actuallMines
      console.log(actuallMines)
    } else if ( $(".medium").hasClass("selected")) {
      lives = 30
      numMulti = 64;
      numOfMines = Math.floor(Math.random()*numMulti + 1)
      actuallMines = numOfMines;
      minesLeft = actuallMines
      console.log(actuallMines)
    } else if ( $(".hard").hasClass("selected")) {
      lives = 45
      numMulti = 100;
      numOfMines = Math.floor(Math.random()*numMulti + 1)
      actuallMines = numOfMines;
            if (actuallMines < 20) {
        actuallMines = numOfMines
      console.log("below")}
      minesLeft = actuallMines
      console.log(actuallMines)
    }
    }

  console.log(actuallMines)
  })
    

  $(".start").click(function() {
    $(".p").addClass("hidden")
      $(".lives").text(lives + " lives left")
    $(".grid-item").css("background-color", "green")
    $(".Text").text(countDown)
        startCountdown();
actuallMines--


console.log(numOfMines)
var count = 0
while (count <= actuallMines) {
  veryRandom = Math.floor(Math.random()* $(".grid-item").length - 1)
  if ($(".grid-item").eq(veryRandom).hasClass("Mine")) {
  } else {
$(".grid-item").eq(veryRandom).addClass("Mine");

count++
}
}
$(".Mine").css("background-color", "#ff0000")
    $(".want-hidden").addClass("hidden");
        $(".containers-container").css("top", "100px")
    $(".containers-container").css({
      "float": "none",
      "display": "flex",
      "align-items": "center",
    });

  });


function startCountdown() {
  if (countDown > 0) {
    setTimeout(function() {
      countDown--;
      $(".Text").text(countDown);
      startCountdown(); // Recursive call to continue the countdown
    }, 1000);
  }
  if (countDown === 0) {
    $(".grid-item").css("background-color", "green")
    $(".Text").text("There are " + minesLeft + " left.")
        $(".grid-item").click(clicked)
  }
}

      function clicked() {
    if ($(this).hasClass("grid-item")) {
     if ($(this).hasClass("Mine")) {
      $(this).removeClass("Mine");
      $(this).css("background-color", "#ff0000")
      minesLeft = actuallMines - minesCaught;
      $(".Text").text("There are " + minesLeft + " left.")
      minesCaught++;
      console.log(minesLeft + "left")
      console.log(minesCaught)
      if (minesLeft === 0 && winLose === 0) {
        alert("You win")
        winLose = 1
      }
     } else {
      $(this).css("background-color", "dimgrey")
      lives--
            if (lives === 0 && winLose === 0) {
            alert("You lose");
             winLose = 1;
}
        $(".lives").text(lives + " lives left")
     }
    }
  }
});