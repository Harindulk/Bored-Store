
import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://raw.githubusercontent.com/Harindulk/NFT-Marketplace/Harindulk/bored-store/assets/images/website%20nft%20bg.png?token=GHSAT0AAAAAABSH667VHGLVPZELJDTQ2SECYRQKYLQ')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-[#ffffff] text-[46px] font-semibold`,
  description: `text-[#cccccc] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#ee9b00] rounded-lg mr-5 text-black hover:bg-[#ffaf19] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#0a9396] rounded-lg mr-5 text-[#ffffff] hover:bg-[#07a5a8] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              Bored Store is a decentralized marketplace for NFTs.
              created by harindu for the codeflow 2022
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://raw.githubusercontent.com/Harindulk/NFT-Marketplace/Harindulk/bored-store/assets/images/website%20nft%20bg.png?token=GHSAT0AAAAAABSH667VHGLVPZELJDTQ2SECYRQKYLQ" alt=""/>
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero