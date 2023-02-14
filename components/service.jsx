import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Outdoor marketplace",
    details:
      "We operate an outdoor facility typically consisting of tables and stands where farmers sell their homegrown produce, plants, and sometimes prepared organic foods and beverages.",
  },
  {
    name: "Aggregation",
    details:
      "Compile products from different suppliers / farms to distribute through a single channel",
  },
  {
    name: "Distribution",
    details: "Store products and transport them to the customer",
  },
  {
    name: "Marketing and sales",
    details:
      "Find buyers, sell and advertise farm produce, and promote farms' brand identities.",
  },
];

export default function Service() {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:w-full">
          <h2 className="font-display text-3xl font-bold text-gray-800 dark:text-white lg:text-5xl">
            What we offer
          </h2>
          <p className="mt-3 text-gray-800 dark:text-gray-400">
            The AMA Market is in the agribusiness industry and will be involved
            in the sale of a wide range of farm produce from farmers in Harare
            and around the country.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500"
          >
            <>
              Contact us to learn more
              <svg
                className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </>
          </Link>
          <div className="aspect-w-8 aspect-h-4 relative mt-6 rounded-xl shadow-xl shadow-secondary/[.16] md:w-full">
            <Image
              className="rounded-xl py-8 "
              src="/assets/images/ama1.jpg"
              layout="fill"
              quality={80}
              objectFit="contain"
              loading="lazy"
              alt="AMA Sunday Farmers Market"
            />
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className=" col-span-2 space-y-6 lg:space-y-10">
          {/* <!-- Icon Block --> */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* <!-- Icon Block --> */}

            {services.map((service, i) => (
              <>
                {/* <!-- Card --> */}
                <div
                  key={i}
                  className="group flex h-full w-full gap-y-6 rounded-lg p-5 transition-all hover:bg-gray-100 dark:hover:bg-white/[.075]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mt-0.5 mr-6 h-8 w-8 flex-shrink-0 text-gray-800 dark:text-secondary/75 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>

                  <div>
                    <div>
                      <h3 className="block font-bold text-gray-800 dark:text-white">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Card --> */}
              </>
            ))}

            {/* <!-- End Icon Block --> */}
          </div>
          {/* <!-- End Icon Block --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
    //   {/* // <!-- End Icon Blocks --> */}
  );
}
