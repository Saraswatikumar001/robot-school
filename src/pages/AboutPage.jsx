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
                            <span className="mx-2 text-gray-300" aria-hidden="true">/</span>
                        )}
                        {item.href ? (
                            <a
                                href={item.href}
                                className="text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span className="font-medium text-gray-900">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

// Small, cute badge
const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
        {children}
    </span>
);

// Stat bubble
const Stat = ({ label, value }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-gray-100 backdrop-blur">
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-200 to-rose-200 opacity-50 blur-2xl transition-all group-hover:scale-125" />
        <dt className="text-sm text-gray-500">{label}</dt>
        <dd className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
            {value}
        </dd>
    </div>
);

// Value card
const ValueCard = ({ icon, title, children }) => (
    <div className="text-center relative rounded-2xl border border-gray-100 bg-[#f8dcca]  p-6 shadow-sm transition-transform hover:-translate-y-1">
        <div className="mb-3 text-2xl" aria-hidden>
            {icon}
        </div>
        <h4 className="text-2xl font-bold text-black">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-black">{children}</p>
    </div>
);

// Timeline item
const TimelineItem = ({ year, title, text, last = false }) => (
    <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-1 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
        {!last && (
            <div className="absolute left-1 top-5 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-200 to-transparent" />
        )}
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
                <Badge>{year}</Badge>
                <h5 className="text-base font-semibold text-gray-900">{title}</h5>
            </div>
            <p className="mt-2 text-sm text-gray-600">{text}</p>
        </div>
    </div>
);

// Team card
const TeamCard = ({ name, role, initial, color = "bg-indigo-500" }) => (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white ${color}`}>
            {initial}
        </div>
        <h4 className="text-base font-semibold text-gray-900">{name}</h4>
        <p className="mt-1 text-sm text-gray-600">{role}</p>
        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-200 to-rose-200 opacity-50 blur-2xl transition-all group-hover:scale-125" />
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
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
        },
    ],
};


export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white [background:radial-gradient(1200px_600px_at_120%_-10%,#e0e7ff_10%,transparent_60%),radial-gradient(900px_450px_at_-10%_10%,#fee2e2_10%,transparent_60%)]">
            {/* Top decoration grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
                style={{ maskImage: "radial-gradient(800px 400px at 50% 0%, black, transparent)" }}
            />

            <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-12">
                {/* Breadcrumbs */}
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "About" },
                    ]}
                />

                {/* Hero */}
                <section className="relative mt-6 overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-8 shadow-sm sm:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2"
                    >
                        <div>
                            <Badge>About Roboticks School</Badge>
                            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#04394e] sm:text-5xl">
                                About Us
                            </h1>
                            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                                Empowering the next generation of innovators
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href="#mission"
                                    className="inline-flex items-center rounded-3xl bg-[#fa8b41] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition  focus:outline-none focus:ring-2 focus:[#ed884a]"
                                >
                                    Our Mission
                                </a>
                                <a
                                    href="#values"
                                    className="inline-flex items-center rounded-2xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                                >
                                    Core Values
                                </a>
                            </div>
                        </div>

                        {/* Cute robot illustration using pure CSS shapes */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative mx-auto h-64 w-64 md:h-80 md:w-80"
                        >
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-indigo-200 to-rose-100 shadow-inner" />
                            <div className="absolute inset-4 rounded-[2rem] bg-white shadow" />
                            {/* Head */}
                            <div className="absolute left-1/2 top-6 w-40 -translate-x-1/2 rounded-3xl bg-gray-900 p-3">
                                <div className="flex items-center justify-between rounded-2xl bg-black px-4 py-3">
                                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                                </div>
                            </div>
                            {/* Antenna */}
                            <div className="absolute left-1/2 top-2 h-4 w-1 -translate-x-1/2 rounded-full bg-gray-800" />
                            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-400" />
                            {/* Body */}
                            <div className="absolute bottom-6 left-1/2 w-44 -translate-x-1/2 rounded-2xl bg-[#04394e] p-3 shadow-lg">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="h-4 rounded bg-indigo-300" />
                                    <div className="h-4 rounded bg-indigo-300" />
                                    <div className="h-4 rounded bg-indigo-300" />
                                    <div className="col-span-3 h-6 rounded bg-indigo-300" />
                                </div>
                            </div>
                            {/* Arms */}
                            <div className="absolute bottom-16 left-8 h-2 w-8 rounded bg-gray-300" />
                            <div className="absolute bottom-16 right-8 h-2 w-8 rounded bg-gray-300" />
                        </motion.div>
                    </motion.div>

                    {/* Floating candy shapes */}
                    <motion.div
                        aria-hidden
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-tr from-indigo-200 to-rose-200 blur-3xl"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-tr from-rose-200 to-indigo-200 blur-3xl"
                    />
                </section>
                {/* Mission & Values */}
                <section id="mission" className="mt-14">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold text-[#04394e] sm:text-4xl">Our Mission</h2>
                        <p className="mt-3 text-base leading-relaxed text-gray-800">
                            Make STEM joyful and accessible. We help kids think like makers—curious, collaborative,
                            and fearless—by turning complex ideas into playful experiences.
                        </p>
                    </div>

                    <div id="values" className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                        <ValueCard icon={<span>🤖</span>} title="Build with Play">
                            Learning sticks when it’s fun. We mix creativity with structured challenges so kids
                            feel proud of what they make.
                        </ValueCard>
                        <ValueCard icon={<span>🧠</span>} title="Think Critically">
                            We encourage questions, experiments, and reflection—because every bug is a stepping
                            stone to a better solution.
                        </ValueCard>
                        <ValueCard icon={<span>🤝</span>} title="Learn Together">
                            Teamwork makes sparks fly. Collaboration and communication are embedded in every activity.
                        </ValueCard>
                    </div>
                </section>

                {/* Journey / Timeline */}
                <section className="mt-14">
                    {/* Team */}
                    <h3 className="text-3xl font-bold text-center text-[#04394e] mb-8">
                        Meet the Robo Crew
                    </h3>
                    <Slider {...settings}>
                        {members.map((member, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white  rounded-xl overflow-hidden shadow-lg  transition transform hover:-translate-y-2">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-48 object-cover"
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
                {/* Call to action */}
                <section className="mt-16 overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-3xl font-bold text-[#04394e]">Want to bring RoboKids to your school?</h3>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center rounded-2xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-300"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/programs"
                                    className="inline-flex items-center rounded-2xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                                >
                                    View Programs
                                </a>
                            </div>
                        </div>
                        <div className="relative h-48 w-full">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-100" />
                            <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-indigo-300" />
                            <div className="absolute left-6 top-6 h-5 w-5 animate-bounce rounded-full bg-indigo-400" />
                            <div className="absolute right-10 top-10 h-4 w-4 animate-pulse rounded-full bg-pink-400" />
                            <div className="absolute bottom-6 right-6 h-6 w-6 animate-bounce rounded-full bg-amber-400" />
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}
