import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"; // Import Link for navigation
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

// Meta function for setting the document title and description.
export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Remix App" },
    { name: "description", content: "Get in touch with us" },
  ];
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Use Header component */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-6 py-12 bg-whit ">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hi, feel free to reach out.
          </p>

          {/* Contact Form */}
          <form className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-2 dark:focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-2 dark:focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-100 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-2 dark:focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Use Footer component */}
      <Footer />
    </div>
  );
}
