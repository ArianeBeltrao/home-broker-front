import Head from 'next/head';
import HomePage from '../app/presentation/pages/home/home';

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Broke - home</title>
      </Head>
      <main>
        <HomePage /> {/* Renderiza o componente HomePage */}
      </main>
    </>
  );
};

export default IndexPage;
