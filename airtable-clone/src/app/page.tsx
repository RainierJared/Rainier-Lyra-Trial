import NavBar from "./_components/navbar";
import { api } from "~/trpc/server"

export default async function Home() {
  return (
    <div className="flex-col">
      <header className="flex items-center flex-none w-full border-b-2">
        <NavBar />
      </header>
  </div>
  );
}
