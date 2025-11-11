export interface RouteData {
  from: string;
  to: string;
  passengers: number;
}

export interface ContactData {
  phone: string;
  email: string;
  date: string | undefined;
  time: string | undefined;
}

export interface DistanceInfo {
  distance: string | undefined;
  duration: string | undefined;
}

export interface BookingMessage {
  route: RouteData;
  contact: ContactData;
  estimatedPrice: string | null;
  distanceInfo: DistanceInfo | null;
}

export const BOOKING_STEPS = {
  ROUTE: 1,
  CONTACT: 2,
} as const;

export const INITIAL_ROUTE_DATA: RouteData = {
  from: '',
  to: '',
  passengers: 1,
};

export const INITIAL_CONTACT_DATA: ContactData = {
  phone: '',
  email: '',
  date: undefined,
  time: undefined,
};
