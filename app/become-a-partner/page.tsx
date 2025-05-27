'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// schemas/partnerFormSchema.ts
import { z } from "zod";

export const partnerFormSchema = z.object({
    organizationName: z.string().min(2, {
        message: "Organization name must be at least 2 characters.",
    }),
    contactPerson: z.string().min(2, {
        message: "Contact person name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." })
        .max(15, { message: "Phone number can't exceed 15 digits." })
        .optional(),
    website: z
        .string()
        .url({ message: "Please enter a valid website URL." })
        .optional()
        .or(z.literal("")),
    message: z
        .string()
        .max(500, { message: "Message can't exceed 500 characters." })
        .optional(),
});

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;


import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Breadcrump from '@/components/Common/Breadcrumb';

const PartnerForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm<PartnerFormValues>({
        resolver: zodResolver(partnerFormSchema),
        defaultValues: {
            organizationName: '',
            contactPerson: '',
            email: '',
            phone: '',
            website: '',
            message: '',
        },
    });

    const onSubmit = async (values: PartnerFormValues) => {
        setLoading(true);
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (value !== undefined) {
                formData.append(key, value);
            }
        });
        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwYa3n9uwZ6fopUV7mpDHNcjXZ4LOzqAaDHDepSfaidppUDIKPTQ9rsjcckzAy0xbJ6qA/exec',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.result === 'success') {
                alert('Thank you! Your partnership request has been submitted.');
                form.reset();
            } else {
                alert('Submission failed: ' + data.error);
            }
        } catch (error) {
            alert('Network error. Please try again later.');
        }
        finally {
            setLoading(false); // stop loading
        }

    };
    const links = [
        {
            title: "Home",
            link: "/"
        },

    ]
    return (
        <div>
            <Breadcrump title='Become A Partner' links={links} page='partner-with-us' />

            <div className='max-w-3xl mx-auto py-16'>
                <Form  {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="organizationName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Organization Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Anutattva Foundation" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="contactPerson"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contact Person</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Avinash Sood" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., email@example.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 9876543210" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.org" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Why do you want to partner with us?" rows={4} {...field} />
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
                                'Submit Partnership Request'
                            )}
                        </Button>

                    </form>
                </Form>
            </div>
        </div>
    );
};

export default PartnerForm;
