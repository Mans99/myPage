import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {

  return (
    <div id="error-page" className="flex flex-col text-fourth items-center">
      <h1 className="text-8xl pb-20 py-10">Oops!</h1>
      <p className="text-4xl p-1">An unexpected error has occurred.</p>
      <p className="text-4xl p-1"> Please return to the home screen:)</p>
      <div className="py-10">
      <Link to="/" className="px-8 py-3 text-lg text-fourth font-semibold border rounded bg-secondary hover:bg-focus">Home</Link>
      </div>
    </div>
  );
}