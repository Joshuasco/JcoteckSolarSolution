import { notFound } from 'next/navigation';
import ProductDetails from '@/component/ProductDetails';
import { Product } from '@/types';

// Mock data - replace with actual data fetching
const products: Product[] =  [
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


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));
  
  if (!product) {
    return notFound();
  }
  

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 2);

  return (
    <ProductDetails 
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}