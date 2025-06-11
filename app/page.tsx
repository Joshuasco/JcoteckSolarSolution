// "use client";
// import { useState, useEffect, useCallback } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   rating: number;
//   specifications?: string[];
//   features?: string[];
// };

// // Slide data for the hero section
// const heroSlides = [
//   {
//     id: 1,
//     title: "Power Your Home With Solar Energy",
//     description: "High-quality solar products at affordable prices",
//     bgColor: "bg-green-700",
//     image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
//   },
//   {
//     id: 2,
//     title: "Sustainable Energy Solutions",
//     description: "Reduce your carbon footprint with our eco-friendly products",
//     bgColor: "bg-blue-600",
//     image: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//   },
//   {
//     id: 3,
//     title: "Cut Your Energy Bills",
//     description: "Save money while saving the planet",
//     bgColor: "bg-amber-600",
//     image: "https://images.unsplash.com/photo-1596422846543-75e6d59b3694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//   },
//   {
//     id: 4,
//     title: "Professional Installation",
//     description: "Our certified technicians ensure optimal performance",
//     bgColor: "bg-indigo-700",
//     image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
//   }
// ];

// export default function SolarLanding() {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);
//   const [notificationProgress, setNotificationProgress] = useState(100);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [showProductModal, setShowProductModal] = useState(false);

//   // Using high-quality solar product images from Unsplash
//   const products: Product[] = [
//     {
//       id: 1,
//       name: 'Solar Panel 300W',
//       price: 249.99,
//       description: 'High-efficiency monocrystalline solar panel with advanced photovoltaic technology for maximum energy conversion.',
//       image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
//       rating: 4.8,
//       specifications: [
//         'Power: 300W',
//         'Efficiency: 21.5%',
//         'Dimensions: 65.6 x 39.4 x 1.4 inches',
//         'Weight: 40.8 lbs',
//         'Cell Type: Monocrystalline'
//       ],
//       features: [
//         'High conversion efficiency',
//         'Weather-resistant frame',
//         '25-year linear power output warranty',
//         'Anti-reflective coating',
//         'PID resistant'
//       ]
//     },
//     {
//       id: 2,
//       name: 'Solar Inverter 5kW',
//       price: 899.99,
//       description: 'Grid-tie solar inverter with WiFi monitoring and advanced safety features for reliable performance.',
//       image: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
//       rating: 4.6,
//       specifications: [
//         'Power: 5kW',
//         'Efficiency: 98%',
//         'Input Voltage: 150-550V',
//         'Output Voltage: 230V',
//         'Weight: 35 lbs'
//       ],
//       features: [
//         'WiFi monitoring',
//         'Pure sine wave output',
//         'MPPT technology',
//         'IP65 waterproof rating',
//         'Overload and short circuit protection'
//       ]
//     },
//     {
//       id: 3,
//       name: 'Solar Battery 10kWh',
//       price: 3499.99,
//       description: 'Lithium-ion solar storage battery with long lifespan and high energy density for home energy storage.',
//       image: 'https://images.unsplash.com/photo-1596422846543-75e6d59b3694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
//       rating: 4.9,
//       specifications: [
//         'Capacity: 10kWh',
//         'Voltage: 48V',
//         'Cycle Life: 6000+ cycles',
//         'Depth of Discharge: 90%',
//         'Weight: 220 lbs'
//       ],
//       features: [
//         'Lithium iron phosphate chemistry',
//         'Modular design for scalability',
//         'Built-in battery management system',
//         'Wall-mountable',
//         '10-year warranty'
//       ]
//     },
//   ];

//   // Handle slide navigation
//   const goToSlide = useCallback((index: number) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//     // Resume auto play after user interaction
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   }, []);

//   // Auto-advance slides
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [currentSlide, isAutoPlaying]);

//   const addToCart = (product: Product) => {
//     setCart([...cart, product]);
//     setShowNotification(true);
//     setNotificationProgress(100);
//   };

//   const removeFromCart = (productId: number) => {
//     setCart(cart.filter(item => item.id !== productId));
//   };

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product);
//     setShowProductModal(true);
//   };

//   const closeProductModal = () => {
//     setShowProductModal(false);
//     setSelectedProduct(null);
//   };

//   const shareOnWhatsApp = (product: Product) => {
//     const message = `I'm interested in this product:\n\n*${product.name}*\nPrice: $${product.price}\n\n${product.description}\n\nCan you provide more information?`;
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/2347054974199?text=${encodedMessage}`, '_blank');
//   };

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     let progressTimer: NodeJS.Timeout;

//     if (showNotification) {
//       // Progress bar animation
//       progressTimer = setInterval(() => {
//         setNotificationProgress(prev => Math.max(0, prev - 2));
//       }, 100);

//       // Hide notification after 3 seconds
//       timer = setTimeout(() => {
//         setShowNotification(false);
//       }, 3000);
//     }

//     return () => {
//       clearTimeout(timer);
//       clearInterval(progressTimer);
//     };
//   }, [showNotification]);

//   const totalItems = cart.length;
//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   // Get related products (excluding the currently selected one)
//   const relatedProducts = selectedProduct 
//     ? products.filter(product => product.id !== selectedProduct.id).slice(0, 2)
//     : [];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>SunPower Solar Solutions</title>
//         <meta name="description" content="Premium solar products for your home" />
//       </Head>

//       {/* Notification Popup */}
//       {showNotification && (
//         <div className="fixed top-4 right-4 z-50 w-80 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg">
//           <div className="flex items-center">
//             <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//             </svg>
//             <p>Item added to cart!</p>
//           </div>
//           <div className="w-full bg-green-200 rounded-full h-1.5 mt-2">
//             <div 
//               className="bg-green-600 h-1.5 rounded-full" 
//               style={{ width: `${notificationProgress}%` }}
//             ></div>
//           </div>
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex justify-s">
//               <Image src="/images/logo/logo.svg" width={50} height={50} alt="Logo" 
//               className="w-24 h-24 md:w-16 md:h-20 lg:w-24 lg:h-24"/>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => setShowCart(!showCart)}
//                 className="relative p-2 text-gray-700 hover:text-green-600"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 {totalItems > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                     {totalItems}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Slider */}
//       <section className="relative h-96 md:h-[32rem] overflow-hidden">
//         {/* Slides */}
//         <div className="relative h-full w-full">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${slide.bgColor} ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
//             >
//               <div className="absolute inset-0">
//                 <img
//                   src={slide.image}
//                   alt=""
//                   className="w-full h-full object-cover opacity-30"
//                 />
//               </div>
//               <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
//                 <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">{slide.title}</h1>
//                 <p className="text-xl mb-8 text-white">{slide.description}</p>
//                 <button className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
        
//         {/* Navigation Arrows */}
//         <button 
//           onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
//           className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition"
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button 
//           onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
//           className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 hover:bg-opacity-50 transition"
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </section>
//       {/* Products Section */}
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Solar Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
//               onClick={() => openProductModal(product)}
//             >
//               <div className="h-48 overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold">{product.name}</h3>
//                   <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="text-gray-600 ml-2">{product.rating}</span>
//                 </div>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     addToCart(product);
//                   }}
//                   className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Product Detail Modal */}
//       {showProductModal && selectedProduct && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             {/* Background overlay */}
//             <div 
//               className="fixed inset-0 transition-opacity" 
//               onClick={closeProductModal}
//             >
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             {/* Modal content */}
//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
//                     <div className="flex justify-between items-start">
//                       <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
//                         {selectedProduct.name}
//                       </h3>
//                       <button
//                         onClick={closeProductModal}
//                         className="text-gray-400 hover:text-gray-500"
//                       >
//                         <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                       </button>
//                     </div>

//                     <div className="flex flex-col md:flex-row gap-6">
//                       {/* Product Image */}
//                       <div className="w-full md:w-1/2">
//                         <img
//                           src={selectedProduct.image}
//                           alt={selectedProduct.name}
//                           className="w-full h-auto rounded-lg"
//                         />
//                       </div>

//                       {/* Product Details - Scrollable area */}
//                       <div className="w-full md:w-1/2 flex flex-col">
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-2xl font-bold text-green-600">
//                             ${selectedProduct.price.toFixed(2)}
//                           </span>
//                           <div className="flex items-center">
//                             {[...Array(5)].map((_, i) => (
//                               <svg
//                                 key={i}
//                                 className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                               >
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                               </svg>
//                             ))}
//                             <span className="text-gray-600 ml-2">{selectedProduct.rating}</span>
//                           </div>
//                         </div>

//                         <div className="overflow-y-auto max-h-[300px] pr-2">
//                           <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

//                           {/* Specifications */}
//                           <div className="mb-6">
//                             <h4 className="font-bold text-lg mb-2">Specifications</h4>
//                             <ul className="list-disc pl-5 space-y-1">
//                               {selectedProduct.specifications?.map((spec, index) => (
//                                 <li key={index} className="text-gray-600">{spec}</li>
//                               ))}
//                             </ul>
//                           </div>

//                           {/* Features */}
//                           <div className="mb-6">
//                             <h4 className="font-bold text-lg mb-2">Features</h4>
//                             <ul className="list-disc pl-5 space-y-1">
//                               {selectedProduct.features?.map((feature, index) => (
//                                 <li key={index} className="text-gray-600">{feature}</li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>

//                         {/* Action Buttons - Fixed at bottom */}
//                         <div className="mt-auto pt-4">
//                           <div className="flex flex-col sm:flex-row gap-3">
//                             <button
//                               onClick={() => {
//                                 addToCart(selectedProduct);
//                                 closeProductModal();
//                               }}
//                               className="flex-1 bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition duration-300"
//                             >
//                               Add to Cart
//                             </button>
//                             <button
//                               onClick={() => shareOnWhatsApp(selectedProduct)}
//                               className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded hover:bg-gray-200 transition duration-300 flex items-center justify-center"
//                             >
//                               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.545.269 1.314.494 1.71.38.397-.112.683-.38.833-.645.15-.265.163-.77-.379-1.545-.545-.775-1.484-1.207-1.932-1.075-.448.133-.72.436-.832.646-.112.21-.224.7.224 1.214.448.515 1.402.63 1.976.02" />
//                               </svg>
//                               WhatsApp Seller
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Related Products */}
//                     {relatedProducts.length > 0 && (
//                       <div className="mt-8">
//                         <h4 className="font-bold text-xl mb-4">Related Products</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {relatedProducts.map((product) => (
//                             <div 
//                               key={product.id} 
//                               className="flex items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
//                               onClick={() => {
//                                 setSelectedProduct(product);
//                                 // Scroll to top when changing products
//                                 const modalContent = document.querySelector('.overflow-y-auto');
//                                 if (modalContent) {
//                                   modalContent.scrollTop = 0;
//                                 }
//                               }}
//                             >
//                               <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-20 h-20 object-cover rounded-md"
//                               />
//                               <div className="ml-4">
//                                 <h5 className="font-medium">{product.name}</h5>
//                                 <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Shopping Cart Sidebar with transparent background */}
//       {showCart && (
//         <div className="fixed inset-0 z-50 overflow-hidden">
//           <div 
//             className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" 
//             onClick={() => setShowCart(false)}
//           ></div>
//           <div className="absolute inset-y-0 right-0 max-w-full flex">
//             <div className="relative w-screen max-w-md">
//               <div className="h-full flex flex-col bg-white bg-opacity-95 shadow-xl">
//                 <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
//                   <div className="flex items-start justify-between">
//                     <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
//                     <button
//                       onClick={() => setShowCart(false)}
//                       className="ml-3 h-7 flex items-center"
//                     >
//                       <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   </div>

//                   <div className="mt-8">
//                     <div className="flow-root">
//                       <ul className="-my-6 divide-y divide-gray-200">
//                         {cart.length === 0 ? (
//                           <li className="py-6 flex">
//                             <p className="text-gray-500">Your cart is empty</p>
//                           </li>
//                         ) : (
//                           cart.map((product) => (
//                             <li key={product.id} className="py-6 flex">
//                               <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <div className="ml-4 flex-1 flex flex-col">
//                                 <div>
//                                   <div className="flex justify-between text-base font-medium text-gray-900">
//                                     <h3>{product.name}</h3>
//                                     <p className="ml-4">${product.price.toFixed(2)}</p>
//                                   </div>
//                                 </div>
//                                 <div className="flex-1 flex items-end justify-between text-sm">
//                                   <button
//                                     onClick={() => removeFromCart(product.id)}
//                                     className="font-medium text-red-600 hover:text-red-500"
//                                   >
//                                     Remove
//                                   </button>
//                                 </div>
//                               </div>
//                             </li>
//                           ))
//                         )}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                   <div className="flex justify-between text-base font-medium text-gray-900">
//                     <p>Subtotal</p>
//                     <p>${totalPrice.toFixed(2)}</p>
//                   </div>
//                   <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                   <div className="mt-6">
//                     <button
//                       className="w-full bg-green-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                     >
//                       Checkout
//                     </button>
//                   </div>
//                   <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
//                     <p>
//                       or{' '}
//                       <button
//                         onClick={() => setShowCart(false)}
//                         className="text-green-600 font-medium hover:text-green-500"
//                       >
//                         Continue Shopping<span aria-hidden="true"> &rarr;</span>
//                       </button>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from 'react';
// import { useEffect } from 'react';
import Head from 'next/head';
// import Header from '@/component/Header';
import Hero from '@/component/Hero';
import ProductCard from '@/component/Product';
import ProductDetails from '@/component/ProductDetails';
import { Product, HeroSlide } from '@/types';

const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Power Your Home With Solar Energy",
      description: "High-quality solar products at affordable prices",
      bgColor: "bg-green-700",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions",
      description: "Reduce your carbon footprint with our eco-friendly products",
      bgColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      title: "Cut Your Energy Bills",
      description: "Save money while saving the planet",
      bgColor: "bg-amber-600",
      image: "https://images.unsplash.com/photo-1596422846543-75e6d59b3694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 4,
      title: "Professional Installation",
      description: "Our certified technicians ensure optimal performance",
      bgColor: "bg-indigo-700",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    }
  ];

const products: Product[] = [
      {
        id: 1,
        name: 'Solar Panel 300W',
        price: 249.99,
        description: 'High-efficiency monocrystalline solar panel with advanced photovoltaic technology for maximum energy conversion.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        rating: 4.8,
        specifications: [
          'Power: 300W',
          'Efficiency: 21.5%',
          'Dimensions: 65.6 x 39.4 x 1.4 inches',
          'Weight: 40.8 lbs',
          'Cell Type: Monocrystalline'
        ],
        features: [
          'High conversion efficiency',
          'Weather-resistant frame',
          '25-year linear power output warranty',
          'Anti-reflective coating',
          'PID resistant'
        ]
      },
      {
        id: 2,
        name: 'Solar Inverter 5kW',
        price: 899.99,
        description: 'Grid-tie solar inverter with WiFi monitoring and advanced safety features for reliable performance.',
        image: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        rating: 4.6,
        specifications: [
          'Power: 5kW',
          'Efficiency: 98%',
          'Input Voltage: 150-550V',
          'Output Voltage: 230V',
          'Weight: 35 lbs'
        ],
        features: [
          'WiFi monitoring',
          'Pure sine wave output',
          'MPPT technology',
          'IP65 waterproof rating',
          'Overload and short circuit protection'
        ]
      },
      {
        id: 3,
        name: 'Solar Battery 10kWh',
        price: 3499.99,
        description: 'Lithium-ion solar storage battery with long lifespan and high energy density for home energy storage.',
        image: "images/products/500watts_gadget.png", 
        rating: 4.9,
        specifications: [
          'Capacity: 10kWh',
          'Voltage: 48V',
          'Cycle Life: 6000+ cycles',
          'Depth of Discharge: 90%',
          'Weight: 220 lbs'
        ],
        features: [
          'Lithium iron phosphate chemistry',
          'Modular design for scalability',
          'Built-in battery management system',
          'Wall-mountable',
          '10-year warranty'
        ]
      },
    ];
  

export default function SolarLanding() {
  const [cart, setCart] = useState<Product[]>([]);
  // const [showCart, setShowCart] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);
  // const [notificationProgress, setNotificationProgress] = useState(100);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setShowNotification(true);
    setNotificationProgress(100);
  };

  // const removeFromCart = (productId: number) => {
  //   setCart(cart.filter(item => item.id !== productId));
  // };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  // ... other utility functions and effects

  // const totalItems = cart.length;
  // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Get related products (excluding the currently selected one)
  const relatedProducts = selectedProduct 
    ? products.filter(product => product.id !== selectedProduct.id).slice(0, 2)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SunPower Solar Solutions</title>
        <meta name="description" content="Premium solar products for your home" />
      </Head>

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 w-80 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg">
          {/* ... notification content ... */}
        </div>
      )}
{/* 
      <Header 
        cartItemCount={totalItems} 
        onCartClick={() => setShowCart(!showCart)} 
      /> */}

      <Hero slides={heroSlides} />

      {/* Products Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onProductClick={openProductModal}
            />
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {showProductModal && selectedProduct && (
        <ProductDetails 
          product={selectedProduct}
          relatedProducts={relatedProducts}
          onClose={closeProductModal}
          onAddToCart={addToCart}
          onProductSelect={setSelectedProduct}
        />
      )}

      {/* Shopping Cart Sidebar */}
      {/* ... cart implementation ... */}
    </div>
  );
}