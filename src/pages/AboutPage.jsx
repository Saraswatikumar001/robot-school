import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

function Breadcrumbs({ items = [] }) {
    return (
        <nav className="w-full" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
                {items.map((item, idx) => (
                    <li key={item.href ?? idx} className="flex items-center">
                        {idx !== 0 && (
                            <span className="mx-2 text-gray-400" aria-hidden="true">/</span>
                        )}
                        {item.href ? (
                            <a
                                href={item.href}
                                className="text-gray-700 hover:text-[#fa8b41] transition-colors"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span className="font-medium text-[#04394e]">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-[#fa8b41] bg-orange-50 px-3 py-1 text-xs font-medium text-[#fa8b41]">
        {children}
    </span>
);

const ValueCard = ({ icon, title, children }) => (
    <div className="relative rounded-2xl bg-[#fa8b41] p-6 shadow-md text-center transition hover:-translate-y-1">
        <div className="mb-3 text-3xl">{icon}</div>
        <h4 className="text-2xl font-bold text-[#04394e]">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-[white]">{children}</p>
        <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-tr from-orange-200 to-indigo-200 opacity-40 blur-2xl" />
    </div>
);

const members = [
    {
        name: "Meet Our Makers",
        img: "https://media.istockphoto.com/id/690657078/photo/african-american-and-hispanic-students-build-a-robot-together.jpg?s=612x612&w=0&k=20&c=FGYyqOANPPwdMGwUBiBRgfN_oeReMJ_2j7u8kyOktS8=",
    },
    {
        name: "Brains Behind the Bots",
        img: "https://technobotics.in/wp-content/uploads/2024/08/Robotics-class-1.png",
    },
    {
        name: "Dream. Build. Inspire.",
        img: "https://media.istockphoto.com/id/640268438/photo/pupils-in-science-lesson-studying-robotics.jpg?s=612x612&w=0&k=20&c=ijG-qW4dZDTYceBeNdDLZN6iBS5evvikfGxTz1X-Baw=",
    },
    {
        name: "Team of Tech Explorers",
        img: "https://media.istockphoto.com/id/1152502981/photo/turkish-student-group-are-developing-the-robot-in-the-classrom.jpg?s=612x612&w=0&k=20&c=_gv59WkLFNLkwA5pl0n5tWX4CAwAsV6XdMt2UsGj5aw=",
    },
    {
        name: "Building the Future Together",
        img: "https://images.stockcake.com/public/1/e/7/1e7cb40a-a1db-4e6e-af2a-fe704fb25c26_medium/robot-classroom-interaction-stockcake.jpg",
    },
    {
        name: "Meet the Robo Crew",
        img: "https://rxiedu.com/wp-content/uploads/2024/10/Leonardo_Phoenix_A_vibrant_and_lively_robotics_class_for_kids_0.jpg",
    },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280, // large screens (lg)
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1024, // tablets
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768, // mobile
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480, // small mobile
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-indigo-50">
            <div className="mx-auto w-full max-w-7xl px-6 py-10">
                {/* Breadcrumbs */}
                <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

                {/* Hero Section */}
                <section className="relative mt-8 grid gap-10 md:grid-cols-2 items-center">
                    <div>
                        <Badge>About Roboticks School</Badge>
                        <h1 className="mt-4 text-4xl font-extrabold text-[#04394e] sm:text-5xl">
                            Nurturing Tomorrow’s Innovators
                        </h1>
                        <p className="mt-4 text-lg text-gray-700 max-w-lg">
                            At RoboKids, we blend creativity and technology to make STEM joyful,
                            playful, and inspiring for kids of all ages.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="#mission"
                                className="rounded-xl bg-[#fa8b41] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-orange-400"
                            >
                                Our Mission
                            </a>
                            <a
                                href="#values"
                                className="rounded-xl border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-[#04394e] shadow hover:bg-gray-50"
                            >
                                Core Values
                            </a>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/030/492/783/large_2x/cute-robot-working-on-a-laptop-3d-render-technology-concept-ai-generated-free-photo.jpg"
                            alt="Cute Robot Illustration"
                            className="w-72 md:w-96 rounded-lg shadow-lg"
                        />
                    </motion.div>
                </section>

                {/* Mission & Values */}
                <section id="mission" className="mt-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#04394e]">Our Mission</h2>
                        <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
                            To empower kids with creativity, problem-solving, and critical thinking
                            skills by turning STEM concepts into fun and engaging experiences.
                        </p>
                    </div>

                    <div
                        id="values"
                        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <ValueCard icon="🤖" title="Build with Play">
                            Kids learn best through play. We combine structured challenges with
                            imaginative freedom.
                        </ValueCard>
                        <ValueCard icon="🧠" title="Think Critically">
                            We embrace curiosity and teach kids to see every problem as a puzzle
                            waiting to be solved.
                        </ValueCard>
                        <ValueCard icon="🤝" title="Learn Together">
                            Collaboration is key—teamwork builds stronger ideas and friendships.
                        </ValueCard>
                    </div>
                </section>

                {/* Robo Crew Section (kept same) */}
                <section className="mt-16">
                    <h3 className="text-3xl font-bold text-center text-[#04394e] mb-8">
                        Meet the Robo Crew
                    </h3>
                    <Slider {...settings}>
                        {members.map((member, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="h-52 w-full object-cover"
                                    />
                                    <div className="p-4 text-center">
                                        <h4 className="text-lg font-bold text-[#04394e]">
                                            {member.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </section>

                {/* Call to Action */}
                <section className="mt-20 rounded-3xl bg-white p-10 shadow-lg">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-3xl font-bold text-[#04394e]">
                                Bring RoboKids to Your School 🚀
                            </h3>
                            <p className="mt-3 text-[#04394e] max-w-lg">
                                Partner with us to inspire creativity, problem-solving, and a love
                                for robotics in your students.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <a
                                    href="/contact"
                                    className="rounded-xl bg-[#04394e] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#3f6878]"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/programs"
                                    className="rounded-xl border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-[#04394e] shadow hover:bg-gray-50"
                                >
                                    View Programs
                                </a>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <img
                                src="https://images.stockcake.com/public/0/0/f/00f33166-e0d0-47dd-b582-2eddeb646777_large/advanced-robotics-laboratory-stockcake.jpg"
                                alt="Robotics Collaboration"
                                className="w-64 md:w-96 h-auto object-cover  text-sm rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}
