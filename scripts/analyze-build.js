const fs = require("fs");
const path = require("path");

const distPath =
  path.resolve(__dirname, "../dist");

function getFiles(dir) {
  return fs
    .readdirSync(dir, {
      withFileTypes: true
    })
    .flatMap((entry) => {
      const fullPath =
        path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getFiles(fullPath);
      }

      return [fullPath];
    });
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  return `${(
    bytes / 1024
  ).toFixed(2)} KB`;
}

const files = getFiles(distPath);

const results = files.map((file) => ({
  file:
    path.relative(
      distPath,
      file
    ),

  bytes:
    fs.statSync(file).size
}));

const total = results.reduce(
  (sum, file) =>
    sum + file.bytes,
  0
);

const js = results
  .filter((file) =>
    file.file.endsWith(".js")
  )
  .reduce(
    (sum, file) =>
      sum + file.bytes,
    0
  );

const css = results
  .filter((file) =>
    file.file.endsWith(".css")
  )
  .reduce(
    (sum, file) =>
      sum + file.bytes,
    0
  );

console.log("");
console.log(
  "React Build Lab"
);
console.log(
  "==============="
);

console.log(
  `Total: ${formatBytes(total)}`
);

console.log(
  `JavaScript: ${formatBytes(js)}`
);

console.log(
  `CSS: ${formatBytes(css)}`
);

console.log("");
console.log(
  "Output files:"
);

results
  .sort(
    (a, b) =>
      b.bytes - a.bytes
  )
  .forEach((file) => {
    console.log(
      `${formatBytes(file.bytes)
        .padStart(12)}  ${file.file}`
    );
  });