"use client"
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {
    const { query } = useParams();
    const {filterData,getFilteredData} = useSupabase();

    useEffect(()=>{
        getFilteredData(query.toString());
    },[query,getFilteredData]);

    console.log(filterData);
       
    return (
        <div>
           <SearchResult filterData = {filterData}/>
        </div>
    )
}

export default Page
