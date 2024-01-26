import catalan from './ca.json';
import spanish from './es.json';

const LAGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es'
}

export const getI18N = (
    { currentLocale }:
    {currentLocale?: string|undefined}
    ) => {
    if (currentLocale === LAGUAGES.CATALAN) return catalan;
    if (currentLocale === LAGUAGES.SPANISH) return spanish;
    return spanish;



}