import { PageHero } from "@/components/pageHero";

export default function PrivacyPage() {
  return (
      <div className="min-h-screen flex flex-col w-full">

        <PageHero
            title="Privacy Policy"
            subtitle="Your privacy is important to us. Learn how Cool Enterprises Limited collects, uses, and protects your information across our services."
            backgroundImage="/assets/contact.jpg"
            height="min-h-[60vh]"
        />

        <div className="max-w-4xl mx-auto py-16 px-4">

          <h1 className="text-3xl font-bold text-brand-primary poppins mb-8">Privacy Policy</h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <p>
              At <span className="text-brand-secondary font-semibold">Cool Enterprises Limited</span>, your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, <span className="font-medium">coolenterprisesmw.com</span>, and other sites we own and operate.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">1. Information We Collect</h2>
              <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
              </p>
              <p className="mt-2">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Name, email address, phone number, and business information for account creation and communication</li>
                <li>Domain registration information as required by domain registries</li>
                <li>Payment information for processing transactions</li>
                <li>Usage data and analytics to improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">2. Use of Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing purposes</li>
                <li>Process transactions and send related information</li>
                <li>Find and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">3. Data Retention</h2>
              <p>
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">4. Cookies</h2>
              <p>
                We use cookies to store information about visitor preferences and to record user-specific information on visits and pages the user views so as to provide a custom experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">5. Third-Party Services</h2>
              <p>We may employ third-party companies and individuals due to the following reasons:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>To facilitate our Service</li>
                <li>To provide the Service on our behalf</li>
                <li>To perform Service-related services</li>
                <li>To assist us in analyzing how our Service is used</li>
              </ul>
              <p className="mt-2">
                We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information where appropriate</li>
                <li>Object to our use of your information</li>
                <li>Request a copy of your information in a structured, commonly used format</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">7. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">8. Contact Us</h2>
              <p>For questions about this privacy policy, you can reach us:</p>
              <ul className="space-y-1 mt-2">
                <li>Email: <span className="text-brand-secondary font-medium">support@coolenterprisesmw.com</span></li>
                <li>Phone: <span className="font-medium">+265 999 362 633</span></li>
                <li>Address: Area 3, Lilongwe, Malawi</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 italic">Last updated: May 15, 2024</p>
          </div>
        </div>
      </div>
  );
}