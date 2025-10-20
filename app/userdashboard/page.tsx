"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Globe, AlertCircle } from "lucide-react"

// Mock data for domains
const mockDomains = [
  {
    id: 1,
    name: "mybusiness",
    extension: ".mw",
    status: "Active",
    type: "Domain",
    expires: "2026-05-20",
  },
  {
    id: 2,
    name: "mycompany",
    extension: ".co.mw",
    status: "Pending Payment",
    type: "Domain",
    expires: "2026-08-12",
  },
  {
    id: 3,
    name: "blogsite",
    extension: ".mw",
    status: "Active",
    type: "Hosting",
    expires: "2026-03-01",
  },
]

export default function ClientDashboardPage() {
  const [domains, setDomains] = useState(mockDomains)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [search, setSearch] = useState("")

  const filteredDomains = domains.filter((d) => {
    const matchesStatus = filterStatus === "all" || d.status.toLowerCase() === filterStatus
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-2 text-brand-secondary-dark">Client Dashboard</h1>
        <p className="text-slate-600">View the status of your domains and hosting packages.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <Input
          placeholder="Search domain or hosting..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        <Select onValueChange={setFilterStatus} defaultValue="all">
          <SelectTrigger className="w-52">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending payment">Pending Payment</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Domain / Hosting Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDomains.length === 0 && (
          <p className="text-center text-slate-500 col-span-full">No domains or hosting packages found.</p>
        )}

        {filteredDomains.map((item) => (
          <Card key={item.id} className="p-6 rounded-3xl border">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {item.name}
                {item.extension}
              </CardTitle>
              {item.status === "Active" ? (
                <CheckCircle className="text-green-500 h-6 w-6" />
              ) : (
                <AlertCircle className="text-red-500 h-6 w-6" />
              )}
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <span className="font-semibold">Type:</span> {item.type}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`font-semibold ${
                    item.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </span>
              </p>
              <p>
                <span className="font-semibold">Expiry:</span> {item.expires}
              </p>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.status === "Pending Payment" && (
                  <Button variant="destructive" size="sm">
                    Complete Payment
                  </Button>
                )}
                <Button variant="secondary" size="sm">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
