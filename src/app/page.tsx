import { EventTickets, TeamEvents } from "./components";

export default function Home() {
  return (
    <main >
      <div className="container p-8">
      <TeamEvents/>
      <EventTickets/>
      </div>


     
    </main>
  );
}
