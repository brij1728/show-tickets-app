import { EventTickets, TeamEvents } from "./components";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 gap-8">
        <TeamEvents />
        <EventTickets />
      </div>
    </main>
  );
}
