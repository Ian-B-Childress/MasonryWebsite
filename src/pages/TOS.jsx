import "../App.css";
import NavBar from "../Components/NavBar";

export default function TermsOfService() {
  return (
    <>
      <NavBar />
      <div className="policy-container">
        <div className="policy-content">
          <h1>Terms of Service</h1>
          <p>
            Welcome to Melvin Masonry. By using this website, you agree to the
            following terms:
          </p>

          <h2>Use of Site:</h2>
          <p>1. All content on this website is for informational purposes only.</p>
          <p>
            2. You may view content for personal or educational use but may not
            copy, reproduce, or redistribute it without permission.
          </p>

          <h2>Disclaimer:</h2>
          <p>
            1. We make no warranties regarding the accuracy, completeness, or
            reliability of any information on this site.
          </p>
          <p>
            2. Melvin Masonry is not responsible for any damages, losses, or
            inconveniences resulting from your use of this website.
          </p>

          <h2>External Links:</h2>
          <p>
            This site may contain links to third-party websites. We are not
            responsible for their content or privacy practices.
          </p>

          <h2>Changes to Terms:</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            Changes will be posted on this page.
          </p>

          <h2>Contact:</h2>
          <p>
            For questions regarding these terms, please contact us at:
            ian.childress10@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
