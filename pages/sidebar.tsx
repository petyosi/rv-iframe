import { Virtuoso } from "react-virtuoso";

export default function Sidebar() {
  return (
    <div>
      <Virtuoso
        style={{ height: "100vh" }}
        totalCount={200}
        itemContent={(index) => <div>Item {index}</div>}
      />
    </div>
  );
}
