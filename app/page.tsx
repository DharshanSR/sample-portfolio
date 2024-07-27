import FooterDown from "@/components/Footer/Footer down/footer_down";
import FooterUp from "@/components/Footer/Footer up/footer_up";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <FooterUp />
      <FooterDown />
    </div>
  );
}
