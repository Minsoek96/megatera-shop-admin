import axios from 'axios';
import { ProductOption } from '../types';

const { API_BASE_URL } = process.env;

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  private accessToken = '';

  setAccessToken(accessToken: string) {
    if (accessToken === this.accessToken) {
      return;
    }
    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: authorization },
    });

    this.accessToken = accessToken;
  }

  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }

  async logout(): Promise<void> {
    await this.instance.delete('/session');
  }

  async fetchCurrentUser(): Promise<{ id: string; name: string }> {
    const { data } = await this.instance.get('/users/me');
    const { id, name } = data;
    return { id, name };
  }

  fetcher() {
    return async (url: string) => {
      const { data } = await this.instance.get(url);
      return data;
    };
  }

  async createCategory({
    name,
  }: {
    name: string;
  }): Promise<{ id: string; name: string; hidden: boolean }> {
    const { data } = await this.instance.post('/categories', { name });
    return data;
  }

  async updateCategory({
    categoryId,
    name,
    hidden,
  }: {
    categoryId: string;
    name: string;
    hidden: boolean;
  }): Promise<{ id: string; name: string; hidden: boolean }> {
    const { data } = await this.instance.patch(`/categories/${categoryId}`, {
      name,
      hidden,
    });
    return data;
  }

  async updateOrder({ orderId, status }: { orderId: string; status: string }) {
    await this.instance.patch(`/orders/${orderId}`, { status });
  }

  async createProduct({
    categoryId,
    images,
    name,
    price,
    options,
    description,
  }: {
    categoryId: string;
    images: { url: string }[];
    name: string;
    price: number;
    options: ProductOption[];
    description: string;
  }) {
    const { data } = await this.instance.post('/products', {
      categoryId,
      images,
      name,
      price,
      options,
      description,
    });
    return data;
  }
}
export const apiService = new ApiService();
