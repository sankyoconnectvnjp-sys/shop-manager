// ===== SHARED UTILITIES =====

export function fmt(num) {
  if (!num && num !== 0) return "0";
  return Number(num).toLocaleString("vi-VN") + "đ";
}

export function fmtNum(num) {
  return Number(num || 0).toLocaleString("vi-VN");
}

export function today() {
  return new Date().toISOString().split("T")[0];
}

export function fmtDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN");
}

export function fmtDateTime(ts) {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString("vi-VN", { day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit" });
}

export function showModal(id) {
  document.getElementById(id).classList.add("open");
}

export function hideModal(id) {
  document.getElementById(id).classList.remove("open");
}

export function toast(msg, type = "success") {
  const el = document.createElement("div");
  el.textContent = msg;
  el.style.cssText = `
    position:fixed; bottom:90px; left:50%; transform:translateX(-50%);
    background:${type === "success" ? "#22c55e" : "#ef4444"};
    color:white; padding:10px 20px; border-radius:20px;
    font-family:'Be Vietnam Pro',sans-serif; font-size:14px; font-weight:600;
    z-index:9999; box-shadow:0 4px 16px rgba(0,0,0,.2);
    animation: fadeInUp .3s ease;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

// nav highlight
export function setActiveNav(page) {
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.toggle("active", el.dataset.page === page);
  });
}
