import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ul>
      <li>
        <Link to="/plain-daisy">Plain DaisyUI</Link>
      </li>
      <li>
        <Link to="/react-table-library">React Table Library</Link>
      </li>
      <li>
        <Link to="/ag-grid">AG Grid</Link>
      </li>
      <li>
        <Link to="/react-data-grid">React Data Grid</Link>
      </li>
    </ul>
  );
}
