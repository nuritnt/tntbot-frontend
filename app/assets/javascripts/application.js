// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

document.addEventListener("DOMContentLoaded", function() {
  "use strict"
  var style = ""
    + "<style>" + ".filter .hidden {" + "opacity: 0;" + "}" +
      ".filter > * {" + "position: absolute;" +
      "transition: .5s ease-in-out;"  +  "}" + "</style>";
  document.head.insertAdjacentHTML("beforeend", style);

  var list = document.querySelectorAll(".filter > *");
  var h = list[0].offsetHeight, arr = [], i = -1, l = list.length;
  var anim = "transform" in document.body.style ? "transform" : "webkitTransform";

  while (++i < l) {
    arr.push(list[i].textContent.trim());
    list[i].style[anim] = "translateY(" + i*h +"px)";
  }

    document.querySelector("input.filter").addEventListener("input", function() {
      var rgx = new RegExp(this.value, "i");
          arr.forEach(function(el, idx) {
            if (rgx.test(el)) list[idx].classList.remove("hidden");
            else list[idx].classList.add("hidden");
            var i = -1;
            var p = 0;
            while (++i < l) {
              if (list[i].className != "hidden")
                list[i].style[anim] = "translateY(" + p++ * h + "px)";
            }
        })
    })
})
