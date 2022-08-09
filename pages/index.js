import React from 'react'
import { client } from '../lib/sanity';
import List_element from '../components/list_element';
import Header from '../components/header'
import Footer from '../components/footer'


function Home({ users }) {
    return (
        <div className="justify-between lg:max-w-6xl mx-auto max-h-screen items-center">

            <Header />

                <div className="flex flex-col lg:flex-row flex-1 justify-between items-center p-20 pt-5 pb-0">
                        <div>
                            <div>
                                <div id="box1" className="box1 rounded-2xl border-4 mb-10 mt-10 lg:mb-0 lg:mt-0">
                                    <div className="flex flex-col justify-center p-6 pr-5 h-[350px] leading-[2.5em] font-bold">
                                        <div>
                                            <p id="txt_part" className="mb-4 text-[#9B9B9B] text-[1.5em]">for Classmates,</p>
                                        </div>
                                        <div>
                                            <p id="txt" className="mb-4 text-[2em]">Kindly refer to my daily notes so that your_marks {"<="} my_marks.</p>
                                        </div>
                                        <div>
                                            <p id="txt_part" className="text-[#9B9B9B] text-[1.5em]">Thank you, <br/>Yours Competitor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div id="box2" className="box2 rounded-2xl border-4 lg:pl-10 lg:pr-10 pl-3 pr-3">
                                    <div className="overflow-auto max-h-full">
                                            {
                                                users.map(user => {
                                                    return (
                                                        <div key={user._id} className="p-5 pl-0 pr-0">
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
    )
}

export default Home

export async function getStaticProps() {
    const products = await client.fetch(`*[_type == "notes"] | order(_createdAt desc)`);
    console.log('products', products);

    return {
        props: {
            users: products
        },
        revalidate: 10, //refetch content on refresh every 10 sec
    }
}