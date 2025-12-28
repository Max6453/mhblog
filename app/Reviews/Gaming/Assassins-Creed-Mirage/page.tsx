'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"
import Image from "next/image"

export default function acmArticle() {
    return(
        <div>
            <ArticleTemplate
            headerName="Assassin's creed: Mirage - Review"
            upperTitle="Assassin's Creed Mirage promised a return to the series' stealthy origins, and in many ways, it delivers. After the sprawling RPGs of recent years, the idea of a more focused, narrative-driven experience set in the vibrant city of Baghdad was incredibly appealing. And while Mirage certainly recaptures some of that classic AC magic, it's not without its frustrations."
            lowerText="Nonetheless, I enjoyed this game and I hope i can play assassin's creed shadows as soon as possible.
            MHBlog gives Mirage 7/10."
            lowerTextImage="/assets/gaming/ACM-Viewpoint.jpg"
            mainText="The highlight is undoubtedly Baghdad. It’s dense, vibrant, and built for verticality.
            Unlike the sprawling fields of the last three games, every alleyway here feels intentional.
            The emphasis on stealth is a welcome change; planning your approach, utilizing distractions, and disappearing into crowds feels genuinely rewarding.
            It truly feels like a love letter to the earlier games in the franchise, and for those who missed the pure assassin fantasy, Mirage hits many of the right notes."
            middleText="The 'return to roots' philosophy occasionally feels like a step backward in quality.
            Clunky Combat: If you’re caught, the swordplay feels floaty and lacks the impact of modern action titles. It’s clear the game wants you to run away, but fighting your way out feels more like a chore than a challenge.
            Basim’s Journey: While it's great to see his origin, the narrative feels a bit thin and rushed. Also the ending was hard to understand as many things happened in a short span and without explanation.
            The Parkour: It looks great, but it can still be finicky. Basim will occasionally stick to a wall or jump the wrong way, reminding you that some of the series' oldest frustrations are still alive and well.
            Also, i don't think that assasin's focus is really 'return to roots'. Personally I liked this ability but also it was out of place."
            coverImage="/assets/gaming/ACMirage.jpg"
            />
            <div className="flex flex-row gap-4">
                <Image width={120} height={70} className="w-120 h-70 p-2 hover:scale-110 duration-300 rounded-xl" alt="Assassins creed mirage cave" src="/assets/gaming/ACM-Cave.jpg"/>
                <Image width={120} height={70} className="w-120 h-70 p-2 hover:scale-110 duration-300 rounded-xl" alt="Assassins creed mirage cave" src="/assets/gaming/ACM-Sunset.jpg"/>
                <Image width={120} height={70} className="w-120 h-70 p-2 hover:scale-110 duration-300 rounded-xl" alt="Assassins creed mirage cave" src="/assets/gaming/ACM-Viewpoint.jpg"/>
            </div>

            <Footer/>
        </div>
    )
}