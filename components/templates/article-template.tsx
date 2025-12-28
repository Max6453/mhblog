'use client'
import Header from "./header-template"
import { ScrollProgress } from "../magicui/scroll-progress"
import Footer from "../ui/footer"

interface articleInputs {
    headerName: string,
    upperTitle: string,
    mainText: string,
    middleText: string,
    lowerText: string,
    lowerTextImage: string,
    secondImage: string,
    thirdImage: string
    coverImage: string,
}

function ArticleTemplate({ headerName, upperTitle, mainText, middleText, lowerText, lowerTextImage, secondImage, thirdImage, coverImage }: articleInputs) {
    return(
        <div>
        <Header/>
            <ScrollProgress />
            <header>
            <div className="relative inset-0">
            <h1 className="absolute text-6xl top-62 left-42 z-10 font-josefin-sans max-md:left-7 items-baseline max-md:top-20 md:text-3xl sm:text-xl lg:text-6xl max-md:text-3xl text-white text-center font-bold">
                {headerName}
            </h1>
            <img
                src={coverImage}
                className="min-w-full transition-transform duration-300 object-cover max-md:size-96 overflow-hidden"
                alt="Miami Grand Prix"
            />
            </div>
            </header>
            <div className="relative pb-10 md:left-0">
                <div className="text-2xl justify-center text-white to-neutral-900 relative text-start">
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:w-90 lg:w-300 font-josefin-sans pt-15">
                    {upperTitle}
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    {mainText}
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    {middleText}
                </p>
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-0 max-md:w-90 max-lg:w-200 xl:w-300 font-josefin-sans pt-15">
                    {lowerText}
                </p>
                <div className="flex flex-row gap-5 max-w-full w-auto pt-15">
                    <img src={lowerTextImage} className="w-120 h-80 items-center justify-center justify-items-center rounded-xl"/>
                    {/* ADDITIONAL IMAGES */}
                    <img src={secondImage} className="w-120 h-80 items-center justify-center justify-items-center rounded-xl"/>
                    <img src={thirdImage} className="w-120 h-80 items-center justify-center justify-items-center rounded-xl"/>
                </div>
              {/* IF I NEEDED MORE TEXT AREA
                <p className="text-start text-2xl lg:pl-80 max-sm:pl-2 md:pl-10 max-md:pl-50 font-josefin-sans pt-15 lg:w-300"> 
                    Incredible season this was with even more, for me as mclaren and LN4 fan, incredible season finale in Abu Dhabi.
                    Next year, we will welcome on the grid Cadillac, Sauber will transfer to Audi and we also get a new cars.
                    I also have few articles ready in pipeline for you so you won't wait for february.
                    I want to personally thank you for your support and that you stayed loyal to one and only MHBlog, the blog covering latest news and intrigues across many topics.
                    I don't know when will i release the articles so i want to which you happy christmas and new year, spend them well with your closest friends and family and get ready for new season which will start on 8th of March in Melbourne.
                </p>
                */}
              </div>
             </div>

             <Footer/>
        </div>
    )
}

export default ArticleTemplate;