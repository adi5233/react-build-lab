import React, { Suspense, useState } from "react";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

const Analytics = React.lazy(() => import("./pages/Analytics"));

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "analytics":
        return (
          <Suspense fallback={<p>Loading...</p>}>
            <Analytics />
          </Suspense>
        );

      case "reports":
        return <Reports />;

      case "settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Header
        page={page}
        onNavigate={setPage}
      />

      <main className="container">
        {renderPage()}
      </main>
    </>
  );
}

export default App;