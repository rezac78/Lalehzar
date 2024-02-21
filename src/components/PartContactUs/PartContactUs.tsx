import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactValidationSchema } from '../../schema/schema';

export default function PartContactUs() {
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(ContactValidationSchema)
        });
        const onSubmit = async (data: any) => {
                console.log(data)
        };
        return (
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
                        <section className="text-center mb-10">
                                <h1 className="text-4xl font-bold text-coffee-dark mb-4">Contact Us</h1>
                                <p className="text-lg text-coffee-medium">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        </section>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6">
                                        <label className="block">
                                                <span className="text-gray-700">Name</span>
                                                <input
                                                        {...register("name", { required: "Name is required" })}
                                                        type="text"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                                        </label>

                                        <label className="block">
                                                <span className="text-gray-700">Email</span>
                                                <input
                                                        {...register("email", {
                                                                required: "Email is required",
                                                                pattern: {
                                                                        value: /^\S+@\S+$/i,
                                                                        message: "Entered value does not match email format",
                                                                },
                                                        })}
                                                        type="email"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                                        </label>

                                        <label className="block">
                                                <span className="text-gray-700">Message</span>
                                                <textarea
                                                        {...register("message", { required: "Message is required" })}
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                                                Send Message
                                        </button>
                                </div>
                        </form>
                </main>
        );
}
