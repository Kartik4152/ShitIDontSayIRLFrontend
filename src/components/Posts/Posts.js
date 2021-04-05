import React,{useEffect,useState} from 'react';
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
import './Posts.css';

const Posts=(props)=>{
    const [posts,setPosts]=useState([]);
    useEffect(async()=>{
        const res=await fetch('https://shitidontsayirl.herokuapp.com/',{method:'GET'});
        let p=await res.json();
        p.reverse();
        setPosts(p);
    },[props.rerender])
    return(
        <div className='postsContainer'>
        <ResponsiveMasonry columnsCountBreakPoints={{250: 1, 500: 2, 750: 3,1000:4}}>
            <Masonry gutter="1em" columnsCount={4}>
                {posts.map((ele,index)=>{
                        return(
                            <div className='postItem' key={ele._id}>
                                <div className='postText'>{ele.post}</div>
                                <div className='postTime'>{(new Date(ele.createdAt)).toLocaleString(undefined,{timeZone:'Asia/Kolkata'})}</div>
                            </div>
                        )
                })}
            </Masonry>
        </ResponsiveMasonry>
        </div>
    )
}

export default Posts;