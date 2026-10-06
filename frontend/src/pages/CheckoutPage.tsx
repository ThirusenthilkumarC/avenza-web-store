import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import type { DeliveryAddress, Order } from '../types';
import { ShieldCheck, CheckCircle2, CreditCard, QrCode, Building2, Truck, ArrowRight, User } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    couponDiscount,
    deliveryCharge,
    cartTotal,
    deliveryLocation,
    placeOrder
  } = useShop();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);

  // Form State
  const [userInfo, setUserInfo] = useState({
    email: 'vikram.roy@example.com',
    fullName: 'Vikramaditya Roy',
    phone: '+91 98765 43210'
  });

  const [address, setAddress] = useState<DeliveryAddress>({
    id: 'addr-new',
    fullName: 'Vikramaditya Roy',
    phone: '+91 98765 43210',
    pincode: deliveryLocation.pincode || '400001',
    street: 'Flat 402, Royal Palms Heights, Marine Drive',
    city: deliveryLocation.city || 'Mumbai',
    state: 'Maharashtra',
    type: 'Home',
    isDefault: true
  });

  const [paymentMethod, setPaymentMethod] = useState<string>('UPI (Google Pay)');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('vikram@okaxis');

  if (cart.length === 0 && !createdOrder) {
    return (
      <div className="max-w-xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold font-serif-luxury text-stone-900">Your Cart is Empty</h2>
        <p className="text-xs text-stone-500 mt-2">Add items to cart before proceeding to checkout.</p>
        <Link to="/products" className="inline-block mt-4 bg-stone-900 text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs">
          Return to Store
        </Link>
      </div>
    );
  }

  const handleCompleteOrder = () => {
    const order = placeOrder(address, paymentMethod);
    setCreatedOrder(order);
    setStep(5);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8 text-left">
      {/* STEPS PROGRESS BAR */}
      {step < 5 && (
        <div className="mb-8 bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-stone-600">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-stone-900 text-amber-400' : 'bg-stone-200'}`}>1</span>
              <span className="hidden sm:inline">Account</span>
            </div>
            <div className="h-0.5 flex-1 bg-stone-200 mx-3" />

            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-stone-900 text-amber-400' : 'bg-stone-200'}`}>2</span>
              <span className="hidden sm:inline">Delivery Address</span>
            </div>
            <div className="h-0.5 flex-1 bg-stone-200 mx-3" />

            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-stone-900 text-amber-400' : 'bg-stone-200'}`}>3</span>
              <span className="hidden sm:inline">Payment Method</span>
            </div>
            <div className="h-0.5 flex-1 bg-stone-200 mx-3" />

            <div className={`flex items-center gap-2 ${step >= 4 ? 'text-amber-800' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 4 ? 'bg-stone-900 text-amber-400' : 'bg-stone-200'}`}>4</span>
              <span className="hidden sm:inline">Order Review</span>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: LOGIN / CUSTOMER INFO */}
      {step === 1 && (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-5 animate-fade-in">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif-luxury text-stone-900">Step 1: Customer Contact Info</h2>
              <p className="text-xs text-stone-500">Enter email and phone number for order updates</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
              <input
                type="text"
                value={userInfo.fullName}
                onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Phone Number</label>
              <input
                type="tel"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600 font-mono"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Continue to Delivery Address</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* STEP 2: DELIVERY ADDRESS FORM */}
      {step === 2 && (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-5 animate-fade-in">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif-luxury text-stone-900">Step 2: Delivery Address</h2>
              <p className="text-xs text-stone-500">Provide shipping address across 19,000+ pincodes</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Receiver Name</label>
                <input
                  type="text"
                  value={address.fullName}
                  onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600 font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Street Address / House No. / Building</label>
              <textarea
                rows={2}
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">City</label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">State</label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Pincode</label>
                <input
                  type="text"
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                  className="w-full p-3 text-sm border border-stone-300 rounded-xl outline-none focus:border-amber-600 font-mono"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-5 border border-stone-300 rounded-xl text-stone-700 font-semibold text-xs hover:bg-stone-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 3: PAYMENT METHOD */}
      {step === 3 && (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif-luxury text-stone-900">Step 3: Payment Options</h2>
              <p className="text-xs text-stone-500">256-Bit SSL Encrypted Mock Gateway</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { id: 'UPI (Google Pay)', label: 'UPI Instant Payment (GPay, PhonePe, Paytm)', icon: QrCode },
              { id: 'Credit/Debit Card', label: 'Credit / Debit Card (Visa, Mastercard, RuPay)', icon: CreditCard },
              { id: 'Net Banking', label: 'Net Banking (HDFC, ICICI, SBI, Axis)', icon: Building2 },
              { id: 'Cash on Delivery', label: 'Cash on Delivery (Pay at your doorstep)', icon: Truck }
            ].map((option) => {
              const IconComp = option.icon;
              return (
                <label
                  key={option.id}
                  onClick={() => setPaymentMethod(option.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    paymentMethod === option.id
                      ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-500/20'
                      : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === option.id}
                      onChange={() => setPaymentMethod(option.id)}
                      className="accent-amber-600"
                    />
                    <IconComp className="w-5 h-5 text-stone-700" />
                    <span className="text-xs font-bold text-stone-900">{option.label}</span>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Conditional Input Preview */}
          {paymentMethod.includes('UPI') && (
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs">
              <label className="block font-semibold text-stone-700 mb-1">Enter VPA / UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-2.5 border border-stone-300 rounded-xl outline-none font-mono"
              />
            </div>
          )}

          {paymentMethod.includes('Card') && (
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="4532 •••• •••• 8912"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                  className="w-full p-2.5 border border-stone-300 rounded-xl outline-none font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="p-2.5 border border-stone-300 rounded-xl outline-none font-mono"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="p-2.5 border border-stone-300 rounded-xl outline-none font-mono"
                />
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-stone-200">
            <button
              onClick={() => setStep(2)}
              className="py-3 px-5 border border-stone-300 rounded-xl text-stone-700 font-semibold text-xs hover:bg-stone-50"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="flex-1 bg-stone-900 hover:bg-amber-600 text-amber-400 hover:text-stone-950 font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Review Final Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: ORDER REVIEW */}
      {step === 4 && (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif-luxury text-stone-900">Step 4: Final Order Review</h2>
              <p className="text-xs text-stone-500">Please review items and shipping address before placing order</p>
            </div>
          </div>

          {/* Delivery & Payment details summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="font-bold uppercase tracking-wider text-amber-800 block mb-1">Deliver To:</span>
              <p className="font-bold text-stone-900">{address.fullName} ({address.phone})</p>
              <p className="text-stone-600 mt-1">{address.street}, {address.city}, {address.state} - {address.pincode}</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="font-bold uppercase tracking-wider text-amber-800 block mb-1">Payment Method:</span>
              <p className="font-bold text-stone-900">{paymentMethod}</p>
              <p className="text-stone-600 mt-1">Status: Ready to Process</p>
            </div>
          </div>

          {/* Items Summary */}
          <div className="divide-y divide-stone-100 border-t border-b border-stone-200 py-3">
            {cart.map(item => (
              <div key={item.product.id} className="py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.product.images[0]} alt="" className="w-10 h-10 rounded-lg border object-cover" />
                  <div>
                    <p className="font-bold text-stone-900 line-clamp-1">{item.product.name}</p>
                    <p className="text-stone-500">Qty: {item.quantity} × ₹{item.product.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-stone-900">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>

          {/* Total Breakdown */}
          <div className="space-y-1.5 text-xs text-stone-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono">₹{cartSubtotal.toLocaleString('en-IN')}</span>
            </div>
            {couponDiscount > 0 && (
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>Coupon Discount</span>
                <span className="font-mono">-₹{couponDiscount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="font-mono">{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-200">
              <span>Grand Total</span>
              <span className="font-mono text-amber-800">₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setStep(3)}
              className="py-3 px-5 border border-stone-300 rounded-xl text-stone-700 font-semibold text-xs hover:bg-stone-50"
            >
              Back
            </button>

            <button
              onClick={handleCompleteOrder}
              className="flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-extrabold py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5"
            >
              <span>Confirm & Place Order</span>
              <CheckCircle2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: INSTANT ORDER CONFIRMATION */}
      {step === 5 && createdOrder && (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-emerald-300 shadow-2xl text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-emerald-300">
              ORDER CONFIRMED
            </span>
            <h1 className="text-3xl font-bold font-serif-luxury text-stone-900 mt-2">
              Thank You for Your Order!
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Order ID: <strong className="font-mono text-stone-900">{createdOrder.id}</strong>
            </p>
          </div>

          {/* Tracking box */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-left space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="font-bold text-stone-900">Tracking Number:</span>
              <span className="font-mono font-bold text-amber-800">{createdOrder.trackingNumber}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-stone-200">
              <span className="font-bold text-stone-900">Estimated Delivery:</span>
              <span className="font-semibold text-emerald-700">{createdOrder.estimatedDelivery}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-stone-900">Total Paid:</span>
              <span className="font-mono font-extrabold text-stone-900">₹{createdOrder.finalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/orders"
              className="flex-1 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold py-3.5 rounded-xl shadow-md text-xs text-center"
            >
              Track Order Status
            </Link>

            <Link
              to="/"
              className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 rounded-xl text-xs text-center border border-stone-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
