"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Highlight from "@/components/highlight";
import { toast } from "sonner";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signIn("google", { callbackUrl: "/books" });
      if (result?.error) {
        toast.error("লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch {
      toast.error("লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r bg-clip-text">
              <Highlight>লগইন</Highlight> করুন
            </h1>
            <p className="mt-2">
              আপনার Google অ্যাকাউন্ট ব্যবহার করে লগইন করুন।
            </p>
          </div>

          <Button
            onClick={handleGoogleLogin}
            className="w-full h-12 font-medium flex items-center justify-center"
            variant={"outline"}
          >
            <>
              {/*?xml version="1.0" encoding="utf-8"?*/}
              {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
              <svg
                width="20px"
                height="20px"
                viewBox="-3 0 262 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                />
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                />
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                />
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                />
              </svg>
            </>
            Google দিয়ে লগইন করুন
          </Button>
        </motion.div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-lg "
        >
          <Image
            src={`/svgs/auth/login.svg`}
            alt="login avatar"
            height={400}
            width={400}
          />
        </motion.div>
      </div>
    </div>
  );
}
