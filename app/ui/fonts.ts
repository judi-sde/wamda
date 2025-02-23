import { Saira, Noto_Kufi_Arabic, Cairo } from "next/font/google";

export const saira = Saira({ subsets: ["latin"], weight: "400" });
export const kufi = Noto_Kufi_Arabic({ subsets: ["latin"], weight: "400" });
export const logoFont = Cairo({ subsets: ["latin", "arabic"], weight: "700" });
