import { Roboto, Ubuntu_Mono } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});
