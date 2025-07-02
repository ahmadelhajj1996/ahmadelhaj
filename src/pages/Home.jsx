import { useTranslation } from "react-i18next";
import { IoDownloadOutline } from "react-icons/io5";
import First from "../assets/images/First.png";
import first1 from "../assets/images/first1.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import star from "../assets/images/star.png";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate =  useNavigate()
  const { t } = useTranslation();
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="flex flex-col gap-y-12 sm:gap-y-0">
          <section className="relative overflow-hidden">
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                <div className="text-start flex flex-col gap-y-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#249192] leading-normal">
                    {t("heroTitle")}
                  </h1>

                  <p className="mt-3 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                    {t("heroDescription")}
                  </p>

                  <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-4 lg:w-1/2 mx-auto items-center">
                    <a href="#" className="flex justify-center">
                      <img
                        className="rounded-lg h-[30px] sm:h-[40px]"
                        src={google}
                        alt=""
                      />
                    </a>

                    <a href="#" className="flex justify-center">
                      <img
                        className="rounded-lg h-[30px] sm:h-[40px]"
                        src={apple}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="w-3/4 mx-auto lg:h-[40rem]">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={First}
                      alt="App screenshot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden border-[1px] border-[#007D7B] px-4 rounded-2xl lg:border-0">
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                <div className="text-start flex flex-col items-start py-12 sm:py-24 gap-y-8 relative h-full">
                  <div className="flex flex-col items-start gap-y-8 w-full">
                    <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192]">
                      {t("featuresTitle")}
                    </p>

                    <div className="ps-4 flex flex-col gap-y-2">
                      <div className="text-[.8rem] sm:text-[.9rem]  leading-8 flex items-center gap-x-2 ">
                        <span className="text-lg sm:text-xl">*</span>{" "}
                        {t("feature1")}
                      </div>
                      <div className="text-[.8rem] sm:text-[.9rem]  leading-8 flex items-center gap-x-2 ">
                        <span className="text-lg sm:text-xl">*</span>{" "}
                        {t("feature2")}
                      </div>
                      <div className="text-[.8rem] sm:text-[.9rem]  leading-8 flex items-center gap-x-2 ">
                        <span className="text-lg sm:text-xl">*</span>{" "}
                        {t("feature3")}
                      </div>
                      <div className="text-[.8rem] sm:text-[.9rem]  leading-8 flex items-center gap-x-2 ">
                        <span className="text-lg sm:text-xl">*</span>{" "}
                        {t("feature4")}
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-center mt-2 lg:mt-auto lg:mb-20">
                    <button onClick={()=>navigate('/features')} className="bg-[#249192] px-3 py-1 rounded-lg">
                      {t("discoverMore")}
                    </button>
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

          <section className="mt-12 overflow-hidden border-[1px] border-[#007D7B] px-4 rounded-2xl lg:w-[600px] lg:mx-auto">
            <div className="grid grid-cols-2 gap-0 items-start px-0 py-12">
              <div className="flex flex-col gap-y-3 justify-center text-center">
                <p className="text-sm sm:text-base md:text-lg">
                  {t("ratings")}
                </p>
                <img src={star} alt="" className="w-3/4 mx-auto" />
              </div>

              <div className="flex flex-col gap-y-3 justify-center text-center">
                <p className="text-sm sm:text-base md:text-lg">
                  {t("downloads")}
                </p>
                <IoDownloadOutline className="w-10 h-10 mx-auto" />
                <p className="text-xl sm:text-3xl font-bold ps-2">
                  {t("downloadCount")}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
