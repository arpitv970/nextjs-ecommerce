'use client';

import Loading from '@/components/Loading';
import ProdCards from '@/components/ProdCards';
import { Suspense, useEffect, useState } from 'react';

const Home = () => {
    const [prods, setProds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            setIsLoading(true);
            const res = await fetch('https://dummyjson.com/products?limit=10');
            const data = await res.json();

            setProds(data?.products);
            setIsLoading(false);
        };

        setIsLoading(true);
        fetchData();
    }, []);

    return (
        <section className='w-[100%] flex flex-col justify-center items-center mx-auto'>
            <h1 className='header_text mb-5'>All Products</h1>
            {!isLoading ? (
                <section className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10'>
                    {prods.map((prod, i) => {
                        return (
                            <ProdCards
                                pic={prod.thumbnail}
                                title={prod.title}
                                price={prod.price}
                            />
                        );
                    })}
                </section>
            ) : (
                <Loading />
            )}
        </section>
    );
};

export default Home;
