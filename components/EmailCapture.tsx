// 'use client'

// import { useState } from 'react'
// import { FaPaperPlane } from 'react-icons/fa'

// export default function EmailCapture() {
//   const [email, setEmail] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     try {
//       const res = await fetch('/api/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       })

//       if (res.ok) {
//         setMessage({ text: 'Thank you! Check your email soon.', type: 'success' })
//         setEmail('')
//       } else {
//         throw new Error('Failed to submit')
//       }
//     } catch (error) {
//       setMessage({ text: 'Submission failed. Please try again.', type: 'error' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section className="bg-primary text-white rounded-xl p-8 my-12">
//       <div className="max-w-2xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Want Solar Power Tips?</h2>
        
//         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-6">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="flex-grow px-4 py-3 rounded-lg text-gray-800"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-secondary text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
//           >
//             {isSubmitting ? 'Sending...' : 'Send'} <FaPaperPlane />
//           </button>
//         </form>

//         {message && (
//           <p className={`mt-4 ${message.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
//             {message.text}
//           </p>
//         )}
//       </div>
//     </section>
//   )
// }