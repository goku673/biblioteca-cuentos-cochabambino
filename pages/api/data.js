import { getProvinceById } from '@/data/provinces';

export default function handler(req, res) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'id no encontrado' });
    }

    const province = getProvinceById(id);

    if (!province) {
        return res.status(404).json({ error: 'provincia no encontrada' });
    }

    return res.status(200).json(province);
}
