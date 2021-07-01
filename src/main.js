let data = null;
const req = new XMLHttpRequest();

const title = document.getElementById(`title`);

req.open("GET", "config.json",false);
req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        data = JSON.parse(req.responseText);
    }
}
req.send(null);

title.textContent = `@${data.username} | Linktree`;
console.clear();
console.log("%cDios nos ayude pa' el EdTeam", "background-color:black; color:red; padding:100px; font-size: 15px;");

export default data;
