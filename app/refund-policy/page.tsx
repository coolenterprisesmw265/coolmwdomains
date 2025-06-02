import { PageHero } from "@/components/pageHero";

export default function RefundPolicyPage() {
  return (
      <div className="min-h-screen flex flex-col w-full">

        <PageHero
            title="Refund Policy"
            subtitle="Understand our refund terms for hosting, domain registrations, and related services at Cool Enterprises Limited."
            backgroundImage="/assets/contact.jpg"
            height="min-h-[60vh]"
        />

        <div className="max-w-4xl mx-auto py-16 px-4">

          <h1 className="text-3xl font-bold text-brand-primary poppins mb-8">Refund Policy</h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <p>
              At <span className="text-brand-secondary font-semibold">Cool Enterprises Limited</span>, we strive to ensure complete satisfaction with our domain registration and hosting services.
              This refund policy outlines the terms and conditions for refunds on our services.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">1. Hosting Services</h2>
              <p>
                We offer a 30-day money-back guarantee on our hosting services. If you are not satisfied with our hosting
                service within the first 30 days of your initial purchase, you may request a full refund.
              </p>
              <p className="mt-2">Conditions include:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Refunds are only available for first-time purchases of hosting packages, not renewals.</li>
                <li>If a free domain was included, the domain registration fee will be deducted from your refund.</li>
                <li>Separate add-ons or services are not covered by this guarantee.</li>
                <li>Refunds will be issued via the original payment method.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">2. Domain Registration</h2>
              <p>
                Domain registrations are generally non-refundable due to the immediate nature of the service. However, we may consider refunds in rare cases such as:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Technical errors during the domain registration process</li>
                <li>Spelling mistakes made by our staff</li>
                <li>Failed domain registration despite payment</li>
              </ul>
              <p className="mt-2">Refund requests for domain names must be submitted within 24 hours of registration.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">3. Cancellations and Refund Process</h2>
              <p>
                To request a refund or cancellation, please contact us at:
                <br />
                <span className="text-brand-secondary font-medium">support@coolenterprisesmw.com</span> or call <span className="font-medium">+265 999 362 633</span>.
              </p>
              <p className="mt-2">
                Include your order number and reason for the refund. We’ll review your request and respond within a few business days. Approved refunds take 7–14 business days to process.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">4. Exceptions</h2>
              <p>We may deny refund requests under the following conditions:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Requests made after the refund window</li>
                <li>Extensively used services</li>
                <li>Accounts suspended due to policy violations</li>
                <li>Renewal payments</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">5. Changes to This Policy</h2>
              <p>
                We may update this refund policy from time to time. Any changes will be posted here with a revised update date.
              </p>
              <p className="mt-2 text-sm text-gray-500 italic">Last updated: May 15, 2024</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">6. Contact Us</h2>
              <p>For questions about this policy, you can reach us:</p>
              <ul className="space-y-1 mt-2">
                <li>Email: <span className="text-brand-secondary font-medium">support@coolenterprisesmw.com</span></li>
                <li>Phone: <span className="font-medium">+265 999 362 633</span></li>
                <li>Address: Area 3, Lilongwe, Malawi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}
