import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Homepage/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="bg-slate-100">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div
                className="container mx-auto flex justify-center items-center h-80
						 text-center px-20"
            >
                <h1 className="text-4xl">Welcome FathNews Portal</h1>
            </div>
            <div className="container mx-auto flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4">
                <NewsLists news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
