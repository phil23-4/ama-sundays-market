import Link from "next/link";
import { useState } from "react";
import Partners from "../ui/partners";
import SuccessCard from "../ui/success";
import TermsModal from "../ui/termsModal";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Register");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstName.length <= 0) {
      tempErrors["firstName"] = true;
      isValid = false;
    }
    if (lastName.length <= 0) {
      tempErrors["lastName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (company.length <= 0) {
      tempErrors["company"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (address.length <= 0) {
      tempErrors["address"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };
  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Registering");
      const res = await fetch("/api/register", {
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          company: company,
          phone: phone,
          address: address,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Try again!");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Registered");
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setCompany("");
      setPhone("");
      setEmail("");
      setAddress("");
    }
  };

  return (
    // <!-- Contact Us -->
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="inline font-display text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Join us
          </h1>
          <p className="mt-1 text-gray-800 dark:text-white md:text-lg">
            We are a weekly Sunday farmers market that helps to expand markets
            and value for the farmer by bringing produce closer and fresher to
            the consumer
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What can I expect?
            </h2>

            <ul className="mt-2 space-y-2">
              <li className="flex space-x-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-white/70"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-600 dark:text-white/70">
                  A clean and secure local marketplace to retail products
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-white/70"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-600 dark:text-white/70">
                  Direct interaction with the consumer{" "}
                  {"(no unscrupulous middlemans)"}
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-white/70"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-600 dark:text-white/70">
                  Relationship building with consumers
                </span>
              </li>
            </ul>
          </div>

          {/* <!-- Brands --> */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Partners:
            </h2>

            <div className="-m-3 mt-2 flex max-w-lg flex-wrap">
              <Partners />
            </div>
          </div>
          {/* <!-- End Brands --> */}
        </div>
        {/* <!-- End Col --> */}

        <div className="relative">
          {/* <!-- Card --> */}
          <div className="flex flex-col rounded-xl border p-4 dark:border-gray-700 sm:p-6 lg:p-10">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Applicant information
            </h2>

            <form id="registrationForm" onSubmit={handleSubmit}>
              <div className="mt-6 grid gap-4 lg:gap-6">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      name="firstName"
                      required
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      name="lastName"
                      required
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                    className="required block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                  />
                </div>

                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                      placeholder="Company name"
                      required
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      placeholder="+263713678222"
                      required
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Physical Address
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="55 Hudson Avenue Harare, Zimbabwe"
                    name="address"
                    rows="4"
                    required
                    className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                  ></textarea>
                </div>
              </div>
              {/* <!-- End Grid --> */}

              {/* <!-- Checkbox --> */}
              <div className="mt-3 flex">
                <div className="flex">
                  <input
                    id="agree"
                    name="agree"
                    value={agree}
                    type="checkbox"
                    required
                    title="Please read and accept the terms and conditions first"
                    message="Please read and accept the terms and conditions"
                    className="mt-1.5 shrink-0 cursor-pointer rounded border-gray-200 text-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-primary/90 dark:checked:bg-primary/90 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="agree"
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    By submitting this form I have read and acknowledged the{" "}
                    <Link href="#">
                      <label
                        data-hs-overlay="#hs-regulations"
                        className="font-medium text-primary/90 decoration-2 hover:underline"
                      >
                        Terms and Conditions
                      </label>
                    </Link>
                  </label>
                </div>
                <TermsModal />
              </div>
              {/* <!-- End Checkbox --> */}

              <div className="mt-6 grid">
                <button
                  type="submit"
                  value={buttonText}
                  onChange={(e) => {
                    setButtonText(e.target.value);
                  }}
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-primary/80 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 lg:text-base"
                >
                  <div className="w-auto p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </div>
                  {buttonText}
                </button>
              </div>
              <div className="text-left">
                {showSuccessMessage && <SuccessCard />}

                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div>
            </form>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-white">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
    // <!-- End Contact Us -->
  );
}
