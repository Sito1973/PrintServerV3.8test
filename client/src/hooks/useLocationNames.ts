// client/src/hooks/useLocationNames.ts
import { useAppSettings } from '@/components/AppContext';

export const useLocationNames = () => {
  const { getAllEmpresas } = useAppSettings();

  const getLocationNames = (locationId: string, floorId: string) => {
    const empresas = getAllEmpresas();
    const empresa = empresas.find(e => e.id === locationId);
    const sede = empresa?.sedes.find(s => s.id === floorId);

    return {
      empresaName: empresa?.name || '',
      sedeName: sede?.name || ''
    };
  };

  return { getLocationNames };
};