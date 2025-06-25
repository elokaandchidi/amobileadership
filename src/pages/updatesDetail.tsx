import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { formatDate } from "../utils/common";
import { client } from "../utils/client";
import { newsDetailQuery } from "../utils/data";
import { NewDetailsInfo } from "../utils/interface";
import { BlockText } from "../components/blockContent";


const NewsDetail = () => {
  const [postDetail, setPostDetail] = useState<NewDetailsInfo>({} as NewDetailsInfo);
  const {id} = useParams();


  useEffect(() => {    
    if(id){
      const getnewsDetailQuery = newsDetailQuery(id);

      client.fetch(getnewsDetailQuery)
      .then((data) => {
        setPostDetail(data);
      })
    }
  }, [id])


  return (
    <div className='flex flex-col items-center mt-10 lg:gap-[5rem] gap-10 w-11/12 lg:w-11/12 xl:w-8/12 mb-24 lg:mb-50'>
      <div className='flex flex-col items-center w-full'>
        <NavLink to={'/news-updates'} className='text-sm underline hover:no-underline flex flex-row items-center bg-blue-50 p-2 rounded-lg'>
          News
        </NavLink>
        
        <div className={`leading-normal md:w-2/3 lg:text-[2.7rem] text-3xl my-3 font-semibold text-center`}>
          {postDetail?.title}
        </div>
        <div className='text-sm lg:w-full w-3/4 text-center'>Published by {postDetail?.publishedBy} on {postDetail?.publishedDate || formatDate(postDetail?._createdAt)}</div>
      </div>

      <div className='flex flex-col gap-10 items-center w-full'>
        <img
          src={postDetail.imageUrl}
          alt={`Slide ${postDetail._id}`}
          className=" lg:w-1/2 w-2/3 lg:max-h-5/6 object-cover"
        />
        <div className='lg:w-2/3 text-sm '>
          <BlockText blocks={postDetail?.body} />
        </div>
      </div>

      <div className='grid grid-cols-2 justify-between items-center gap-4 w-full text-sm'>
        <div className={`${postDetail?.previous ? '' : 'hidden'} flex flex-col items-start gap-2`}>
          <div className="">Previous Post</div>
          <NavLink to={`/news-updates/${postDetail?.previous?._id.replace('drafts.', '')}`} className="underline hover:no-underline md:w-2/3">{postDetail?.previous?.title}</NavLink>
        </div>
        <div className={`${postDetail?.next ? '' : 'hidden'} flex flex-col items-end gap-2`}>
          <div className="">Next Post</div>
          <NavLink to={`/news-updates/${postDetail?.next?._id.replace('drafts.', '')}`} className="underline hover:no-underline md:w-2/3 text-right">{postDetail?.next?.title}</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail;