import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import useFetchSectors from "./useFetchSectors";

const schema = z.object({
    name: z.string().min(1),
    sectors: z.any(),
    agree: z.boolean().refine((value) => value === true, {
        message: "You must agree to the terms and conditions.",
    }),
});

const useFormSubmit = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { options, loading } = useFetchSectors();
    const [selectedValues, setSelectedValues] = useState([]);
    const {
        handleSubmit,
        formState: { errors },
        control,
        register,
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = async (body) => {
        setIsSubmitting(true);

        try {
            const { data } = await axios.post(
                "http://localhost:3001/api",
                {...body, sectors: selectedValues }
            );
            toast.success("Successfully submitted");
            localStorage.setItem("userId", data._id);
        } catch (error) {
            if (error?.response?.status === 400) {
                if (error?.response?.data?.message) {
                    toast.error(error.response.data.message);
                } else if (error?.response?.data?.errors) {
                    // Display specific error messages for each field
                    for (const fieldName in error.response.data.errors) {
                        if (fieldName in errors) {
                            errors[fieldName].message =
                                error.response.data.errors[fieldName].message;
                        }
                    }
                } else {
                    toast.error("Error");
                }
            } else {
                toast.error("Error");
            }
        } finally {
            setIsSubmitting(false);
            window.location.reload()
        }
    };


    return {
        onSubmit: handleSubmit(onSubmit),
        isSubmitting,
        errors,
        control,
        register,
        options,
        loading,
        selectedValues,
        setSelectedValues
    };
};

export default useFormSubmit;
