"use client"
import React from "react"
import Link from "next/link"
import { Heart, ChevronLeft, Download, X } from "lucide-react"
import { useState, useEffect } from "react"
import { API_BASE_URL } from "@/lib/auth-utils"

interface CaseDetail {
  _id: string
  firstName: string
  lastName: string
  caseId: string
  status: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  gender: string
  dateOfBirth: string
  mobilePhone: string
  homePhone: string
  email: string
  legalStatus: string
  referredBy: string
  employmentStatus: string
  dependentsInfo: string
  totalMonthlyIncome: number
  incomeSources: string
  rentMortgage: number
  utilities: number
  food: number
  otherExpenses: string
  totalDebts: number
  requestType: string
  amountRequested: number
  whyApplying: string
  circumstances: string
  previousZakat: string
  reference1: {
    fullName: string
    phoneNumber: string
    email: string
    relationship: string
  }
  reference2: {
    fullName: string
    phoneNumber: string
    email: string
    relationship: string
  }
  documents: Array<{
    filename: string
    originalname: string
    mimeType: string
    size: number
  }>
  createdAt: string
  updatedAt: string
}

function DocumentViewer({
  doc,
  isOpen,
  onClose,
}: {
  doc: CaseDetail["documents"][0] | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen || !doc) return null

  const documentUrl = `${API_BASE_URL}/api/documents/${doc.filename}`
  const isPdf = doc.mimeType === "application/pdf"
  const isImage = doc.mimeType.startsWith("image/")

  const handleDownload = async () => {
    try {
      const response = await fetch(documentUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = doc.originalname
      document.body.appendChild(link)
      link.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(link)
    } catch (error) {
      console.error("[v0] Error downloading document:", error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{doc.originalname}</h3>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {isPdf ? (
            <iframe
              src={documentUrl}
              className="w-full h-[70vh] border border-gray-300 rounded-lg"
              title={doc.originalname}
            />
          ) : isImage ? (
            <img
              src={documentUrl || "/placeholder.svg"}
              alt={doc.originalname}
              className="max-w-full h-auto mx-auto rounded-lg"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Preview not available for this file type</p>
              <button
                onClick={handleDownload}
                className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
              >
                Download File
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)

  const [caseData, setCaseData] = useState<CaseDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updateStatus, setUpdateStatus] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<CaseDetail["documents"][0] | null>(null)
  const [showDocumentViewer, setShowDocumentViewer] = useState(false)
  const [updateError, setUpdateError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCaseDetail = async () => {
      try {
        setLoading(true)
        console.log("[v0] Fetching case with ID:", id)

        const url = `${API_BASE_URL}/api/zakatApplicants/${id}`
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          cache: "no-store",
        })

        console.log("[v0] Response status:", res.status, res.statusText)

        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`)
        }

        const caseItem = await res.json()

        if (!caseItem || !caseItem._id) {
          throw new Error("Invalid case data structure in response")
        }

        console.log("[v0] Case data loaded:", caseItem)
        setCaseData(caseItem)
        setUpdateStatus(caseItem.status || "Pending")
        setError(null)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err)
        console.error("[v0] Error fetching case detail:", errorMessage)
        setError(`Failed to load case: ${errorMessage}`)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCaseDetail()
    }
  }, [id])

  const handleStatusUpdate = async () => {
    try {
      setIsUpdating(true)
      setUpdateError(null)

      const token = localStorage.getItem("rahmah_admin_token")
      if (!token) {
        setUpdateError("Authentication token not found. Please log in again.")
        return
      }

      console.log("[v0] Updating status to:", updateStatus)

      const response = await fetch(`${API_BASE_URL}/api/zakatApplicants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: updateStatus }),
      })

      console.log("[v0] Update response status:", response.status)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Update failed: ${response.status}`)
      }

      const updatedData = await response.json()
      console.log("[v0] Status updated successfully:", updatedData)
      setCaseData(updatedData)
      setUpdateError(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err)
      console.error("[v0] Error updating status:", errorMessage)
      setUpdateError(errorMessage)
    } finally {
      setIsUpdating(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading case details...</p>
        </div>
      </div>
    )
  }

  if (error || !caseData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error || "Case not found"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50">
      <header className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Caseworker Dashboard</h1>
          </div>
          <Link href="/staff/cases" className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            Back to Cases
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Case Information */}
          <div className="col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {caseData.firstName} {caseData.lastName}
                  </h1>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    caseData.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : caseData.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {caseData.status}
                </span>
              </div>

              {/* Tabs */}
              <div className="flex gap-6 border-b border-gray-200 mt-6">
                <button className="pb-4 px-2 border-b-2 border-teal-600 text-teal-600 font-medium">Application</button>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600">First Name</p>
                  <p className="text-gray-900 font-medium">{caseData.firstName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Name</p>
                  <p className="text-gray-900 font-medium">{caseData.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">{caseData.email || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mobile Phone</p>
                  <p className="text-gray-900 font-medium">{caseData.mobilePhone || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="text-gray-900 font-medium">
                    {caseData.dateOfBirth ? new Date(caseData.dateOfBirth).toLocaleDateString() : "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="text-gray-900 font-medium">{caseData.gender || "N/A"}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-gray-900 font-medium">
                  {caseData.streetAddress}, {caseData.city}, {caseData.state} {caseData.zipCode}
                </p>
              </div>
            </div>

            {/* Household Information Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Household & Employment Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Legal Status</p>
                  <p className="text-gray-900 font-medium">{caseData.legalStatus || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employment Status</p>
                  <p className="text-gray-900 font-medium">{caseData.employmentStatus || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dependents Info</p>
                  <p className="text-gray-900 font-medium">{caseData.dependentsInfo || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Referred By</p>
                  <p className="text-gray-900 font-medium">{caseData.referredBy || "N/A"}</p>
                </div>
              </div>
            </div>

            {/* Financial Information Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Financial Information</h2>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-600">Total Monthly Income</p>
                  <p className="text-gray-900 font-medium">${caseData.totalMonthlyIncome || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Income Sources</p>
                  <p className="text-gray-900 font-medium">{caseData.incomeSources || "N/A"}</p>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-4">Monthly Expenses</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Food</p>
                  <p className="text-gray-900 font-medium">${caseData.food || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rent/Mortgage</p>
                  <p className="text-gray-900 font-medium">${caseData.rentMortgage || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Utilities</p>
                  <p className="text-gray-900 font-medium">${caseData.utilities || 0}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Other Expenses</p>
                  <p className="text-gray-900 font-medium">{caseData.otherExpenses || "N/A"}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Total Debts</p>
                <p className="text-gray-900 font-medium text-lg">${caseData.totalDebts || 0}</p>
              </div>
            </div>

            {/* Request Details Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Request Details</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Request Type</p>
                  <p className="text-gray-900 font-medium">{caseData.requestType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount Requested</p>
                  <p className="text-gray-900 font-medium">${caseData.amountRequested}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600">Why Applying</p>
                <p className="text-gray-900 font-medium">{caseData.whyApplying}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600">Circumstances</p>
                <p className="text-gray-900 font-medium">{caseData.circumstances}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600">Previous Zakat</p>
                <p className="text-gray-900 font-medium">{caseData.previousZakat}</p>
              </div>
            </div>

            {/* References Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">References</h2>

              <h3 className="font-semibold text-gray-900 mb-4">Reference 1</h3>
              <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="text-gray-900 font-medium">{caseData.reference1?.fullName || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Relationship</p>
                  <p className="text-gray-900 font-medium">{caseData.reference1?.relationship || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="text-gray-900 font-medium">{caseData.reference1?.phoneNumber || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">{caseData.reference1?.email || "N/A"}</p>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-4">Reference 2</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="text-gray-900 font-medium">{caseData.reference2?.fullName || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Relationship</p>
                  <p className="text-gray-900 font-medium">{caseData.reference2?.relationship || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="text-gray-900 font-medium">{caseData.reference2?.phoneNumber || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">{caseData.reference2?.email || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Documents</h2>
              {caseData.documents && caseData.documents.length > 0 ? (
                <div className="space-y-3">
                  {caseData.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{doc.originalname}</p>
                        <p className="text-xs text-gray-600 mt-1">{(doc.size / 1024).toFixed(2)} KB</p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedDocument(doc)
                          setShowDocumentViewer(true)
                        }}
                        className="px-4 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 transition"
                      >
                        View
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No documents available</p>
              )}
            </div>
          </div>

          {/* Right Sidebar - Case Actions */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg p-6 mb-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Case Actions</h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Update Status</label>
                <select
                  value={updateStatus}
                  onChange={(e) => setUpdateStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {updateError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{updateError}</p>
                </div>
              )}

              <button
                onClick={handleStatusUpdate}
                disabled={isUpdating}
                className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdating ? "Updating..." : "Update Status"}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 sticky top-64">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Stats</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Case ID</p>
                  <p className="text-gray-900 font-medium">{caseData.caseId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="text-gray-900 font-medium">{new Date(caseData.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Documents</p>
                  <p className="text-gray-900 font-medium">{caseData.documents?.length || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Viewer Modal */}
      <DocumentViewer doc={selectedDocument} isOpen={showDocumentViewer} onClose={() => setShowDocumentViewer(false)} />
    </div>
  )
}
