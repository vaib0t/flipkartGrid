/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
// import './css/DesktopCard1.css';

/* Component import */

/* Asset imports */
const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://cdn.discordapp.com/attachments/751494279586775124/1003292027754139790/monkey.png')] before:bg-cover before:bg-center before:opacity-100 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem] pb-40`,
    ctaContainer: `flex pt-90`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }


function DesktopCard1(){

    return (
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.contentWrapper}>
              <div className={style.copyContainer}>
                <div className={style.title}>
                </div>
                <div className={style.description}>
                  <h1></h1>
                </div>
                <div className={style.ctaContainer}>
                  <button className={style.accentedButton}><a href='/buy'>Explore</a></button>
                  <button className={style.button}>Create</button>
                </div>
              </div>
              <div className={style.cardContainer}>
                <img
                  className="rounded-t-lg"
                  src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
                  alt=""
                />
                <div className={style.infoContainer}>
                  <img
                    className="h-[2.25rem] rounded-full"
                    src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                    alt=""
                  />
                  <div className={style.author}>
                    <div className={style.name}>The Lady</div>
                    <a
                      className="text-[#1868b7]"
                      href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                    >
                      Picaso
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default DesktopCard1;