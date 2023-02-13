export default function Galleryy() {
  return (
    <section className="mb-4 overflow-hidden text-gray-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="load-animation reveal mx-auto mb-20 max-w-xl text-center">
          <h2
            className="font-heading mx-auto mb-4 max-w-xl text-5xl font-bold leading-tight dark:text-white md:text-5xl"
            data-config-id="auto-txt-1-2"
          >
            Gallery
          </h2>
          <p
            className="mx-auto max-w-2xl text-center leading-loose text-secondary md:text-lg"
            data-config-id="auto-txt-2-2"
          ></p>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/services.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/ama2.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/ama3.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/ama1.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/team1.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/service2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
