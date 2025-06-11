import Carousel from '@/components/Carousel'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ComparisonTable from '@/components/ComparisonTable'
import Testimonials from '@/components/Testimonials'
// import WhatsAppCTA from '@/components/WhatsAppCTA'
// import EmailCapture from '@/components/EmailCapture'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <Header/>
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Never Fear <span className="text-primary">Blackouts</span> Again
        </h1>
        <Carousel />
      </section>

      <ComparisonTable />
      { <Testimonials />
      /*<EmailCapture />
      <WhatsAppCTA /> */}
      <Footer/>
    </main>
  )
}


// import { motion } from 'framer-motion';
// import Carousel from '../components/Carousel';
// import ComparisonTable from '../components/ComparisonTable';
// import Testimonials from '../components/Testimonials';
// import WhatsAppCTA from '../components/WhatsAppCTA';
// import EmailCapture from '../components/EmailCapture';

// export default function Home() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <section className="py-20 text-center">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold mb-6"
//         >
//           Never Fear <span className="text-primary">Blackouts</span> Again
//         </motion.h1>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           The All-in-One 500W Solar Survival Kit - Just Unbox & Power Up!
//         </p>
//         <a 
//           href="https://wa.me/234YOURNUMBER?text=I%20want%20to%20buy%20Feisun%20500W%20Kit" 
//           className="btn-primary inline-block"
//         >
//           ⚡ Get Yours Now (Limited Stock!)
//         </a>
//       </section>

//       {/* Product Carousel */}
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center mb-12">Your Complete Solar Solution</h2>
//         <Carousel />
//       </section>

//       {/* Product Details */}
//       <section className="py-16 grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Engineered for Nigerian Homes</h2>
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="font-bold text-primary">500W Pure Sine Wave</h3>
//               <p>Safe for sensitive electronics</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="font-bold text-primary">LiFePO4 Battery</h3>
//               <p>10+ Year Lifespan</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="font-bold text-primary">100W Solar Panel</h3>
//               <p>Recharges in 5-6 hours</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="font-bold text-primary">4 Energy Bulbs</h3>
//               <p>Bright, low-power lighting</p>
//             </div>
//           </div>
//           <a 
//             href="https://wa.me/234YOURNUMBER?text=I%20want%20to%20buy%20Feisun%20500W%20Kit" 
//             className="btn-primary inline-block"
//           >
//             See Full Specifications
//           </a>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <img src="/images/generator-front.jpg" alt="Feisun 500W Front" className="rounded-lg" />
//           <img src="/images/generator-back.jpg" alt="Feisun 500W Back" className="rounded-lg" />
//           <img src="/images/panel-sun.jpg" alt="Solar Panel" className="rounded-lg" />
//           <img src="/images/bulbs-dark.jpg" alt="Bulbs in Dark" className="rounded-lg" />
//         </div>
//       </section>

//       {/* Video Demo */}
//       <section className="py-16 bg-gray-100 rounded-xl p-8">
//         <h2 className="text-3xl font-bold text-center mb-8">See It In Action</h2>
//         <div className="aspect-w-16 aspect-h-9">
//           <iframe 
//             className="w-full h-96 rounded-lg" 
//             src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
//             title="Feisun 500W Demo" 
//             allowFullScreen
//           ></iframe>
//         </div>
//       </section>

//       {/* Comparison Table */}
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center mb-12">Why Feisun Outperforms</h2>
//         <ComparisonTable />
//         <div className="text-center mt-8">
//           <a 
//             href="https://wa.me/234YOURNUMBER?text=I%20want%20to%20buy%20Feisun%20500W%20Kit" 
//             className="btn-primary inline-block"
//           >
//             Why Settle for Less? Get the Best Value Now!
//           </a>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
//         <Testimonials />
//       </section>

//       {/* Email Capture */}
//       <section className="py-16 bg-primary text-white rounded-xl p-8">
//         <EmailCapture />
//       </section>

//       {/* WhatsApp CTA */}
//       <WhatsAppCTA />
//     </div>
//   );
// }