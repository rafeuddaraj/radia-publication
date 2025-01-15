"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Loader2, KeyRound } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import CustomLabel from "@/components/ui/custom-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(4, "Name need"),
  gender: z.enum(["male", "female"]),
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full p-8 sm:p-12 lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r bg-clip-text">
              নিবন্ধন করুন
            </h1>
            <p className="my-5 text-lg font-bold">
              একাউন্ট খোলার জন্য সঠিক তথ্য প্রদান করুন। এই তথ্য গুলো পরবর্তীতে
              লগইন এর সময় প্রয়োজন হবে।
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div className="flex gap-10">
                <div className="w-1/2 space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="আপনার পুরো নাম"
                          subLabel="সমস্ত যোগাযোগে এই নামটি ব্যবহৃত হবে। তাই অনুগ্রহ করে সঠিক নাম প্রদান করুন এবং ছদ্মনাম ব্যবহার এড়িয়ে চলুন।"
                          htmlFor="name"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="name"
                              placeholder="Rafe Uddaraj"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Gender Field */}
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="আপনার জেন্ডার সিলেক্ট করুন"
                          subLabel="সকল যোগাযোগে সঠিক ও উপযুক্ত সম্বোধনের জন্য এটি ব্যবহৃত হবে।"
                          isRequired={true}
                          htmlFor="gender"
                        />
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="space-y-2 flex items-center"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem id="male" value="male" />
                              <Label htmlFor="male">পুরুষ</Label>
                            </div>
                            <div className="flex items-center space-x-2 !mt-0">
                              <RadioGroupItem id="female" value="female" />
                              <Label htmlFor="female">মহিলা</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="আপনার ইমেইল এড্রেস"
                          subLabel="এই ইমেইল ঠিকানাটি সমস্ত যোগাযোগের জন্য ব্যবহৃত হবে এবং এটি আপনার লগইন ইউজারনেম হিসেবে নির্ধারিত হবে।"
                          htmlFor="email"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="email"
                              placeholder="rafe@uddaraj.com"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Department */}
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="ডিপার্টমেন্ট "
                          subLabel="অনুগ্রহ করে আপনার ডিপার্টমেন্ট সঠিকভাবে উল্লেখ করুন, কারণ এটি গুরুত্বপূর্ণ তথ্য হিসেবে ব্যবহৃত হবে।"
                          isRequired={true}
                          htmlFor="departnemnt"
                        />
                        <FormControl>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="ডিপার্টমেন্ট সিলেক্ট করুন" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">CST-85</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Roll */}
                  <FormField
                    control={form.control}
                    name="roll"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="বোর্ড রোল"
                          subLabel="অনুগ্রহ করে সঠিক বোর্ড রোল নম্বর প্রদান করুন।"
                          htmlFor="email"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="email"
                              placeholder="244139"
                              {...field}
                              type="number"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Password Field */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="পাসওয়ার্ড দিন"
                          subLabel="পাসওয়ার্ডটি অবশ্যই কমপক্ষে ৮ অক্ষরের হতে হবে। এছাড়াও, এতে অন্তত ১টি অক্ষর (লেটার) এবং ১টি সংখ্যা (নাম্বার) থাকতে হবে।"
                          htmlFor="name"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="P@ssw0rd1"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent dark:text-blue-400/50 dark:hover:text-blue-400"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Confirm Password */}

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="পুনরায় আপনার পাসওয়ার্ডটি দিন"
                          subLabel="এই পাসওয়ার্ডটি অবশ্যই উপরের পাসওয়ার্ডের সাথে হুবহু মিলতে হবে।"
                          htmlFor="confirm-password"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="confirm-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="P@ssw0rd1"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent dark:text-blue-400/50 dark:hover:text-blue-400"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/2 space-y-6">
                  {/* Mobile Number / Phone Number */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="আপনার মোবাইল নাম্বার"
                          subLabel="আপনার মোবাইল নম্বর যাচাইয়ের জন্য একটি OTP (One-Time Password) পাঠানো হবে। অনুগ্রহ করে সঠিক নম্বর প্রদান করুন।"
                          htmlFor="phone"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="phone"
                              placeholder="01xxxxxxxxx"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Institute */}
                  <FormField
                    control={form.control}
                    name="institute"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="ইনস্টিটিউট"
                          subLabel="আপনি যে ইনস্টিটিউটে অধ্যয়ন করছেন, অনুগ্রহ করে সেই ইনস্টিটিউটের নাম সঠিকভাবে প্রদান করুন।"
                          isRequired={true}
                          htmlFor="discord-username"
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="discord-username"
                              placeholder="Dhaka Polytechnic Institute"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Institute */}
                  <FormField
                    control={form.control}
                    name="session"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="সেশন"
                          subLabel="অনুগ্রহ করে আপনার সেশন সঠিকভাবে উল্লেখ করুন, কারণ এটি গুরুত্বপূর্ণ তথ্য হিসেবে ব্যবহৃত হবে।"
                          isRequired={true}
                          htmlFor="discord-username"
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="session"
                              placeholder="Dhaka Polytechnic Institute"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Discord Username */}
                  <FormField
                    control={form.control}
                    name="discordUsername"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="আপনার ডিসকোর্ড ইউজারনেম"
                          subLabel="আপনার ডিসকোর্ড সাপোর্ট কমিউনিটি চ্যানেলে এই ইউজারনেমটি এক্সেস প্রদান করা হবে। যদি আপনার ডিসকোর্ড ইউজারনেম খুঁজে পেতে সমস্যা হয়, অনুগ্রহ করে এখানে থাকা গাইডটি অনুসরণ করুন।"
                          htmlFor="discord-username"
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="discord-username"
                              placeholder="rafeuddaraj"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="আপনার পুরো ঠিকানা"
                          subLabel="এই ঠিকানায় কুরিয়ার সার্ভিসের মাধ্যমে গুরুত্বপূর্ণ ডকুমেন্ট পাঠানো হতে পারে। তাই দয়া করে নিশ্চিত করুন যে আপনি সঠিক এবং সম্পূর্ণ ঠিকানা প্রদান করেছেন।"
                          htmlFor="address"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              id="address"
                              placeholder="House 101, 7 Diploma Avenue, Dhaka, Bangladesh"
                              {...field}
                              className="resize-none h-24"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="/forgot-password"
                  className="text-sm dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 font-medium"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <KeyRound className="mr-2 h-5 w-5" />
                    Sign In
                  </>
                )}
              </Button>

              <p className="text-center">
                Don't have an account?{" "}
                <Link href="/register" className="transition-colors">
                  Create account
                </Link>
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
