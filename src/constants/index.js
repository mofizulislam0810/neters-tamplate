import profile_image_one from '../utils/images/profile/1.png'
import profile_image_two from '../utils/images/profile/2.png'
import profile_image_three from '../utils/images/profile/3.png'
import profile_image_four from '../utils/images/profile/4.png'
import layer_img_one from '../utils/images/discover/1.png'
import layer_img_two from '../utils/images/discover/2.png'
import layer_img_three from '../utils/images/discover/3.png'
import live_acrion_one from '../utils/images/live_apction/1.png'
import top_collection_one from '../utils/images/top_collection/big_images/1.png'
import top_collection_two from '../utils/images/top_collection/big_images/2.png'
import top_collection_three from '../utils/images/top_collection/big_images/3.png'
import top_collection_four from '../utils/images/top_collection/big_images/4.png'
import top_collection_list_one from '../utils/images/top_collection/list_images/1.png'
import top_collection_list_two from '../utils/images/top_collection/list_images/2.png'
import top_collection_list_three from '../utils/images/top_collection/list_images/3.png'
import top_collection_list_four from '../utils/images/top_collection/list_images/4.png'
import top_collection_list_five from '../utils/images/top_collection/list_images/5.png'


export const profileImage = [profile_image_one, profile_image_two, profile_image_three, profile_image_four]

export const images = {
    image_one: layer_img_one,
    image_two: layer_img_two,
    image_three: layer_img_three,
}

export const live_acrion_images = [live_acrion_one];


export const headerLink = [
    {
        name: "Marketplace",
        link: "/"
    },
    {
        name: "Resource",
        link: "/"
    },
    {
        name: "About",
        link: "/"
    }
]


export const subscriptions = [
    {
        amount: "98k+",
        name: "Artwork"
    },
    {
        amount: "12k+",
        name: "Auction"
    },
    {
        amount: "15k+",
        name: "Artist"
    }
]


export const amazingNetArt = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M20.25 13.875H3C2.385 13.875 1.875 13.365 1.875 12.75C1.875 12.135 2.385 11.625 3 11.625H20.25C20.865 11.625 21.375 12.135 21.375 12.75C21.375 13.365 20.865 13.875 20.25 13.875Z" fill="black" />
            <path d="M12 25.875H9C8.385 25.875 7.875 25.365 7.875 24.75C7.875 24.135 8.385 23.625 9 23.625H12C12.615 23.625 13.125 24.135 13.125 24.75C13.125 25.365 12.615 25.875 12 25.875Z" fill="black" />
            <path d="M21.75 25.875H15.75C15.135 25.875 14.625 25.365 14.625 24.75C14.625 24.135 15.135 23.625 15.75 23.625H21.75C22.365 23.625 22.875 24.135 22.875 24.75C22.875 25.365 22.365 25.875 21.75 25.875Z" fill="black" />
            <path d="M26.34 31.875H9.66C3.69 31.875 1.875 30.075 1.875 24.165V11.835C1.875 5.925 3.69 4.125 9.66 4.125H20.25C20.865 4.125 21.375 4.635 21.375 5.25C21.375 5.865 20.865 6.375 20.25 6.375H9.66C4.95 6.375 4.125 7.185 4.125 11.835V24.15C4.125 28.8 4.95 29.61 9.66 29.61H26.325C31.035 29.61 31.86 28.8 31.86 24.15V16.53C31.86 15.915 32.37 15.405 32.985 15.405C33.6 15.405 34.11 15.915 34.11 16.53V24.15C34.125 30.075 32.31 31.875 26.34 31.875Z" fill="black" />
            <path d="M26.9992 12.3756C26.7142 12.3756 26.4292 12.2706 26.2042 12.0456L23.9542 9.79564C23.5192 9.36064 23.5192 8.64064 23.9542 8.20564C24.3892 7.77064 25.1092 7.77064 25.5442 8.20564L26.9992 9.66064L32.2042 4.45564C32.6392 4.02064 33.3592 4.02064 33.7942 4.45564C34.2292 4.89064 34.2292 5.61064 33.7942 6.04564L27.7942 12.0456C27.5692 12.2706 27.2842 12.3756 26.9992 12.3756Z" fill="black" />
        </svg>,
        header: "Fast Transaction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M15.1655 27.2245H9.48047C8.86547 27.2245 8.35547 26.7145 8.35547 26.0995V18.4195C8.35547 16.8595 9.63045 15.5844 11.1905 15.5844H15.1655C15.7805 15.5844 16.2905 16.0944 16.2905 16.7094V26.0844C16.2905 26.7144 15.7805 27.2245 15.1655 27.2245ZM10.6055 24.9745H14.0404V17.8495H11.1905C10.8755 17.8495 10.6055 18.1044 10.6055 18.4344V24.9745Z" fill="#292D32" />
            <path d="M20.8344 27.2245H15.1494C14.5344 27.2245 14.0244 26.7145 14.0244 26.0995V11.6094C14.0244 10.0494 15.2994 8.77441 16.8594 8.77441H19.1394C20.6994 8.77441 21.9744 10.0494 21.9744 11.6094V26.0995C21.9594 26.7145 21.4644 27.2245 20.8344 27.2245ZM16.2894 24.9745H19.7244V11.6094C19.7244 11.2944 19.4694 11.0244 19.1394 11.0244H16.8594C16.5444 11.0244 16.2744 11.2794 16.2744 11.6094V24.9745H16.2894Z" fill="#292D32" />
            <path d="M26.5209 27.2246H20.8359C20.2209 27.2246 19.7109 26.7146 19.7109 26.0996V19.2744C19.7109 18.6594 20.2209 18.1494 20.8359 18.1494H24.8109C26.3709 18.1494 27.6459 19.4244 27.6459 20.9844V26.0996C27.6459 26.7146 27.1509 27.2246 26.5209 27.2246ZM21.9609 24.9746H25.3959V20.9844C25.3959 20.6694 25.1409 20.3994 24.8109 20.3994H21.9609V24.9746Z" fill="#292D32" />
            <path d="M22.5 34.125H13.5C5.355 34.125 1.875 30.645 1.875 22.5V13.5C1.875 5.355 5.355 1.875 13.5 1.875H22.5C30.645 1.875 34.125 5.355 34.125 13.5V22.5C34.125 30.645 30.645 34.125 22.5 34.125ZM13.5 4.125C6.585 4.125 4.125 6.585 4.125 13.5V22.5C4.125 29.415 6.585 31.875 13.5 31.875H22.5C29.415 31.875 31.875 29.415 31.875 22.5V13.5C31.875 6.585 29.415 4.125 22.5 4.125H13.5Z" fill="#292D32" />
        </svg>,
        header: "Growth Transaction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus"
    },
]


export const topCollectionsBigImages = [top_collection_one, top_collection_two, top_collection_three, top_collection_four]


export const topCollectionsOver = [
    {
        image: top_collection_list_one,
        text: "CryptoFunks",
        amount: "19,769.39",
        parcentage: "+26.52%"
    },
    {
        image: top_collection_list_two,
        text: "Cryptix",
        amount: "2,769.39",
        parcentage: "+10.52%"
    }, {
        image: top_collection_list_three,
        text: "Frensware",
        amount: "9,232.39",
        parcentage: "+2.52%"
    },
    {
        image: top_collection_list_four,
        text: "PunkArt",
        amount: "3,769.39",
        parcentage: "+1.52%"
    },
    {
        image: top_collection_list_five,
        text: "Art Crypto",
        amount: "10,769.39",
        parcentage: "+2.52%"
    },
]

export const collectionFeatured = [
    {
        bigImages: top_collection_one,
        imageOne: top_collection_two,
        imageTwo: top_collection_three,
        imageThree: top_collection_four
    },
    {
        bigImages: top_collection_two,
        imageOne: top_collection_one,
        imageTwo: top_collection_four,
        imageThree: top_collection_three
    },
    {
        bigImages: top_collection_four,
        imageOne: top_collection_one,
        imageTwo: top_collection_three,
        imageThree: top_collection_two
    },
]


export const cardData = [
    {
        image: top_collection_one,
        header: "ArtCrypto",
    },
    {
        image: top_collection_two,
        header: "This NFT",
    }
    ,
    {
        image: top_collection_three,
        header: "NameCrypto",
    }
    ,
    {
        image: top_collection_four,
        header: "ArtCrypto",
    }
    ,
    {
        image: top_collection_one,
        header: "NameCrypto",
    }
    ,
    {
        image: top_collection_three,
        header: "This NFT",
    }
    ,
    {
        image: top_collection_four,
        header: "ArtCrypto",
    }
    ,
    {
        image: top_collection_one,
        header: "ArtCrypto",
    }
    ,
    {
        image: top_collection_two,
        header: "NameCrypto",
    }
    ,
    {
        image: top_collection_three,
        header: "ArtCrypto",
    },
    {
        image: top_collection_four,
        header: "ArtCrypto",
    },
    {
        image: top_collection_two,
        header: "NameCrypto",
    }
]

export const marketPlace  = [
    {
        name: "All NFTs",
        link: "/"
    },
    {
        name: "New",
        link: "/"
    },
    {
        name: "Art",
        link: "/"
    },
    {
        name: "Sports",
        link: "/"
    }
    ,
    {
        name: "Utility",
        link: "/"
    }
    ,
    {
        name: "Music",
        link: "/"
    }
    ,
    {
        name: "Domain Name",
        link: "/"
    }
]

export const logoList = [
    {
        name: "Facebook",
        logo: <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
            />
        </svg>,
        link: "/"
    },
    {
        name: "Instagram",
        logo: <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
            />
        </svg>,
        link: "/"
    },
    {
        name: "Twitter",
        logo: <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
        </svg>,
        link: "/"
    },
    {
        name: "GitHub",
        logo: <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
            />
        </svg>,
        link: "/"
    },
    {
        name: "Dribbble",
        logo: <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
            />
        </svg>,
        link: "/"
    }
]

export const myAccount = [
    {
        name: "Profile",
        link: "/"
    },
    {
        name: "Favorite",
        link: "/"
    },
    {
        name: "My Collections",
        link: "/"
    },
    {
        name: "Settings",
        link: "/"
    }
]

export const supportList = [
    {
        name: "FAQs",
        link: "/faq"
    },
    {
        name: "Contact",
        link: "/contact"
    },
    {
        name: "Live Chat",
        link: "/livechat"
    }
]