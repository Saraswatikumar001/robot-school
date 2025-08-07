import React from 'react';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import robot from '../assets/img/robot.jpg';

const RoboticsSection = () => {
    return (
        <section className="flex flex-col items-center gap-10 px-6 py-12 bg-white md:px-16 md:flex-row">
            {/* Left: Image with Play Button */}
            <div className="relative w-full h-full p-4 bg-white md:w-1/2 rounded-3xl me-5">
                <img
                    src={robot}
                    alt="Kids working on robotics"
                    className="object-cover w-full rounded-2xl"
                />
                <a className="absolute left-[89%] top-[40%]  flex items-center justify-center">
                    <div className="border-white rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-orange-700 p-9 border-6 animate-pulse">
                        <FaPlay className="text-xl text-white" />
                    </div>
                </a>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#04394e] leading-tight mb-4">
                     Lorem ipsum dolor sit amet, <br /> consectetur adipisicing <br /> Innovators.
                </h2>
                <p className="mb-6 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum, alias! Perferendis eos illo debitis nisi repellat,
                    magni necessitatibus fuga quod nesciunt ea, obcaecati quasi eius
                    excepturi laudantium! Corrupti nemo, aspernatur in atque adipisci deleniti, dolorem odio quibusdam natus nostrum nihil?
                </p>

                <ul className="mb-6 space-y-3 text-gray-700">
                    {[
                        'Non letius diam sapien',
                        'Mauris inceptos dis penatibus',
                        'Tellus iaculis massa sociosqu egestas',
                        'Convallis in neque primis',
                        'Natoque nulla dictum pretium',
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="mt-1 text-green-500" />
                            {item}
                        </li>
                    ))}
                </ul>

                <button className="bg-[#f66b08] hover:bg-orange-600 text-white border-6 border-white  font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                    LEARN MORE
                </button>
            </div>
        </section>
    );
};

export default RoboticsSection;
