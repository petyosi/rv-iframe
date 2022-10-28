import { DOMAttributes, useState } from "react";

if (typeof HTMLElement !== "undefined") {
  class CustomComponent extends HTMLElement {
    connectedCallback() {
      console.log("foo");

      // create a shadow dom
      const shadow = this.attachShadow({ mode: "open" });
      // create a span element
      const text = document.createElement("span");
      // set the content to 'Hello World'

      const iframe = document.createElement("iframe");
      iframe.src = "sidebar";
      //@ts-expect-error
      iframe.style = "height: 90vh; position: absolute; right: 20px; border: 0";
      // insert our created element into our shadow DOM, causing it to appear
      shadow.appendChild(iframe);
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

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <button onClick={() => setShowSidebar(true)}>Open sidebar</button>
      {showSidebar && <custom-component></custom-component>}
    </div>
  );
}
