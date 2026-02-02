import { Routes, Route, Link } from "react-router-dom";

import aboutContent from "./content/about.md?raw";
import notificationsContent from "./content/notifications.md?raw";
import ContactForm from "./content/ContactForm.jsx";  // <-- import here

export default function Index() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-left">RRR</div>

          <div className="nav-right">
            <Link to="/">About</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/contact">Contact</Link>  {/* new link */}
          </div>
        </nav>
      </header>

      <main className="app-container">
        <div className="content-card">
          <Routes>
            <Route path="/" element={<MarkdownPage content={aboutContent} />} />
            <Route
              path="/notifications"
              element={<MarkdownPage content={notificationsContent} />}
            />
            <Route
              path="/contact"
              element={
                <>
                  <h1>Contact Us</h1>
                  <p>
                    Have a question? Send us a message or reach out directly at{" "}
                    <strong>info@example.com</strong>.
                  </p>
                  <ContactForm />
                </>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

function MarkdownPage({ content }) {
  return (
    <article className="markdown">
      {content.split("\n").map((line, i) => {
        if (line.startsWith("# ")) return <h1 key={i}>{line.slice(2)}</h1>;
        if (line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
        if (!line.trim()) return <br key={i} />;
        return <p key={i}>{line}</p>;
      })}
    </article>
  );
}
