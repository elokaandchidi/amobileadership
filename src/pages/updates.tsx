import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';

import { client } from "../utils/client";
import { newSearchQuery, newsQuery } from "../utils/data";
import Pagination from "../components/pagination";
import { config } from "../utils/config";
import { NewInfo } from "../utils/interface";
import { formatDate } from "../utils/common";
import { FaMagnifyingGlass } from "react-icons/fa6";



const News = () => {
  const [newsList, setNewList] = useState<NewInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams, setSearchParams] = useState({ page: 1, pageSize: 5, searchTerm: ''});
  
  const fetchNewsBySearch = () =>{
    setLoading(true);
    const query = newSearchQuery(searchParams);
    
    client.fetch(query)
    .then((data) => {
      setNewList(data);
      setLoading(false);
    })
  }

  const fetchNews = () =>{
    setLoading(true);
    client.fetch(newsQuery(searchParams))
    .then((data) => {
      setNewList(data);
      setLoading(false);
    })
  }
  
  const formatImage = (value: string) =>{    
    return value?.replace(/image-/g, "").replace(/-png/g, ".png").replace(/-svg/g, ".svg");
  }

  const serializers = {
    list: (props: any) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return <ul className='list-disc list-outside py-5 pl-[3rem]'>{props.children}</ul>;
      }
      return <ol className='list-disc list-inside'>{props.children}</ol>;
    },
    listItem: (props: any) => <li>{props.children}</li>,
    types: {
      code: (props: any) => (
        <pre data-language={props?.node.language}>
          <code>{props?.node.code}</code>
        </pre>
      ),
      image: (props: any) => (
        <img
          src={`https://cdn.sanity.io/images/${config.sanity.projectId}/production/${formatImage(props?.node.asset._ref)}`}
          alt={props.node.alt}
        />
      ),
    },
  }
  useEffect(() => {
    
    if(searchParams.searchTerm !== ''){
      fetchNewsBySearch();
    } else {
      fetchNews();
    }

    const countQuery = `count(*[_type == "post" && status == 'active'])`

    client.fetch(countQuery)
    .then((data : number) => {
      setTotalPage(Math.ceil(data / searchParams.pageSize));
    })

    // eslint-disable-next-line
  }, [searchParams]);

  const onPageChange = (page: number) => {
    setSearchParams({...searchParams, page: page});
    if(searchParams.searchTerm !== ''){
      fetchNewsBySearch();
    } else {
      fetchNews();
    }
  }

  const onPageSizeChange = (pageSize: number) => {
    setSearchParams({...searchParams, pageSize: pageSize});
    if(searchParams.searchTerm !== ''){
      fetchNewsBySearch();
    } else {
      fetchNews();
    }
  }
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-4 mt-10 font-semibold">News & Updates</div>
      <div className='flex flex-col w-full'>
        <div className='bg-white border p-3 md:mt-5 text-sm flex flex-row items-center md:w-1/3 text-center'>
          <input type="text" placeholder="Search for article" value={searchParams.searchTerm}
            onChange={({ target}) => {setSearchParams({ ...searchParams, searchTerm: target.value })}} className='bg-transparent placeholder:text-black lg:text-lg w-full outline-none'/>
            <FaMagnifyingGlass />
        </div>
      </div>

      {!loading && newsList.length > 0 && 
        <div className="grid md:grid-cols-3 w-full gap-10">
          {newsList?.map((post) => (
            <NavLink to={`/news-updates/${post?._id.replace('drafts.', '')}`} className="flex flex-col w-full font-nunito gap-5" key={post._id}>
              <img src={post.imageUrl} alt={post.title} className="aspect-2/1 object-cover"/>
              <div className="font-bold text-lg line-clamp-2 leading-6 hover:underline">{post.title}</div>
              <div className="opacity-80 text-sm w-full line-clamp-3">
                <BlockContent className='' blocks={post?.body} serializers={serializers} />
              </div>
              <span className="underline text-sm">Read more</span>
              <span className="opacity-80 text-xs">{post.publishedDate ||formatDate(post?._createdAt)}</span>
            </NavLink>
          ))}
        </div>
      }
      {!loading && newsList.length === 0 &&
        <div className={`w-full flex flex-col gap-3 items-center justify-center my-[5rem]`}>
          <div className='text-2xl  font-semibold mb-3'>No results found</div>
          <div className='text-center'>Uh oh! It seems like we couldn't find any articles matching your search criteria at the moment. </div>
          <div className='text-center'>Don't worry, our team is constantly updating our blog with fresh content. </div>
          <div className='text-center'>Why not try a different search term or explore our blog categories to discover something new? Happy exploring!</div>
          <div onClick={() => {setSearchParams({ ...searchParams, searchTerm: '' })}} className='border py-3 px-10 lg:text-xl font-semibold cursor-pointer gap-2 mt-5 uppercase flex flex-row items-center'>
            Cancel Search
          </div>
        </div>
      }

      <Pagination currentPage={searchParams.page} dataLength={newsList.length} pageSize={searchParams.pageSize} totalPages={totalPage} onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} />
        
    </div>
  )
}

export default News;