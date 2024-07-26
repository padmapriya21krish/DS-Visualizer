let arr = [];
let brr = [];
let i = 0;
let j = 0;
function push() {
    const con = document.getElementById("container");
    var temp = document.createElement("div");
    temp.setAttribute("id", "n" + i);
    console.log(temp);
    arr[i] = temp;
    var val = document.getElementById("value").value;
    brr[i] = Number(val);
    document.getElementById("guide").innerText = "The value " + brr[i] + " is pushed";
    con.prepend(temp);
    temp.innerText = val;
    document.getElementById("value").value = null;
    i++;
}
function pop() {
    arr[j].remove();
    document.getElementById("guide").innerText = "The value " + brr[j] + " is deleted";
    j++;
}