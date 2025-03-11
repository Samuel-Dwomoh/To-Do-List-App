const box = document.getElementById("box");
      const listContainer = document.getElementById("list-container");

      function addTask() {
          if (box.value.trim() === "") {
              alert("You must type something!");
          } else {
              let li = document.createElement("li");
              li.className = "bg-gray-200 my-2 pl-4 pr-2 py-4 hover:cursor-pointer break-words whitespace-normal rounded-xl font-mono italic";
            li.addEventListener("click", function () {
            li.classList.toggle("line-through");
            });

              li.innerHTML = `<span>${box.value}</span>`;
              let span = document.createElement("span");
              span.innerHTML = "\u00D7";
              span.className = "text-red-600 pl-4 right-0 font-bold cursor-pointer hover:text-red-800";
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
                addTask(); // Call the function when Enter is pressed
            }
        });
        