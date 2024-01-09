const fs = require("fs");

// Replace 'path/to/your/file.txt' with the path to the file you want to monitor
const filePath = "/home/kali/Desktop/testdirectory/";

// Watch for changes in the file or directory
const watcher = fs.watch(filePath, (eventType, filename) => {
  if (eventType === "change") {
    console.log(`File ${filename} has been changed.`);
    // Trigger an alert here (you can use browser-specific methods or a library)
    console.log("ALERT: File has been changed!");
  }
});

// Handle the 'close' event to stop watching when needed
watcher.on("close", () => {
  console.log("File watcher has been stopped.");
});

const timer = setTimeout(() => {
  console.log("Timer: 30 minutes have elapsed. Stopping timer now.");
  watcher.close();
}, 30 * 60 * 1000);

// You can also manually stop the watcher after a specific period of time
// setTimeout(() => watcher.close(), 60000); // Stop after 60 seconds (1 minute)
/////////////// How to execute tool /////////////////
// run node <filename> in directory containing file you want to monitor.
