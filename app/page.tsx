export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 20px", background: "linear-gradient(160deg,#0b1b3a 0%,#0f2b5c 60%,#7a1220 160%)" }}>
      <div style={{ fontSize: 13, letterSpacing: 4, color: "#c9a24b", fontWeight: 700, marginBottom: 14 }}>FWCS BOARD OF TRUSTEES</div>
      <h1 style={{ fontSize: "clamp(38px,7vw,72px)", margin: "0 0 10px", lineHeight: 1.05 }}>Re-elect<br /><span style={{ color: "#fff" }}>Noah Smith</span></h1>
      <p style={{ fontSize: "clamp(16px,2.4vw,20px)", color: "#b9c6e0", maxWidth: 620, lineHeight: 1.5 }}>
        Fighting for Fort Wayne Community Schools students, teachers, and families.
      </p>
      <div style={{ marginTop: 30, padding: "12px 26px", border: "1px solid #c9a24b", borderRadius: 10, color: "#c9a24b", fontWeight: 600 }}>
        Campaign site coming soon
      </div>
      <nav style={{ marginTop: 40, display: "flex", gap: 24, fontSize: 14, color: "#8fa3c7" }}>
        <a href="/" style={{ color: "#8fa3c7", textDecoration: "none" }}>Meet the Candidate</a>
        <a href="/snider" style={{ color: "#8fa3c7", textDecoration: "none" }}>Snider Stadium</a>
        <a href="/accomplishments" style={{ color: "#8fa3c7", textDecoration: "none" }}>Accomplishments</a>
      </nav>
    </main>
  );
}
