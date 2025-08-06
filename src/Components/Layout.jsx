import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;