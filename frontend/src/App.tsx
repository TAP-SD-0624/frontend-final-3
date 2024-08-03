import { changeLanguage } from "./i18n/locales";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}

export default App;
