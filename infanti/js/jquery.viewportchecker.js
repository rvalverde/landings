/*
    Version 1.8.2
    The MIT License (MIT)
    Copyright (c) 2014 Dirk Groenen
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

!function(t){t.fn.viewportChecker=function(e){var o={classToAdd:"visible",classToRemove:"invisible",offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(t,e){},scrollHorizontal:!1};t.extend(o,e);var s=this,a={height:t(window).height(),width:t(window).width()},i=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")||-1!=navigator.userAgent.toLowerCase().indexOf("windows phone")?"body":"html";return this.checkElements=function(){var e,l;o.scrollHorizontal?(e=t(i).scrollLeft(),l=e+a.width):(e=t(i).scrollTop(),l=e+a.height),s.each(function(){var s=t(this),i={},n={};if(s.data("vp-add-class")&&(n.classToAdd=s.data("vp-add-class")),s.data("vp-remove-class")&&(n.classToRemove=s.data("vp-remove-class")),s.data("vp-offset")&&(n.offset=s.data("vp-offset")),s.data("vp-repeat")&&(n.repeat=s.data("vp-repeat")),s.data("vp-scrollHorizontal")&&(n.scrollHorizontal=s.data("vp-scrollHorizontal")),s.data("vp-invertBottomOffset")&&(n.scrollHorizontal=s.data("vp-invertBottomOffset")),t.extend(i,o),t.extend(i,n),!s.hasClass(i.classToAdd)||i.repeat){String(i.offset).indexOf("%")>0&&(i.offset=parseInt(i.offset)/100*a.height);var d=i.scrollHorizontal?Math.round(s.offset().left)+i.offset:Math.round(s.offset().top)+i.offset,r=i.scrollHorizontal?d+s.width():d+s.height();i.invertBottomOffset&&(r-=2*i.offset),l>d&&r>e?(s.removeClass(i.classToRemove),s.addClass(i.classToAdd),i.callbackFunction(s,"add")):s.hasClass(i.classToAdd)&&i.repeat&&(s.removeClass(i.classToAdd),i.callbackFunction(s,"remove"))}})},t(window).on("scroll",this.checkElements),t(window).on("load",this.checkElements),t(window).resize(function(e){a={height:t(window).height(),width:t(window).width()},s.checkElements()}),this.checkElements(),this}}(jQuery);