import React from "react";

const reports = Array.from(
  { length: 100 },
  (_, index) => ({
    id: index + 1,
    status:
      index % 2 === 0
        ? "Completed"
        : "Processing",
    amount: (index + 1) * 127
  })
);

function Reports() {
  return (
    <section>
      <p className="eyebrow">
        Experiment: lazy route
      </p>

      <h1>Reports</h1>

      <div className="panel">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.status}</td>
                <td>${report.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Reports;