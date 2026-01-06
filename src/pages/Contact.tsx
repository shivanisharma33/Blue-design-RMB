import hero from "@/assets/contact.jpg";
import horse from "@/assets/Horses.jpg";
import logo from "@/assets/rmb.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-light pt-28">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={hero}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="RMB Real Estate"
            className="w-28 opacity-90"
          />
        </div>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-8 md:px-16 py-24">

        <div>
          <h4 className="text-xs tracking-widest mb-6 uppercase">
            LIST WITH US
          </h4>
          <p className="text-sm mb-4 max-w-xs">
            If you prefer marketing bold and your property sold:
          </p>
          <a href="tel:0390174848" className="underline text-sm">
            03 9017 4848
          </a>
        </div>

        <div>
          <h4 className="text-xs tracking-widest mb-6 uppercase">
            LOCATION
          </h4>
          <p className="text-sm mb-4">
            110/95 Hazel Glen Drive, Doreen.
          </p>
          <a href="tel:0390174848" className="underline text-sm">
            03 9017 4848
          </a>
        </div>

        <div className="w-full h-[220px] grayscale">
          <iframe
            title="Hazel Glen Drive Map"
            src="https://www.google.com/maps?q=Hazel%20Glen%20Drive%20Doreen&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= IMAGE + FORM ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 md:px-16 py-24">

        <img
          src={horse}
          alt="Lifestyle"
          className="w-full object-cover grayscale"
        />

        <div>
          <h2 className="text-2xl tracking-wide mb-10 uppercase">
            MESSAGE US
          </h2>

          <form className="space-y-6">
            {["Name", "Email", "Phone", "Type of Enquiry"].map((item) => (
              <input
                key={item}
                placeholder={item}
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none"
              />
            ))}

            <textarea
              placeholder="Enquiry"
              rows={4}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none"
            />

            <button className="border border-white px-10 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition">
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-8 md:px-16 py-16 border-t border-white/10 text-xs flex flex-col lg:flex-row justify-between gap-10">

        <div className="flex items-center gap-4">
          <img src={logo} alt="RMB Logo" className="w-10" />
          <span>© Copyright 2025 Marchetti Group.</span>
        </div>

        <div className="max-w-md">
          <p className="mb-3">
            We’re people first and professionals second – which means no
            polyester suits, bad toupees or smooth-talking real estate nonsense.
          </p>
          <p>110/95 Hazel Glen Drive, Doreen.</p>
        </div>

        <div className="flex gap-6 text-sm">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
        </div>
      </footer>
    </div>
  );
}
