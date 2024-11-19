import eventData from "./events";
import EventCard from "@/src/Card/Card1";

export default function EventsPage() {
  return (
    <div className="mt-24 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          name={event.Name}
          year={event.Year}
          date={event.Date}
          description={event.Description}
          url = {event.img}
        />
      ))}
    </div>
  );
}
