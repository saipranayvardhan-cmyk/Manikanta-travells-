import { BUSINESS_INFO } from '../data/travelData';

export interface BookingEnquiryParams {
  pickupLocation?: string;
  destination?: string;
  travelDate?: string;
  passengers?: string | number;
  vehicle?: string;
  tripType?: string;
  customerName?: string;
  customerPhone?: string;
  message?: string;
}

export function generateWhatsAppUrl(params: BookingEnquiryParams): string {
  const lines: string[] = [
    `*Trip Enquiry — ${BUSINESS_INFO.name}*`,
    `---------------------------------`
  ];

  if (params.customerName) {
    lines.push(`👤 *Name:* ${params.customerName}`);
  }
  if (params.customerPhone) {
    lines.push(`📞 *Phone:* ${params.customerPhone}`);
  }
  if (params.vehicle) {
    lines.push(`🚗 *Vehicle:* ${params.vehicle}`);
  }
  if (params.tripType) {
    lines.push(`🛣️ *Trip Type:* ${params.tripType}`);
  }
  if (params.pickupLocation) {
    lines.push(`📍 *Pickup Location:* ${params.pickupLocation}`);
  }
  if (params.destination) {
    lines.push(`🏁 *Destination:* ${params.destination}`);
  }
  if (params.travelDate) {
    lines.push(`📅 *Travel Date:* ${params.travelDate}`);
  }
  if (params.passengers) {
    lines.push(`👥 *Passengers:* ${params.passengers}`);
  }
  if (params.message) {
    lines.push(`💬 *Note:* ${params.message}`);
  }

  lines.push(`---------------------------------`);
  lines.push(`_Sent via ${BUSINESS_INFO.name} Website (Medchal)_`);
  lines.push(`Please share vehicle availability and quote.`);

  const text = lines.join('\n');
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppEnquiry(params: BookingEnquiryParams) {
  const url = generateWhatsAppUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}
