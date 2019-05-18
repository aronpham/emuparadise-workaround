// ==UserScript==
// @name    emuparadise workaround
// @version 1.2
// @author  aronpham
// @match   https://www.emuparadise.me/*/*/*
// @grant   none
// ==/UserScript==

function oldWorkAround(){
    "use strict";

    var id = encodeURIComponent((document.URL).split("/")[5]);
    var inner =
        "<a target='_blank' href='/roms/get-download.php?gid=" + id + "&test=true'"
        + " title='Download link'> Dowload link</a>";
    document.getElementsByClassName("download-link")[0].innerHTML = inner;
}



(function newWorkAround() {
    "use strict";

    var platform = encodeURIComponent((document.URL).split("/")[3]);
    var download = document.getElementsByClassName("download-link")[0];
    var linkArray = download.getElementsByTagName("a");
    if (platform === "Sega_Dreamcast_ISOs") {
        var server = ["50.7.92.186", "50.7.189.186"];
        var path = "/happyxhJ1ACmlTrxJQpol71nBc/Dreamcast/";
        for (i = 0; i < linkArray.length; i++) {
            var fileName = escape(linkArray[i].innerHTML.substring(9)) + ".7z";
            var link = "http://" + server[0] + path + fileName;
            linkArray[i].href = link;
        }
    }
    else {
        var id = encodeURIComponent((document.URL).split("/")[5]);
        var link = "/roms/get-download.php?gid=" + id + "&test=true";
        linkArray[0].href = link;
    }
})();
