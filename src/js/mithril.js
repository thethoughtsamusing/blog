var root = document.querySelector(".app-body");

function MyComponent() {
  var templateVar = 105;

  return {
    view: () => (
      <main>
        <h1>Hello world {templateVar}</h1>
      </main>
    ),
  };
}

m.render(root, <MyComponent />);
