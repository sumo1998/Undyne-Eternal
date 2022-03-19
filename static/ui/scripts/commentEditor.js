function toggleCommentEditor() {
    let commentEditor = document.getElementById("comment-editor");
    if (commentEditor.style.display !== "block") {
        commentEditor.style.display = "block";
    } else {
        commentEditor.style.display = "none";
    }
}
