import { useState } from "react";
import { Switch } from "@headlessui/react"; // Import a switch for the agreement checkbox
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure to import AOS styles
import { sendEmails } from "../email";

AOS.init();

const OrderNowModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // To toggle the modal visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    const result = await sendEmails(formData);

    if (result.success) {
      setStatusMessage("Order placed successfully!");
      setIsOpen(false);
      setTimeout(() => {
        setIsOpen(false); // Close modal after success
      }, 1000); // Delay to allow user to read success message
    } else {
      setStatusMessage("Failed to place the order. Please try again.");
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Button to Open Modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
      >
        Order Now
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
            <h2 className="text-2xl font-semibold mb-4">Place Your Order</h2>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 max-w-xl border border-gray-300 p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              {/* First Name */}
              <div data-aos="fade-up" data-aos-delay="100">
                <label
                  htmlFor="first-name"
                  className="block text-lg font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div data-aos="fade-up" data-aos-delay="150" className="mt-6">
                <label
                  htmlFor="last-name"
                  className="block text-lg font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div data-aos="fade-up" data-aos-delay="200" className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div data-aos="fade-up" data-aos-delay="250" className="mt-6">
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold leading-6 text-gray-900"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  required
                />
              </div>

              {/* Address */}
              <div data-aos="fade-up" data-aos-delay="300" className="mt-6">
                <label
                  htmlFor="address"
                  className="block text-lg font-semibold leading-6 text-gray-900"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  required
                ></textarea>
              </div>

              {/* Agreement Checkbox */}
              <div className="mt-6 flex items-center gap-x-4">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={`${
                    agreed ? "bg-indigo-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                >
                  <span
                    className={`${
                      agreed ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                  />
                </Switch>
                <span className="text-sm leading-6 text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    terms and conditions
                  </a>
                  .
                </span>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:bg-gray-300"
                >
                  Submit Order
                </button>
              </div>

              {/* Status Message */}
              <div
                data-aos="fade-up"
                className="mt-4 text-center text-sm text-gray-500"
              >
                {statusMessage && <p>{statusMessage}</p>}
              </div>
            </form>

            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderNowModal;
