import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="bg-Zinc-800 flex flex-col justify-center">
                <form onSubmit={submit} className="max-w-[400px] w-full mx-auto m-auto rounded-lg bg-neutral-300 p-12 px-8">
                    <h2 className="text-2xl dark:text-black font-sans text-center">LOGIN</h2>
                    <InputLabel forInput="email" value="Email" />
                    <div class="flex items-center text-lg mb-6 md:mb-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            color=""
                            viewBox="1 0 32 24"
                            strokeWidth={2}
                            stroke="orange"
                            className="w-16 h-16"
                        >
                            <path
                            strokeLinecap="round"

                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <InputLabel forInput="password" value="Password" />
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="2 0 16 24"
                            strokeWidth={2}
                            stroke="orange"
                            className="w-16 h-16"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                            />
                        </svg>

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                            <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}

                        <PrimaryButton className="ml-4" processing={processing}>
                            Ingresar
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </GuestLayout>
    );
}
