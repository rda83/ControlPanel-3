export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
  imageUrl: string;
  rating?: number;
  color: string;
}