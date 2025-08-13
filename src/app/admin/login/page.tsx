"use client"

import { DynamicField, FormField } from "@/components/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AdminLoginPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter()
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();

    const formFields = [
        { name: "email", placeholder: "Email", type: "email"},
        { name: "password", placeholder: "Password", type: "password" }
    ];

    const onSubmit = async (data: { email: string; password: string }) => {
        if (!data.email || !data.password) {
            return;
        }
        setIsSubmitting(true);
        try {
            const res = await axios({
                method: "post",
                baseURL: process.env.NEXT_PUBLIC_HOST_URL,
                url: "/auth/login",
                data,
                withCredentials: true // important for cookie auth
            });

            if (res.data.success) {
                toast.success("Login successful!");
                router.push("/admin")
            } else {
                toast.error(res.data.message || "Invalid credentials");
                reset()
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Login failed");
            reset()
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
                <p className="text-gray-600 mt-2">Sign in to access the admin dashboard</p>
            </div>

            <div className="space-y-6">
                {formFields.map((field) => (
                    <FormField
                        key={field.name}
                        label={field.placeholder}
                        required={field.validations?.required}
                        error={errors[field.name]}
                    >
                        <DynamicField
                            field={field}
                            register={register}
                            control={control}
                            errors={errors}
                        />
                    </FormField>
                ))}

                <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                        {isSubmitting && (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                        <span>{isSubmitting ? 'Logging in...' : 'Login'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
