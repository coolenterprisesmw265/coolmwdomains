"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, AlertCircle, Globe, Database, Send } from "lucide-react"

const sampleData = [
  {
    id: 1,
    client: "John Banda",
    domain: "mybusiness.mw",
    status: "Pending Approval",
    email: "john@example.com",
    createdAt: "2025-10-12",
  },
  {
    id: 2,
    client: "Grace Phiri",
    domain: "graceorg.co.mw",
    status: "Active",
    email: "grace@org.com",
    createdAt: "2025-09-28",
  },
  {
    id: 3,
    client: "Tech Systems Ltd",
    domain: "techsystems.net.mw",
    status: "Pending Payment",
    email: "info@techsystems.mw",
    createdAt: "2025-10-01",
  },
]

export default function AdminDashboard() {
  const [records, setRecords] = useState(sampleData)
  const [selectedClient, setSelectedClient] = useState("")
  const [message, setMessage] = useState("")

  function sendNotification() {
    if (!selectedClient || !message) return
    alert(`Notification sent to ${selectedClient}: ${message}`)
    setMessage("")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-2 text-brand-secondary-dark">Admin Dashboard</h1>
        <p className="text-slate-600">Manage domains, hosting, and client communications.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card className="rounded-3xl">
          <CardContent className="p-6 text-center">
            <Globe className="h-8 w-8 mx-auto text-brand-primary mb-2" />
            <h3 className="text-2xl font-bold text-brand-secondary">320</h3>
            <p className="text-slate-600 text-sm">Total Domains</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-8 w-8 mx-auto text-green-500 mb-2" />
            <h3 className="text-2xl font-bold text-brand-secondary">290</h3>
            <p className="text-slate-600 text-sm">Active Domains</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            <h3 className="text-2xl font-bold text-brand-secondary">12</h3>
            <p className="text-slate-600 text-sm">Pending Payments</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardContent className="p-6 text-center">
            <Database className="h-8 w-8 mx-auto text-brand-primary mb-2" />
            <h3 className="text-2xl font-bold text-brand-secondary">68</h3>
            <p className="text-slate-600 text-sm">Hosting Packages</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Registrations */}
      <Card className="rounded-3xl mb-10">
        <CardHeader>
          <CardTitle className="text-brand-secondary">Recent Registrations</CardTitle>
          <CardDescription>Approve, reject, or view details for recent domain requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((rec) => (
                <TableRow key={rec.id}>
                  <TableCell>{rec.client}</TableCell>
                  <TableCell>{rec.domain}</TableCell>
                  <TableCell>
                    <span
                      className={`font-semibold ${
                        rec.status === "Active"
                          ? "text-green-600"
                          : rec.status === "Pending Payment"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {rec.status}
                    </span>
                  </TableCell>
                  <TableCell>{rec.email}</TableCell>
                  <TableCell>{rec.createdAt}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button size="sm" variant="secondary">
                      View
                    </Button>
                    <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-brand-secondary">Send Notification</CardTitle>
          <CardDescription>Send a message or confirmation to a specific client</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Select onValueChange={setSelectedClient}>
              <SelectTrigger>
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                {records.map((rec) => (
                  <SelectItem key={rec.id} value={rec.client}>
                    {rec.client}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="md:col-span-2">
              <Textarea
                placeholder="Write a message to send..."
                className="resize-none text-[16px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="text-right mt-6">
            <Button
              className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg flex items-center gap-2"
              onClick={sendNotification}
            >
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
