const box = document.getElementById("box");
      const listContainer = document.getElementById("list-container");

      function addTask() {
          if (box.value.trim() === "") {
              alert("You must type something!");
          } else {
              let li = document.createElement("li");
              li.className = "flex justify-between items-center bg-gray-200 p-2 my-2 ml-16 w-full px-4 py-4 hover:cursor-pointer rounded-lg font-mono italic";
              li.innerHTML = `<span>${box.value}</span>`;
              let span = document.createElement("span");
              span.innerHTML = "\u00D7";
              span.className = "text-red-600 font-bold cursor-pointer hover:text-red-800";
              
              span.onclick = function() {
                  li.remove();
              };
              
              li.appendChild(span);
              listContainer.appendChild(li);
          }
          box.value = "";
        }