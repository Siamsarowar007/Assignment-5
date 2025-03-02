
function updateDate(){
    const dateElement =document.querySelector("#current-date");
    const now = new Date();

    const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);
    dateElement.innerHTML =formattedDate;

}
updateDate();