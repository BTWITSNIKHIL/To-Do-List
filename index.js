const box = document.querySelector(".text1")
const btn = document.querySelector(".btn")
const notebox = document.querySelector(".list")



function addtext() {
    if (box.value === "") {
        alert("Please add task")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = box.value;
        notebox.appendChild(li)
        let span = document.createElement("span");

        span.innerHTML = "&#10008";
        li.appendChild(span);
    }
    box.value = "";
    save();

}
notebox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();

    }
}, false);

function save()
{
    localStorage.setItem("data",notebox.innerHTML);
}

function show()
{
    notebox.innerHTML = localStorage.getItem("data");
}
show();