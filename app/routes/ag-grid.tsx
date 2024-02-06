import agStyle from "ag-grid-community/styles/ag-grid.css"; // Core CSS
import agTheme from "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

import type { MetaFunction, LinksFunction  } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { AgGridReact } from 'ag-grid-react';

import devices from "~/../devices.js"

export const meta: MetaFunction = () => {
  return [
    { title: "AG Grid" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: agStyle },
  { rel: "stylesheet", href: agTheme },
]

export const loader = () => {
  return json({ devices })
}

export default function AgGrid() {
  const { devices } = useLoaderData<typeof loader>()

  // Column Definitions: Defines & controls grid columns.
  const [ colDefinition, setColDefinition ] = useState([
    { field: "name" },
    { field: "serialNumber" },
    { field: "group" },
    { field: "lastSeenOnline" },
  ]);

  return (
    <>
      <Link to="/">Home</Link>

      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={devices} columnDefs={colDefinition} />
      </div>
    </>
  );
}
