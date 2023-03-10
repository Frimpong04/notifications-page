// selectors
const notificationCount = document.querySelector(".notification-number");
const markAllAsRead = document.querySelector(".mark-all");  //has event listener
const notificationDiv = document.getElementById("notification-items-container").children; //attach eventlistener
const unreadMark = document.getElementsByClassName("unread-mark");

// global variables
let count = notificationDiv.length;
notificationCount.innerText = count;
console.log(notificationDiv);

// functions
function reset() {
    console.log("reset to 0");
    notificationCount.innerText = 0; 
    console.log(unreadMark);
    for (element of unreadMark) {
        element.style.visibility = "hidden";
    }
    
}

function marked(item) {
    item.classList.toggle("notification-item-clicked");
    let markSpan = item.querySelector(".unread-mark");
    
    if (item.classList.contains("notification-item-clicked")) {
        markSpan.style.visibility = "hidden";
    
    } else {
        markSpan.style.visibility = "visible";

    }

}

// event listeners
markAllAsRead.addEventListener("click", reset);
// add event listener to each notification div
const notificationArray = Array.from(notificationDiv); //convert Html collection to array
notificationArray.forEach((element, index) => {
    element.addEventListener("click", () => marked(element));
});