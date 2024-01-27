// pages/index.tsx
import Head from 'next/head';
import CountdownTimer from '../components/CountdownTimer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Our Wedding</title>
        <meta name="description" content="Our wedding website with countdown" />
      </Head>

      <main>
        <h1>Save the Date</h1>
        <CountdownTimer />
      </main>
    </div>
  );
};

export default Home;
