import First from "../assets/images/First.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import { useTranslation } from "react-i18next";

function Support() {
  const { t } = useTranslation();

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
      <div className="flex flex-col gap-y-12 sm:gap-y-0">
        <section className="relative overflow-hidden">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
              <div className="text-start flex flex-col gap-y-1" >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#249192] leading-normal">
                  {t("supportPage.aboutUs.title")}
                </h1>

                <p className="mt-3 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
                  {t("supportPage.aboutUs.description")}
                </p>

                <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-4 lg:w-1/2 mx-auto items-center">
                  <a href="#" className="flex justify-center">
                    <img
                      className="rounded-lg h-[30px] sm:h-[40px]"
                      src={google}
                      alt="Google Play Store"
                    />
                  </a>

                  <a href="#" className="flex justify-center">
                    <img
                      className="rounded-lg h-[30px] sm:h-[40px]"
                      src={apple}
                      alt="Apple App Store"
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

        <p className="-mt-12 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
          {t("supportPage.aboutUs.teamDescription")}
        </p>

        <div className="mt-6 text-start flex flex-col gap-y-1" >
          <h1 className="text-xl sm:text-2xl font-semibold text-[#249192] leading-normal">
            {t("supportPage.whyUs.title")}
          </h1>

          <p className="mt-3 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-8">
            {t("supportPage.whyUs.description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-4 mx-auto sm:grid-cols-2 sm:gap-x-12">
          <div className="flex flex-col gap-y-1 min-w-[250px] max-w-[350px] border-[1px] border-[#007D7B] p-6 rounded-md">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192] text-center">
              {t("supportPage.vision.title")}
            </p>
            <p className="mt-3 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-6">
              {t("supportPage.vision.text")}
            </p>
          </div>

          <div className="flex flex-col gap-y-1 min-w-[250px] max-w-[350px] border-[1px] border-[#007D7B] p-6 rounded-md">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#249192] text-center">
              {t("supportPage.mission.title")}
            </p>
            <p className="mt-3 text-[.8rem] sm:text-[.9rem] max-w-6xl mx-auto lg:mx-0 leading-6">
              {t("supportPage.mission.text")}
            </p>
          </div>
        </div>

        <div className="mt-6 text-start flex flex-col gap-y-1" >
          <h1 className="text-lg sm:text-xl font-semibold text-[#249192] leading-normal">
            {t("supportPage.contact.title")}
          </h1>

          <p className="mt-3 text-[.7rem] sm:text-[.8rem] max-w-6xl mx-auto lg:mx-0 leading-2">
            {t("supportPage.contact.description")}
          </p>

          <form className="mt-10 flex flex-col gap-y-4 min-w-[250px] max-w-3xl sm:ms-[19%] border-[1px] border-[#007D7B] p-3 rounded-md">
            <input
              type="text"
              required
              className="border-[.5px] border-[#008081] bg-inherit text-white w-full placeholder:text-[#008081] rounded-md px-2 py-1"
              placeholder={t("supportPage.contact.form.fullName")}
            />
            <input
              type="email"
              required
              className="border-[.5px] border-[#008081] bg-inherit text-white w-full placeholder:text-[#008081] rounded-md px-2 py-1"
              placeholder={t("supportPage.contact.form.email")}
            />
            <input
              type="text"
              required
              className="border-[.5px] border-[#008081] bg-inherit text-white w-full placeholder:text-[#008081] rounded-md px-2 py-1"
              placeholder={t("supportPage.contact.form.subject")}
            />
            <textarea
              className="border-[.5px] border-[#008081] bg-inherit text-white w-full placeholder:text-[#008081] rounded-md px-2 py-1 min-h-[100px]"
              name="message"
              required
              placeholder={t("supportPage.contact.form.message")}
            ></textarea>
            <button className="w-1/3 mx-auto bg-[#249192] text-white rounded-2xl px-2 py-1 mt-4">
              {t("supportPage.contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
