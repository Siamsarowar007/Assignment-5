
document.addEventListener("DOMContentLoaded", function () {
    const completedButtons = document.querySelectorAll(".completed-btn");
    const activityBody = document.getElementById("activity-body");
    const clearHistoryButton = document.querySelector("#clear-history"); 

    completedButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskCard = this.closest(".bg-\\[\\#F4F7FF\\]");
            if (!taskCard) return;
            
            const taskTitleElement = taskCard.querySelector("h1");
            if (!taskTitleElement) return;
            
            const taskTitle = taskTitleElement.innerText;
            
            
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            const activityEntry = document.createElement("p");
            activityEntry.classList.add("text-black", "py-2", "shadow-xl", "rounded-xl", "px-4", "bg-gray-200" ,"mb-4");
            
            
            activityEntry.innerText = `You have completed a task ${taskTitle} at ${currentTime}`;
            
            activityBody.appendChild(activityEntry);
        });
    });

    clearHistoryButton.addEventListener("click", function () {
       
        activityBody.innerHTML = ''; 
        
    });
});
