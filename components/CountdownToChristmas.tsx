// components/CountdownToChristmas.jsx
"use client";

import { useEffect, useState } from "react";

const CountdownToChristmas = () => {
    const [timeLeft, setTimeLeft] = useState({
        días: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    useEffect(() => {
        const targetDate = new Date("December 25, 2024 00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const días = Math.floor(distance / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ días, horas, minutos, segundos });
        };

        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex gap-4 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center p-4 bg-secondary text-white rounded-lg shadow-lg w-20 h-20">
                    <span className="text-3xl font-bold">{value}</span>
                    <span className="capitalize text-sm">{unit}</span>
                </div>
            ))}
        </div>
    );
};

export default CountdownToChristmas;
