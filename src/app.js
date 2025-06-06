const box = document.getElementById("box");
const head = document.getElementById("head");
const dark = document.getElementById("dark");
const main = document.getElementById("main");
const listContainer = document.getElementById("list-container");
alert("Welcome to the To-Do List App! 🎉\n\nThis is a simple app to help you manage your tasks.\n\nYou can add tasks, mark them as done, and remove them when you're finished.\n\nEnjoy using the app! 😊\nDark mode coming soon!");
function addTask() {
    if (box.value.trim() === "") {
        alert("You must type something!");
    } else {
        let li = document.createElement("li");
        li.className = "bg-white my-2 pl-4 pr-2 py-4 flex justify-between items-center hover:cursor-pointer break-words whitespace-normal rounded-xl font-mono italic shadow border outline";

        li.addEventListener("mouseenter", () => {
            let tooltip = document.createElement("div");
            tooltip.innerText = "Click to mark as done!";
            tooltip.className = "absolute bg-black text-white text-xs px-2 rounded-md transform -translate-y-3 mt-2";
            li.appendChild(tooltip);
        });

        li.addEventListener("mouseleave", () => {
            let tooltip = li.querySelector("div");
            if (tooltip) {
                tooltip.remove();
            }
        });

        li.addEventListener("click", () => {
            li.classList.toggle("line-through");
        });

        li.innerHTML = `<span>${box.value}</span>`;

        let span = document.createElement("span");
        span.className = "w-6 h-6 ml-1";

        let animation = lottie.loadAnimation({
            container: span,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/Cross.json"
        });

        span.onclick = function () {
            li.remove();
        };

        li.appendChild(span);
        listContainer.appendChild(li);
    }
    box.value = "";
}

box.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

head.classList.add("hover:cursor-pointer");

dark.addEventListener("click", () => {
    /*Ading dark mode feature here soon*/
    //alert("Dark mode coming soon!");
    
})

window.addTask = addTask;
