import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Little Aston Park Services",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#f0f1eb] min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Legal</span>
            <h1 className="font-bold uppercase mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.05 }}>
              <span style={{ color: "#0d2e1a" }}>Privacy </span>
              <span style={{ color: "#3a8c52" }}>Policy</span>
            </h1>
            <p className="text-gray-400 text-sm mt-3">Last updated: April 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 flex flex-col gap-8 text-gray-600 text-sm leading-relaxed">

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">1. Who We Are</h2>
              <p>Little Aston Park Services is a garden maintenance and landscaping business operating across Sutton Coldfield, Lichfield, Tamworth, and surrounding areas. We are committed to protecting and respecting your privacy.</p>
              <p>This policy explains how we collect, use, and safeguard any personal information you provide to us when using our website or engaging our services.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">2. Information We Collect</h2>
              <p>We may collect the following personal information:</p>
              <ul className="flex flex-col gap-1.5 pl-4">
                {[
                  "Your name and contact details (phone number and email address)",
                  "Your address or location when requesting a quote or service",
                  "Details of your enquiry or the services you require",
                  "Correspondence between you and us",
                  "Payment information (we do not store card details)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="flex flex-col gap-1.5 pl-4">
                {[
                  "Respond to your enquiries and provide quotes",
                  "Schedule and carry out the services you have requested",
                  "Send invoices and process payments",
                  "Communicate with you about your booking or ongoing work",
                  "Improve our services based on feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>We will never sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">4. Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal bases:</p>
              <ul className="flex flex-col gap-1.5 pl-4">
                {[
                  "Contract: to fulfil the services you have requested or entered into an agreement with us for",
                  "Legitimate interests: to respond to enquiries and manage our business operations",
                  "Legal obligation: where we are required to retain records for tax or legal purposes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">5. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Customer records are typically kept for up to 6 years for accounting and tax purposes, after which they are securely deleted.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">6. Cookies and Website Analytics</h2>
              <p>Our website may use cookies to improve your browsing experience. Cookies are small text files stored on your device. We may use analytics tools to understand how visitors use our site. No personally identifiable information is collected through these tools without your consent.</p>
              <p>You can disable cookies in your browser settings at any time, though this may affect the functionality of our website.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">7. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
              <ul className="flex flex-col gap-1.5 pl-4">
                {[
                  "The right to access the personal data we hold about you",
                  "The right to request correction of inaccurate data",
                  "The right to request deletion of your data",
                  "The right to restrict or object to how we process your data",
                  "The right to data portability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>To exercise any of these rights, please contact us at <a href="mailto:nik.gardenservices@gmail.com" className="text-emerald-600 hover:underline">nik.gardenservices@gmail.com</a>. We will respond within 30 days.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">8. Data Security</h2>
              <p>We take appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">9. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please get in touch:</p>
              <div className="flex flex-col gap-1 mt-1">
                <p><span className="font-medium text-emerald-900">Email:</span> <a href="mailto:nik.gardenservices@gmail.com" className="text-emerald-600 hover:underline">nik.gardenservices@gmail.com</a></p>
                <p><span className="font-medium text-emerald-900">Phone:</span> <a href="tel:+447500732083" className="text-emerald-600 hover:underline">+44 7500 732083</a></p>
              </div>
              <p className="mt-1">You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <span className="text-emerald-600">ico.org.uk</span> if you believe we have not handled your data appropriately.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be published on this page with a revised date. We encourage you to review this policy periodically.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
