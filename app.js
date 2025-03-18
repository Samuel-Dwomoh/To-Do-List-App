const box = document.getElementById("box");
const head = document.getElementById("head");
const dark = document.getElementById("dark");
const main = document.getElementById("main");
const listContainer = document.getElementById("list-container");

      function addTask() {
          if (box.value.trim() === "") {
              alert("You must type something!");
          } else {
              let li = document.createElement("li");
              li.className = "bg-gray-200 my-2 pl-4 pr-2 py-4 flex justify-between items-center hover:cursor-pointer break-words whitespace-normal rounded-xl font-mono italic shadow";

              li.addEventListener("mouseenter", () => {
                let tooltip = document.createElement("div");
                tooltip.innerText = "Click to mark as done!";
                tooltip.className = "absolute bg-black text-white text-xs px-2 rounded-md transform -translate-y-2";
                li.appendChild(tooltip);
            });
            
            li.addEventListener("mouseleave", () => {
                let tooltip = li.querySelector("div");
                if (tooltip) {
                    tooltip.remove(); // Remove the tooltip on mouse leave
                }
            });
            
            li.addEventListener("click", function () {
            li.classList.toggle("line-through");
            });

              li.innerHTML = `<span>${box.value}</span>`;
              let span = document.createElement("span");
              span.innerHTML = "x";
              span.className = "w-4 h-4 flex items-center justify-center bg-black text-white rounded-full ml-4 hover:bg-red-600 transition duration-200";
              span.onclick = function() {
                  li.remove();
              };
              
              li.appendChild(span);
              listContainer.appendChild(li);
          }
          box.value = "";
        }

        box.addEventListener("keypress", function(event) {
            if (event.key === "Enter") { 
                addTask();
            }
        });
        head.classList.add("hover:cursor-pointer");

        dark.addEventListener("click",()=>{
        /*Ading dark mode feature here soon*/
        alert("Dark mode coming soon!");
        })
