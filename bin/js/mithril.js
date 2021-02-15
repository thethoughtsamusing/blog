"use strict";

var root = document.querySelector(".app-body");

function MyComponent() {
  var templateVar = 115;
  return {
    view: function view() {
      return m("main", null, m("h1", null, "Hello world ", templateVar));
    }
  };
}

m.render(root, m(MyComponent, null));
//# sourceMappingURL=mithril.js.map