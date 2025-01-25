"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateUserData } from "@/actions/user-action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number").default(""),
  gender: z.string().default(""),
  year: z.string().default(""),
  semester: z.string().default(""),
  role: z.string().default(""),
  registration: z.string().default(""),
  department: z.string().default(""),
  institute: z.string().default(""),
  address: z.string().min(5, "Please enter your full address").default(""),
  discordUsername: z.string().min(2, "Invalid Discord ID").default(""),
  image: z.any().optional().default(""),
});

export interface UserData {
  data: {
    name: string;
    email: string;
    phone: string;
    gender: string;
    year: string;
    semester: string;
    role: string;
    registration: string;
    department: string;
    institute: string;
    address: string;
    discordUsername: string;
    image?: any;
  };
}

export function ProfileForm({ userData }: { userData: UserData }) {
  const data = Object.fromEntries(
    Object.entries(userData.data).map(([key, value]) => [key, value || ""])
  ) as any;
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [avatarPreview] = useState<string | null>(null);
  const UData: any = userData;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      year: "",
      semester: "",
      role: "",
      registration: "",
      department: "",
      institute: "",
      address: "",
      discordUsername: "",
      image: "",
      ...data,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const vData: any = { ...values };
      const newData = Object.keys(data).reduce(
        (acc, key) => {
          const typedKey = key;
          acc[typedKey] = data[typedKey]
            ? data[typedKey]
            : vData[typedKey] ?? UData.data[typedKey];
          return acc;
        },
        { ...vData }
      );
      newData["semester"] = values?.semester;
      console.log({ newData });

      const resp = await updateUserData(newData);

      if (resp) {
        router.refresh();
        toast.success("সফল ভাবে আপনার প্রফাইলটি আপডেট করা হয়েছে।");
        return;
      }
      throw Error("Update failure");
    } catch (err) {
      console.log({ err });

      toast.error("এই মহুর্তে প্রফাইলটি আপডেট করা সম্ভব হচ্ছে না।");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Profile Picture</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src={avatarPreview || data?.image || "/placeholder.svg"}
                      />
                      <AvatarFallback>
                        {form.getValues("name")?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    {/* <div>
                      <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="image"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setAvatarPreview(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <label
                        htmlFor="image"
                        className="cursor-pointer inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </label>
                    </div> */}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              disabled
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              disabled
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              disabled={!!data.phone}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    disabled={!!data.gender}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              disabled={!!data.year}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Session</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your session" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Semester</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your semester" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="registration"
              disabled={!!data.registration}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your registration number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              disabled={!!data.department}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your department" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institute"
              disabled={!!data.institute}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institute Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your institute name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              disabled={!!data.address}
              name="address"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discordUsername"
              disabled={!!data.discordUsername}
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Discord ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Discord ID" {...field} />
                  </FormControl>
                  <FormDescription>
                    This ID will be used for Discord integration
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={
                isLoading ||
                !form.formState.isDirty ||
                form.formState.isSubmitted
              }
              className="w-full sm:w-auto"
            >
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
