import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6 text-led-text">
          <h2 className="mb-3 text-xl font-bold">Numbers Don&apos;t Lie</h2>

          <p>
          All your favourite numbers in one place.
From social app to productivity, finance and business.


          </p>
        </section>

        <section className="text-led-text">
          <h2 className="mb-3 text-xl font-bold ">What is Next.js?</h2>
          <p>
          Get fancy realtime updates of numbers going on around you
          </p>
        </section>
      </div>

      <Image
        alt="product logos"
        src="/products.png"
        width={150}
        height={80}

      />
    </div>
  );
}
