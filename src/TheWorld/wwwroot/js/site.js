/// <reference path="../lib/jquery/dist/jquery.min.js" />

(function () {

    //var ele = $("#username");
    //ele.text("Sachin Tendulkar");

    //var main = $("#main");

    //main.on("mouseenter", function () {
    //    main.style.backgroundColor = "#888";
    //});

    //main.on("mouseleave", function () {
    //    main.style.backgroundColor = "";
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sidebarAndWarpper = $("#sidebar, #wrapper");
    $("#sidebarToggle").on("click", function () {
        var $icon = $("#sidebarToggle i.fa");
        $sidebarAndWarpper.toggleClass("hide-sidebar");
        if ($sidebarAndWarpper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        }
        else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
    });
})();
