
export interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface OrderFormData {
    serviceId: number;
    serviceName: string;
    quantity: number;
    company: string;
    email: string;
}
