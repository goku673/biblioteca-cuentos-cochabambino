import { notFound } from 'next/navigation';
import { getProvinceById, provinces } from '@/data/provinces';
import ProvinceReader from './ProvinceReader';

export const dynamicParams = false;

export function generateStaticParams() {
    return provinces.map((province) => ({ id: String(province.id) }));
}

export function generateMetadata({ params }) {
    const province = getProvinceById(params.id);

    return {
        title: province ? `${province.title} | Cuentos Cochabambinos` : 'Cuento no encontrado',
        description: province
            ? `Lee el cuento de ${province.province} en español y quechua.`
            : 'Biblioteca de cuentos cochabambinos.',
    };
}

export default function ProvincePage({ params }) {
    const province = getProvinceById(params.id);

    if (!province) notFound();

    return <ProvinceReader dataProvinceId={province} />;
}
