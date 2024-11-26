import { Helmet } from '@modern-js/runtime/head';
import ProviderButton from 'federation_provider/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main className='w-screen h-screen bg-purple-600'>
      <h1 className='text-red-500'>kauan gay</h1>
      <ProviderButton/>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
    </main>
  </div>
);

export default Index;
