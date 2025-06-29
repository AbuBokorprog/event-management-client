const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-800">About EventHub</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          EventHub is a modern platform designed to empower communities by
          making event creation and discovery seamless and intuitive. Whether
          you're hosting a local meet-up or a major conference, our tools make
          it easy to plan, promote, and track engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">For Organizers</h3>
            <p className="text-gray-600">
              Easily manage your events and reach your audience with powerful
              tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">For Attendees</h3>
            <p className="text-gray-600">
              Discover and join exciting events happening around you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">For Communities</h3>
            <p className="text-gray-600">
              Connect people with shared interests through engaging experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
