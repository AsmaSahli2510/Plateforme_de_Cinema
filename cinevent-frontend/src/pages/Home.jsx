import Navbar from "../components/Navbar";
import heroImage from "../assets/images/upscalemedia-transformed.png";
const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-charcoal dark:text-white">


      <main className="w-full">

        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-4xl px-6 text-center">

            <span className="inline-block px-4 py-1 mb-6 rounded-full border border-accent text-accent text-xs font-bold uppercase tracking-widest">
              Premium Cinema Experience
            </span>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 font-serif-alt italic">
              Experience The Magic of <br />
              <span className="text-accent">The Silver Screen</span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 font-medium mb-10 max-w-2xl mx-auto">
              From exclusive film premieres to themed gala screenings.
              Discover the most prestigious cinema events in your city.
            </p>

            {/* Search */}
            <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

                <input
                  className="px-4 py-3 bg-charcoal/40 rounded-xl border border-white/10 text-white placeholder-white/40 text-sm"
                  placeholder="Select City"
                />

                <input
                  type="date"
                  className="px-4 py-3 bg-charcoal/40 rounded-xl border border-white/10 text-white text-sm"
                />

                <select className="px-4 py-3 bg-charcoal/40 rounded-xl border border-white/10 text-white text-sm">

                  <option>All Categories</option>
                  <option>Premiere</option>
                  <option>Gala Night</option>
                  <option>Indie Fest</option>

                </select>

                <button className="bg-accent hover:bg-accent/90 text-charcoal font-black rounded-xl py-3 px-6">
                  Find Events
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* Popular Events */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-24">

          <div className="flex items-end justify-between mb-12">

            <div>
              <h3 className="text-4xl font-black mb-2">
                Popular Events
              </h3>

              <p className="text-charcoal/60 dark:text-white/60">
                Handpicked cinematic experiences for this month.
              </p>
            </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Event Card */}
            <div className="group cursor-pointer">

              <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5">

                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1505685296765-3a2736de412f')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              </div>

              <div className="flex flex-col gap-2">

                <div className="flex justify-between items-start">

                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                    The Great Gatsby Gala
                  </h4>

                  <span className="text-primary font-black">
                    $120
                  </span>

                </div>

                <p className="text-sm text-charcoal/60 dark:text-white/60">
                  Burgundy Theater, New York
                </p>

                <p className="text-sm text-charcoal/60 dark:text-white/60">
                  Oct 24 • 8:00 PM
                </p>

              </div>

            </div>


            {/* Event Card */}
            <div className="group cursor-pointer">

              <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5">

                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc')",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              </div>

              <div className="flex flex-col gap-2">

                <div className="flex justify-between items-start">

                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                    Midnight in Paris
                  </h4>

                  <span className="text-primary font-black">
                    $45
                  </span>

                </div>

                <p className="text-sm text-charcoal/60 dark:text-white/60">
                  Golden Era Cinema, LA
                </p>

                <p className="text-sm text-charcoal/60 dark:text-white/60">
                  Oct 28 • 9:30 PM
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* CTA Section */}

        <section className="max-w-[1440px] mx-auto px-6 md:px-20 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Spectator */}

            <div className="relative group overflow-hidden rounded-xl p-10 flex flex-col justify-end min-h-[400px] bg-primary text-white">

              <h4 className="text-3xl font-black mb-3">
                Join as Spectator
              </h4>

              <p className="mb-6">
                Access exclusive invites and premium cinematic perks.
              </p>

              <button className="bg-white text-primary font-bold px-8 py-3 rounded-full">
                Get Started
              </button>

            </div>


            {/* Organizer */}

            <div className="relative group overflow-hidden rounded-xl p-10 flex flex-col justify-end min-h-[400px] bg-charcoal text-white">

              <h4 className="text-3xl font-black mb-3">
                Join as Organizer
              </h4>

              <p className="mb-6">
                Host your own film festival or private screening.
              </p>

              <button className="bg-accent text-charcoal font-bold px-8 py-3 rounded-full">
                Host an Event
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Home;