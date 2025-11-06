(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/form/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import axios from "axios"
// import type React from "react"
// import { useState } from "react"
// import { ChevronLeft, Upload, CheckCircle2, AlertCircle, CheckCircle } from "lucide-react"
// import Link from "next/link"
// function Toast({ message, type, isVisible }: { message: string; type: "success" | "error"; isVisible: boolean }) {
//   if (!isVisible) return null
//   return (
//     <div
//       className={`fixed top-4 right-4 p-4 rounded-lg flex items-center gap-2 text-white font-semibold z-50 animate-in fade-in slide-in-from-top-5 ${
//         type === "success" ? "bg-green-500" : "bg-red-500"
//       }`}
//     >
//       {type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
//       {message}
//     </div>
//   )
// }
// const STEPS = [
//   { number: 1, label: "Personal" },
//   { number: 2, label: "Employment" },
//   { number: 3, label: "Family" },
//   { number: 4, label: "Financial" },
//   { number: 5, label: "Request" },
//   { number: 6, label: "References" },
//   { number: 7, label: "Documents" },
//   { number: 8, label: "Review" },
// ]
// export default function ApplyPage() {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [toast, setToast] = useState<{ message: string; type: "success" | "error"; isVisible: boolean }>({
//     message: "",
//     type: "success",
//     isVisible: false,
//   })
//   const [formData, setFormData] = useState({
//     // Step 1: Personal
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     gender: "",
//     dateOfBirth: "",
//     mobilePhone: "",
//     homePhone: "",
//     email: "",
//     legalStatus: "",
//     referredBy: "",
//     referrerPhone: "",
//     // Step 2: Employment
//     employmentStatus: "",
//     // Step 3: Family
//     dependentsInfo: "",
//     // Step 4: Financial
//     totalMonthlyIncome: "",
//     incomeSources: "",
//     rentMortgage: "",
//     utilities: "",
//     food: "",
//     otherExpenses: "",
//     totalDebts: "",
//     // Step 5: Request
//     requestType: "Zakat",
//     amountRequested: "",
//     whyApplying: "",
//     circumstances: "",
//     previousZakat: "",
//     // Step 6: References
//     reference1: { fullName: "", phoneNumber: "", email: "", relationship: "" },
//     reference2: { fullName: "", phoneNumber: "", email: "", relationship: "" },
//     // Step 7: Documents
//     documents: [] as File[],
//   })
//   const showToast = (message: string, type: "success" | "error") => {
//     setToast({ message, type, isVisible: true })
//     setTimeout(() => setToast((prev) => ({ ...prev, isVisible: false })), 4000)
//   }
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }
//   const handleReferenceChange = (refNumber: 1 | 2, field: string, value: string) => {
//     const refKey = refNumber === 1 ? "reference1" : "reference2"
//     setFormData((prev) => ({
//       ...prev,
//       [refKey]: { ...prev[refKey], [field]: value },
//     }))
//   }
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files
//     if (!files) return
//     const uploadedFiles = Array.from(files)
//     const maxSize = 10 * 1024 * 1024 // 10MB
//     for (const file of uploadedFiles) {
//       if (file.size > maxSize) {
//         showToast(`File ${file.name} exceeds 10MB limit`, "error")
//         return
//       }
//     }
//     setFormData((prev) => ({
//       ...prev,
//       documents: [...prev.documents, ...uploadedFiles],
//     }))
//     showToast(`${uploadedFiles.length} file(s) uploaded successfully`, "success")
//   }
//   const removeDocument = (index: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       documents: prev.documents.filter((_, i) => i !== index),
//     }))
//   }
//   const handleNext = () => {
//     if (currentStep < STEPS.length) {
//       setCurrentStep(currentStep + 1)
//     }
//   }
//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1)
//     }
//   }
//   const handleSubmit = async () => {
//     setIsSubmitting(true)
//     try {
//       const API_BASE_URL =
//         process.env.NEXT_PUBLIC_API_URL || "https://rahmah-exchange-backend-production.up.railway.app"
//       // Create FormData to handle file uploads
//       const submitData = new FormData()
//       // Add all form data
//       submitData.append("firstName", formData.firstName)
//       submitData.append("lastName", formData.lastName)
//       submitData.append("streetAddress", formData.streetAddress)
//       submitData.append("city", formData.city)
//       submitData.append("state", formData.state)
//       submitData.append("zipCode", formData.zipCode)
//       submitData.append("gender", formData.gender)
//       submitData.append("dateOfBirth", formData.dateOfBirth)
//       submitData.append("mobilePhone", formData.mobilePhone)
//       submitData.append("homePhone", formData.homePhone)
//       submitData.append("email", formData.email)
//       submitData.append("legalStatus", formData.legalStatus)
//       submitData.append("referredBy", formData.referredBy)
//       submitData.append("referrerPhone", formData.referrerPhone)
//       submitData.append("employmentStatus", formData.employmentStatus)
//       submitData.append("dependentsInfo", formData.dependentsInfo)
//       submitData.append("totalMonthlyIncome", formData.totalMonthlyIncome)
//       submitData.append("incomeSources", formData.incomeSources)
//       submitData.append("rentMortgage", formData.rentMortgage)
//       submitData.append("utilities", formData.utilities)
//       submitData.append("food", formData.food)
//       submitData.append("otherExpenses", formData.otherExpenses)
//       submitData.append("totalDebts", formData.totalDebts)
//       submitData.append("requestType", formData.requestType)
//       submitData.append("amountRequested", formData.amountRequested)
//       submitData.append("whyApplying", formData.whyApplying)
//       submitData.append("circumstances", formData.circumstances)
//       submitData.append("previousZakat", formData.previousZakat)
//       submitData.append("reference1", JSON.stringify(formData.reference1))
//       submitData.append("reference2", JSON.stringify(formData.reference2))
//       // Add documents
//       formData.documents.forEach((file, index) => {
//         submitData.append(`documents`, file)
//       })
//       const response = await axios.post(
//         "https://rahmah-exchange-backend-production.up.railway.app/api/zakatApplicants",
//         submitData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         },
//       )
//       console.log("✅ Application submitted:", response.data)
//       showToast("Application submitted successfully!", "success")
//       setIsSubmitted(true)
//     } catch (error: any) {
//       const errorMessage =
//         error.response?.data?.message || "Something went wrong submitting your application. Please try again."
//       console.error("❌ Error submitting application:", error)
//       showToast(errorMessage, "error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }
//   const isStepCompleted = (step: number) => step < currentStep
//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50">
//         <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
//           <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-teal-600 transition font-medium">
//             <ChevronLeft className="w-5 h-5" />
//             Back to Home
//           </Link>
//         </header>
//         <div className="px-8 py-12 max-w-2xl mx-auto">
//           {/* Success Banner */}
//           <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
//             <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
//             <p className="text-green-800 font-semibold">Application submitted successfully!</p>
//           </div>
//           {/* Status Card */}
//           <div className="bg-white rounded-2xl p-8 shadow-sm">
//             <h1 className="text-3xl font-bold text-gray-900 mb-8">Application Status</h1>
//             {/* Current Status */}
//             <div className="mb-8 pb-8 border-b border-gray-200">
//               <p className="text-gray-600 text-sm font-medium mb-2">Current Status</p>
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
//                 <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                 <span className="text-blue-700 font-semibold text-sm">Submitted</span>
//               </div>
//             </div>
//             {/* Application Details */}
//             <div className="mb-8">
//               <h2 className="text-xl font-semibold text-gray-900 mb-6">Application Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-gray-600 text-sm mb-1">Application ID</p>
//                   <p className="text-gray-900 font-semibold">b6b368b5</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm mb-1">Submitted Date</p>
//                   <p className="text-gray-900 font-semibold">03/11/2025</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm mb-1">Applicant Name</p>
//                   <p className="text-gray-900 font-semibold">
//                     {formData.firstName} {formData.lastName}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm mb-1">Request Type</p>
//                   <p className="text-gray-900 font-semibold">{formData.requestType}</p>
//                 </div>
//               </div>
//             </div>
//             {/* Info Box */}
//             <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//               <p className="text-blue-900 text-sm">Your application has been received and is pending review.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50">
//       <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} />
//       {/* Header */}
//       <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
//         <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-teal-600 transition font-medium">
//           <ChevronLeft className="w-5 h-5" />
//           Back to Home
//         </Link>
//         <button className="px-6 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg transition">
//           Save Progress
//         </button>
//       </header>
//       {/* Main Content */}
//       <div className="px-8 py-12 max-w-4xl mx-auto">
//         {/* Page Title */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-3">Assistance Application</h1>
//           <p className="text-gray-600">Complete all steps to submit your application for verified support</p>
//         </div>
//         {/* Step Indicator */}
//         <div className="mb-12">
//           <div className="flex justify-between items-start mb-4">
//             {STEPS.map((step) => (
//               <div key={step.number} className="flex flex-col items-center flex-1">
//                 <div
//                   className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition ${
//                     step.number === currentStep
//                       ? "bg-teal-600 text-white"
//                       : isStepCompleted(step.number)
//                         ? "bg-teal-600 text-white"
//                         : "bg-gray-200 text-gray-500"
//                   }`}
//                 >
//                   {isStepCompleted(step.number) ? "✓" : step.number}
//                 </div>
//                 <p className="text-sm text-gray-600 text-center text-balance font-medium">{step.label}</p>
//               </div>
//             ))}
//           </div>
//           {/* Progress Bar */}
//           <div className="w-full bg-gray-300 rounded-full h-1">
//             <div
//               className="bg-gray-900 h-1 rounded-full transition-all duration-300"
//               style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
//             />
//           </div>
//         </div>
//         {/* Form Card */}
//         <div className="bg-white rounded-2xl p-8 shadow-sm">
//           {currentStep === 1 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* First Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//                 {/* Last Name */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//               </div>
//               {/* Street Address */}
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Street Address</label>
//                 <input
//                   type="text"
//                   name="streetAddress"
//                   value={formData.streetAddress}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                   placeholder=""
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* City */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//                 {/* State */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">State</label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* ZIP Code */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">ZIP Code</label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={formData.zipCode}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//                 {/* Gender */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Gender</label>
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-600"
//                   >
//                     <option value="">Select gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                     <option value="prefer-not">Prefer not to say</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* Date of Birth */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                   />
//                 </div>
//                 {/* Mobile Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Mobile Phone <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="mobilePhone"
//                     value={formData.mobilePhone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* Home Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Home Phone</label>
//                   <input
//                     type="tel"
//                     name="homePhone"
//                     value={formData.homePhone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {/* Legal Status */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Legal Status</label>
//                   <select
//                     name="legalStatus"
//                     value={formData.legalStatus}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-600"
//                   >
//                     <option value="">Select status</option>
//                     <option value="citizen">Citizen</option>
//                     <option value="resident">Resident</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 {/* Referred By */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Referred By</label>
//                   <input
//                     type="text"
//                     name="referredBy"
//                     value={formData.referredBy}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     placeholder=""
//                   />
//                 </div>
//               </div>
//               <div className="mb-8">
//                 {/* Referrer Phone */}
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Referrer Phone</label>
//                 <input
//                   type="tel"
//                   name="referrerPhone"
//                   value={formData.referrerPhone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                   placeholder=""
//                 />
//               </div>
//             </div>
//           )}
//           {currentStep === 2 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Employment Information</h2>
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Employment Status</label>
//                 <select
//                   name="employmentStatus"
//                   value={formData.employmentStatus}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                 >
//                   <option value="">Select status</option>
//                   <option value="employed">Employed</option>
//                   <option value="self-employed">Self-Employed</option>
//                   <option value="unemployed">Unemployed</option>
//                   <option value="retired">Retired</option>
//                   <option value="student">Student</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//             </div>
//           )}
//           {currentStep === 3 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Family Information</h2>
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Dependents Information</h3>
//                 <textarea
//                   name="dependentsInfo"
//                   value={formData.dependentsInfo}
//                   onChange={handleChange}
//                   placeholder="List your dependents with their names, ages, and relationship. Example:&#10;- John Smith, 8 years old, Son&#10;- Mary Smith, 5 years old, Daughter&#10;- Mother-in-law, 65 years old, lives with us"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-48"
//                 />
//                 <p className="text-sm text-gray-500 mt-2">Please list all people who depend on you financially</p>
//               </div>
//             </div>
//           )}
//           {currentStep === 4 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Financial Information</h2>
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Income</h3>
//                 <div className="mb-6">
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Total Monthly Income</label>
//                   <input
//                     type="number"
//                     name="totalMonthlyIncome"
//                     value={formData.totalMonthlyIncome}
//                     onChange={handleChange}
//                     placeholder="0.00"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Income Sources</label>
//                   <textarea
//                     name="incomeSources"
//                     value={formData.incomeSources}
//                     onChange={handleChange}
//                     placeholder="List all income sources: salary, spouse salary, social security, unemployment, child support, etc."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-32"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Expenses</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">Rent/Mortgage</label>
//                     <input
//                       type="number"
//                       name="rentMortgage"
//                       value={formData.rentMortgage}
//                       onChange={handleChange}
//                       placeholder="0.00"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Utilities (Electric, Gas, Water)
//                     </label>
//                     <input
//                       type="number"
//                       name="utilities"
//                       value={formData.utilities}
//                       onChange={handleChange}
//                       placeholder="0.00"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">Food</label>
//                     <input
//                       type="number"
//                       name="food"
//                       value={formData.food}
//                       onChange={handleChange}
//                       placeholder="0.00"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">Other Expenses</label>
//                     <input
//                       type="text"
//                       name="otherExpenses"
//                       value={formData.otherExpenses}
//                       onChange={handleChange}
//                       placeholder="Transportation, medical, school, etc."
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">Total Debts</label>
//                   <input
//                     type="number"
//                     name="totalDebts"
//                     value={formData.totalDebts}
//                     onChange={handleChange}
//                     placeholder="0.00"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//           {currentStep === 5 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Application Request</h2>
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Request Type</label>
//                 <select
//                   name="requestType"
//                   value={formData.requestType}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                 >
//                   <option value="Zakat">Zakat</option>
//                   <option value="Sadaqah">Sadaqah</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Amount Requested</label>
//                 <input
//                   type="number"
//                   name="amountRequested"
//                   value={formData.amountRequested}
//                   onChange={handleChange}
//                   placeholder="0.00"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">
//                   Why Are You Applying for {formData.requestType}?
//                 </label>
//                 <textarea
//                   name="whyApplying"
//                   value={formData.whyApplying}
//                   onChange={handleChange}
//                   placeholder="Please provide detailed information about your situation and why you need assistance..."
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-32"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Explain Your Circumstances</label>
//                 <textarea
//                   name="circumstances"
//                   value={formData.circumstances}
//                   onChange={handleChange}
//                   placeholder="Explain your circumstances and how the assistance will help"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-32"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">
//                   Have you received {formData.requestType}/Sadaqa in the past 12 months?
//                 </label>
//                 <select
//                   name="previousZakat"
//                   value={formData.previousZakat}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                 >
//                   <option value="">Select</option>
//                   <option value="yes">Yes</option>
//                   <option value="no">No</option>
//                 </select>
//               </div>
//             </div>
//           )}
//           {currentStep === 6 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-3">References (2 Required)</h2>
//               <p className="text-gray-600 mb-8">Please provide two references who can vouch for you</p>
//               {/* Reference 1 */}
//               <div className="mb-8 pb-8 border-b border-gray-200">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-1 h-8 bg-teal-600 rounded" />
//                   <h3 className="text-lg font-bold text-gray-900">Reference 1</h3>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.reference1.fullName}
//                       onChange={(e) => handleReferenceChange(1, "fullName", e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.reference1.phoneNumber}
//                       onChange={(e) => handleReferenceChange(1, "phoneNumber", e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
//                     <input
//                       type="email"
//                       value={formData.reference1.email}
//                       onChange={(e) => handleReferenceChange(1, "email", e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       How do you know this person?
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.reference1.relationship}
//                       onChange={(e) => handleReferenceChange(1, "relationship", e.target.value)}
//                       placeholder="e.g., Friend from Masjid, Neighbor"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* Reference 2 */}
//               <div>
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-1 h-8 bg-blue-500 rounded" />
//                   <h3 className="text-lg font-bold text-gray-900">Reference 2</h3>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.reference2.fullName}
//                       onChange={(e) => handleReferenceChange(2, "fullName", e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.reference2.phoneNumber}
//                       onChange={(e) => handleReferenceChange(2, "phoneNumber", e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
//                     <input
//                       type="email"
//                       value={formData.reference2.email}
//                       onChange={(e) => handleReferenceChange(2, "email", e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       How do you know this person?
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.reference2.relationship}
//                       onChange={(e) => handleReferenceChange(2, "relationship", e.target.value)}
//                       placeholder="e.g., Family friend, Colleague"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//           {currentStep === 7 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Supporting Documents</h2>
//               <p className="text-gray-600 mb-6">
//                 Please upload supporting documents such as: ID, bills, pay stubs, bank statements, etc.
//               </p>
//               <div className="mb-6">
//                 <input
//                   type="file"
//                   id="file-upload"
//                   multiple
//                   accept=".pdf,.jpg,.jpeg,.png"
//                   onChange={handleFileUpload}
//                   className="hidden"
//                 />
//                 <label
//                   htmlFor="file-upload"
//                   className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer block"
//                 >
//                   <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                   <p className="text-teal-600 font-semibold text-lg mb-2">Click to upload documents</p>
//                   <p className="text-gray-500">PDF, JPG, PNG up to 10MB</p>
//                 </label>
//               </div>
//               {formData.documents.length > 0 && (
//                 <div className="mt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                     Uploaded Files ({formData.documents.length})
//                   </h3>
//                   <div className="space-y-2">
//                     {formData.documents.map((doc, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg"
//                       >
//                         <div className="flex items-center gap-2">
//                           <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
//                           <span className="text-gray-700 font-medium text-sm">{doc.name}</span>
//                           <span className="text-gray-500 text-xs">({(doc.size / 1024 / 1024).toFixed(2)} MB)</span>
//                         </div>
//                         <button
//                           onClick={() => removeDocument(index)}
//                           className="px-3 py-1 text-red-600 hover:bg-red-50 rounded transition text-sm font-medium"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//           {currentStep === 8 && (
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Review Your Application</h2>
//               <div className="space-y-8">
//                 {/* Personal Information Section */}
//                 <div className="pb-6 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
//                   <div className="text-sm text-gray-600 space-y-1">
//                     <p>
//                       {formData.firstName} {formData.lastName}
//                     </p>
//                     <p>{formData.email}</p>
//                     <p>{formData.mobilePhone}</p>
//                   </div>
//                 </div>
//                 {/* Employment Section */}
//                 <div className="pb-6 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-3">Employment</h3>
//                   <div className="text-sm text-gray-600">
//                     <p>Status: {formData.employmentStatus || "Not provided"}</p>
//                   </div>
//                 </div>
//                 {/* Financial Summary Section */}
//                 <div className="pb-6 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-3">Financial Summary</h3>
//                   <div className="text-sm text-gray-600 space-y-1">
//                     <p>Monthly Income: ${formData.totalMonthlyIncome || "0"}</p>
//                     <p>Monthly Rent: ${formData.rentMortgage || "0"}</p>
//                     <p>Total Debts: ${formData.totalDebts || "0"}</p>
//                   </div>
//                 </div>
//                 {/* Request Details Section */}
//                 <div className="pb-6 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-3">Request Details</h3>
//                   <div className="text-sm text-gray-600 space-y-1">
//                     <p>Type: {formData.requestType}</p>
//                     <p>Amount Requested: ${formData.amountRequested || "0"}</p>
//                     <p>Reason: {formData.whyApplying.substring(0, 100) || "..."}</p>
//                   </div>
//                 </div>
//                 {/* References Section */}
//                 <div className="pb-6 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-3">References</h3>
//                   <div className="text-sm text-gray-600 space-y-1">
//                     <p>1. {formData.reference1.fullName || "-"}</p>
//                     <p>2. {formData.reference2.fullName || "-"}</p>
//                   </div>
//                 </div>
//                 {formData.documents.length > 0 && (
//                   <div className="pb-6 border-b border-gray-200">
//                     <h3 className="font-semibold text-gray-900 mb-3">Uploaded Documents</h3>
//                     <div className="text-sm text-gray-600 space-y-1">
//                       {formData.documents.map((doc, index) => (
//                         <p key={index}>
//                           {index + 1}. {doc.name}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//                 {/* Declaration Section */}
//                 <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                   <p className="text-sm text-blue-900">
//                     <span className="font-semibold">Declaration:</span> I testify that the information provided in this
//                     application is true and accurate to the best of my knowledge. I authorize the verification of this
//                     information to determine my eligibility for {formData.requestType}.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* Navigation Buttons */}
//           <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
//             <button
//               onClick={handleBack}
//               className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition font-medium disabled:opacity-50"
//               disabled={currentStep === 1}
//             >
//               ← Back
//             </button>
//             {currentStep === STEPS.length ? (
//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Application"}
//               </button>
//             ) : (
//               <button
//                 onClick={handleNext}
//                 className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition inline-flex items-center gap-2"
//               >
//                 Next
//                 <span>→</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
__turbopack_context__.s([
    "default",
    ()=>ApplyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Toast({ message, type, isVisible }) {
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-4 right-4 p-4 rounded-lg flex items-center gap-2 text-white font-semibold z-50 animate-in fade-in slide-in-from-top-5 ${type === "success" ? "bg-green-500" : "bg-red-500"}`,
        children: [
            type === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/app/form/page.tsx",
                lineNumber: 1053,
                columnNumber: 29
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/app/form/page.tsx",
                lineNumber: 1053,
                columnNumber: 67
            }, this),
            message
        ]
    }, void 0, true, {
        fileName: "[project]/app/form/page.tsx",
        lineNumber: 1048,
        columnNumber: 5
    }, this);
}
_c = Toast;
const STEPS = [
    {
        number: 1,
        label: "Personal"
    },
    {
        number: 2,
        label: "Employment"
    },
    {
        number: 3,
        label: "Family"
    },
    {
        number: 4,
        label: "Financial"
    },
    {
        number: 5,
        label: "Request"
    },
    {
        number: 6,
        label: "References"
    },
    {
        number: 7,
        label: "Documents"
    },
    {
        number: 8,
        label: "Review"
    }
];
function ApplyPage() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        message: "",
        type: "success",
        isVisible: false
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Step 1: Personal
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        gender: "",
        dateOfBirth: "",
        mobilePhone: "",
        homePhone: "",
        email: "",
        legalStatus: "",
        referredBy: "",
        referrerPhone: "",
        // Step 2: Employment
        employmentStatus: "",
        // Step 3: Family
        dependentsInfo: "",
        // Step 4: Financial
        totalMonthlyIncome: "",
        incomeSources: "",
        rentMortgage: "",
        utilities: "",
        food: "",
        otherExpenses: "",
        totalDebts: "",
        // Step 5: Request
        requestType: "Zakat",
        amountRequested: "",
        whyApplying: "",
        circumstances: "",
        previousZakat: "",
        // Step 6: References
        reference1: {
            fullName: "",
            phoneNumber: "",
            email: "",
            relationship: ""
        },
        reference2: {
            fullName: "",
            phoneNumber: "",
            email: "",
            relationship: ""
        },
        // Step 7: Documents
        documents: []
    });
    const showToast = (message, type)=>{
        setToast({
            message,
            type,
            isVisible: true
        });
        setTimeout(()=>setToast((prev)=>({
                    ...prev,
                    isVisible: false
                })), 4000);
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleReferenceChange = (refNumber, field, value)=>{
        const refKey = refNumber === 1 ? "reference1" : "reference2";
        setFormData((prev)=>({
                ...prev,
                [refKey]: {
                    ...prev[refKey],
                    [field]: value
                }
            }));
    };
    const handleFileUpload = (e)=>{
        const files = e.target.files;
        if (!files) return;
        const uploadedFiles = Array.from(files);
        const maxSize = 10 * 1024 * 1024 // 10MB
        ;
        for (const file of uploadedFiles){
            if (file.size > maxSize) {
                showToast(`File ${file.name} exceeds 10MB limit`, "error");
                return;
            }
        }
        setFormData((prev)=>({
                ...prev,
                documents: [
                    ...prev.documents,
                    ...uploadedFiles
                ]
            }));
        showToast(`${uploadedFiles.length} file(s) uploaded successfully`, "success");
    };
    const removeDocument = (index)=>{
        setFormData((prev)=>({
                ...prev,
                documents: prev.documents.filter((_, i)=>i !== index)
            }));
    };
    const handleNext = ()=>{
        if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1);
        }
    };
    const handleBack = ()=>{
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleSubmit = async ()=>{
        setIsSubmitting(true);
        try {
            const API_BASE_URL = ("TURBOPACK compile-time value", "https://rahmah-exchange-backend-production.up.railway.app") || "https://rahmah-exchange-backend-production.up.railway.app";
            // Create FormData to handle file uploads
            const submitData = new FormData();
            // Add all form data
            submitData.append("firstName", formData.firstName);
            submitData.append("lastName", formData.lastName);
            submitData.append("streetAddress", formData.streetAddress);
            submitData.append("city", formData.city);
            submitData.append("state", formData.state);
            submitData.append("zipCode", formData.zipCode);
            submitData.append("gender", formData.gender);
            submitData.append("dateOfBirth", formData.dateOfBirth);
            submitData.append("mobilePhone", formData.mobilePhone);
            submitData.append("homePhone", formData.homePhone);
            submitData.append("email", formData.email);
            submitData.append("legalStatus", formData.legalStatus);
            submitData.append("referredBy", formData.referredBy);
            submitData.append("referrerPhone", formData.referrerPhone);
            submitData.append("employmentStatus", formData.employmentStatus);
            submitData.append("dependentsInfo", formData.dependentsInfo);
            submitData.append("totalMonthlyIncome", formData.totalMonthlyIncome);
            submitData.append("incomeSources", formData.incomeSources);
            submitData.append("rentMortgage", formData.rentMortgage);
            submitData.append("utilities", formData.utilities);
            submitData.append("food", formData.food);
            submitData.append("otherExpenses", formData.otherExpenses);
            submitData.append("totalDebts", formData.totalDebts);
            submitData.append("requestType", formData.requestType);
            submitData.append("amountRequested", formData.amountRequested);
            submitData.append("whyApplying", formData.whyApplying);
            submitData.append("circumstances", formData.circumstances);
            submitData.append("previousZakat", formData.previousZakat);
            submitData.append("reference1", JSON.stringify(formData.reference1));
            submitData.append("reference2", JSON.stringify(formData.reference2));
            // Add documents
            formData.documents.forEach((file, index)=>{
                submitData.append(`documents`, file);
            });
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("https://rahmah-exchange-backend-production.up.railway.app/api/zakatApplicants", submitData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response) {
                console.log("[v0] Application submitted successfully:", response.data);
                showToast("Application submitted successfully!", "success");
                setIsSubmitted(true);
                setIsSubmitting(false);
                return; // Exit function early on success
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Something went wrong submitting your application. Please try again.";
            console.error("[v0] Error submitting application:", error);
            showToast(errorMessage, "error");
            setIsSubmitting(false);
        }
    };
    const isStepCompleted = (step)=>step < currentStep;
    if (isSubmitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-teal-50 to-blue-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 text-gray-900 hover:text-teal-600 transition font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1256,
                                columnNumber: 13
                            }, this),
                            "Back to Home"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/form/page.tsx",
                        lineNumber: 1255,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/form/page.tsx",
                    lineNumber: 1254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-12 max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-6 h-6 text-green-600 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-800 font-semibold",
                                    children: "Application submitted successfully!"
                                }, void 0, false, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/form/page.tsx",
                            lineNumber: 1263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl p-8 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900 mb-8",
                                    children: "Application Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 pb-8 border-b border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm font-medium mb-2",
                                            children: "Current Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/form/page.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-blue-600 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 1276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-700 font-semibold text-sm",
                                                    children: "Submitted"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/form/page.tsx",
                                            lineNumber: 1275,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-gray-900 mb-6",
                                            children: "Application Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/form/page.tsx",
                                            lineNumber: 1283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-sm mb-1",
                                                            children: "Application ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-semibold",
                                                            children: "b6b368b5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-sm mb-1",
                                                            children: "Submitted Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1290,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-semibold",
                                                            children: "03/11/2025"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1291,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 1289,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-sm mb-1",
                                                            children: "Applicant Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1294,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-semibold",
                                                            children: [
                                                                formData.firstName,
                                                                " ",
                                                                formData.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1295,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-sm mb-1",
                                                            children: "Request Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1300,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-900 font-semibold",
                                                            children: formData.requestType
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1301,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/form/page.tsx",
                                            lineNumber: 1284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-blue-50 border border-blue-200 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-900 text-sm",
                                        children: "Your application has been received and is pending review."
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/form/page.tsx",
                            lineNumber: 1269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/form/page.tsx",
                    lineNumber: 1261,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/form/page.tsx",
            lineNumber: 1253,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-teal-50 to-blue-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                message: toast.message,
                type: toast.type,
                isVisible: toast.isVisible
            }, void 0, false, {
                fileName: "[project]/app/form/page.tsx",
                lineNumber: 1318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 text-gray-900 hover:text-teal-600 transition font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1323,
                                columnNumber: 11
                            }, this),
                            "Back to Home"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/form/page.tsx",
                        lineNumber: 1322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg transition",
                        children: "Save Progress"
                    }, void 0, false, {
                        fileName: "[project]/app/form/page.tsx",
                        lineNumber: 1326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/form/page.tsx",
                lineNumber: 1321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 py-12 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-gray-900 mb-3",
                                children: "Assistance Application"
                            }, void 0, false, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Complete all steps to submit your application for verified support"
                            }, void 0, false, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/form/page.tsx",
                        lineNumber: 1334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: STEPS.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition ${step.number === currentStep ? "bg-teal-600 text-white" : isStepCompleted(step.number) ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-500"}`,
                                                children: isStepCompleted(step.number) ? "✓" : step.number
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 text-center text-balance font-medium",
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1355,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.number, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1343,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-300 rounded-full h-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-900 h-1 rounded-full transition-all duration-300",
                                    style: {
                                        width: `${currentStep / STEPS.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/form/page.tsx",
                                    lineNumber: 1362,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/form/page.tsx",
                        lineNumber: 1340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-8 shadow-sm",
                        children: [
                            currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Personal Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: [
                                                            "First Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1379,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1378,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "firstName",
                                                        value: formData.firstName,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1381,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1377,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: [
                                                            "Last Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1393,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "lastName",
                                                        value: formData.lastName,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1396,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1392,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1375,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: "Street Address"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1409,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "streetAddress",
                                                value: formData.streetAddress,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                placeholder: ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1410,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1423,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "city",
                                                        value: formData.city,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "State"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1436,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "state",
                                                        value: formData.state,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1420,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "ZIP Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "zipCode",
                                                        value: formData.zipCode,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1452,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Gender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1464,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "gender",
                                                        value: formData.gender,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select gender"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "male",
                                                                children: "Male"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1472,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "female",
                                                                children: "Female"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1473,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1474,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "prefer-not",
                                                                children: "Prefer not to say"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1475,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1465,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1463,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1448,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Date of Birth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1483,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        name: "dateOfBirth",
                                                        value: formData.dateOfBirth,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1484,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1482,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: [
                                                            "Mobile Phone ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1496,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1495,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        name: "mobilePhone",
                                                        value: formData.mobilePhone,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1498,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1494,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Home Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1512,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        name: "homePhone",
                                                        value: formData.homePhone,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1513,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1525,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        name: "email",
                                                        value: formData.email,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1526,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1524,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1509,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Legal Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1540,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "legalStatus",
                                                        value: formData.legalStatus,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1547,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "citizen",
                                                                children: "Citizen"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1548,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "resident",
                                                                children: "Resident"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1549,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1550,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1541,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1539,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Referred By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1556,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "referredBy",
                                                        value: formData.referredBy,
                                                        onChange: handleChange,
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                        placeholder: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1557,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1555,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: "Referrer Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1570,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                name: "referrerPhone",
                                                value: formData.referrerPhone,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                placeholder: ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1571,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1568,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1372,
                                columnNumber: 13
                            }, this),
                            currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Employment Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1585,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: "Employment Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1587,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "employmentStatus",
                                                value: formData.employmentStatus,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1594,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "employed",
                                                        children: "Employed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1595,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "self-employed",
                                                        children: "Self-Employed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1596,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "unemployed",
                                                        children: "Unemployed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1597,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "retired",
                                                        children: "Retired"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1598,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "student",
                                                        children: "Student"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1599,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1600,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1588,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1586,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1584,
                                columnNumber: 13
                            }, this),
                            currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Family Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1608,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Dependents Information"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1610,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "dependentsInfo",
                                                value: formData.dependentsInfo,
                                                onChange: handleChange,
                                                placeholder: "List your dependents with their names, ages, and relationship. Example: - John Smith, 8 years old, Son - Mary Smith, 5 years old, Daughter - Mother-in-law, 65 years old, lives with us",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-48"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1611,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mt-2",
                                                children: "Please list all people who depend on you financially"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1618,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1609,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1607,
                                columnNumber: 13
                            }, this),
                            currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Financial Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1625,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Monthly Income"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1628,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Total Monthly Income"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1630,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "totalMonthlyIncome",
                                                        value: formData.totalMonthlyIncome,
                                                        onChange: handleChange,
                                                        placeholder: "0.00",
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1631,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1629,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Income Sources"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1641,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        name: "incomeSources",
                                                        value: formData.incomeSources,
                                                        onChange: handleChange,
                                                        placeholder: "List all income sources: salary, spouse salary, social security, unemployment, child support, etc.",
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-32"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1642,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1640,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1627,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: "Monthly Expenses"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1653,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "Rent/Mortgage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1656,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                name: "rentMortgage",
                                                                value: formData.rentMortgage,
                                                                onChange: handleChange,
                                                                placeholder: "0.00",
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1657,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1655,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "Utilities (Electric, Gas, Water)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1667,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                name: "utilities",
                                                                value: formData.utilities,
                                                                onChange: handleChange,
                                                                placeholder: "0.00",
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1670,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1666,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1654,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "Food"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1682,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                name: "food",
                                                                value: formData.food,
                                                                onChange: handleChange,
                                                                placeholder: "0.00",
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1683,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1681,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "Other Expenses"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1693,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "otherExpenses",
                                                                value: formData.otherExpenses,
                                                                onChange: handleChange,
                                                                placeholder: "Transportation, medical, school, etc.",
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1694,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1692,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1680,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-900 mb-2",
                                                        children: "Total Debts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1705,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        name: "totalDebts",
                                                        value: formData.totalDebts,
                                                        onChange: handleChange,
                                                        placeholder: "0.00",
                                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1706,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1704,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1652,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1624,
                                columnNumber: 13
                            }, this),
                            currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Application Request"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1721,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: "Request Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1724,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "requestType",
                                                value: formData.requestType,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Zakat",
                                                        children: "Zakat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1731,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Sadaqah",
                                                        children: "Sadaqah"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1732,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1733,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1725,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1723,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: "Amount Requested"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1738,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "amountRequested",
                                                value: formData.amountRequested,
                                                onChange: handleChange,
                                                placeholder: "0.00",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1739,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1737,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: [
                                                    "Why Are You Applying for ",
                                                    formData.requestType,
                                                    "?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1750,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "whyApplying",
                                                value: formData.whyApplying,
                                                onChange: handleChange,
                                                placeholder: "Please provide detailed information about your situation and why you need assistance...",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-32"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1753,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1749,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: "Explain Your Circumstances"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1763,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "circumstances",
                                                value: formData.circumstances,
                                                onChange: handleChange,
                                                placeholder: "Explain your circumstances and how the assistance will help",
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 min-h-32"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1764,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1762,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                children: [
                                                    "Have you received ",
                                                    formData.requestType,
                                                    "/Sadaqa in the past 12 months?"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1774,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "previousZakat",
                                                value: formData.previousZakat,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1783,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "yes",
                                                        children: "Yes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1784,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "no",
                                                        children: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1785,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1777,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1773,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1720,
                                columnNumber: 13
                            }, this),
                            currentStep === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-3",
                                        children: "References (2 Required)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1793,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8",
                                        children: "Please provide two references who can vouch for you"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1794,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8 pb-8 border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-8 bg-teal-600 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1799,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-900",
                                                        children: "Reference 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1800,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1798,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: [
                                                                    "Full Name ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1805,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1804,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.reference1.fullName,
                                                                onChange: (e)=>handleReferenceChange(1, "fullName", e.target.value),
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1807,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1803,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: [
                                                                    "Phone Number ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1816,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1815,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                value: formData.reference1.phoneNumber,
                                                                onChange: (e)=>handleReferenceChange(1, "phoneNumber", e.target.value),
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1818,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1814,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1802,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: formData.reference1.email,
                                                                onChange: (e)=>handleReferenceChange(1, "email", e.target.value),
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1829,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1827,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "How do you know this person?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1837,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.reference1.relationship,
                                                                onChange: (e)=>handleReferenceChange(1, "relationship", e.target.value),
                                                                placeholder: "e.g., Friend from Masjid, Neighbor",
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1840,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1836,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1826,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1797,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-8 bg-blue-500 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1854,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-gray-900",
                                                        children: "Reference 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1855,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1853,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: [
                                                                    "Full Name ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1860,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1859,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.reference2.fullName,
                                                                onChange: (e)=>handleReferenceChange(2, "fullName", e.target.value),
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1862,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1858,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: [
                                                                    "Phone Number ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1871,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1870,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                value: formData.reference2.phoneNumber,
                                                                onChange: (e)=>handleReferenceChange(2, "phoneNumber", e.target.value),
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1873,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1869,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1857,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1883,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: formData.reference2.email,
                                                                onChange: (e)=>handleReferenceChange(2, "email", e.target.value),
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1884,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1882,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-900 mb-2",
                                                                children: "How do you know this person?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1892,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.reference2.relationship,
                                                                onChange: (e)=>handleReferenceChange(2, "relationship", e.target.value),
                                                                placeholder: "e.g., Family friend, Colleague",
                                                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1895,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1891,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1881,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1792,
                                columnNumber: 13
                            }, this),
                            currentStep === 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Supporting Documents"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1910,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-6",
                                        children: "Please upload supporting documents such as: ID, bills, pay stubs, bank statements, etc."
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1911,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                id: "file-upload",
                                                multiple: true,
                                                accept: ".pdf,.jpg,.jpeg,.png",
                                                onChange: handleFileUpload,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1916,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "file-upload",
                                                className: "border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "w-16 h-16 text-gray-400 mx-auto mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1928,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-teal-600 font-semibold text-lg mb-2",
                                                        children: "Click to upload documents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1929,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500",
                                                        children: "PDF, JPG, PNG up to 10MB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1930,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1924,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1915,
                                        columnNumber: 15
                                    }, this),
                                    formData.documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 mb-4",
                                                children: [
                                                    "Uploaded Files (",
                                                    formData.documents.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1936,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: formData.documents.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "w-5 h-5 text-green-600 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1946,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-700 font-medium text-sm",
                                                                        children: doc.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1947,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500 text-xs",
                                                                        children: [
                                                                            "(",
                                                                            (doc.size / 1024 / 1024).toFixed(2),
                                                                            " MB)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/form/page.tsx",
                                                                        lineNumber: 1948,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1945,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeDocument(index),
                                                                className: "px-3 py-1 text-red-600 hover:bg-red-50 rounded transition text-sm font-medium",
                                                                children: "Remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1950,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1941,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1939,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1935,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1909,
                                columnNumber: 13
                            }, this),
                            currentStep === 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 mb-8",
                                        children: "Review Your Application"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1966,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6 border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 mb-3",
                                                        children: "Personal Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1971,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    formData.firstName,
                                                                    " ",
                                                                    formData.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1973,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: formData.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1976,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: formData.mobilePhone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1977,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1972,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1970,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6 border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 mb-3",
                                                        children: "Employment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1983,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "Status: ",
                                                                formData.employmentStatus || "Not provided"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 1985,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1984,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1982,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6 border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 mb-3",
                                                        children: "Financial Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1991,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Monthly Income: $",
                                                                    formData.totalMonthlyIncome || "0"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1993,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Monthly Rent: $",
                                                                    formData.rentMortgage || "0"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1994,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Total Debts: $",
                                                                    formData.totalDebts || "0"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 1995,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 1992,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 1990,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6 border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 mb-3",
                                                        children: "Request Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 2001,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Type: ",
                                                                    formData.requestType
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 2003,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Amount Requested: $",
                                                                    formData.amountRequested || "0"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 2004,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Reason: ",
                                                                    formData.whyApplying.substring(0, 100) || "..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 2005,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 2002,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 2000,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6 border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 mb-3",
                                                        children: "References"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 2011,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "1. ",
                                                                    formData.reference1.fullName || "-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 2013,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "2. ",
                                                                    formData.reference2.fullName || "-"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 2014,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 2012,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 2010,
                                                columnNumber: 17
                                            }, this),
                                            formData.documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6 border-b border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-900 mb-3",
                                                        children: "Uploaded Documents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 2020,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 space-y-1",
                                                        children: formData.documents.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    index + 1,
                                                                    ". ",
                                                                    doc.name
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/form/page.tsx",
                                                                lineNumber: 2023,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/form/page.tsx",
                                                        lineNumber: 2021,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 2019,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-blue-50 border border-blue-200 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-blue-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: "Declaration:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/form/page.tsx",
                                                            lineNumber: 2034,
                                                            columnNumber: 21
                                                        }, this),
                                                        " I testify that the information provided in this application is true and accurate to the best of my knowledge. I authorize the verification of this information to determine my eligibility for ",
                                                        formData.requestType,
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/form/page.tsx",
                                                    lineNumber: 2033,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 2032,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 1968,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 1965,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-8 border-t border-gray-200 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBack,
                                        className: "flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition font-medium disabled:opacity-50",
                                        disabled: currentStep === 1,
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 2045,
                                        columnNumber: 13
                                    }, this),
                                    currentStep === STEPS.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: isSubmitting,
                                        className: "px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: isSubmitting ? "Submitting..." : "Submit Application"
                                    }, void 0, false, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 2053,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNext,
                                        className: "px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition inline-flex items-center gap-2",
                                        children: [
                                            "Next",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/app/form/page.tsx",
                                                lineNumber: 2066,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/form/page.tsx",
                                        lineNumber: 2061,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/form/page.tsx",
                                lineNumber: 2044,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/form/page.tsx",
                        lineNumber: 1370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/form/page.tsx",
                lineNumber: 1332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/form/page.tsx",
        lineNumber: 1317,
        columnNumber: 5
    }, this);
}
_s(ApplyPage, "e0ZOyeGtfa2GX/DjjHCp0PqV0SI=");
_c1 = ApplyPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Toast");
__turbopack_context__.k.register(_c1, "ApplyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_form_page_tsx_39a3efed._.js.map