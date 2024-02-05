import type { MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";

import devices from "~/../devices.js"

export const meta: MetaFunction = () => {
  return [
    { title: "Plain Daisy UI" },
  ];
};

export const loader = () => {
  return json({ devices })
}

export default function Index() {
  const { devices } = useLoaderData<typeof loader>()

  return (
    <>
      <Link to="/">Home</Link>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Serial Number</th>
              <th>Group</th>
              <th>Last time online</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index}>
                <td>{device.name}</td>
                <td>{device.serialNumber}</td>
                <td>{device.group}</td>
                <td>{device.lastSeenOnline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
