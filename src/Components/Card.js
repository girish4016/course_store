import { useEffect, useState } from 'react';
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ( {element} ) => {
    const [Liked,setLiked] = useState(false);
    
    useEffect(()=>{},[Liked])
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 text-white rounded-md rounded-t-md '>
            <div className='relative' >
                <img  src={element.image.url} alt={element.image.alt} 
                className='w-[300px] rounded-t-md '
                ></img>
                <div className='absolute right-3 -bottom-3 rounded-full bg-bgDark bg-opacity-80 p-3 '
                 onClick={ ()=>{setLiked(!Liked);if(!Liked)toast.success("Liked"); else{toast.warn("Unliked")} }  } >
                {
                    Liked? (<FcLike className='text-xl' /> ) :(<FcLikePlaceholder className='text-xl' /> )
                }
                </div>
            </div>
            <div  className='w-[300px] h-[160px] text-left px-4 py-2 ' >
                <p className='text-lg font-semibold py-2 leading-6' >{element.title}</p>
                <p>{element.description.substring(0,100)+'...'}</p>
            </div>
        </div>
    );
}

export default Card;