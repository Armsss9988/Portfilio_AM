import ThreeModel from "@/3D/ThreeModel";
import MailModal from "@/shared/UI/MailModal/MailModal";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full py-8 h-[40%] lg:h-dvh flex flex-col items-center justify-center text-center px-4 md:px-12 lg:flex-row lg:justify-around overflow-hidden bg-[var(--color-background)]"
    >
      <div className="relative z-10 max-w-xl w-full">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[var(--color-primary)] shadow-lg">
            <Image
              src="/anh.jpg"
              alt="Your Portrait"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] leading-tight">
            Lê Anh Minh
            <span className="block text-lg md:text-2xl font-light mt-2 text-[var(--color-primary)]">
              Fullstack Developer
            </span>
          </h1>

          <p className="text-[var(--color-foreground)]/80 text-sm md:text-base max-w-xl">
            I code the web of tomorrow.
          </p>

          <div className="flex flex-row gap-4 mt-4">
            <a
              href="/LAM_Intern_42025.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-[var(--color-background)] rounded-xl font-semibold hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300"
            >
              <ArrowDownToLine size={18} /> Download CV
            </a>
            <MailModal />
          </div>
        </div>
      </div>
      <ThreeModel />
    </section>
  );
};

export default Hero;
