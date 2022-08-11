import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Bookpage from '../components/bookpage';
import Footer from '../components/footer';
import Header from '../components/header'
import { client } from '../lib/sanity';



function Books({ users }) {

    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <div className="lg:h-screen dark:bg-[#252525] ease-in-out duration-300">
            <Head>
                <title>Books and Materials</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="justify-between w-screen lg:max-w-6xl mx-auto lg:max-h-screen items-center">
                <Header />
                <div className="p-5 lg:p-20 lg:pb-0 lg:pt-0 pt-15 mb-[10px]">
                    <div className="text-center md:text-left ">
                        <h1 className="lg:absolute text-[2.1em] font-semibold lg:text-[#c2c2c2] text-[#666666] dark:lg:text-[#505050] lg:text-[13em] lg:top-[120px] ease-in-out">Books</h1>
                        <p className="lg:hidden text-[1.3em] text-[#636363]">Collections of Semester Required Books and Materials.</p>
                    </div>
                    <div className="mt-5 lg:mt-[150px]">
                        <div ref={elRef} className="relative bg-[#f1f1f1] dark:bg-[#383838] h-[450px] rounded-3xl overflow-x-scroll overflow-y-hidden shadow-xl ease-in-out duration-200">
                            <div className="flex ml-8 gap-[3em]">
                                {
                                    users.map(user => {
                                        return (
                                            <div key={user._id} className=" pl-0 pr-0">
                                                <Bookpage obj={user} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />

            </div>


        </div>
    )
}

export default Books

export async function getStaticProps() {
    const products = await client.fetch(`*[_type == "books"][0..14] | order(_createdAt desc)`);
    console.log('products', products);

    return {
        props: {
            users: products
        },
        revalidate: 10, //refetch content on refresh every 10 sec
    }
}