// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener('DOMContentLoaded', () => {
    const q = getParameterByName('q');
    if (q != null && q != '') {
        document.getElementById('search').value = q;
        document.getElementById('search').dispatchEvent(new KeyboardEvent("keyup", { keyCode: 13 }));
    }
});
