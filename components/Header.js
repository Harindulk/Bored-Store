import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import boredStoreLogo from '../assets/images/BoredStoreLogo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'


const style = {
  wrapper: `bg-[#222222] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.8rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#ffffff] hover:text-[#ee9b00] cursor-pointer`,
  headerIcon: `text-[#ffffff] text-3xl font-black px-4 hover:text-[#ee9b00] cursor-pointer`,
}

const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={boredStoreLogo} height={40} width={40} />
          <div className={style.logoText}>Bored Store</div>
        </div>
      </Link>


      <div className={style.searchBar}>
        <div className={style.searchIcon}><AiOutlineSearch /></div>
        <input className={style.searchInput} type="text" placeholder="Search items , collections and accounts" />
      </div>

      <div className={style.headerItems}>
        <Link href = '/collections/0x70De8b5da1F902De4F109BF4a74FcdC27e5a67ae'>
        <div className={style.headerItem}>Collections</div></Link>
        
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <div className={style.headerItem}>Create</div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
        <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header