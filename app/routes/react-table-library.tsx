import type { MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { CompactTable } from '@table-library/react-table-library/compact';

import devices from "~/../devices.js"

export const meta: MetaFunction = () => {
  return [
    { title: "React Table Library" },
  ];
};

export const loader = () => {
  return json({ devices })
}

export default function Index() {
  const { devices } = useLoaderData<typeof loader>()

  const columns = [
    { label: 'Name', renderCell: device => device.name },
    {
      label: 'Serial Number',
      renderCell: device => device.serialNumber
    },
    { label: 'Group', renderCell: device => device.group },
    {
      label: 'Last Time Seen Online',
      renderCell: device => device.lastSeenOnline,
    },
  ]

  return (
    <>
      <Link to="/">Home</Link>
      <CompactTable columns={columns} data={devices} />
    </>
  );
}


