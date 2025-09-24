'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/component/ui/btn';
import { div } from 'framer-motion/client';
import LoadingLottie from '@/component/home/loadingLottie';

function RunAnimation() {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev >= 7 ? 0 : prev + 1));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      key={frame} // 프레임 바뀔 때마다 강제 리렌더
      src={`/img/run_icon2/${frame}.png`}
      alt='러닝 애니메이션'
      width={300}
      height={300}
      priority
    />
  );
}

function IntroScreen({ onFinish }: { onFinish: () => void }) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-full h-full bg-white'>
      {/* 러닝 애니메이션 */}
      <RunAnimation />

      <p className='text-2xl lg:text-3xl font-medium'>ARE YOU READY?</p>
      <Button size='lg' onClick={onFinish}>
        START
      </Button>
    </div>
  );
}

export default function LoadingPage({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    const loadingSeen = sessionStorage.getItem('loadingSeen');

    if (!loadingSeen) {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }
  }, []);

  if (showIntro === null) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <LoadingLottie />
      </div>
    );
  }
  if (showIntro) {
    return (
      <IntroScreen
        onFinish={() => {
          setShowIntro(false);
          sessionStorage.setItem('loadingSeen', 'true');
        }}
      />
    );
  }

  return <>{children}</>;
}
