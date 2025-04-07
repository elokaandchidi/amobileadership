import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { config } from "../utils/config";

interface DonationMetadata {
  name: string;
  donationType: "once" | "monthly";
  custom_fields: any[]; // Add the custom_fields property
}

interface DonationConfig {
  publicKey: string;
  email: string;
  amount: number;
  metadata: DonationMetadata;
}


export default function DonationForm() {
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showPaystack, setShowPaystack] = useState(false);

  const presetAmounts = [30000, 50000, 80000, 150000, 200000, 250000];
  const monthlyAmounts = [70000];

  const donationConfig: DonationConfig = {
    // publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    publicKey: config.paystack.publicKey,
    email: email,
    amount: (selectedAmount || Number(customAmount)) * 100,
    metadata: {
      name,
      donationType,
      custom_fields: [] // Required by Paystack types
    },
  };

  const handlePaystackSuccess = () => {
    alert("Payment successful! Thank you for your donation.");
    resetForm();
  };

  const handlePaystackClose = () => {
    alert("Payment closed");
    setShowPaystack(false);
  };

  const resetForm = () => {
    setSelectedAmount(null);
    setCustomAmount("");
    setEmail("");
    setName("");
    setShowPaystack(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        SUPPORT THE NEXT GENERATION OF CHANGEMAKERS
      </h1>
      <p className="text-gray-600 mb-8">
        Let’s never stop moving toward the world we want. Make your gift today!
      </p>

      <div className="mb-8">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setDonationType("once")}
            className={`px-6 py-2 rounded-full ${
              donationType === "once" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Give once
          </button>
          <button
            onClick={() => setDonationType("monthly")}
            className={`px-6 py-2 rounded-full ${
              donationType === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Monthly
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {(donationType === "once" ? presetAmounts : monthlyAmounts).map(
            (amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`p-4 rounded-lg ${
                  selectedAmount === amount
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                ₦{(amount / 1000).toFixed(0)}K
              </button>
            )
          )}
        </div>

        <div className="mb-6">
          <input
            type="number"
            placeholder="Custom amount (₦)"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          onClick={() => setShowPaystack(true)}
          disabled={!selectedAmount && !customAmount}
          className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
        >
          Donate {donationType === "monthly" ? "Monthly" : "Now"}
        </button>

        {showPaystack && (
          <PaystackButton
            {...donationConfig}
            text="Make Payment"
            onSuccess={handlePaystackSuccess}
            onClose={handlePaystackClose}
            className="hidden"
          />
        )}
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          <a href="#" className="hover:underline">
            Contact us by email
          </a>{" "}
          -{" "}
          <a href="#" className="hover:underline">
            Solicitation Disclosures
          </a>{" "}
          -{" "}
          <a href="#" className="hover:underline">
            Privacy Statement
          </a>
        </p>
      </div>
    </div>
  );
}
