/**
 * Created by shenshanlaoyuan on 2019/5/25.
 */
 

var gitalk = new Gitalk({
    "clientID": "941df607ad0d8a39b204",
    "clientSecret": "bd5e6cd6336fcebff410676a7c5d41235030a2f7",
    "repo": "InterviewBook",
    "owner": "shenshanlaoyuan",
    "admin": ["shenshanlaoyuan"],
    "id": md5(location.href),
    "distractionFreeMode": false
});
gitalk.render("gitalk-container");
