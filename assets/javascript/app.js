$(document).ready(function () {



    $(".questionbox").hide();

    $("#timeRem").hide();



    //Start Button Function

    $("#startBtn").on("click", function () {











        //Timer 60 seconds



        var n = 60;



        setTimeout(countDown, 1000);



        function countDown() {



            n--;

            if (n > 0) {

                setTimeout(countDown, 1000);

            } else if (n == 0 && submitRan != true) {

                grade();

                $(".questionbox").hide();

                $("#timeRem").hide();

                $('<div></div>').addClass('resultsBox').appendTo("#triviaBox");

                $(".resultsBox").html("Results <br> Correct: " + correct + "<br>Incorrect: " + incorrect + "</div>");

            }



            $("#timeRem").text("Time Remaining: " + n);







        }





        $(".questionbox").show();

        $("#timeRem").show();

        $("#startBtn").hide();



        var submitRan = false;



        var correct = 0;



        var incorrect = 0;



        var answer1 = $("#answer1").val();



        var answer2 = $("#answer2").val();



        var answer3 = $("#answer3").val();



        var answer4 = $("#answer4").val();



        var answer5 = $("#answer5").val();







        //Submit Button Function

        $("button[id='submitBtn']").on("click", function runSubmit() {



            grade();



            $(".questionbox").hide();

            $("#timeRem").hide();

            $('<div></div>').addClass('resultsBox').appendTo("#triviaBox");

            $(".resultsBox").html("Results <br> Correct: " + correct + "<br>Incorrect: " + incorrect + "</div>");

            submitRan = true;



        });











        //Grading Function

        function grade() {



            var radioValue1 = $("input[name='group1']:checked").val();



            if (radioValue1 == answer1) {



                correct++;



            } else {



                incorrect++;

            }







            var radioValue2 = $("input[name='group2']:checked").val();



            if (radioValue2 == answer2) {



                correct++;



            } else {



                incorrect++;

            }









            var radioValue3 = $("input[name='group3']:checked").val();



            if (radioValue3 == answer3) {



                correct++;



            } else {



                incorrect++;

            }









            var radioValue4 = $("input[name='group4']:checked").val();



            if (radioValue4 == answer4) {



                correct++;



            } else {



                incorrect++;

            }









            var radioValue5 = $("input[name='group5']:checked").val();



            if (radioValue5 == answer5) {



                correct++;



            } else {



                incorrect++;

            }



        }// <-- End of Grading function





    }); //<-- End of Start Button On Click Function




});  //<-- End of Document Ready Function