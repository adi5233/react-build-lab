import React from "react";

function Header({ page, onNavigate }) {
  const links = [
    ["dashboard", "Dashboard"],
    ["analytics", "Analytics"],
    ["reports", "Reports"],
    ["settings", "Settings"]
  ];

  return (
    <header className="header">
      <h2>React Build Lab</h2>

      <nav>
        {links.map(([id, label]) => (
          <button
            key={id}
            className={page === id ? "active" : ""}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;