let randimg = Math.floor(Math.random() * 13) + 2;
let body = document.getElementById("body");
document.body.style.backgroundImage = `url('background/${randimg}.jpg')`;

let inputBox = document.getElementById("input");
let lists = document.getElementById("list")

function add() {
    if (inputBox.value === "") {
        alert("type something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lists.appendChild(li);
        let date = document.createElement("h5");
        date.innerHTML = dat();
        li.appendChild(date);

        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        cross.classList.add('close-btn');
        li.appendChild(cross);
        savedata();
    }
    inputBox.value = '';
    savedata();
}

lists.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", lists.innerHTML);
}

function showtasks() {
    lists.innerHTML = localStorage.getItem("data");
}

showtasks();

function dat() {
    const currentDate = new Date();
    const year = currentDate.getFullYear() % 100;
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

let listItems = document.querySelectorAll('ul li');
const minLength = 10; // Specify the specific length

listItems.forEach((li) => {
    const textNode = li.childNodes[0]; // Assumes the text node is the first child

    if (textNode && textNode.nodeType === 3 && textNode.nodeValue.trim().length > minLength) {
        // Create a new span for the text content
        const textSpan = document.createElement('span');
        textSpan.textContent = textNode.nodeValue;

        // Create a new span for the close button
        const closeSpan = document.createElement('span');
        closeSpan.innerHTML = "\u00d7";
        closeSpan.classList.add('close-btn');

        // Append the new spans to the li
        li.innerHTML = ''; // Clear existing content
        li.appendChild(textSpan);
        let date = document.createElement("h5");
        date.innerHTML = dat();
        li.appendChild(date);
        li.appendChild(closeSpan);

        // Add classes as needed
        textSpan.classList.add('styled-text');
    }
});

