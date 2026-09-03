import { provinceColors } from '@/data/provinceColors';

export default function handler(req, res) {
  return res.status(200).json(provinceColors);
}
