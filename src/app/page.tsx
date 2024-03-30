import { EventTickets, TeamEvents } from "./components";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 gap-8">
        <TeamEvents />
        <EventTickets />
      </div>
    </main>
  );
}
