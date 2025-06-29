const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="input"
          ></textarea>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
