export interface Booking {
  reference: string;
  deposit: number;
  primary_status: string;
  secondary_status: string;
  delivery_method: string;
  returned_user: boolean;
  car_make: string;
  car_model: string;
  car_year: number;
  booking_date: string;
  booking_type: string;
  start_date: string;
  end_date: string;
  price: number;
  partner_name: string;
  insurance: string[];
  credits_used: number;
  credit_limit: number;
  rental_os: number;
  tfo_os: number;
  invoice_ageing: number;
  days_untill_renewal: number;
}
