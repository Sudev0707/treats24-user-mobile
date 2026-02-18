import { Address } from '../data/userData';

export const callbackRegistry = new Map<string, (address: Address) => void>();
