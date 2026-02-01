import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'JOURS', value: timeLeft.days },
    { label: 'HEURES', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEC', value: timeLeft.seconds }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#FAFAFA] to-[#F9FAFB] border-y border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[16px] text-[#6B7280] font-medium mb-8">
          🎯 Lancement officiel dans :
        </p>
        
        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-xl shadow-sm border border-[#E5E7EB] flex items-center justify-center mb-3">
                <span className="text-3xl md:text-5xl font-bold text-[#8B5CF6]">
                  {unit.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-[12px] text-[#9CA3AF] font-bold tracking-wider uppercase">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-[14px] text-[#10B981] font-semibold animate-pulse">
          Soyez parmi les 50 premiers inscrits
        </p>
      </div>
    </section>
  );
}
