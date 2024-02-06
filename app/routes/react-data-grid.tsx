import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "React Data Grid" },
  ];
};

export default function Index() {
  return (
    <>
      <Link to="/">Home</Link>

      <h1>Untested</h1>

      <p>Found React Data Grid documentation awfully complex, no code samples on the getting started guide, and while you can find them on the API part of the docs, they involve advanced things I don't wanna test here.</p>

      <p>Looked in the web for "simple react data grid code examples", and what I found wasn't simple at all, they involved much more definitions and set up besides passing the data and defining the columns.</p>

      <p>Finally, the pricing scheme is a robbery: USD $299 per application <strong>per developer!</strong></p>

      <p><strong>So this is a no go.</strong></p>
    < />
  );
}
