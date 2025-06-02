import { PageHero } from "@/components/pageHero";

export default function TermsPage() {
  return (
      <div className="min-h-screen flex flex-col w-full">

        <PageHero
            title="Terms of Service"
            subtitle="Please read these terms carefully before using our domain registration and hosting services at Cool Enterprises Limited."
            backgroundImage="/policies/terms.jpg"
            height="min-h-[60vh]"
        />

        <div className="max-w-4xl mx-auto py-16 px-4">

          <h1 className="text-3xl font-bold text-brand-primary poppins mb-8">Terms of Service</h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <p>
              Welcome to <span className="text-brand-secondary font-semibold">Cool Enterprises Limited</span>. By accessing our website at <span className="font-medium">coolenterprisesmw.com</span>, you agree to be
              bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible
              for compliance with any applicable local laws.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">1. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Cool Enterprises Limited's
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose;</li>
                <li>Attempt to decompile or reverse engineer any software contained on Cool Enterprises Limited's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">2. Disclaimer</h2>
              <p>
                The materials on Cool Enterprises Limited's website are provided on an 'as is' basis. Cool Enterprises
                Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">3. Limitations</h2>
              <p>
                In no event shall Cool Enterprises Limited or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
                inability to use the materials on Cool Enterprises Limited's website, even if Cool Enterprises Limited or a
                Cool Enterprises Limited authorized representative has been notified orally or in writing of the possibility
                of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">4. Accuracy of Materials</h2>
              <p>
                The materials appearing on Cool Enterprises Limited's website could include technical, typographical, or
                photographic errors. Cool Enterprises Limited does not warrant that any of the materials on its website are
                accurate, complete or current. Cool Enterprises Limited may make changes to the materials contained on its
                website at any time without notice. However Cool Enterprises Limited does not make any commitment to update
                the materials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">5. Links</h2>
              <p>
                Cool Enterprises Limited has not reviewed all of the sites linked to its website and is not responsible for
                the contents of any such linked site. The inclusion of any link does not imply endorsement by Cool
                Enterprises Limited of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">6. Modifications</h2>
              <p>
                Cool Enterprises Limited may revise these terms of service for its website at any time without notice. By
                using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Malawi and you
                irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">8. Domain Registration and Hosting Services</h2>
              <p>
                Cool Enterprises Limited provides domain registration and hosting services subject to the following
                additional terms:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Domain registrations are subject to availability and the rules of the relevant domain registry.</li>
                <li>Hosting services are provided on an annual subscription basis and are subject to renewal.</li>
                <li>We reserve the right to suspend or terminate services for violation of our terms or non-payment.</li>
                <li>Customers are responsible for the content hosted on their domains and must comply with all applicable laws.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-primary poppins mb-2">9. Contact Us</h2>
              <p>For questions about these terms, you can reach us:</p>
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