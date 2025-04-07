import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { config } from "../utils/config";
import donationImg from '../assets/images/gallery11.jpg';
import logo from '../assets/images/logo.png';
import { useAlert } from "../utils/notification/alertcontext";
import { AiFillCloseCircle } from 'react-icons/ai';

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

interface DonationFormProps {
  closeModal: (value: boolean) => void;
}


export default function DonationForm({closeModal} : DonationFormProps) {
  const { addAlert } = useAlert();
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const presetAmounts = [5000, 10000, 15000, 20000, 25000, 30000];

  const donationConfig: DonationConfig = {
    // publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    publicKey: config.paystack.publicKey,
    email: email,
    amount: (Number(selectedAmount)) * 100,
    metadata: {
      name,
      donationType,
      custom_fields: [] // Required by Paystack types
    },
  };

  const handleCloseModal = () => {
    if (closeModal) {
        closeModal(false);
    }
  };

  const handlePaystackSuccess = () => {
    addAlert({ message: 'Payment successful! Thank you for your donation.', type: 'success' });
    resetForm();
    handleCloseModal();
  };
  
  const handlePaystackClose = () => {
    addAlert({ message: 'Payment closed', type: 'error' });
  };

  const resetForm = () => {
    setSelectedAmount(null);
    setEmail("");
    setName("");
  };

  return (
    <div className="absolute h-screen flex flex-col bg-black/60 gap-3 z-20 top-0 lg:justify-center lg:items-center w-screen overflow-auto">
      <div className="max-w-5xl relative flex lg:flex-row flex-col items-center lg:gap-10 pt-10 lg:pt-0 pb-10">
        <div className='w-full flex flex-row lg:-right-7 top-2 lg:-top-7 justify-end z-40 absolute'>
          <AiFillCloseCircle size={30} color='white' onClick={handleCloseModal}  className='cursor-pointer'/>
        </div>
        <div className="mx-auto bg-white rounded-t-3xl lg:rounded-b-3xl lg:w-3/5 w-11/12 h-[30rem] lg:h-[40rem] shadow-md relative">
          <img src={donationImg} alt='donationImg' className='aspect-16/9 object-cover rounded-t-3xl w-full'/>
          <img src={logo} alt='logo' className='h-24 pl-2'/>
          <div className="text-gray-600 mb-8 px-6">
            Your gift today will empower, inspire, and connect the next generation of changemakers. Let’s never stop moving toward the world we want. Make your gift today!
          </div>

          <div className="lg:text-center text-xs text-gray-500 absolute bottom-5 px-6">
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
        <div className="lg:w-2/5 w-11/12 flex justify-center bg-white rounded-b-3xl lg:rounded-3xl shadow-md h-[40rem]">
          <div className="w-10/12 flex flex-col relative pt-10">
            <div className="grid grid-cols-2 border border-gray-500/40 gap-4 rounded-lg mb-6">
              <button
                onClick={() => setDonationType("once")}
                className={`px-6 py-2 rounded-lg cursor-pointer  ${
                  donationType === "once" ? "bg-[#b8935c] font-semibold text-white" : ""
                }`}
              >
                Give once
              </button>
              <button
                onClick={() => setDonationType("monthly")}
                className={`px-6 py-2 rounded-lg cursor-pointer  ${
                  donationType === "monthly" ? "bg-[#b8935c] font-semibold text-white" : ""
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {presetAmounts.map(
                (amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-2 cursor-pointer border rounded-lg ${
                      selectedAmount === amount
                        ? "bg-[#b8935c] text-white font-semibold"
                        : "border-gray-500/40"
                    }`}
                  >
                    ₦{(amount / 1000).toFixed(0)}K
                  </button>
                )
              )}
            </div>

            <div className="flex flex-row items-center mb-6 p-3 border border-gray-500/40 text-[#b8935c] text-lg rounded-lg">
              <input
                type="number"
                placeholder="Amount (₦)"
                value={selectedAmount|| ''}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
                className="w-full font-semibold outline-transparent"
              />
              <span className="text-sm font-medium">NGN</span>
            </div>

            <div className="mb-6 flex flex-col">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 outline-none border border-gray-500/40 rounded-lg mb-3"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 outline-none border border-gray-500/40 rounded-lg"
              />
            </div>

            {(selectedAmount && email) ? (
              <PaystackButton
                {...donationConfig}
                text={donationType === "monthly" ? "Donate Monthly" : "Donate Now"}
                onSuccess={handlePaystackSuccess}
                onClose={handlePaystackClose}
                className="w-full bg-[#b8935c] absolute bottom-5 text-white py-4 rounded-lg font-semibold cursor-pointer"
              />
            ): null}
          </div>
        </div>
      </div>
    </div>
  );
}
