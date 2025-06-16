
// "use client";
// import { useState } from 'react';
// // import { useEffect } from 'react';
// import Head from 'next/head';
// // import Header from '@/component/Header';
// import Hero from '@/component/Hero';
// import ProductCard from '@/component/Product';
// import ProductDetails from '@/component/ProductDetails';
// import { Product, HeroSlide } from '@/types';

// const heroSlides: HeroSlide[] = [
//     {
//       id: 1,
//       title: "Power Your Home With Solar Energy",
//       description: "High-quality solar products at affordable prices",
//       bgColor: "bg-green-700",
//       image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
//     },
//     {
//       id: 2,
//       title: "Sustainable Energy Solutions",
//       description: "Reduce your carbon footprint with our eco-friendly products",
//       bgColor: "bg-blue-600",
//       image: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//     },
//     {
//       id: 3,
//       title: "Cut Your Energy Bills",
//       description: "Save money while saving the planet",
//       bgColor: "bg-amber-600",
//       image: "https://images.unsplash.com/photo-1596422846543-75e6d59b3694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
//     },
//     {
//       id: 4,
//       title: "Professional Installation",
//       description: "Our certified technicians ensure optimal performance",
//       bgColor: "bg-indigo-700",
//       image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
//     }
//   ];

// const products: Product[] = [
//       {
//         id: 1,
//         name: 'Solar Panel 300W',
//         price: 249.99,
//         description: 'High-efficiency monocrystalline solar panel with advanced photovoltaic technology for maximum energy conversion.',
//         image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
//         rating: 4.8,
//         specifications: [
//           'Power: 300W',
//           'Efficiency: 21.5%',
//           'Dimensions: 65.6 x 39.4 x 1.4 inches',
//           'Weight: 40.8 lbs',
//           'Cell Type: Monocrystalline'
//         ],
//         features: [
//           'High conversion efficiency',
//           'Weather-resistant frame',
//           '25-year linear power output warranty',
//           'Anti-reflective coating',
//           'PID resistant'
//         ]
//       },
//       {
//         id: 2,
//         name: 'Solar Inverter 5kW',
//         price: 899.99,
//         description: 'Grid-tie solar inverter with WiFi monitoring and advanced safety features for reliable performance.',
//         image: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
//         rating: 4.6,
//         specifications: [
//           'Power: 5kW',
//           'Efficiency: 98%',
//           'Input Voltage: 150-550V',
//           'Output Voltage: 230V',
//           'Weight: 35 lbs'
//         ],
//         features: [
//           'WiFi monitoring',
//           'Pure sine wave output',
//           'MPPT technology',
//           'IP65 waterproof rating',
//           'Overload and short circuit protection'
//         ]
//       },
//       {
//         id: 3,
//         name: 'Solar Battery 10kWh',
//         price: 3499.99,
//         description: 'Lithium-ion solar storage battery with long lifespan and high energy density for home energy storage.',
//         image: "images/products/500watts_gadget.png", 
//         rating: 4.9,
//         specifications: [
//           'Capacity: 10kWh',
//           'Voltage: 48V',
//           'Cycle Life: 6000+ cycles',
//           'Depth of Discharge: 90%',
//           'Weight: 220 lbs'
//         ],
//         features: [
//           'Lithium iron phosphate chemistry',
//           'Modular design for scalability',
//           'Built-in battery management system',
//           'Wall-mountable',
//           '10-year warranty'
//         ]
//       },
//     ];
  

// export default function SolarLanding() {
//   const [cart, setCart] = useState<Product[]>([]);
//   // const [showCart, setShowCart] = useState(false);
//   // const [showNotification, setShowNotification] = useState(false);
//   // const [notificationProgress, setNotificationProgress] = useState(100);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [showProductModal, setShowProductModal] = useState(false);

//   const addToCart = (product: Product) => {
//     setCart([...cart, product]);
//     setShowNotification(true);
//     setNotificationProgress(100);
//   };

//   // const removeFromCart = (productId: number) => {
//   //   setCart(cart.filter(item => item.id !== productId));
//   // };

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product);
//     setShowProductModal(true);
//   };

//   const closeProductModal = () => {
//     setShowProductModal(false);
//     setSelectedProduct(null);
//   };

//   // ... other utility functions and effects

//   // const totalItems = cart.length;
//   // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
//           {/* ... notification content ... */}
//         </div>
//       )}
// {/* 
//       <Header 
//         cartItemCount={totalItems} 
//         onCartClick={() => setShowCart(!showCart)} 
//       /> */}

//       <Hero slides={heroSlides} />

//       {/* Products Section */}
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Solar Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard 
//               key={product.id}
//               product={product}
//               onAddToCart={addToCart}
//               onProductClick={openProductModal}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Product Detail Modal */}
//       {showProductModal && selectedProduct && (
//         <ProductDetails 
//           product={selectedProduct}
//           relatedProducts={relatedProducts}
//           onClose={closeProductModal}
//           onAddToCart={addToCart}
//           onProductSelect={setSelectedProduct}
//         />
//       )}

//       {/* Shopping Cart Sidebar */}
//       {/* ... cart implementation ... */}
//     </div>
//   );
// }


export default function SolarLanding() {
  return(
    <div>
      <h1>Main Page</h1>
      </div>
  )
}