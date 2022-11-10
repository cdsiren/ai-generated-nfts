import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import CreateNft from '../components/CreateNft';
import GenerateImage from '../components/GenerateImage';
import { useNetwork } from 'wagmi';
import useTokenCheck from '../components/hooks/useTokenCheck';

const Home: NextPage = () => {
  const [generatedImage, setGeneratedImage] = useState<any>(null);
  const { chain } = useNetwork();
  const [connected, setConnected] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useTokenCheck();

  return (
    <div className={`${styles.container} background`}>
      <Head>
        <title>AI NFTs</title>
        <meta
          name="description"
          content='Create NFTs using DALL·E 2 in 3 clicks with Decent.'
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} pt-16 text-black`}>
          Create NFTs using DALL·E 2
        </h1>
        {/* {message === 'true' ? */}
          <GenerateImage setGeneratedImage={setGeneratedImage} />
          {/* : <p className='bg-black p-1 tracking-widest uppercase text-sm font-[400]'>{message}{connected && !allowed && <span> Claim on <a target="_blank" className='text-indigo-500 cursor-pointer'>here</a></span>}</p>
        } */}
        <div className='mt-8'>
          {connected ?
          // <CreateNft generatedImage={generatedImage}/>
          generatedImage && <p>NFT Minting Coming Soon...</p>
          :
          generatedImage && <p className='bg-black p-1 tracking-widest uppercase text-sm font-[400]'>Please Connect Your Wallet to Continue</p>
          }
        </div>
      </main>

      <footer className='py-8 border-t border-white'>
        <div>
        <p className='flex justify-center pb-4 text-base tracking-widest uppercase'>You&apos;re Now A Prompt Arist</p>
        <div className='flex items-center justify-center text-xl'>
          <a href="https://decent.xyz" target="_blank" rel="noopener noreferrer">
            <Image src='/images/icon2.png' height={24} width={24} alt='Decent 💪' />
          </a>
          <span className='px-2 pb-1'>X</span>
          <a href="https://openai.com/api/" target="_blank" rel="noopener noreferrer">
            <Image src='/images/openai.png' height={24} width={24} alt='Open AI' className='rounded-full overflow-hidden' />
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;