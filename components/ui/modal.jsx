const responsibilities = [
  " Vendors are responsible for their own sales taxes, licenses, permits and fees required for operation and will abide by all local, state and federal laws.",
  "Food shall be clean, wholesome and safe for human consumption and shall be handled, stored, transported and offered for sale in a sanitary manner.",
  "Food products can be cut or opened for displays at the market if properly wrapped, but cannot be sold. Free samples may be given to customers in accordance with city council health regulations. Disposable utensils (i.e., napkins, toothpicks, etc.) will be provided and disposed of by the vendor.",
  "Each vendor is responsible for keeping his or her own space clean and attractive and staying within his or her designated area. Failure to maintain space upkeep and cleanliness may result in disciplinary action. Upon closing of the market, spaces are to be cleaned and swept by the vendor.",
  "Vendors must supply their own sales equipment; tables, chairs, display racks, display signs, bags for customers and money for change. Use of electrical gadgets requires market master approval.",
  "Vendors are required to display a license or permit, price list and a sign posting their name and location of their farm. Signage is subject to the approval of the Market Master.",
  "Vendors are restricted from attracting attention to items for sale by outcries in a loud or annoying, rude or offending manner.",
  "Each vendor may set his or her own prices. Prices should be set in keeping with customer satisfaction and consideration of other market vendors.",
  "Vendor will occupy and attend assigned space for market&apos;s entirety, from the opening bell to its scheduled closing.",
  " The Market encourages a team philosophy and a cooperative spirit. Vendors are strongly advised to refrain from openly criticizing or challenging other vendor&apos;s products, displays, pricing, etc. ",
];
export default function Modal() {
  return (
    <>
      {" "}
      <div className="text-center">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          data-hs-overlay="#hs-regulations"
        >
          Open modal
        </button>
      </div>
      <div
        id="hs-regulations"
        className="hs-overlay fixed top-0 left-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <div className="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg lg:mx-auto lg:w-full lg:max-w-5xl">
          <div className="relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="absolute top-2 right-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-regulations"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-3.5 w-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-10">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                  AMA FARMER&apos;S MARKET RULES AND REGULATIONS
                </h3>
              </div>

              <div className="space-y-4">
                <h4 className="mb-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-400">
                  General
                </h4>
                {/* <!-- Card --> */}
                <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <label
                    htmlFor="hs-account-activity"
                    className="flex p-4 md:p-5"
                  >
                    <span className="mr-5 flex">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                      </svg>

                      <span className="ml-5">
                        <span className="block font-medium text-gray-800 dark:text-gray-200">
                          Check-In Requirements
                        </span>
                        <span className="block text-sm text-gray-500">
                          Vendors who need to off-load their vehicle in the
                          market area must arrive to the market no later than
                          8:30 a.m. Vendors who do not need to drive into the
                          market area are to arrive no later than 9:30 a.m. or
                          by arrangement with the Market Master. Late arrivals
                          risk the loss of access to the parking lot for
                          off-loading. Vendors are to be set up by 9:45 a.m. for
                          market opening at 10:00 a.m. Vendors who will be late
                          should notify the Market Master as soon as possible.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                {/* <!-- End Card --> */}
                {/* <!-- Card --> */}
                <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <label
                    htmlFor="hs-meetups-near-you"
                    className="flex p-4 md:p-5"
                  >
                    <span className="mr-5 flex">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                      </svg>

                      <span className="ml-5">
                        <span className="block font-medium text-gray-800 dark:text-gray-200">
                          Products to be sold
                        </span>
                        <span className="block text-sm text-gray-500">
                          The Market Master, in conference with the other
                          partners will determine, on a seasonal basis, the
                          overall size of the market in terms of the number of
                          seasonal and daily vendors. Based on this number, the
                          Market Master will select all vendors with a priority
                          towards produce, florists and greenhouses, food items
                          and handmade arts and crafts in that order with an
                          emphasis on those that are locally-owned.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                {/* <!-- End Card --> */}
                {/* <!-- Card --> */}
                <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <label
                    htmlFor="hs-ama-communication"
                    className="flex p-4 md:p-5"
                  >
                    <span className="mr-5 flex">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>

                      <span className="ml-5">
                        <span className="block font-medium text-gray-800 dark:text-gray-200">
                          Application for the Market
                        </span>
                        <span className="block text-sm text-gray-500">
                          All interested vendors must submit an application to
                          participate in the Market. If they are accepted as a
                          full season vendor, they will have a reserved,
                          non-specific space. Daily vendors will be assigned
                          space as is available. Request for specific locations
                          will be considered and will be assigned at the
                          discretion of the Market Master. If one is accepted as
                          a full seasonal vendor, he or she will be billed and
                          payment will be due within 30 days of the invoice
                          date. Daily vendors will be required to pay the $10.00
                          daily rate for a 10&apos; x 10&apos; space at the time
                          of check-in pending approval of the Market Master.
                          They will be issued a receipt for daily fees.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                {/* <!-- End Card --> */}
                {/* <!-- Card --> */}
                <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <label
                    htmlFor="hs-ama-communication"
                    className="flex p-4 md:p-5"
                  >
                    <span className="mr-5 flex">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>

                      <span className="ml-5">
                        <span className="block font-medium text-gray-800 dark:text-gray-200">
                          Rights Reserved by the Market Master
                        </span>
                        <span className="block text-sm text-gray-500">
                          The Market Master reserves the right to reject a
                          vendor application if, in the Market Master&apos;s
                          judgment, the goods and merchandise are not compatible
                          with the overall concept of the market or are
                          inappropriate. The Market Master reserves the right to
                          immediately deny a vendor the privilege of selling at
                          the market. Reasons may include misrepresentation of
                          products, poor quality of products or produce,
                          nonpayment of fees, disorderly conduct or failure to
                          heed the Market Master&apos;s direction.
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                {/* <!-- End Card --> */}
                <h4 className="mb-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-400">
                  Advanced
                </h4>
                {/* <!-- Card --> */}
                <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <label
                    htmlFor="hs-ama-communication"
                    className="flex p-4 md:p-5"
                  >
                    <span className="mr-5 flex">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>

                      <span className="ml-5">
                        <span className="block font-medium text-gray-800 dark:text-gray-200">
                          Vendor Responsibilities
                        </span>
                        <span className="block text-sm text-gray-500">
                          <ol className="list-decimal">
                            {responsibilities.map((rule, i) => (
                              <li key={i}>{rule}</li>
                            ))}

                            {/* <!-- ... --> */}
                          </ol>
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                {/* <!-- End Card --> */}
              </div>
            </div>

            <div className="flex items-center justify-end gap-x-2 border-t bg-gray-50 py-3 px-4 dark:border-gray-700 dark:bg-gray-800">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border bg-white py-2.5 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-regulations"
              >
                Cancel
              </button>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary py-2.5 px-4 text-sm font-semibold text-white transition-all hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
