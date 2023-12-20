import React from 'react'
import { Button } from '../components'
import layer_img_01 from '../utils/images/discover/1.png'
import layer_img_02 from '../utils/images/discover/2.png'
import layer_img_03 from '../utils/images/discover/3.png'
import person from '../utils/images/discover/person.png'
import groupImg from '../utils/images/discover/Group 83.png'

const Home = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
      <div className='grid gap-5 lg:grid-cols-2 grid-cols-1 my-10 py-10'>
        <div>
          <p className='text-[40px]  font-black pb-5'>
            DISCOVER, AND COLLECT DIGITAL ART NFTS
          </p>
          <p className='text-[#565656] text-xl pb-10 font-Sans'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>

          <div className='pb-10'>
            <Button type={"submit"} btnName={"Explore Now"} size={"w-30 py-3"} bg={true} />
          </div>
          <div className='flex flex-wrap items-center gap-6'>
            <div>
              <p className='text-[40px]  font-black leading-8'>98k+</p>
              <p className='text-xl'>Artwork</p>
            </div>
            <div>
              <p className='text-[40px]  font-black leading-8'>120k+</p>
              <p className='text-xl'>Artwork</p>
            </div>
            <div>
              <p className='text-[40px] font-black leading-8'>98k+</p>
              <p className='text-xl'>Artwork</p>
            </div>
          </div>

        </div>
        <div className='flex justify-end items-center md:justify-center'>
          <div className="z-20 mr-[-50%] md:mr-[-40%] lg:mr-[-50%] relative">
            <img src={layer_img_03} className="w-full h-full " alt="layer-img-03" />
            <div className='absolute top-8 left-10'>
              <p className=' text-2xl text-white'>Abstr Gradient NFT</p>
              <div className='flex gap-2 items-center py-2'>
                <img src={person} className="w-10 h-10 rounded-full" alt="person" />
                <p className='text-xl text-white'>
                  Arkhan17
                </p>
              </div>
            </div>

            <div className='absolute top-1/2 -left-16'>
              <img src={groupImg} alt="group_img" className='w-30 h-30' />
            </div>

            <div className='absolute bottom-8 left-10 w-[75%] flex flex-wrap justify-between bg-[#e5e7eb24] rounded-lg p-3'>
              <div>
                <p className=' text-base text-white'>Current Bid</p>
                <div className='flex gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                    <g clip-path="url(#clip0_0_143)">
                      <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_143">
                        <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='text-sm text-white'>
                    0.25 ETH
                  </p>
                </div>
              </div>
              <div>
                <p className=' text-base text-white'>Current Bid</p>
                <div className='flex gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                    <g clip-path="url(#clip0_0_143)">
                      <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_143">
                        <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='text-sm text-white'>
                    0.25 ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 mr-[-40%] md:mr-[-35%] lg:mr-[-45%] "><img src={layer_img_02} alt="layer-img-02" /></div>
          <div className="z-0"><img src={layer_img_01} alt="layer-img-01" /></div>
        </div>
      </div>

      <div className='grid gap-2 lg:grid-cols-3 grid-cols-1 my-10 py-10'>
        <div>
          <img src={layer_img_01} alt="name" className='w-full h-full' />
          <div className='flex flex-wrap justify-between'>
            <div className='flex gap-5 items-center py-2'>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
              <div>
                <p className='text-xl'>
                  Arkhan17
                </p>
                <p className='text-xs'>10 in the stock</p>
              </div>
            </div>
            <div className=' py-2'>
              <p className='text-xl'>
                Highest Bid
              </p>
              <p className='text-xs flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <g clip-path="url(#clip0_0_213)">
                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_213">
                      <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)" />
                    </clipPath>
                  </defs>
                </svg>0.25 ETH</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-1'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 justify-between items-center'>
            <div>
              <img src={layer_img_01} alt="name" className='w-44 h-44' />
            </div>

            <div>
              <p>The Futr Abstr</p>
              <div className='flex'>
                <img src={person} className="w-10 h-10 rounded-full" alt="person" />
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <g clip-path="url(#clip0_0_224)">
                      <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z" fill="#00AC4F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_224">
                        <rect width="8.53125" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> 0.25 ETH
                </div>
                <p>
                  1 of 8
                </p>
              </div>
              <Button type={"submit"} btnName={"Place a bid"} size={"w-30 py-2"} bg={true} />
            </div>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 justify-between items-center'>
            <div>
              <img src={layer_img_01} alt="name" className='w-44 h-44' />
            </div>

            <div>
              <p>The Futr Abstr</p>
              <div className='flex'>
                <img src={person} className="w-10 h-10 rounded-full" alt="person" />
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <g clip-path="url(#clip0_0_224)">
                      <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z" fill="#00AC4F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_224">
                        <rect width="8.53125" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> 0.25 ETH
                </div>
                <p>
                  1 of 8
                </p>
              </div>
              <Button type={"submit"} btnName={"Place a bid"} size={"w-30 py-2"} bg={true} />
            </div>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 justify-between items-center'>
            <div>
              <img src={layer_img_01} alt="name" className='w-44 h-44' />
            </div>

            <div>
              <p>The Futr Abstr</p>
              <div className='flex'>
                <img src={person} className="w-10 h-10 rounded-full" alt="person" />
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <g clip-path="url(#clip0_0_224)">
                      <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z" fill="#00AC4F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_224">
                        <rect width="8.53125" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> 0.25 ETH
                </div>
                <p>
                  1 of 8
                </p>
              </div>
              <Button type={"submit"} btnName={"Place a bid"} size={"w-30 py-2"} bg={true} />
            </div>
          </div>
        </div>
        <div>
          <p>Top Collections over </p>
          <p>Last 7 days</p>
          <div className='flex items-center justify-between'>
            <p>1</p>
            <div>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
            </div>
            <div>
              <p>CryptoFunks</p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <g clip-path="url(#clip0_0_267)">
                    <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_267">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                19,769.39</p>

            </div>
            <p>+26.52%</p>
          </div>
          <div className='flex items-center justify-between my-2'>
            <p>1</p>
            <div>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
            </div>
            <div>
              <p>CryptoFunks</p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <g clip-path="url(#clip0_0_267)">
                    <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_267">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                19,769.39</p>

            </div>
            <p>+26.52%</p>
          </div>
          <div className='flex items-center justify-between my-2'>
            <p>1</p>
            <div>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
            </div>
            <div>
              <p>CryptoFunks</p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <g clip-path="url(#clip0_0_267)">
                    <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_267">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                19,769.39</p>

            </div>
            <p>+26.52%</p>
          </div>
          <div className='flex items-center justify-between my-2'>
            <p>1</p>
            <div>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
            </div>
            <div>
              <p>CryptoFunks</p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <g clip-path="url(#clip0_0_267)">
                    <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_267">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                19,769.39</p>

            </div>
            <p>+26.52%</p>
          </div>
          <div className='flex items-center justify-between my-2'>
            <p>1</p>
            <div>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
            </div>
            <div>
              <p>CryptoFunks</p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <g clip-path="url(#clip0_0_267)">
                    <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_267">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                19,769.39</p>

            </div>
            <p>+26.52%</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>1</p>
            <div>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
            </div>
            <div>
              <p>CryptoFunks</p>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                  <g clip-path="url(#clip0_0_267)">
                    <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_267">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                19,769.39</p>

            </div>
            <p>+26.52%</p>
          </div>
        </div>
      </div>

      <div className='grid gap-2 lg:grid-cols-3 grid-cols-1 my-10 py-10'>
        <div>
          <div className='grid gap-2 lg:grid-cols-3 grid-cols-1'>
            <div className='lg:col-span-2'>
              <img src={layer_img_01} alt="layer-img-01" />
            </div>
            <div>
              <img src={layer_img_01} alt="layer-img-01" />
              <img src={layer_img_01} alt="layer-img-01" />
              <img src={layer_img_01} alt="layer-img-01" />
            </div>
          </div>
          <div className='flex flex-wrap justify-between'>
            <div className='flex gap-5 items-center py-2'>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
              <div>
                <p className='text-xl'>
                  Arkhan17
                </p>
                <p className='text-xs'>10 in the stock</p>
              </div>
            </div>
            <div className=' py-2'>
              <p className='text-xl'>
                Highest Bid
              </p>
              <p className='text-xs flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <g clip-path="url(#clip0_0_213)">
                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_213">
                      <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)" />
                    </clipPath>
                  </defs>
                </svg>0.25 ETH</p>
            </div>
          </div>
        </div>
        <div>
          <div className='grid gap-2 lg:grid-cols-3 grid-cols-1'>
            <div className='lg:col-span-2'>
              <img src={layer_img_01} alt="layer-img-01" />
            </div>
            <div>
              <img src={layer_img_01} alt="layer-img-01" />
              <img src={layer_img_01} alt="layer-img-01" />
              <img src={layer_img_01} alt="layer-img-01" />
            </div>
          </div>
          <div className='flex flex-wrap justify-between'>
            <div className='flex gap-5 items-center py-2'>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
              <div>
                <p className='text-xl'>
                  Arkhan17
                </p>
                <p className='text-xs'>10 in the stock</p>
              </div>
            </div>
            <div className=' py-2'>
              <p className='text-xl'>
                Highest Bid
              </p>
              <p className='text-xs flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <g clip-path="url(#clip0_0_213)">
                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_213">
                      <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)" />
                    </clipPath>
                  </defs>
                </svg>0.25 ETH</p>
            </div>
          </div>
        </div>
        <div>
          <div className='grid gap-2 lg:grid-cols-3 grid-cols-1'>
            <div className='lg:col-span-2'>
              <img src={layer_img_01} alt="layer-img-01" />
            </div>
            <div>
              <img src={layer_img_01} alt="layer-img-01" />
              <img src={layer_img_01} alt="layer-img-01" />
              <img src={layer_img_01} alt="layer-img-01" />
            </div>
          </div>
          <div className='flex flex-wrap justify-between'>
            <div className='flex gap-5 items-center py-2'>
              <img src={person} className="w-10 h-10 rounded-full" alt="person" />
              <div>
                <p className='text-xl'>
                  Arkhan17
                </p>
                <p className='text-xs'>10 in the stock</p>
              </div>
            </div>
            <div className=' py-2'>
              <p className='text-xl'>
                Highest Bid
              </p>
              <p className='text-xs flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <g clip-path="url(#clip0_0_213)">
                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_213">
                      <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)" />
                    </clipPath>
                  </defs>
                </svg>0.25 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gap-10 items-center justify-between lg:grid-cols-2 grid-cols-1 my-10 py-10'>
        <div className='grid gap-5 items-center justify-center grid-flow-col lg:grid-cols-2 grid-cols-1 my-10 py-10'>
          <div>
            <div className='relative'>
              <img src={layer_img_01} alt="name" className=' w-full h-full' />
              <img src={person} className="w-10 h-10 rounded-full absolute -bottom-3 -right-3 " alt="person" />
            </div>


          </div>
          <div>
            <div className='relative'>
              <img src={layer_img_01} alt="name" className=' w-full h-full' />
              <img src={person} className="w-10 h-10 rounded-full absolute -bottom-3 -right-3 " alt="person" />
            </div>


          </div>
          <div class="row-span-2"> <div className='relative'>
            <img src={layer_img_01} alt="name" className=' w-full h-full' />
            <img src={person} className="w-10 h-10 rounded-full absolute -bottom-3 -right-3 " alt="person" />
          </div></div>
        </div>
        <div>
          <p className='text-[40px]  font-black pb-5'>
            DISCOVER, AND COLLECT DIGITAL ART NFTS
          </p>
          <p className='text-[#565656] text-xl pb-10 font-Sans'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>

          <div className='pb-10'>
            <Button type={"submit"} btnName={"Explore Now"} size={"w-30 py-3"} bg={true} />
          </div>
        </div>

      </div>
      <div className='grid gap-2 lg:grid-cols-4 grid-cols-1 my-10 py-10'>
        <div className="w-full flex-shrink-0 relative overflow-hidden bg-white rounded-xl shadow-lg">
          <div className='p-2'>
            <div className="relative flex items-center justify-center">
              <img className=" rounded-xl object-cover h-72 w-full" src={layer_img_01} alt="sepcial images" />
              <div className='absolute -bottom-5 left-5 flex'>
                <div class="z-0 -mr-3"><img src={person} className="w-10 h-10 rounded-full" alt="person" /></div>
                <div class="z-10 -mr-3"><img src={person} className="w-10 h-10 rounded-full" alt="person" /></div>
                <div class="z-20 -mr-3"><img src={person} className="w-10 h-10 rounded-full" alt="person" /></div>
                <div class="z-30 -mr-3"><img src={person} className="w-10 h-10 rounded-full" alt="person" /></div>
              </div>
            </div>
            <div className="relative px-6 pb-6 mt-6 text-primary">
              <span className="block opacity-75 -mb-1">Indoor</span>
              <div className="flex justify-between ">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="bg-secondary rounded-full text-primary text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home