'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ✅ Schema
export const enrollFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number can't exceed 15 digits." })
    .optional(),
  course: z.enum(["AI", "Data Science", "Full Stack", "Quantum Computing"], {
    message: "Please select a valid course.",
  }),
  batch: z.string().optional(),
  message: z.string().max(500, {
    message: "Message can't exceed 500 characters.",
  }).optional(),
})

interface EnrollNowProps {
  Open: boolean;
  onChange: (open: boolean) => void;
}

const EnrollNow: React.FC<EnrollNowProps> = ({ Open, onChange }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof enrollFormSchema>>({
    resolver: zodResolver(enrollFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      course: undefined,
      batch: "",
      message: ""
    },
  })

  function onSubmit(values: z.infer<typeof enrollFormSchema>) {
    setLoading(true)
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    fetch("https://script.google.com/macros/s/AKfycbzwn7dzb_wNFs9GG2JlMBZPa5BZxPar5bUJ6pw5-9--AiQ0cLVbkyL4MUywMlkcFSi4UA/exec", {
      method: "POST",
      body: formData, // ✅ no custom headers
    })
      .then(res => res.json())
      .then(data => {
        if (data.result === "success") {
          alert("Enrollment successful!");
          form.reset();
          onChange(false);
        } else {
          alert("Submission failed: " + data.error);
        }
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Network error. Try again.");
      }

      ).finally(() => setLoading(false))

  }


  return (
    <Dialog open={Open} onOpenChange={onChange}>
      <DialogContent>
        <DialogTitle className="text-xl font-bold">Enroll Now</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="9876543210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Course */}
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Course</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-orange-100">
                      <SelectItem value="AI">Artificial Intelligence</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Full Stack">Full Stack Development</SelectItem>
                      <SelectItem value="Quantum Computing">Quantum Computing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Batch (optional) */}
            <FormField
              control={form.control}
              name="batch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Batch (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Morning / Evening / Weekend" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message (optional) */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any comments or preferences..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <svg
                    className="animate-spin mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                'Enroll Now'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EnrollNow
