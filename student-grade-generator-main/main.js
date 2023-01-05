 function Total() {
    //parses that string(subjects), then returns an integer(score or marks obtained)
        var sub1 = parseInt(document.getElementById("Javascript").value);
        var sub2 = parseInt(document.getElementById("HTML").value);
        var sub3 = parseInt(document.getElementById("Python").value);
        var sub4 = parseInt(document.getElementById("Ruby").value);
        var sub5 = parseInt(document.getElementById("React").value);
        var sub6 = parseInt(document.getElementById("SQL").value);

//The score is set to a maximum of 100, which is in percentage
        if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100 || sub6 > 100) {
            alert("Please Enter Marks in range of 100");
        }
        else {
            var total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
            document.getElementById("total").innerHTML = "Javascript:" + sub1 + "<br> HTML: " + sub2 + "<br> Python: " + sub3 + "<br> React: " + sub4 + "<br> Ruby: " + sub5 + "<br> Total: " + total;
        }
    }
//finds the average of the marks obtained by retrieving input
    function Average() {
        var sub1 = parseInt(document.getElementById("Javascript").value);
        var sub2 = parseInt(document.getElementById("HTML").value);
        var sub3 = parseInt(document.getElementById("Python").value);
        var sub4 = parseInt(document.getElementById("Ruby").value);
        var sub5 = parseInt(document.getElementById("React").value);
        var sub6 = parseInt(document.getElementById("SQL").value);

        if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
            alert("Please Enter Marks in range of 100");
        }
        else {
            var total = sub1 + sub2 + sub3 + sub4 + sub5;
            var avg = total / 5;
            document.getElementById("avg").innerHTML = "Your Average marks are: " + avg;
        }
    }


    function Grade() {
        var sub1 = parseInt(document.getElementById("Javascript").value);
        var sub2 = parseInt(document.getElementById("HTML").value);
        var sub3 = parseInt(document.getElementById("Python").value);
        var sub4 = parseInt(document.getElementById("Ruby").value);
        var sub5 = parseInt(document.getElementById("React").value);
        var sub6 = parseInt(document.getElementById("SQL").value);

        if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
            alert("Please Enter Marks in range of 100");
        } else {
            var total = sub1 + sub2 + sub3 + sub4 + sub5;
            var avg = total / 5;

            if (avg >= 80 && avg <= 100) {
                document.getElementById("grade").innerHTML = "You Got A Grade";
            }
            else if (avg >= 75 && avg <= 79) {
                document.getElementById("grade").innerHTML = "You Got B Grade";
            }
            else if (avg >= 70 && avg <= 74) {
                document.getElementById("grade").innerHTML = "You Got A Grade";
            }
            else if (avg >= 65 && avg <= 69) {
                document.getElementById("grade").innerHTML = "You Got B Grade";
            }
            else if (avg >= 50 && avg <= 59) {
                document.getElementById("grade").innerHTML = "You Got C Grade";
            }
            else if (avg >= 40 && avg <= 49) {
                document.getElementById("grade").innerHTML = "You Got C Grade";
            }

            else {
                document.getElementById("grade").innerHTML = "You Got F Grade";
            }


        }


    }