import { Virtuoso } from "react-virtuoso";
import ReactDOM from "react-dom/client";

if (typeof HTMLElement !== "undefined") {
  class CustomComponent extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement("div");
      this.attachShadow({ mode: "open" }).appendChild(mountPoint);

      const root = ReactDOM.createRoot(mountPoint);
      root.render(
        <Virtuoso
          style={{ height: "100vh" }}
          totalCount={200}
          itemContent={(index) => <div>Item {index}</div>}
        />
      );
    }
  }

  customElements.define("custom-component", CustomComponent);
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["custom-component"]: any;
    }
  }
}

export default function Sidebar() {
  return <custom-component></custom-component>;
}
