import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import GuestDashboardLayout from '@/Layouts/GuestDashboardLayout';

export default function Dashboard(props, header) {
    return (
        <GuestDashboardLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Dashboard</div>
                    </div>
                </div>
            </div>
        </GuestDashboardLayout>

    );

    /*(
        <AuthenticatedLayout>
            <h1>Autentificado</h1>
        </AuthenticatedLayout>
    );*/
}
