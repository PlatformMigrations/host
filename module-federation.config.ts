import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'federation_consumer',
  remotes: {
    federation_provider: 'federation_provider@http://localhost:3000/mf-manifest.json',
  },
  exposes: {
    './SelectCampaing': './src/components/ui/global/select-campaing/index.tsx', // Caminho para o componente 
    './ComboboxCampaing': './src/components/ui/global/combobox-campaing/index.tsx', 
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'lucide-react': { singleton: true },
  },
});
