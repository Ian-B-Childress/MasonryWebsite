import "../App.css";
import NavBar from "../Components/NavBar";

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <div className="policy-container">
        <div className="policy-content">
          <h1>Privacy Policy</h1>
          <p>
            At Melvin Masonry, we respect your privacy. This Privacy Policy
            explains how we collect, use, and protect the information you
            provide when using our website.
          </p>

          <h2>Information We Collect:</h2>
          <p>1. Any information you submit through contact forms (name, email, phone, message).</p>
          <p>2. Information collected automatically via cookies or analytics tools (like Google Analytics), such as browser type, pages visited, and time on site.</p>

          <h2>How We Use Your Information:</h2>
          <p>1. To respond to inquiries and provide requested services or information.</p>
          <p>2. To improve our website and services.</p>

          <h2>Sharing Your Information:</h2>
          <p>
            We do not sell or share your personal information with third parties,
            except as required by law or to provide services requested by you.
          </p>

          <h2>Cookies:</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. Cookies
            are small data files stored on your device to help us analyze website
            usage and improve performance.
          </p>

          <h2>Data Protection:</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure.
          </p>

          <h2>Your Rights:</h2>
          <p>
            You may request access to, correction, or deletion of your personal
            data at any time by contacting us at: ian.childress10@gmail.com
          </p>

          <h2>Updates:</h2>
          <p>
            We may update this Privacy Policy occasionally. Updated versions
            will be posted on this page.
          </p>
        </div>
      </div>
    </>
  );
}