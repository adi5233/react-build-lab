import React, { useState } from "react";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "analytics":
        return <Analytics />;

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