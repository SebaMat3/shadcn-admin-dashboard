"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);
  
  const smallDate = date?.toLocaleDateString("en-US",{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    })

  return (
    <div>
      <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6 }
          />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date > new Date()}

        />
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
          className="rounded-md border shadow"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Information</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map((date) => date.toLocaleDateString()). join(", ")} </p>
      </div>
    </div>
  );
}
