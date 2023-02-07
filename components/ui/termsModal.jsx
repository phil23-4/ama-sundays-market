const rules = [
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

export default function TermsModal() {
  return (
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
                      className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      // className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                    <span className="ml-5">
                      <span className="block font-medium text-gray-800 dark:text-gray-200">
                        Check-In Requirements
                      </span>
                      <span className="block text-sm text-gray-500">
                        Vendors who need to off-load their vehicle in the market
                        area must arrive to the market no later than 8:30 a.m.
                        Vendors who do not need to drive into the market area
                        are to arrive no later than 9:30 a.m. or by arrangement
                        with the Market Master. Late arrivals risk the loss of
                        access to the parking lot for off-loading. Vendors are
                        to be set up by 9:45 a.m. for market opening at 10:00
                        a.m. Vendors who will be late should notify the Market
                        Master as soon as possible.
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
                      className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    <span className="ml-5">
                      <span className="block font-medium text-gray-800 dark:text-gray-200">
                        Products to be sold
                      </span>
                      <span className="block text-sm text-gray-500">
                        The Market Master, in conference with the other partners
                        will determine, on a seasonal basis, the overall size of
                        the market in terms of the number of seasonal and daily
                        vendors. Based on this number, the Market Master will
                        select all vendors with a priority towards produce,
                        florists and greenhouses, food items and handmade arts
                        and crafts in that order with an emphasis on those that
                        are locally-owned.
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
                      className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                    <span className="ml-5">
                      <span className="block font-medium text-gray-800 dark:text-gray-200">
                        Application for the Market
                      </span>
                      <span className="block text-sm text-gray-500">
                        All interested vendors must submit an application to
                        participate in the Market. If they are accepted as a
                        full season vendor, they will have a reserved,
                        non-specific space. Daily vendors will be assigned space
                        as is available. Request for specific locations will be
                        considered and will be assigned at the discretion of the
                        Market Master. If one is accepted as a full seasonal
                        vendor, he or she will be billed and payment will be due
                        within 30 days of the invoice date. Daily vendors will
                        be required to pay the $10.00 daily rate for a 10&apos;
                        x 10&apos; space at the time of check-in pending
                        approval of the Market Master. They will be issued a
                        receipt for daily fees.
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
                      className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                      />
                    </svg>
                    <span className="ml-5">
                      <span className="block font-medium text-gray-800 dark:text-gray-200">
                        Rights Reserved by the Market Master
                      </span>
                      <span className="block text-sm text-gray-500">
                        The Market Master reserves the right to reject a vendor
                        application if, in the Market Master&apos;s judgment,
                        the goods and merchandise are not compatible with the
                        overall concept of the market or are inappropriate. The
                        Market Master reserves the right to immediately deny a
                        vendor the privilege of selling at the market. Reasons
                        may include misrepresentation of products, poor quality
                        of products or produce, nonpayment of fees, disorderly
                        conduct or failure to heed the Market Master&apos;s
                        direction.
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
                    {/* className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500" */}
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      // className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>

                    <span className="ml-5">
                      <span className="block font-medium text-gray-800 dark:text-gray-200">
                        Vendor Responsibilities
                      </span>
                      <span className="block text-sm text-gray-500">
                        <ol className="list-decimal">
                          {rules.map((rule, i) => (
                            <li key={i} className="p-2">
                              {rule}
                            </li>
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
  );
}
