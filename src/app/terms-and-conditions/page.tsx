import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions | Little Aston Park Services",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-[#f0f1eb] min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Legal</span>
            <h1 className="font-bold uppercase mt-2" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.05 }}>
              <span style={{ color: "#0d2e1a" }}>Terms &amp; </span>
              <span style={{ color: "#3a8c52" }}>Conditions</span>
            </h1>
            <p className="text-gray-400 text-sm mt-3">Last updated: April 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 flex flex-col gap-8 text-gray-600 text-sm leading-relaxed">

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">1. Introduction</h2>
              <p>These Terms and Conditions govern your use of the services provided by Little Aston Park Services ("we", "us", "our"). By engaging our services, you agree to be bound by these terms. Please read them carefully before booking any work.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">2. Services</h2>
              <p>We provide garden maintenance, landscaping, jet washing, and related services across Sutton Coldfield, Lichfield, Tamworth, and surrounding areas. The scope of work will be agreed upon prior to commencement and outlined in any written quote or confirmation provided.</p>
              <p>We reserve the right to refuse or discontinue work if site conditions are found to be unsafe, or if the agreed scope of work changes materially without prior agreement.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">3. Quotations and Pricing</h2>
              <p>All quotations are provided in good faith based on information available at the time. Prices are subject to change if the scope of work differs from what was originally described. Any additional costs will be communicated and agreed with you before proceeding.</p>
              <p>Quotations are valid for 30 days from the date of issue unless otherwise stated.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">4. Payment</h2>
              <p>Payment is due upon completion of the work unless a prior arrangement has been made in writing. We accept bank transfer and cash. Invoices not settled within 14 days of the due date may incur a late payment charge.</p>
              <p>For larger projects, we may require a deposit prior to commencement. This will be clearly stated in your quote.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">5. Cancellations and Rescheduling</h2>
              <p>We understand that circumstances change. If you need to cancel or reschedule, we ask that you provide at least 48 hours' notice. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee to cover lost time and travel costs.</p>
              <p>We reserve the right to reschedule work due to severe weather conditions or circumstances beyond our control. We will notify you as soon as possible and arrange an alternative date.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">6. Access and Site Conditions</h2>
              <p>You are responsible for ensuring we have safe and adequate access to the work area on the agreed date. Any hazards such as underground utilities, irrigation systems, or hidden structures must be disclosed prior to work commencing. We accept no liability for damage caused by undisclosed hazards.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">7. Liability</h2>
              <p>We carry public liability insurance and take every precaution to avoid damage to your property. In the unlikely event that damage occurs due to our negligence, we will take reasonable steps to rectify it. Our liability is limited to the value of the work carried out.</p>
              <p>We are not liable for any indirect or consequential losses, including loss of use or enjoyment of your property.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">8. Waste Disposal</h2>
              <p>Garden waste generated during our work will be removed and disposed of responsibly where this is included in the agreed scope. Any additional waste removal will be quoted separately. We do not accept responsibility for the disposal of waste not generated by our work.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">9. Complaints</h2>
              <p>If you are dissatisfied with any aspect of our service, please contact us within 7 days of the work being completed. We take all complaints seriously and will work to resolve any issues promptly and fairly.</p>
              <p>You can reach us at <a href="mailto:nik.gardenservices@gmail.com" className="text-emerald-600 hover:underline">nik.gardenservices@gmail.com</a> or <a href="tel:+447500732083" className="text-emerald-600 hover:underline">+44 7500 732083</a>.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">10. Governing Law</h2>
              <p>These Terms and Conditions are governed by the laws of England and Wales. Any disputes arising from our services will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>

            <div className="h-px bg-gray-100" />

            <section className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-emerald-950">11. Changes to These Terms</h2>
              <p>We reserve the right to update these Terms and Conditions at any time. Any changes will be reflected on this page with an updated date. Continued use of our services following any changes constitutes acceptance of the new terms.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
