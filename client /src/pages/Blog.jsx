/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import '../assets/css/Blogs.scss'
import { Filter } from '../components/Blog/Blogfilter';
import { BlogRight } from '../components/Blog/BlogRight';


export const Blogs = () => {

    return <>
            <Header />
            <div className='blogs'>
                <Filter />
                <BlogRight />
            </div>
        </>;
}
