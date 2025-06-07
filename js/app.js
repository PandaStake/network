// js/app.js
async function refreshNetworkStats() {
  try {
    const res = await fetch("stats.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { ethCount, userCount } = await res.json();
    document.getElementById("eth-count").textContent  = ethCount.toFixed(3);
    document.getElementById("user-count").textContent = userCount;
  } catch (err) {
    console.error("Failed to fetch network-stats:", err);
  } finally {
    document.getElementById("network-stats-card")
            .classList.remove("loading");
  }
}

refreshNetworkStats();
setInterval(refreshNetworkStats, 15000);
