var modal = document.getElementById("avatar-modal");

var btn = document.getElementById("edit-avatar");

var span = document.getElementById("close");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

async function patchAvatar(userId, userName) {
    let avatarLink = document.getElementById("avatar-link-input").value;
    await fetch('/updateUser', {
        method: 'PATCH',
        body: JSON.stringify({
            "userId": userId,
            "userName": userName,
            "userAvatar": avatarLink
        }),
        headers: {
            'Content-type': 'application/json;charset=utf-8',
        }
    })
    .then(response => console.log(response));
}