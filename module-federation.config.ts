import { createModuleFederationConfig } from '@module-federation/modern-js';
export default createModuleFederationConfig({
  name: 'federation_consumer',
  remotes: {
    federation_provider: 'federation_provider@http://localhost:3000/mf-manifest.json',
  },
  exposes: {

  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.0.0' },
    'react-dom': { singleton: true },
    'lucide-react': { singleton: true },
  },
  shareStrategy: 'version-first'
});
