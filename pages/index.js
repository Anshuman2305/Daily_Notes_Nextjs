import React from 'react'
import { client } from '../lib/sanity';
import List_element from '../components/list_element';
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Link from 'next/link';




function Home({ users }) {
    return (
        <div className="lg:h-screen dark:bg-[#252525] ease-in-out duration-300">
            <Head>
                <title>AM Notebook</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="justify-between w-screen lg:max-w-6xl mx-auto lg:max-h-screen items-center">

                <Header />

                <div className="flex flex-col lg:flex-row flex-1 justify-between items-center p-20 pt-5 pb-0 gap-[40px]">
                    <div>
                        <div className="flex flex-col lg:gap-[40px]">
                            <div id="box1" className="box1 bg-[#E4E4E4] dark:bg-[#252525] dark:border-[#3a3a3a] rounded-2xl border-[3px] mb-10 mt-10 lg:mb-0 lg:mt-0 ease-in-out duration-300">
                                <div className="flex flex-col justify-center p-6 pr-5 lg:leading-[2.5em] font-bold">
                                    <div>
                                        <p id="txt_part" className="mb-4 text-[#7a7a7a] dark:text-[#7a7a7a] text-[1.5em]">for Classmates,</p>
                                    </div>
                                    <div>
                                        <p id="txt" className="mb-4 text-[1.7em] text-[#444444] dark:text-[#ccc]">Kindly refer to my daily notes so that your_marks {"<="} my_marks.</p>
                                    </div>
                                    <div>
                                        <p id="txt_part" className="text-[#7a7a7a] dark:text-[#7a7a7a] text-[1.5em]">Thank you, <br />Yours Competitor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <Link href="books"><a className="border-[3px] border-[#BCBCBC] text-[#7a7a7a] hover:bg-[#7a7a7a] dark:hover:bg-[#898989] dark:hover:text-[white] dark:hover:border-[#898989] hover:text-[#fff] hover:border-[#7a7a7a] dark:bg-[#252525] dark:border-[#3a3a3a] pt-3 pb-3 pr-5 pl-5 rounded-full font-semibold ease-in-out duration-200">Show Books</a></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div id="box2" className="box2 rounded-2xl dark:bg-[#383838] dark:border-[#383838] shadow-lg lg:pl-10 lg:pr-10 pl-3 pr-3 ease-in-out duration-300">
                                <div className="overflow-auto max-h-full">
                                    {
                                        users.map(user => {
                                            return (
                                                <div key={user._id} className="p-3 pl-0 pr-0">
                                                    <List_element obj={user} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <Footer />


            </div>
        </div>
    )
}

export default Home

export async function getStaticProps() {
    const products = await client.fetch(`*[_type == "notes"][0..14] | order(_createdAt desc)`);
    console.log('products', products);

    return {
        props: {
            users: products
        },
        revalidate: 10, //refetch content on refresh every 10 sec
    }
}
