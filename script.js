const container = document.getElementById("root");

/* React Create Element - Start */
const heading = React.createElement("h1", {
  children: "Hello World",
  className: "heading-1",
});

const p1 = React.createElement("p", {
  children: "Paragraph 1",
});
const p2 = React.createElement("p", {
  children: "Paragraph 2",
});

const wrapper = React.createElement(React.Fragment, {
  children: [p1, p2],
});

const li1 = React.createElement("li", {
  children: "Apple",
});
const li2 = React.createElement("li", {
  children: "Orange",
});

const list = React.createElement("ul", null, li1, li2);
const list1 = React.createElement("ul", { className: "list" }, li1, li2);
const list2 = React.createElement(
  "ul",
  { className: "list" },
  React.createElement("li", null, "Apple"),
  React.createElement("li", null, "Orange")
);
/* React Create Element - End */

/* JSX with Babel CDN - Start */
const listJsx = (
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Grape</li>
  </ul>
);

const name = "Mureng";
const hello = <h1 className="heading">Hello {name.toUpperCase()}</h1>;

const image = <img src="" alt="Image" />;

function Halo(props) {
  return <p>Hello {props.name}</p>;
}

const element = (
  <>
    <Halo name="Ajis" />
    <Halo name="Zeys" />
    <Halo name="Mureng" />
  </>
);
/* JSX with Babel CDN - End */

/* - Start - */
const inlineStyle = (
  <h1
    style={{
      color: "red",
      backgroundColor: "black",
    }}
  >
    Hello Bebel
  </h1>
);

const externalStyle = <div className="box"></div>;

function handleClick(msg) {
  console.log(msg);
}

const eventHandle = (
  <button onClick={handleClick.bind(this, "Mureng")}>Click Me</button>
);
/* - End - */

const root = ReactDOM.createRoot(container);
root.render(element);
