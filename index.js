(function increaseScore() {
    document.getElementById("correct").addEventListener("click", increase);
    document.getElementById("total").innerHTML = localStorage.getItem("score");
    function increase() {
        if (parseInt(localStorage.getItem("score")) >= 0) {
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
