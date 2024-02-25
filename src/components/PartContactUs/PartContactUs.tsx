import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactValidationSchema } from '../../schema/schema';
import { InputContactus } from "../../Event/Event"
import emailjs from '@emailjs/browser';
import PartInputs from "../Shared/PartInputs/PartInputs";
import { useRef } from 'react'
interface ContactUsProps {
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function PartContactUs(props: ContactUsProps) {
        const form: any = useRef();
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(ContactValidationSchema)
        });
        const onSubmit = async () => {
                emailjs.sendForm('service_pke74m6', 'template_hk0t1os', form.current, '-AohTxKTUcg7RfNbr')
                        .then((result) => {
                                console.log(result)
                                props.SuccessMessage(true);
                                props.Success("ممنون ما دریافت کردیم پیام شمارو :)");
                                props.Message(true);
                        }, (error) => {
                                props.SuccessMessage(true);
                                props.Success("ارسال نشد ):");
                                props.Message(false);
                        });
                setTimeout(() => {
                        props.Message(false);
                }, 5000);
        };
        return (
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <section className="text-center mb-10">
                                <h3 className="text-4xl font-bold text-coffee-dark mb-4">ارتباط با ما</h3>
                                <p className="text-lg text-coffee-medium">ما از اینکه ازت خبر داشته باشیم خوشحال میشویم. برای ما پیام ارسال کنید.</p>
                        </section>

                        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6">
                                        {InputContactus.map((e) => (
                                                <PartInputs type={e.type} Register={register} Errors={errors} key={e.id} IdName={e.IdName} LabelName={e.LabelName} Type={'auth'} />
                                        ))}
                                        <label>
                                                <span className="block text-right text-titleColor text-sm font-bold mb-2">پیام</span>
                                                <textarea
                                                        {...register("message", { required: "Message is required" })}
                                                        className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                        rows={4}
                                                />
                                                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                                        </label>
                                </div>

                                <div className="text-right">
                                        <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                                ارسال پیام
                                        </button>
                                </div>
                        </form>
                </main>
        );
}
