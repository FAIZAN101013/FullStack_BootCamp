document.querySelector(".add-btn").addEventListener("click", addItem);
document.querySelector(".clear-btn").addEventListener("click", clearAll);

function addItem() {
    const input = document.querySelector(".grocery-input");
    const list = document.querySelector(".grocery-list");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${input.value}</span>
            <button class="delete-btn">🗑</button>
        `;

        list.appendChild(li);
        input.value = "";

        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
        });
    }
}

function clearAll() {
    document.querySelector(".grocery-list").innerHTML = "";
}
