import { Helmet } from '@modern-js/runtime/head';
import ProviderButton from 'federation_provider/button';
import './index.css';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <h1>kauan gay</h1>
      <ProviderButton/>
    </main>
  </div>
);

export default Index;
