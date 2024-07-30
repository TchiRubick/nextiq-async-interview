'use client'

import { useForm } from "react-hook-form";
import { Button, Input, Card, CardContent, CardFooter, CardHeader, CardTitle, Label, CardDescription } from "@/components/ui";
import type { Credentials } from "@/app/auth/_type";
import { useLogin } from "../auth/_hooks/useLogin";
import Link from "next/link";


const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<Credentials>();
  const signin = useLogin();

  return(
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(signin)}>
        <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required {...register('email', {required: true})} />
            {errors.email && 'This field is required'}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required  {...register('password', {required: true})} />
            {errors.password && 'This field is required'}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full">Sign in</Button>
          <Link href="/auth/register">
            Create account
          </Link>
        </CardFooter>
      </Card>
      </form>
    </div>
  );
};

export default Login;
