import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>

      <Hero />

      <div className="wrapper py-6 sm:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Trust by <br />
          Thousands of events.
        </h2>
        <div className="flex justify-between items-center">
          <div>
            Search
          </div>
          <div>
            Filter
          </div>
        </div>
      </div>

    </section>
  );
}
