import NavBar from "./_components/navbar";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-none  w-full">
        <header className="w-full border-b-2">
          <NavBar />
        </header>
      </div>

      <div>
        <h1 className="font-bold">Welcome to Airtable 1</h1>
      </div>

      <div>
        <h1 className="font-bold">Welcome to Airtable 2</h1>
      </div>
  </div>
  );
}
