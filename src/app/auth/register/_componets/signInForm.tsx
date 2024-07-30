"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, Input, CardFooter, Button, Label } from "@/components/ui";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem,  } from "@radix-ui/react-select";
import  { useForm } from "react-hook-form";
import type { Credentials } from "@/app/auth/_type";
import { createClient } from '@/utils/supabase/client';
import { useRouter } from "next/navigation";


export const SignInForm = () => {
  const supabase = createClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();

  const onSubmit = async (data: Credentials) => {
    await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    console.log('User signed up successfully:', data.email);

    router.push('/private');
  };

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Enter your email below to register to your account..
              </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required {...register('email', {required: true})} />
              {errors.email && "This field is required"}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required  {...register('password', {required: true})} />
              {errors.password && "This field is required"}
            </div>

          </CardContent>
          <CardFooter>
            <Button className="w-full">Send</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}