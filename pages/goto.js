function getReqVar(variable) { // Get Request URL Variables
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function otherSiteJump() {
    let url = window.location.href;
    let regular = /^[http]|[https]\:\/\/kingc2022\.github\.io.*?/;
    if (!regular.test(url)) {
        let gotoUrl = getReqVar("link");
        gotoUrl = decodeURI(gotoUrl);
        $("#loading").hide();
        $("#modaltext").html("您即将访问的" + gotoUrl + "不属于本站! <br>请注意安全并手动点击下方按钮跳转");
        $("#ok").attr("onclick", "window.location.href='" + gotoUrl + "'");
    } else {
        $("#goto").hide();
        window.location.href = getReqVar("link");
    }
}

otherSiteJump();