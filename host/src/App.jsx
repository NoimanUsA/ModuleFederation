import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const Button = lazy(() =>
  import("remote/Button").then((module) => ({ default: module.Button }))
);

const App = () => (
  <div>
    <Suspense fallback="Loading...">
      <ErrorBoundary>
        <Button>Button</Button>
      </ErrorBoundary>
    </Suspense>
  </div>
);

export default App;
