import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Yikes</h1>
      <p>ERROR PAGE NOT FOUND</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}