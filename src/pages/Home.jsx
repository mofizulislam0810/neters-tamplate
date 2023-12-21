import React, { useState } from 'react'
import { Button, PersonWithText, TextWithIcon, TypeOptionsTab } from '../components'
import { amazingNetArt, cardData, collectionFeatured, fliterButtonList, images, live_acrion_images, profileImage, subscriptions, topCollectionsBigImages, topCollectionsOver } from '../constants'

const Home = () => {
  const commonStyle = "grid-cols-1 my-10 py-10 mx-auto px-4 sm:px-6 lg:px-[10%]"
  const [filterButton, setFilterButton] = useState(fliterButtonList[0]?.name);
  return (
    <div>
      {/* Discover section */}
      <div className={`grid gap-5 lg:grid-cols-2 ${commonStyle}`}>
        <div>
          <p className='text-4xl text-black font-black leading-none pb-5 '>DISCOVER, AND COLLECT DIGITAL ART NFTS </p>
          <p className='text-2xl text-tertiary leading-8 pb-10'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
          <div className='pb-10'>
            <Button type={"submit"} btnName={"Explore Now"} size={"w-38 py-4"} bg={true} />
          </div>
          <div className='flex flex-wrap items-center gap-6'>
            {
              subscriptions?.map((item, idx) =>
                <div key={idx}>
                  <p className='text-5xl font-black leading-10 tracking-wider'>{item?.amount}</p>
                  <p className='text-lg text-tertiary'>{item?.name}</p>
                </div>)
            }
          </div>
        </div>
        <div className='flex flex-wrap justify-end items-center md:justify-center'>
          <div className='relative'>
            <div className="relative z-20">
              <img src={images.image_three} className="w-full h-full " alt="layer-img-03" />
              <DiscoverImageHeader />
              <div className='absolute bottom-[90px] -left-16 hidden md:block'>
                <img src={live_acrion_images[0]} alt="group_img" className='w-30 h-30' />
              </div>
              <DiscoverImageFooter />
            </div>
            <div className="absolute top-4 -right-4 z-10 hidden md:block"><img src={images.image_two} alt="layer-img-02" /></div>
            <div className="absolute top-8 -right-8 z-0 hidden md:block"><img src={images.image_one} alt="layer-img-01" /></div>
          </div>
        </div>
      </div>

      {/* The amazing NFT art of the world here */}
      <div className='bg-secondary'>
        <div className={`grid gap-10 lg:grid-cols-3 ${commonStyle}`}>
          <div>
            <p className='text-3xl text-black font-black pb-5 leading-none'> THE AMAZING NET ART OF THE WORLD HERE</p>
          </div>
          {
            amazingNetArt?.map((item, idx) => {
              return (
                <div className='flex gap-3' key={idx}>
                  <div>
                    {item.icon}
                  </div>
                  <div>
                    <p className='text-base font-bold'>{item.header}</p>
                    <p className='text-xs'>{item.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Top Collections over  */}
      <div className={`grid gap-5 lg:grid-cols-3 ${commonStyle}`}>

        {/* Big Image */}
        <div>
          <img src={topCollectionsBigImages[0]} alt="name" className='w-full' />
          <div className='flex flex-wrap justify-between items-center py-2'>
            <PersonWithText img={profileImage[0]} text={"The Futr Abstr"} subtext={"10 in the stock"} color={"text-black font-bold"} />

            <TextWithIcon header={"Highest Bid"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 24" fill="none">
              <g clipPath="url(#clip0_0_267)">
                <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_0_267">
                  <rect width="15" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>} text={"0.25 ETH"} color={"text-black"} bold={"font-bold"} />
          </div>
        </div>

        {/* Grid Images*/}
        <div className='grid grid-cols-1 gap-1 border-r-2 border-secondary'>
          <div className='grid grid-cols-1 lg:grid-cols-3  gap-3 justify-between items-start'>
            {
              [1, 2, 3].map((item, idx) => {
                return (
                  <>
                    <img src={topCollectionsBigImages[idx + 1]} alt="name" className='w-full' />
                    <div className='col-span-2'>
                      <p className='text-sm font-bold'>The Futr Abstr</p>
                      <div className='flex flex-wrap py-2 gap-3 items-center'>
                        <img src={profileImage[0]} className="w-10 h-10 rounded-full" alt="person" />
                        <div className='flex gap-1 items-center border-2 px-3 py-1 rounded-lg border-green font-bold text-green'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                            <g clipPath="url(#clip0_0_224)">
                              <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z" fill="#00AC4F" />
                            </g>
                            <defs>
                              <clipPath id="clip0_0_224">
                                <rect width="8.53125" height="14" fill="white" />
                              </clipPath>
                            </defs>
                          </svg> 0.25 ETH
                        </div>
                        <p className='text-xs text-tertiary'>1 of 8</p>
                      </div>
                      <Button type={"submit"} btnName={"Place a bid"} size={"w-30 py-2"} bg={idx === 0 ? true : false} />
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>

        {/* Top Collections over */}
        <div>
          <p className='text-2xl font-extrabold'>Top Collections over </p>
          <p className='text-base text-primary font-bold'>Last 7 days</p>
          {
            topCollectionsOver?.map((item, idx) => {
              return (
                <div className={`${idx < 4 && "border-b-2"} flex flex-wrap gap-1 items-center justify-between py-3`}>
                  <p className='text-base font-extrabold w-3'>{idx + 1}</p>
                  <div className='w-18'>
                    <img src={item?.image} className="w-16 h-16 rounded-full" alt="person" />
                  </div>
                  <div className='text-start w-36'>
                    <div>
                      <p className="text-base font-bold pb-1">{item?.text}</p>
                      <div className='flex gap-3 items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                          <g clipPath="url(#clip0_0_267)">
                            <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_267">
                              <rect width="15" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-sm text-tertiary font-bold">{item?.amount}</p>
                      </div>
                    </div>
                  </div>
                  <p className={`${idx === 2 || idx === 4 ? "text-[#FF002E]" : "text-green"} text-xl  font-extrabold`}>{item?.parcentage}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* Collection Featured NFTs */}
      <div className='bg-secondary'>
        <p className={`text-4xl text-black font-black leading-none ${commonStyle}`}>COLLECTION FEATURED NFT</p>
        <div className={`grid gap-5 lg:grid-cols-3 mx-auto px-4 sm:px-6 lg:px-[10%]`}>
          {
            collectionFeatured?.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className='grid gap-3 lg:grid-cols-3 grid-cols-1'>
                    <div className='lg:col-span-2'>
                      <img className='w-full h-[300px]' src={item.bigImages} alt="layer-img-01" />

                    </div>
                    <div className='grid grid-cols-1 gap-2 items-center'>
                      <img className='w-full h-[95px]' src={item.imageOne} alt="layer-img-01" />
                      <img className='w-full h-[95px]' src={item.imageTwo} alt="layer-img-01" />
                      <img className='w-full h-[95px]' src={item.imageThree} alt="layer-img-01" />
                    </div>
                  </div>
                  <div className='py-5 flex flex-wrap justify-between items-center'>
                    <div>
                      <p className='text-xl font-bold leading-3'>Amazing Collection</p>
                      <div className='flex gap-2 items-center py-2'>
                        <div className='rounded-full p-1'>
                          <img src={profileImage[0]} className="w-10 h-10" alt="person" />
                        </div>
                        <div>
                          <p className="text-black text-xs">by Arkhan</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button type={"submit"} btnName={"Total 54 Items"} size={"w-30"} bg={false} />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* CREATE AND SELL YOUR NFTS */}
      <div className={`grid gap-5 items-center justify-between lg:grid-cols-2 grid-cols-1 ${commonStyle}`}>

        {/* left position */}
        <div className='grid gap-6 items-center justify-center lg:grid-flow-col lg:grid-cols-2 grid-cols-1 my-10 py-10'>
          <div>
            <SellNets img={images.image_one} profileImage={profileImage[0]} size={'w-full h-full'} />
          </div>
          <div>
            <SellNets img={images.image_two} profileImage={profileImage[1]} size={'w-[200px] h-full'} position={"flex justify-end"} />
          </div>
          <div className="lg:row-span-2">
            <SellNets img={images.image_three} profileImage={profileImage[1]} size={'w-full h-full'} />
          </div>
        </div>

        {/* right position */}
        <div>
          <p className='text-3xl font-black pb-5'>CREATE AND SELL YOUR NFTS
          </p>
          <p className='text-base text-tertiary  pb-10 font-Sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
          <div className='pb-10'>
            <Button type={"submit"} btnName={"Sign Up Now"} size={"w-30 py-3"} bg={true} />
          </div>
        </div>
      </div>

      {/* Card Option */}
      <div className='bg-secondary'>
        <div className="py-10 mx-auto px-4 sm:px-6 lg:px-[10%]">
          <p className="text-4xl text-black font-black leading-none pb-10">DISCOVER MORE NETS</p>
          <div className='pb-5 flex flex-wrap justify-between'>
            <TypeOptionsTab options={fliterButtonList} setData={setFilterButton} data={filterButton} />
            <button className=" bg-[#e5e8ebfa] text-sm transition delay-100 flex gap-3 duration-700 ease-out w-30 py-2 px-5 cursor-pointer my-3 mx-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_0_399)">
                  <path d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z" fill="#371C87" />
                </g>
                <defs>
                  <clipPath id="clip0_0_399">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>All Filters
            </button>
          </div>

          <div className='grid gap-5 lg:grid-cols-4 grid-cols-1'>
            {
              cardData?.map((item, idx) => {
                return (
                  <div className="w-full flex-shrink-0 relative overflow-hidden bg-white rounded-xl shadow-lg" key={idx}>
                    <div className='p-2'>
                      <div className="relative flex items-center justify-center">
                        <img className="rounded-xl object-cover h-72 w-72" src={item.image} alt="sepcial images" />
                        <div className='absolute -bottom-5 left-5 flex'>
                          <div className="z-0 -mr-3"><img src={profileImage[0]} className="w-10 h-10 rounded-full" alt="person" /></div>
                          <div className="z-10 -mr-3"><img src={profileImage[1]} className="w-10 h-10 rounded-full" alt="person" /></div>
                          <div className="z-20 -mr-3"><img src={profileImage[2]} className="w-10 h-10 rounded-full" alt="person" /></div>
                          <div className="z-30 -mr-3"><img src={profileImage[3]} className="w-10 h-10 rounded-full" alt="person" /></div>
                        </div>
                      </div>
                      <div className="relative mt-6 px-2">
                        <div className="flex justify-between items-center py-3">
                          <div>
                            <p className="text-base font-bold text-black">{item.header}</p>
                            <div className='flex gap-3 items-center text-green font-bold py-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <g clipPath="url(#clip0_402_127)">
                                  <path d="M9.24746 8.15568L4.80473 10.9395L0.35907 8.15568L4.80473 0.332275L9.24746 8.15568ZM4.80473 11.8334L0.35907 9.04961L4.80473 15.6911L9.25038 9.04961L4.80473 11.8334V11.8334Z" fill="#00AC4F" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_402_127">
                                    <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332275)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p className="text-sm text-green">0.25 ETH</p>
                            </div>
                          </div>
                          <span className="block font-semibold text-xs text-tertiary">1 of 321</span>
                        </div>
                        <div className="flex justify-between border-t-2 py-3 text-primary">
                          <span className="bg-secondary rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center">3h 50m 2s left</span>
                          <span className="block font-semibold text-lg">Place a bid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>
          <div className='flex justify-center py-10'>
            <Button type={"submit"} btnName={"More NFTs"} size={"w-30 py-3"} bg={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


const DiscoverImageHeader = () => {
  return (
    <div className='absolute top-8 left-8'>
      <p className='text-3xl text-white font-extrabold'>Abstr Gradient NFT</p>
      <PersonWithText img={profileImage[0]} text={"Arkhan17"} color={"text-white font-bold"} />
    </div>
  )
}

const DiscoverImageFooter = () => {
  return (
    <div className='absolute bottom-6 left-0 w-full'>
      <div className='flex flex-wrap justify-between bg-[#e5e7eb24] rounded-lg p-4 mx-6'>
        <TextWithIcon header={"Current Bid"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
          <g clipPath="url(#clip0_0_143)">
            <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_0_143">
              <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)" />
            </clipPath>
          </defs>
        </svg>} text={"0.25 ETH"} color={"text-white font-bold"} />
        <TextWithIcon header={"Ends in"} text={"12h 43m 42s"} color={"text-white font-bold"} />
      </div>
    </div>
  )
}

const SellNets = ({ img, profileImage, size, position }) => {
  return (
    <div className={`relative ${position}`}>
      <img src={img} alt="name" className={size} />
      <img src={profileImage} className="w-18 h-18 rounded-full absolute -bottom-5 -right-5" alt="person" />
    </div>
  )
}