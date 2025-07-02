import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigationLinks = [
    { path: "/", key: "home" },
    { path: "/features", key: "features" },
    { path: "/support", key: "support" },
    { path: "/privacy", key: "privacyPolicy" },
  ];

 

  return (
    <footer className="bg-inherit border-t-[1px] border-[#007D7B] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-16 gap-8">
          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-white text-sm hover:text-[#249192] transition-colors duration-200"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

 
          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {t("contactInfo")}
            </h3>
            <address className="not-italic text-white text-sm space-y-2">
              <p>123 App Street</p>
              <p>Tech City, TC 10001</p>
              <p>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-[#249192]"
                >
                  info@example.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-[#249192]">
                  +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-[#007D7B] text-center text-white text-sm">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
