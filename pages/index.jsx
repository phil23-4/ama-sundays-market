import Image from "next/image";
import Layout from "../components/layout";
import PricingCard from "../components/Pricing/pricing";
import Service from "../components/service";
import Hero from "../components/ui/hero";
import Vision from "../components/vision";

const logos = [
  { name: "AMA", image: "/assets/logos/ama.jfif", alt: "AMA logo" },
  { name: "ARDA", image: "/assets/logos/arda.png", alt: "ARDA logo" },
  {
    name: "SILO FOODS",
    image: "/assets/logos/silofoods.png",
    alt: "SILO Foods logo",
  },
  {
    name: "AGRI SEEDS",
    image: "/assets/logos/zfc.png",
    alt: "AGRI Bank logo",
  },
];

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Vision />
      <Service />
      {/* <PricingCard /> */}
      <div className="mx-auto max-w-[95rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* <!-- Title --> */}

        <div className="load-animation reveal mx-auto mb-20 max-w-xl text-center">
          <h2
            className="font-heading mx-auto mb-4 max-w-xl text-3xl font-bold leading-tight dark:text-white md:text-5xl"
            data-config-id="auto-txt-1-2"
          >
            Our Partners
          </h2>
        </div>

        {/* <!-- End Title --> */}

        <div className="relative xl:mx-auto xl:w-11/12">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-2">
            {/* <!-- Card --> */}
            {logos.map((partner, i) => (
              <div key={i} className="w-full p-3 hover:-translate-y-1">
                <div className=" flex h-full cursor-pointer items-center justify-center rounded-2xl bg-transparent py-3 px-4">
                  <Image
                    key={partner.name}
                    src={partner.image}
                    alt={partner.alt}
                    quality={80}
                    loading={"lazy"}
                    height={240}
                    width={240}
                  />
                </div>
              </div>
            ))}
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- End SVG Element --> */}
        </div>
      </div>
    </Layout>
  );
}
