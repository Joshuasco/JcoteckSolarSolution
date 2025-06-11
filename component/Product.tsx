// "use client";
// import { Product, ProductProps } from '@/types';



// export default function ProductCard({ product, onAddToCart, onProductClick }: ProductProps) {
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
//       onClick={() => onProductClick(product)}
//     >
//       <div className="h-48 overflow-hidden">
//         <img 
//           src={product.image} 
//           alt={product.name}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//       </div>
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-xl font-bold">{product.name}</h3>
//           <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
//         </div>
//         <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
//         <div className="flex items-center mb-4">
//           {[...Array(5)].map((_, i) => (
//             <svg
//               key={i}
//               className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//             </svg>
//           ))}
//           <span className="text-gray-600 ml-2">{product.rating}</span>
//         </div>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             onAddToCart(product);
//           }}
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from 'next/link';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center mb-4">
            {/* Rating stars */}
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}