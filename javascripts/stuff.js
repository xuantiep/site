// Generated by CoffeeScript 1.4.0

jQuery(function() {
  var mobile;
  mobile = function(width) {
    if (width < 770) {
      return $("section.info").addClass("one");
    } else {
      return $("section.info").removeClass("one");
    }
  };
  $(window).resize(function() {
    return mobile($(this).width());
  });
  $(window).resize();
  $.each($("pre"), function(index, code) {
    return new CodeMirror(function(node) {
      if (code instanceof jQuery) {
        code = code.get(0);
      }
      return code.parentNode.replaceChild(node, code);
    }, {
      value: $.trim(code.textContent.split("||")[1]),
      readOnly: true,
      mode: $.trim(code.textContent.split("||")[0]),
      theme: "monokai",
      lineNumbers: $.trim(code.textContent.split("||")[1]).match("\\n"),
      matchBrackets: true
    });
  });
  $.each(["tweaker-dl", "tldr-tweaker-dl", "twitter", "tweaker", "copyin", "instagram", "github", "subscribe", "email", "hn", "zeczec"], function(index, val) {
    return $("#" + val).click(function(e) {
      return _gaq.push(["_trackEvent", e.target.id, "clicked"]);
    });
  });
  return $.each($("[data-time]"), function(index, ele) {
    return $(ele).html(prettyDate(new Date($(this).data("time"))));
  });
});
