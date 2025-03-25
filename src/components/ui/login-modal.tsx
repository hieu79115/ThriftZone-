"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Tài khoản phải có ít nhất 5 ký tự.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Mật khẩu phải có ít nhất 8 ký tự.",
    })
    .regex(/[0-9]/, { message: "Mật khẩu phải chứa ít nhất một số." }),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Dữ liệu khi submit form: ", data);
    setIsOpen(false);
  };
  const onError = (errors: any) => {
    console.error("Form validation errors:", errors);
  };

  return (
    <>
      <div className="flex space-x-4">
        <Button
          variant="link"
          className="text-white"
          onClick={() => setIsOpen(true)}
        >
          Đăng nhập
        </Button>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-6 space-y-4 min-w-fit">
          <DialogTitle className="text-xl font-semibold text-center">
            Đăng nhập
          </DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tài khoản</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nhập tài khoản"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Nhập mật khẩu"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="show"
                  onCheckedChange={() => setShowPassword(!showPassword)}
                  checked={showPassword}
                />
                <Label htmlFor="show" className="text-sm font-light">
                  Hiển thị mật khẩu
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Đăng nhập
              </Button>

              <p className="text-center text-sm">
                Chưa có tài khoản?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    setShowPassword(false);
                    setIsOpen(false);
                  }}
                >
                  Đăng ký
                </span>
              </p>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
