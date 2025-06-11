'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SalesFunnelPage() {
  const whatsappLink =
    'https://wa.me/2348123456789?text=I%20am%20interested%20in%20your%20500W%20Solar%20Generator';

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero/Carousel Section */}
      <section className="w-full py-10 px-4 text-center bg-gradient-to-br from-yellow-100 to-green-100">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">500W Solar Generator Full Package</h1>
        <p className="text-lg mb-6">Power your devices sustainably with Jcoteck Solar Solutions</p>
        <div className="flex justify-center gap-4 overflow-x-auto">
          <Image src="https://picsum.photos/800/600" alt="Full Package" width={300} height={200} className="rounded-lg" />
          <Image src="https://picsum.photos/801/600" alt="500W Generator" width={300} height={200} className="rounded-lg" />
          <Image src="https://picsum.photos/802/600" alt="Solar Panel" width={300} height={200} className="rounded-lg" />
          <Image src="https://picsum.photos/803/600" alt="Bulbs + Setup" width={300} height={200} className="rounded-lg" />
        </div>
        <Link href={whatsappLink} className="mt-6 inline-block bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition">
          Order Now on WhatsApp
        </Link>
      </section>

      {/* Product Description */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Product Details</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>500W Pure Sine Wave Inverter</li>
          <li>100W Solar Panel</li>
          <li>Charger & External Battery Connector</li>
          <li>4 High-Efficiency LED Bulbs</li>
          <li>Setup supports TV, fans, laptops, phones, and mini gadgets</li>
        </ul>
        <Image src="https://picsum.photos/804/600" alt="Setup In Use" width={800} height={400} className="rounded-xl mt-6" />
        <Link href={whatsappLink} className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition">
          Get Yours Now
        </Link>
      </section>

      {/* Video Demo */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Watch It In Action</h2>
        <video controls width="800" className="rounded-xl shadow-lg">
          <source src="https://www.pexels.com/video/857195/download/" type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Comparison With Alternatives</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Feature</th>
              <th className="p-2 border">Solar Generator</th>
              <th className="p-2 border">Fuel Generator</th>
              <th className="p-2 border">Power Bank</th>
              <th className="p-2 border">Inverter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Noise</td>
              <td className="p-2 border">Silent</td>
              <td className="p-2 border">Very Noisy</td>
              <td className="p-2 border">Silent</td>
              <td className="p-2 border">Silent</td>
            </tr>
            <tr>
              <td className="p-2 border">Fuel Cost</td>
              <td className="p-2 border">₦0</td>
              <td className="p-2 border">High</td>
              <td className="p-2 border">₦0</td>
              <td className="p-2 border">₦0 (But depends on NEPA)</td>
            </tr>
            <tr>
              <td className="p-2 border">Ease of Setup</td>
              <td className="p-2 border">Plug and Play</td>
              <td className="p-2 border">Complex</td>
              <td className="p-2 border">Very Simple</td>
              <td className="p-2 border">Moderate</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-50 rounded shadow">
            <p>&quot;This solar generator powers my shop all day! No more fuel stress.&quot;</p>
            <Image src="https://picsum.photos/805/600" alt="Customer 1" width={300} height={200} className="rounded mt-2" />
          </div>
          <div className="p-4 bg-green-50 rounded shadow">
            <p>&quot;Very reliable for my laptop and fan, especially during power outages.&quot;</p>
            <Image src="https://picsum.photos/806/600" alt="Customer 2" width={300} height={200} className="rounded mt-2" />
          </div>
          <div className="p-4 bg-blue-50 rounded shadow">
            <p>&quot;Great value for money. Setup was super easy!&quot;</p>
            <Image src="https://picsum.photos/807/600" alt="Customer 3" width={300} height={200} className="rounded mt-2" />
          </div>
        </div>
        <Link href={whatsappLink} className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          Join Happy Customers
        </Link>
      </section>

      {/* Newsletter Subscription */}
      <section className="max-w-5xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter for updates, discounts, and new product releases.</p>
        <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded-md w-full max-w-md" />
        <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition">
          Subscribe
        </button>
      </section>
    </main>
  );
}
