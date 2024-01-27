// pages/index.tsx
import Head from 'next/head';
import CountdownTimer from '../components/CountdownTimer';

const Home: React.FC = () => {
  return (
    <div className='max-w-screen  min-h-screen flex justify-center'>
      <Head>
        <title>Our Wedding</title>
        <meta name="description" content="Our wedding website with countdown" />
      </Head>

      <main className='min-h-screen'>
        <CountdownTimer />
      </main>
    </div>
  );
};

export default Home;
