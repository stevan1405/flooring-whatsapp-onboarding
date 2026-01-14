"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-xl w-full shadow-xl rounded-2xl">
        <CardContent className="p-8 space-y-8">

          {/* Header */}
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-semibold text-gray-900">
              Turn WhatsApp into your 24/7 Flooring Receptionist
            </h1>
            <p className="text-gray-600 text-base">
              Automatically reply to enquiries, book site visits, and follow up with customers — without extra admin.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            {[
              "Instant replies to WhatsApp enquiries",
              "Automatic quote & site-visit booking",
              "Reminders and follow-ups sent for you",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-600 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Business name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="url"
              placeholder="Website (optional)"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Contact email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* WhatsApp Connect */}
          <div className="space-y-3">
            <Button className="w-full rounded-xl py-6 text-base font-medium">
              Connect WhatsApp
            </Button>
            <p className="text-xs text-gray-500 text-center">
              You’ll securely connect your WhatsApp using Meta’s official flow.
              No data is shared without permission.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t pt-6 text-center text-sm text-gray-600">
            Setup takes less than 5 minutes. Once connected, your AI assistant goes live instantly.
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
