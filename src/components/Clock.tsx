import React, { useState, useEffect } from "react";

interface TimeZone {
  country: string;
  timeZone: string;
}

const timeZones: TimeZone[] = [
  { country: "USA (New York)", timeZone: "America/New_York" },
  { country: "UK (London)", timeZone: "Europe/London" },
  { country: "India (IST)", timeZone: "Asia/Kolkata" },
  { country: "Japan (Tokyo)", timeZone: "Asia/Tokyo" },
  { country: "Australia (Sydney)", timeZone: "Australia/Sydney" },
];

const Clock: React.FC = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(timeZones[0].timeZone);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setCurrentTime(formattedTime);
    };
    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, [selectedTimeZone]); 

  
  useEffect(() => {
    const updateDate = () => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date());
      setCurrentDate(formattedDate);
    };

    updateDate();
  }, []);


  return (
    <div className="w-[30vw] flex flex-col items-center  min-h-screen bg-slate-100 p-5 pt-20">
      <h1 className="text-[3vw] font-semibold tracking-widest mb-20">World Clock</h1>
      
    
      <select
        className="border px-4 py-2 rounded-md mb-10"
        value={selectedTimeZone}
        onChange={(e) => setSelectedTimeZone(e.target.value)}
      >
        {timeZones.map(({ country, timeZone }) => (
          <option key={timeZone} value={timeZone}>
            {country}
          </option>
        ))}
      </select>

      <div className="bg-white shadow-md p-5 rounded-lg text-xl font-semibold mb-8">
        Current Time: <span className="text-blue-500">{currentTime}</span>
      </div>
      <div className="text-lg font-semibold p-4 bg-white shadow-md rounded-lg">
      📅 Today's Date: <span className="text-blue-500">{currentDate}</span>
    </div>
    </div>
  );
};

export default Clock;
