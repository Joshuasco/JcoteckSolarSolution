// "use client";
// import { Product, ProductDetailsProps } from '@/types';
// import { useState } from 'react';


// export default function ProductDetails({ 
//   product, 
//   relatedProducts, 
//   onClose, 
//   onAddToCart,
//   onProductSelect
// }: ProductDetailsProps) {
//   const shareOnWhatsApp = (product: Product) => {
//     const message = `I'm interested in this product:\n\n*${product.name}*\nPrice: $${product.price}\n\n${product.description}\n\nCan you provide more information?`;
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/2347054974199?text=${encodedMessage}`, '_blank');
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         {/* Background overlay */}
//         <div 
//           className="fixed inset-0 transition-opacity" 
//           onClick={onClose}
//         >
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>

//         {/* Modal content */}
//         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
//                     {product.name}
//                   </h3>
//                   <button
//                     onClick={onClose}
//                     className="text-gray-400 hover:text-gray-500"
//                   >
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Product Image */}
//                   <div className="w-full md:w-1/2">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-auto rounded-lg"
//                     />
//                   </div>

//                   {/* Product Details - Scrollable area */}
//                   <div className="w-full md:w-1/2 flex flex-col">
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-2xl font-bold text-green-600">
//                         ${product.price.toFixed(2)}
//                       </span>
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                         ))}
//                         <span className="text-gray-600 ml-2">{product.rating}</span>
//                       </div>
//                     </div>

//                     <div className="overflow-y-auto max-h-[300px] pr-2">
//                       <p className="text-gray-700 mb-6">{product.description}</p>

//                       {/* Specifications */}
//                       <div className="mb-6">
//                         <h4 className="font-bold text-lg mb-2">Specifications</h4>
//                         <ul className="list-disc pl-5 space-y-1">
//                           {product.specifications?.map((spec, index) => (
//                             <li key={index} className="text-gray-600">{spec}</li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Features */}
//                       <div className="mb-6">
//                         <h4 className="font-bold text-lg mb-2">Features</h4>
//                         <ul className="list-disc pl-5 space-y-1">
//                           {product.features?.map((feature, index) => (
//                             <li key={index} className="text-gray-600">{feature}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>

//                     {/* Action Buttons - Fixed at bottom */}
//                     <div className="mt-auto pt-4">
//                       <div className="flex flex-col sm:flex-row gap-3">
//                         <button
//                           onClick={() => {
//                             onAddToCart(product);
//                             onClose();
//                           }}
//                           className="flex-1 bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition duration-300"
//                         >
//                           Add to Cart
//                         </button>
//                         <button
//                           onClick={() => shareOnWhatsApp(product)}
//                           className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded hover:bg-gray-200 transition duration-300 flex items-center justify-center"
//                         >
//                           <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.545.269 1.314.494 1.71.38.397-.112.683-.38.833-.645.15-.265.163-.77-.379-1.545-.545-.775-1.484-1.207-1.932-1.075-.448.133-.72.436-.832.646-.112.21-.224.7.224 1.214.448.515 1.402.63 1.976.02" />
//                           </svg>
//                           WhatsApp Seller
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Related Products */}
//                 {relatedProducts.length > 0 && (
//                   <div className="mt-8">
//                     <h4 className="font-bold text-xl mb-4">Related Products</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {relatedProducts.map((relatedProduct) => (
//                         <div 
//                           key={relatedProduct.id} 
//                           className="flex items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
//                           onClick={() => {
//                             onProductSelect(relatedProduct);
//                             // Scroll to top when changing products
//                             const modalContent = document.querySelector('.overflow-y-auto');
//                             if (modalContent) {
//                               modalContent.scrollTop = 0;
//                             }
//                           }}
//                         >
//                           <img
//                             src={relatedProduct.image}
//                             alt={relatedProduct.name}
//                             className="w-20 h-20 object-cover rounded-md"
//                           />
//                           <div className="ml-4">
//                             <h5 className="font-medium">{relatedProduct.name}</h5>
//                             <p className="text-green-600 font-bold">${relatedProduct.price.toFixed(2)}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { Product } from '@/types';
import Link from 'next/link';

export default function ProductDetails({ 
  product,
  relatedProducts
}: { 
  product: Product;
  relatedProducts: Product[];
}) {
  const shareOnWhatsApp = () => {
    const message = `I'm interested in this product:\n\n*${product.name}*\nPrice: $${product.price}\n\n${product.description}\n\nCan you provide more information?`;
    window.open(`https://wa.me/2347054974199?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center">
              {/* Rating stars */}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
      {/* Specifications */}
      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Specifications</h4>
        <ul className="list-disc pl-5 space-y-1">
          {product.specifications?.map((spec, index) => (
            <li key={index} className="text-gray-600">{spec}</li>
          ))}
        </ul>
      </div>

    {/* Features */}
    <div className="mb-6">
      <h4 className="font-bold text-lg mb-2">Features</h4>
      <ul className="list-disc pl-5 space-y-1">
        {product.features?.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
    </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition">
              Add to Cart
            </button>
            <button
              onClick={shareOnWhatsApp}
              className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded hover:bg-gray-200 transition flex items-center justify-center"
            >
              WhatsApp Seller
            </button>
          </div>
        </div>
      </div>
 
    
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={`/products/${relatedProduct.id}`}
                className="flex items-center border rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="font-medium">{relatedProduct.name}</h3>
                  <p className="text-green-600 font-bold">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}