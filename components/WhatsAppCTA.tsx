// 'use client'

// import { FaWhatsapp } from 'react-icons/fa'
// import { useEffect, useState } from 'react'

// export default function WhatsAppCTA() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//       <a
//         href="https://wa.me/234YOURNUMBER?text=I%20want%20to%20buy%20Feisun%20500W%20Kit"
//         aria-label="Chat on WhatsApp"
//         className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
//       >
//         <FaWhatsapp className="text-2xl" />
//       </a>
//     </div>
//   )
// }