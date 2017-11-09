


function removeComment(e) {
    chrome.tabs.executeScript(null,
        {
            code: "document.getElementById('comments').style.display = 'none'"
        });
    window.close();
}

function limitScroll() {
    chrome.tabs.executeScript(null,
        {
            code: "document.getElementById('related').setAttribute('style', 'overflow-x:scroll;max-height:700px;')"
        });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var div = document.querySelector('#commentRemove');
    div.addEventListener('click', removeComment);

    var div1 = document.querySelector('#scrollLimit');
    div1.addEventListener('click', limitScroll);
});
