import { Montserrat, Plus_Jakarta_Sans, Quicksand } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const quicksand = Quicksand({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });
