import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center space-x-7">
      <h1 className="text-3xl text-emerald-500">Ooops!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
