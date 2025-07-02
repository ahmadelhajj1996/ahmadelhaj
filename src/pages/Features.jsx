import first1 from "../assets/images/first1.png";
import second1 from "../assets/images/second1.png";
import second2 from "../assets/images/second2.png";
import second3 from "../assets/images/second3.png";
import second4 from "../assets/images/second4.png";
import second5 from "../assets/images/second5.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="flex flex-col gap-y-4 sm:gap-y-0">
          <section className="relative overflow-hidden">
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                <div className="text-start flex flex-col gap-y-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#249192] leading-normal">
                    {t("featuresSection.title")}
                  </h1>

                  <p className="mt-3 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                    {t("featuresSection.description")}
                  </p>

                  <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-4 lg:w-1/2 mx-auto items-center">
                    <a href="#" className="flex justify-center">
                      <img
                        className="rounded-lg h-[30px] sm:h-[40px]"
                        src={google}
                        alt="Google Play"
                      />
                    </a>

                    <a href="#" className="flex justify-center">
                      <img
                        className="rounded-lg h-[30px] sm:h-[40px]"
                        src={apple}
                        alt="App Store"
                      />
                    </a>
                  </div>
                </div>

                <div className="w-3/4 mx-auto lg:h-[40rem]">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={first1}
                      alt="App screenshot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden flex flex-col gap-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-12">
              <div className="text-start flex flex-col gap-y-1 lg:gap-y-4 justify-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192]">
                  {t("featuresSection.feature1.title")}
                </h1>

                <p className="mt-6 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                  {t("featuresSection.feature1.description")}
                </p>
              </div>

              <div className="w-3/4 mx-auto">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second1}
                    alt={t("featuresSection.feature1.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-12">
              <div className="w-3/4 hidden lg:flex">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second2}
                    alt={t("featuresSection.feature2.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="text-start flex flex-col gap-y-1 lg:gap-y-4 justify-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192]">
                  {t("featuresSection.feature2.title")}
                </h1>

                <p className="mt-6 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                  {t("featuresSection.feature2.description")}
                </p>
              </div>
              <div className="w-3/4 mx-auto lg:hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second2}
                    alt={t("featuresSection.feature2.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-12">
              <div className="text-start flex flex-col gap-y-1 lg:gap-y-4 justify-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192]">
                  {t("featuresSection.feature3.title")}
                </h1>

                <p className="mt-6 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                  {t("featuresSection.feature3.description")}
                </p>
              </div>

              <div className="w-3/4 mx-auto">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second3}
                    alt={t("featuresSection.feature3.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-12">
              <div className="w-3/4 hidden lg:flex">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second4}
                    alt={t("featuresSection.feature4.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="text-start flex flex-col gap-y-1 lg:gap-y-4 justify-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192]">
                  {t("featuresSection.feature4.title")}
                </h1>

                <p className="mt-6 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                  {t("featuresSection.feature4.description")}
                </p>
              </div>
              <div className="w-3/4 mx-auto lg:hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second4}
                    alt={t("featuresSection.feature4.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-12">
              <div className="text-start flex flex-col gap-y-1 lg:gap-y-4 justify-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192]">
                  {t("featuresSection.feature5.title")}
                </h1>

                <p className="mt-6 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                  {t("featuresSection.feature5.description")}
                </p>
              </div>

              <div className="w-3/4 mx-auto">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={second5}
                    alt={t("featuresSection.feature5.title")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Features;
