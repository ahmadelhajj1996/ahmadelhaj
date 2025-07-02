import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const { i18n , t  } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang).then(() => {
      document.dir = savedLang === "ar" ? "rtl" : "ltr";
    });
  }, [ i18n]);

  const setLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {
      document.dir = language === "ar" ? "rtl" : "ltr";
      localStorage.setItem("lang", language);    
    });
  };
  return (
    <>
      <div
        className="sticky top-0 z-50 bg-[#121212] w-full h-[80px] sm:h-[100px]"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="relative w-full h-full">
          <img
            className="absolute top-[10px] end-[10px] sm:top-[16px] sm:end-[16px] w-[40px] h-[45px] sm:w-[55px] sm:h-[65px]"
            src={Logo}
            alt="Logo"
          />
          <button
            className="bg-[#008081] text-[#FFFFFF] rounded-[5px] p-1.5 sm:p-2 
        absolute top-[15px] start-[15px] sm:top-[20px]  
        text-[10px] sm:text-[13px]"
          >
            {t("download_app")}
          </button>
          <div className="lg:hidden absolute start-0 end-0 top-[55px] mx-auto w-fit p-1.5 text-white flex justify-center items-center gap-x-8">
            <p
              className="text-[12px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              {t("home")}
            </p>
            <p
              className="text-[12px] cursor-pointer"
              onClick={() => navigate("/features")}
            >
              {t("features")}
            </p>
            <p
              className="text-[12px] cursor-pointer"
              onClick={() => navigate("/support")}
            >
              {t("support")}
            </p>
            <div className="flex gap-x-2">
              <p
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  setLanguage("ar");
                }}
              >
                {t("arabic")}
              </p>
              <p
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  setLanguage("en");
                }}
              >
                {t("english")}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex absolute start-[250px] top-[20px] p-1.5 text-white justify-center items-center gap-x-20">
            <p
              className="text-[15px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              {t("home")}
            </p>
            <p
              className="text-[15px] cursor-pointer"
              onClick={() => navigate("/features")}
            >
              {t("features")}
            </p>
            <p
              className="text-[15px] cursor-pointer"
              onClick={() => navigate("/support")}
            >
              {t("support")}
            </p>
            <div className="flex gap-x-4">
              <p
                className="text-[15px] cursor-pointer"
                onClick={() => {
                  setLanguage("ar");
                }}
              >
                {t("arabic")}
              </p>
              <p
                className="text-[15px] cursor-pointer"
                onClick={() => {
                  setLanguage("en");
                }}
              >
                {t("english")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
