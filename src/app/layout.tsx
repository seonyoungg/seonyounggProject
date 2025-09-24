import './globals.css';
import type { Metadata } from 'next';
import LoadingPage from '@/component/loadingPage';

export const metadata: Metadata = {
  title: '선영의 포트폴리오',
  description: '선영의 포트폴리오 공간입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko-KR'>
      <body>
        <div className='font-sans w-full h-dvh'>
          <LoadingPage>{children}</LoadingPage>
        </div>
      </body>
    </html>
  );
}
