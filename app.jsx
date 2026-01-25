
const { useEffect, useState } = React;

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header className="border-b border-white/10 bg-[#1f2933]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide text-[#f3efe6]">
          Hygge Haven
        </h1>
        <nav className="text-sm text-[#b8c1cc] space-x-6">
          <span className="hover:text-white cursor-pointer">Shop</span>
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </nav>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden mb-20">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src="https://assets.codepen.io/11990995/a_cozy_living.jpg"
          alt="Cozy winter interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#1f2933]/70 backdrop-blur-[1px]" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#f3efe6] mb-6">
          Winter, Made Cozy
        </h2>
        <p className="font-body max-w-xl text-[#e3dccb] text-lg leading-relaxed">
          Hygge-inspired essentials for quiet mornings, warm drinks, and
          candle-lit nights.
        </p>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
function ProductGrid() {
  return (
    <section className="pb-28">
      <h3 className="text-xl text-[#f3efe6] mb-8 tracking-wide">Cozy Goods</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="group relative bg-[#2a3441] rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#1f2933]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="w-full p-5 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-[#f3efe6] font-medium mb-1">{p.name}</h4>
                <p className="text-[#e6c07b] font-semibold">{p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1f2933]">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-[#b8c1cc]">
        © Hygge Haven — cozy by design
      </div>
    </footer>
  );
}

/* ---------- APP ---------- */
function App() {
  return (
    <div className="min-h-screen bg-[#1f2933] font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
