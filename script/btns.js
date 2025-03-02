

document.querySelectorAll(".completed-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        alert("Board Updated Successfully");

        let decrease = document.querySelector("#decrease").innerText;
        let convertedDecrease = parseInt(decrease);

        let increase = document.querySelector("#increase").innerText;
        let convertedIncrease = parseInt(increase);

        if (convertedDecrease > 0) {
            convertedDecrease--;
            convertedIncrease++;

            document.querySelector("#decrease").innerText = convertedDecrease;
            document.querySelector("#increase").innerText = convertedIncrease;
        }
        if (convertedDecrease === 0) {
            alert("congratulations you have completed all the task!");
        }

        event.target.setAttribute("disabled", "true");
    });
});
