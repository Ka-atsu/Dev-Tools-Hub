import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex">
          {/* Sidebar Navigation */}
          <nav
            className="bg-light border-end"
            style={{ width: "250px", height: "100vh" }}
          >
            <div className="p-3">
              <h5>Dev Tools Hub</h5>
              <ul className="nav flex-column mt-3">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/tools/json-formatter" className="nav-link">
                    JSON Formatter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/tools/regex-tester" className="nav-link">
                    Regex Tester
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/tools/base64" className="nav-link">
                    Base64 Encoder
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/tools/uuid" className="nav-link">
                    UUID Generator
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/tools/color-converter" className="nav-link">
                    Color Converter
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="flex-grow-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
