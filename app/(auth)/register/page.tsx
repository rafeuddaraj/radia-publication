"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Loader2, UserPlus2Icon } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import CustomLabel from "@/components/ui/custom-label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Highlight from "@/components/highlight";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(4, "Name need"),
  gender: z.enum(["male", "female"]),
  session: z.string().min(4),
  roll: z.number(),
  institute: z.string(),
  discordUsername: z.string().optional(),
  confirmPassword: z.string(),
  phone: z.string(),
  department: z.enum(["64-ct", "67-et", "68-elt", "70-mt", "85-cst"]),
  address: z.string(),
  registration: z.string().optional(),
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
              <Highlight>নিবন্ধন </Highlight> করুন
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

                  {/* Roll */}
                  <FormField
                    name="roll"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="বোর্ড রোল"
                          subLabel="অনুগ্রহ করে সঠিক বোর্ড রোল নম্বর প্রদান করুন।"
                          htmlFor="roll"
                          isRequired={true}
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="roll"
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
                  {/* Registration No */}
                  <FormField
                    name="registration"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="রেজিস্ট্রেশন নাম্বার"
                          subLabel="অনুগ্রহ করে সঠিক রেজিস্ট্রেশন নম্বর প্রদান করুন।"
                          htmlFor="registration"
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="registration"
                              placeholder="002441139"
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
                    name="institute"
                    render={({ field }) => (
                      <FormItem>
                        <CustomLabel
                          label="ইনস্টিটিউট"
                          subLabel="আপনি যে ইনস্টিটিউটে অধ্যয়ন করছেন, অনুগ্রহ করে সেই ইনস্টিটিউটের নাম সঠিকভাবে প্রদান করুন।"
                          isRequired={true}
                          htmlFor="institute"
                        />
                        <FormControl>
                          <div className="relative">
                            <Input
                              id="institute"
                              placeholder="Dhaka Polytechnic Institute"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Department */}
                  <FormField
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
                          <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="ডিপার্টমেন্ট সিলেক্ট করুন" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="64-ct">
                                  64 Civil Technology
                                </SelectItem>
                                <SelectItem value="67-et">
                                  67 Electrical Technology
                                </SelectItem>
                                <SelectItem value="68-elt">
                                  68 Electronics Technology
                                </SelectItem>
                                <SelectItem value="70-mt">
                                  70 Mechanical Technology
                                </SelectItem>
                                <SelectItem value="85-cst">
                                  85 Computer Science and Technology
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Session */}
                  <FormField
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
                  <FormField
                    name="agreement"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Label className="flex gap-2">
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                            <div>
                              আমি নেক্সট পাবলিকেশনের সকল{" "}
                              <Link className={"link"} href={"/terms"}>
                                শর্তাবলী
                              </Link>
                              ,{" "}
                              <Link className={"link"} href={"/privacy-policy"}>
                                গোপনীয়তা নীতি{" "}
                              </Link>
                              এবং{" "}
                              <Link className={"link"} href={"/refund-policy"}>
                                রিফান্ড পলিসি
                              </Link>{" "}
                              যথাযথভাবে মেনে নিচ্ছি।
                            </div>
                          </Label>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="text-center my-5">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 font-medium"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <UserPlus2Icon className="mr-2 h-5 w-5" />
                      নিবন্ধন করুন
                    </>
                  )}
                </Button>

                <p className="text-center my-3">
                  আপনি যদি ইতোমধ্যে নিবন্ধিত হন,{" "}
                  <Link href="/register" className="transition-colors link">
                    তবে এখানে লগইন করুন।
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}