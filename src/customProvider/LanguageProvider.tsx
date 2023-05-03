//@ts-nocheck

import Layout from "@/components/Layout";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export const defaultLocale = "en";
export const locales = ["ru", "en"];
export const LanguageContext = createContext([]);

type Props = {
  children: ReactNode;
};
export const LanguageProvider: FC<Props> = ({ children }) => {
  const [locale, setLocale] = useState("ru");
  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};
