!function($){$.fn.monocleToggle=function(){return this.each(function(){$(this).on("mouseenter",function(o){$(this).closest("nav li:has(ul)").hasClass("monocle-open")||$(this).parents("nav li:has(ul)").hasClass("monocle-open")||$(".monocle-open, .monocle-hover").removeClass("monocle-open").find("ul").hide(),$(this).children("ul").show(),$(o.target).closest("nav li:has(ul)").addClass("monocle-hover"),setTimeout(function(){$(".monocle-hover").removeClass("monocle-hover").addClass("monocle-open")},500)}),$(this).on("click",function(o){$(this).closest("nav li:has(ul)").hasClass("monocle-open")||(o.preventDefault(),$(this).children("ul").show(),setTimeout(function(){$(o.target).closest("nav li:has(ul)").addClass("monocle-open")},500))}),$(document).on("click touchstart onpointerdown",function(o){$(o.target).parents("nav li:has(ul)").hasClass("monocle-open")||$(".monocle-open").removeClass("monocle-open").find("ul").hide()}),$(document).on("mousemove",function(o){$(o.target).closest("nav li:has(ul)").is(":visible")||$(".monocle-hover, .monocle-open").removeClass("monocle-hover monocle-open").find("ul").hide()})}),this}}(jQuery),$("nav li:has(ul)").monocleToggle();