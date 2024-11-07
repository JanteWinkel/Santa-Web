"use client";
import { useState } from 'react';
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import 'react-calendar/dist/Calendar.css';  // Estilos predeterminados de react-calendar
import './calendar.css';  // Tus estilos personalizados
import dynamic from 'next/dynamic';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

const EventCalendar = () => {
    // Estado para la fecha seleccionada y eventos.
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Ejemplo de eventos con fecha como clave en formato YYYY-MM-DD
    const events = {
        '2024-11-24': 'Visita de Santa Claus en la Plaza Central a las 5 PM.',
        '2024-11-28': 'Visita de Santa Claus en la Plaza Central a las 5 PM.',
        '2024-12-24': 'Visita de Santa Claus en la Plaza Central a las 5 PM.',
        '2024-12-25': 'Fiesta de Navidad en el Centro Comunitario a las 7 PM.',

    };

    // Manejar el cambio de fecha seleccionada en el calendario
    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };

    // Convertir la fecha seleccionada a string para buscar en eventos
    const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : '';

    // Definir el rango de fechas permitido: noviembre y diciembre de 2024
    const minDate = new Date(2024, 10, 1); // 1 de noviembre de 2024
    const maxDate = new Date(2024, 11, 31); // 31 de diciembre de 2024

    // Función para determinar si una fecha tiene eventos
    const hasEvent = (date: Date) => {
        const formattedDate = date.toISOString().split('T')[0];
        return Object.keys(events).includes(formattedDate);
    };

    // Función para ocultar los días fuera del rango permitido
    const tileContent = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month' && hasEvent(date)) {
            return <p>🎅🏻</p>;
        }
        return null;
    };

    return (
        <div id='calendario' className='mt-16'>
            <h2 className="text-5xl text-primary font-extrabold uppercase text-center mb-4">Agenda 2024</h2>
            <div className="event-calendar flex flex-col md:flex-row p-4 md:py-8 max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 gap-8">

                <div className="flex-1">
                    <h5 className="text-4xl font-semibold text-primary mb-6">¡Bienvenidos al calendario de eventos navideños!🎄</h5>
                    <p className='my-2 text-lg'>En este calendario, los días marcados con el símbolo 🎅🏻 indican que Santa Claus aparecerá públicamente en esa fecha.</p>
                    <p className='my-2 text-lg font-bold text-primary'>Para saber más detalles:</p>
                    <p className='my-2 text-lg'>Selecciona un día con 🎅🏻 en el calendario. </p>
                    {selectedDate && (
                        <div className="event-info">
                            <h2 className="text-lg my-2 font-bold mb-2 text-secondary">Eventos para {selectedDate.toLocaleDateString()}:</h2>
                            <p className='my-2 text-lg font-bold text-primary'>{events[formattedDate as keyof typeof events] || 'No hay eventos programados para esta fecha.'}</p>
                        </div>
                    )}
                </div>
                <div className="flex-1 md:scale-100 scale-90 transition-all">
                        <Calendar
                            locale="es"
                            className="text-primary bg-black"
                            onChange={(date) => handleDateChange(date as Date)}
                            minDate={minDate} // Restricción de fecha mínima
                            maxDate={maxDate} // Restricción de fecha máxima
                            view="month" // Asegurarse de que solo se vean los meses
                            tileContent={tileContent}
                            showNeighboringMonth={false} // Ocultar los días de los meses vecinos
                        />
                </div>
            </div>
            <div className='items-center text-center text-primary'>
                <Link href="#contacto" className={buttonVariants({ variant: "outline" })}>Más información</Link>
            </div>
        </div>
    );
};

export default EventCalendar;
