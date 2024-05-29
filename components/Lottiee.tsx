'use client';

import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import MagicButton from './ui/MagicButton';
import { IoCopyOutline } from 'react-icons/io5';

const Lottiee = () => {
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const handleCopy = () => {
    const text = 'mohamed2011305977@gmail.com';
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <div className="mt-5 relative">
      <div className={`absolute -bottom-5 right-0`}>
        <Lottie options={defaultOptions} height={200} width={400} />
      </div>
      <MagicButton
        title={copied ? 'Email Is Copied!' : 'Copy My Email Address'}
        icon={<IoCopyOutline />}
        position="left"
        onClickHandler={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
    </div>
  );
};

export default Lottiee;
