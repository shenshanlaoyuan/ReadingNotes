/**
 * Created by shenshanlaoyuan on 2019/5/25.
 */
 

var gitalk = new Gitalk({
    "clientID": "ef40df0c834d15b31b6c",
    "clientSecret": "783e4d7639da6c06c72eb76a16f6789e766a3669",
    "repo": "ReadingNotes",
    "owner": "shenshanlaoyuan",
    "admin": ["shenshanlaoyuan"],
    "id": md5(location.href),
    "distractionFreeMode": false
});
gitalk.render("gitalk-container");
