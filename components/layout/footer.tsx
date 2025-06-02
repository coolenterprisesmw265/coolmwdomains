import Link from "next/link"
import {Facebook, Linkedin, Phone, Mail, MapPin, Twitter, Instagram} from "lucide-react"
import Image from "next/image";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Quick Links */}
          <div className={"flex flex-col"}>
            <p className="text-[16px] text-slate-100">
              Get Secure .mw Domain and Web Hosting in Malawi
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-foreground border-brand-primary border-2 rounded-full p-2"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-foreground border-brand-primary border-2 rounded-full p-2"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-foreground border-brand-primary border-2 rounded-full p-2"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <Link href={"/"} className="mt-6">
              <Image src={"/logo/SVG/coolmwdomains-logo-secondary.svg"} alt={"Logo Cool Enterprises Limited"} width={500} height={500} className={"w-auto h-10"} />
            </Link>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hosting" className="hover:text-slate-300 transition">
                  Hosting Packages
                </Link>
              </li>
              <li>
                <Link href="/register-domain" className="hover:text-slate-300 transition">
                  Domain Registration
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-slate-300 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-slate-300 transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company Info</h3>
            <div className="flex items-start space-x-2 mb-2">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Area 3, Lilongwe, Malawi</span>
            </div>
            <p className="mt-2">Registered ICT Solutions Provider in Malawi</p>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-5 w-5" />
              <span>+265 999 362 633</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>support@coolenterprisesmw.com</span>
            </div>
          </div>


        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/terms" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="/privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="/refund-policy" className="hover:text-slate-300 transition">
              Refund Policy
            </Link>
          </div>
          <p className="text-center text-brand-primary text-sm font-semibold poppins">© 2025 <Link href={"https://coolenterprisesmw.com"} className={"text-underline"}>Cool Enterprises Limited.</Link> All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
