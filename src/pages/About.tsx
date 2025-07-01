import {
  Users,
  Calendar,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  Trophy,
  Target,
} from 'lucide-react';

const About = () => {
  // const [activeTab, setActiveTab] = useState('story');

  const stats = [
    {
      icon: Calendar,
      number: '500+',
      label: 'Events Delivered',
      color: 'text-purple-600',
    },
    {
      icon: Users,
      number: '50K+',
      label: 'Happy Guests',
      color: 'text-pink-600',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Cities Served',
      color: 'text-indigo-600',
    },
    {
      icon: Trophy,
      number: '15+',
      label: 'Industry Awards',
      color: 'text-emerald-600',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description:
        'Every event is crafted with love and attention to detail, ensuring your special moments are truly unforgettable.',
    },
    {
      icon: Sparkles,
      title: 'Creative Excellence',
      description:
        'We transform ordinary spaces into extraordinary experiences through innovative design and creative storytelling.',
    },
    {
      icon: CheckCircle,
      title: 'Flawless Execution',
      description:
        'From concept to completion, our meticulous planning ensures every detail is perfect on your special day.',
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description:
        'Your vision is our mission. We listen, understand, and deliver experiences that exceed expectations.',
    },
  ];

  const team = [
    {
      name: 'Sarah Martinez',
      role: 'Founder & Creative Director',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: '10+ years of creating magical moments with a background in luxury hospitality.',
      specialty: 'Luxury Weddings & Corporate Events',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Master of logistics with expertise in large-scale event coordination.',
      specialty: 'Conference & Festival Management',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning designer who transforms spaces into immersive experiences.',
      specialty: 'Themed Events & Interior Design',
    },
    {
      name: 'David Thompson',
      role: 'Technology Director',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Integrates cutting-edge technology to enhance every aspect of your event.',
      specialty: 'AV Production & Digital Experiences',
    },
  ];

  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      description:
        'Founded EventMagic with a dream to create unforgettable experiences',
    },
    {
      year: '2020',
      title: 'Virtual Innovation',
      description: 'Pioneered hybrid and virtual events during the pandemic',
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Named "Event Company of the Year" by Industry Leaders',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ cities',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Crafting Dreams Into Reality
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just event planners – we're dream architects, memory
            makers, and the creative force behind life's most precious moments.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('story')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Our Story</span>
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg border-2 border-gray-200 hover:border-purple-300"
            >
              Meet Our Team
            </button>
          </div> */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`inline-flex p-3 rounded-full bg-gray-100 mb-4`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leaders, discover the passion
              and dedication that drives us forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  The Vision That Started It All
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  In 2019, our founder Sarah Martinez had a simple yet powerful
                  vision: every celebration deserves to be extraordinary. After
                  witnessing countless generic events that lacked soul and
                  personality, she set out to create a company that would
                  transform ordinary moments into lifelong memories.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small team of passionate creatives has grown
                  into a full-service event management company, but our core
                  mission remains unchanged: to craft experiences that touch
                  hearts and create lasting joy.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed opacity-90">
                  To create extraordinary experiences that celebrate life's most
                  precious moments, bringing together people, emotions, and
                  memories in perfect harmony through innovative design,
                  flawless execution, and genuine care.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-4 rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
                  alt="Event Planning"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 p-4 rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every event
              we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped who we are today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-pink-600 h-full rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Dream Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals who bring creativity, expertise, and
              magic to every event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-2 rounded-full">
                    <p className="text-purple-700 text-xs font-medium">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's turn your vision into an unforgettable experience that will be
            talked about for years to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>Start Planning</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
