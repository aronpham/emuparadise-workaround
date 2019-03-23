// ==UserScript==
// @name    emuparadise workaround
// @version 1.1
// @author  aronpham
// @match   https://www.emuparadise.me/*/*/*
// @grant   none
// ==/UserScript==

(function workAround(){
    "use strict";

    var id = encodeURIComponent((document.URL).split("/")[5]);
    var inner =
        "<a target='_blank' href='/roms/get-download.php?gid=" + id + "&test=true'"
        + " title='Download link'> Dowload link</a>";
    document.getElementsByClassName("download-link")[0].innerHTML = inner;
})();