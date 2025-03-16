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
              li.className = "bg-gray-200 my-2 pl-4 pr-2 py-4 flex justify-center items-center hover:cursor-pointer break-words whitespace-normal rounded-xl font-mono italic shadow";
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
            main.classList.toggle("bg-black");
        })