/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/NftImage.css';
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
/* Component import */

/* Asset imports */

const style = {
    topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
    topBarContent: `flex items-center`,
    likesCounter: `flex-1 flex items-center justify-end`,
    fit: `h-90`,
  }

function NftImage(){

    return (
        <div className={style.fit}>
          <div className={style.topBar}>
            <div className={style.topBarContent}>
              <IoMdSnow />
              <div className={style.likesCounter}>
                <AiOutlineHeart />
                2.3K
              </div>
            </div>
          </div>
          <div className='rounded'>
            <img
            src='https://lh3.googleusercontent.com/yyRzgdsD39Qf3VmPgdo7G33i1dpjnFC8b76YzNVMt-mLOUkN4JLAPTkS5ghyOU-N0xcC03EhPQzpGh3b5UCctCgpoBUohYqjfKOGrg=w600'
            />
          </div>
        </div>
      )
}

export default NftImage;