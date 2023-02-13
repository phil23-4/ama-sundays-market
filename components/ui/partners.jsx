import Image from "next/image";

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
export default function Partners() {
  return (
    <div className="-m-3 mt-0 flex max-w-md flex-wrap dark:mt-1  lg:max-w-lg">
      {logos.map((partner, i) => (
        <div key={i} className="w-full p-3 md:w-1/2 lg:w-1/4">
          <div className=" flex h-full cursor-pointer items-center justify-center rounded-2xl bg-transparent py-3 px-4 hover:-translate-y-2">
            <Image
              key={partner.name}
              className="aspect-w-1/2 aspect-h-9"
              src={partner.image}
              alt={partner.alt}
              quality={80}
              loading={"lazy"}
              height={120}
              width={120}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
