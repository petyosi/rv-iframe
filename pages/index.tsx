import { useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <button onClick={() => setShowSidebar(true)}>Open sidebar</button>
      {showSidebar && (
        <iframe
          src="sidebar"
          style={{
            height: "90vh",
            position: "absolute",
            right: "20px",
            border: 0,
          }}
        />
      )}
    </div>
  );
}
