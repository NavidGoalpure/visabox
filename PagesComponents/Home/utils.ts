import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
export function GsapSectionAnimation_1(section:string) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    `.${section}-text-section`,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: `.${section}-text-section`,
        start: "center bottom",
      },
    }
  );
  gsap.fromTo(
    `.${section}-card-section`,
    {
      opacity: 0,
      y: 70,
    },
    {
      delay: 0.2,
      opacity: 1,
      y: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: `.${section}-card-section`,
        start: "center bottom",
      },
    }
  );
}
export function GsapSectionAnimation_2(section: string) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    `.${section}-text-section`,
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: `.${section}-text-section`,
        start: "center bottom",
      },
    }
  );
  gsap.fromTo(
    `.${section}-card-section`,
    {
      opacity: 0,
      y: 70,
    },
    {
      delay: 0.2,
      opacity: 1,
      y: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: `.${section}-card-section`,
        start: "center bottom",
      },
    }
  );
}
