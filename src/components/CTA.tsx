"use client";

import { ctaDetails } from "@/data/cta"
import { useState } from "react"
import { Bricolage_Grotesque } from 'next/font/google'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const CTA: React.FC = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [interests, setInterests] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      if (!firstName || !lastName || !email) {
        setError('Please fill in all required fields.')
        return
      }

      const user = { firstName, lastName, email, interests }

      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })

        const data = await response.json()

        if (response.ok) {
          console.log('User signed up successfully', data)
          // Clear the form values after successful submission
          setFirstName('')
          setLastName('')
          setEmail('')
          setInterests('')
          
          // Set success message
          setSuccessMessage('You have successfully signed up!')
          setError('') // Clear any previous error
        } else {
          setError(data.message || 'Something went wrong.')
          setSuccessMessage('') // Clear success message in case of error
        }
      } catch (error) {
        console.error('Error:', error)
        setError('An error occurred. Please try again.')
        setSuccessMessage('') // Clear success message in case of error
      }
    }

    return (
        <section id="cta" className={`${bricolageGrotesque.className} mt-10 mb-5 lg:my-20`}>
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5 py-10">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-8 max-w-2xl">{ctaDetails.heading}</h2>

                        {/* <div className="w-full max-w-md bg-white/10 backdrop-blur-[2px] shadow-md rounded-lg p-8 mt-6"> */}
                          {/* <h3 className="text-2xl font-bold text-center mb-6 text-white">Join the Waitlist</h3> */}
                          
                          {error && (
                            <div className="mb-6 p-3 bg-red-900/20 border border-red-500/30 text-red-200 text-sm rounded-md">
                              {error}
                            </div>
                          )}

                          {successMessage && (
                            <div className="mb-6 p-3 bg-green-900/20 border border-green-500/30 text-green-200 text-sm rounded-md">
                              {successMessage}
                            </div>
                          )}

                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <label htmlFor="firstName" className="block text-md font-medium text-white/90 mb-2" style={{ textAlign: 'left'}}>First Name</label>
                              <input
                                type="text"
                                id="firstName"
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-300 focus:border-purple-300 transition text-white"
                                placeholder="John"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="lastName" className="block text-md font-medium text-white/90 mb-2" style={{ textAlign: 'left'}}>Last Name</label>
                              <input
                                type="text"
                                id="lastName"
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition text-white"
                                placeholder="Doe"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-md font-medium text-white/90 mb-2" style={{ textAlign: 'left'}}>Email</label>
                              <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition text-white"
                                placeholder="john.doe@xyz.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="interests" className="block text-md font-medium text-white/90 mb-2" style={{ textAlign: 'left'}}>
                                What interests you about Decibl? <span className="text-white/60 font-normal">(Optional)</span>
                              </label>
                              <textarea
                                id="interests"
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition text-white"
                                placeholder="Let us know why you're interested!"
                                value={interests}
                                onChange={(e) => setInterests(e.target.value)}
                                rows={3}
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-auto px-8 py-2.5 mt-6 bg-[#9F78E5] text-white text-base font-medium rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9F78E5] transition-colors shadow-md mx-auto block"
                            >
                              Sign Up
                            </button>
                          </form>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA