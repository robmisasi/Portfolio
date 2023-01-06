import { useTranslation } from "react-i18next";

const SelfSummary = () => {
  const { t } = useTranslation();
  return (
    <div className="py-24">
      <p className="text-9xl pb-24">{t("home.title")}</p>
      <p className="text-9xl text-slate-600">{t("home.subtitle")}</p>
    </div>
  );
};

export default SelfSummary;
