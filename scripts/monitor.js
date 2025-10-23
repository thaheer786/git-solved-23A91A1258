/**

* System Monitoring Script
* Supports both Production and Development environments
  */

const env = process.env.NODE_ENV || "development";

const monitorConfig =
env === "production"
? {
interval: 60000, // 1 minute
alertThreshold: 80,
metricsEndpoint: "[http://localhost:8080/metrics](http://localhost:8080/metrics)",
mode: "production",
}
: {
interval: 5000, // 5 seconds
alertThreshold: 90,
metricsEndpoint: "[http://localhost:3000/metrics](http://localhost:3000/metrics)",
debugMode: true,
verboseLogging: true,
mode: "development",
};

console.log("=================================");
console.log(`DevOps Simulator - Monitor (${monitorConfig.mode})`);
console.log("=================================");

function checkSystemHealth() {
const timestamp = new Date().toISOString();
console.log(`\n[${timestamp}] Checking system health...`);

// Simulate resource usage
const cpuUsage = Math.random() * 100;
const memUsage = Math.random() * 100;
const diskUsage = Math.random() * 100;

console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);

// Additional debug info for development mode
if (monitorConfig.mode === "development" && monitorConfig.debugMode) {
console.log("✓ Hot reload: Active");
console.log("✓ Debug port: 9229");
console.log("✓ Source maps: Enabled");
}

// Determine system status
const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
if (maxUsage > monitorConfig.alertThreshold) {
console.log("⚠️  System Status: WARNING - High resource usage");
} else {
console.log("✅ System Status: HEALTHY");
}

if (monitorConfig.verboseLogging) {
console.log(`Next check in ${monitorConfig.interval}ms`);
}
}

console.log(`Monitoring every ${monitorConfig.interval}ms`);
setInterval(checkSystemHealth, monitorConfig.interval);
checkSystemHealth();

// Development-only: log memory stats every 30s
if (monitorConfig.mode === "development" && monitorConfig.debugMode) {
console.log("Debug features enabled");
setInterval(() => {
const memUsage = process.memoryUsage();
console.log("\n--- Memory Usage ---");
console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
}, 30000);
}
