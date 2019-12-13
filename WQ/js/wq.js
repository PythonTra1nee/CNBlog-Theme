<script>
    // 侧边栏GITHUB链接
    var githubButtonEle = '<div id="my-github"><a target="_blank" class="menu" href="https://github.com/KU4NG">点击前往作者 GITHUB</a></div>';
    document.getElementById('blogTitle').insertAdjacentHTML("beforeEnd", githubButtonEle);

    // 菜单新加标签
    var indexEle = '<li><a target="_blank" class="menu" href="https://www.cnblogs.com/Dy1an">回到首页</a></li>';
    var githubEle = '<li><a target="_blank" class="menu" href="https://github.com/KU4NG">GITHUB</a></li>';
    document.getElementById('navList').insertAdjacentHTML("afterBegin", indexEle);
    document.getElementById('navList').insertAdjacentHTML("beforeEnd", githubEle);
</script>