'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = {
  welcome: "Welcome to AgriVision",
  tagline: "Your AI-powered assistant for smarter farming.",
  startButton: "Get Started"
};

export default function WelcomePage() {
  const router = useRouter();
  const { t } = useTranslation(texts);
  const [isExiting, setIsExiting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 700); // match animation duration
  };

  if (!isClient) {
    return null; // prevent hydration issues
  }

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={cn(
            "relative flex h-screen w-screen items-center justify-center overflow-hidden"
          )}
        >
          {/* 🌾 Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
            data-ai-hint="dawn landscape nature"
          >
            <source src="/videos/Agrivision.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 grid gap-6 p-4 text-center text-white animate-fade-in-up">
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('welcome')}
            </motion.h1>

            <motion.p
              className="mt-2 text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('tagline')}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                onClick={handleStart}
                size="lg"
                className="mt-6 px-6 py-3 text-lg rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                {t('startButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
