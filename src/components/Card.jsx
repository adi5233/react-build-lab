import React from "react";

function Card({ title, value, change }) {
  return (
    <article className="card">
      <span>{title}</span>

      <strong>{value}</strong>

      <small>{change}</small>
    </article>
  );
}

export default Card;