import Link from "next/link";

export default function SuccessCard() {
  return (
    <div
      id="message"
      className="hs-overlay fixed top-0 left-0 right-0 z-[60] mx-auto w-full overflow-y-auto overflow-x-hidden p-6 sm:max-w-xl"
    >
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex gap-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden w-16 flex-shrink-0 sm:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>

          <div className="grow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Registration successful 🎉
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Thank you for your subscription. Our sales team will get back to
              you in 1-2 business days..
            </p>
            <div className="mt-5 inline-flex justify-center gap-x-2">
              <button
                data-hs-remove-element="#message"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-2 px-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
