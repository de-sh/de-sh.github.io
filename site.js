$(document).foundation(), $(".counter").counterUp({
    delay: 10,
    time: 1e3
}), $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().top
            }, 1e3), !1
        }
    })
})
