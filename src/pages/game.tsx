import FlappyBird from '@/components/FlappyBrid/FlappyBird';
import Head from 'next/head';
import React from 'react';


export default function Games() {
  return (
    <>
      <Head>
        <script src="/flappybird.js" defer></script>
      </Head>
      <FlappyBird />
    </>
  );
};