(function increaseScore() {
    document.getElementById("correct").addEventListener("click", increase);

    if (localStorage.getItem("score")) {
        document.getElementById("total").innerHTML =
            localStorage.getItem("score");
    } else {
        document.getElementById("total").innerHTML = 0;
    }

    function increase() {
        if (localStorage.getItem("score") >= 0) {
            let score = parseInt(localStorage.getItem("score"));
            localStorage.setItem("score", ++score);
        } else {
            localStorage.setItem("score", "0");
            let score = parseInt(localStorage.getItem("score"));
            localStorage.setItem("score", ++score);
        }
        if (parseInt(localStorage.getItem("score")) >= 6) {
            localStorage.setItem("score", "0");
        }
    }
})({});
