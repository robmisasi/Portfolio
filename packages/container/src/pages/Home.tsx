import { useTranslation } from "react-i18next";

import SelfSummary from "../components/self-summary/SelfSummary";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12">
        <SelfSummary />
        <p className="text-2xl">{t("home.description")}</p>
      </div>
    </div>
  );
};

export default Home;
