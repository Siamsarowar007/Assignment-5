



// document.querySelector("#btn-1").addEventListener("click",function(event){
//     alert("Hello")
//     let decrese = document.querySelector("#decrese").innerText;
//     let convertedDecrese = parseInt(decrese)

//     let increase = document.querySelector("#increase").innerText;
//     let convertrdIncrease = parseInt(increase)
    
//     if (convertedDecrese > 0 ){
//         convertedDecrese --
//         convertrdIncrease ++
//         document.querySelector("#decrese").innerText = convertedDecrese ;
//         document.querySelector("#increase").innerText =convertrdIncrease;
//     }

//     // event.target.setAttridute("disabled","true")
//     event.target.setAttribute('disabled' , 'true')
    
// })
// --------------------------------------------------------


// document.querySelector("#btn-1").addEventListener("click", function (event) {
//     alert("Board Updated Successfully");

//     let decrease = document.querySelector("#decrease").innerText;
//     let convertedDecrease = parseInt(decrease);

//     let increase = document.querySelector("#increase").innerText;
//     let convertedIncrease = parseInt(increase);

//     if (convertedDecrease > 0) {
//         convertedDecrease--;
//         convertedIncrease++;
        
//         document.querySelector("#decrease").innerText = convertedDecrease;
//         document.querySelector("#increase").innerText = convertedIncrease;
//     }

//     event.target.setAttribute("disabled", "true");
// });



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

        event.target.setAttribute("disabled", "true");
    });
});
