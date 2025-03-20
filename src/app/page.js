import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Membership from "./components/Membership/Membership";
import Faq from "./components/FAQ/Faq";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Features></Features>
      <Membership></Membership>
      <Faq></Faq>
    </main>
  );
}
