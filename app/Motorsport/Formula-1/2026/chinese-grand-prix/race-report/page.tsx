'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
            <ArticleTemplate
                headerName="Chinese Grand Prix - race report"
                date="15.03.2026"
                upperTitle="History in Shanghai as Kimi Antonelli becomes the second-youngest winner in Formula 1 history."
                mainText=""
                middleText="Round two in Shanghai belonged to Kimi Antonelli, who became the second-youngest race winner in Formula 1 history at just nineteen years old. Having claimed a record-breaking pole position the day before, Antonelli briefly lost the lead to Lewis Hamilton at the start before reclaiming it within two laps and controlling the race from the front. The only real jeopardy came in the closing laps when the Mercedes driver ran wide at the final hairpin, but he held his nerve to cross the line more than five seconds clear of teammate George Russell.

                Hamilton completed the podium to secure his first rostrum finish for Ferrari, edging out teammate Charles Leclerc in a wheel-to-wheel scrap that ran for much of the second half of the race. The weekend was chaotic well before lights out, with both McLaren cars withdrawn before the formation lap due to separate electrical failures — a bitter blow for Oscar Piastri, who was still yet to complete a single racing lap of his season."
                lowerText="Antonelli's win in Shanghai was more than just a maiden victory — it marked the first Grand Prix win for an Italian driver in nearly two decades. With Mercedes now leading both championships and Russell just a single point behind his rookie teammate, the stage was set for one of the most intriguing intra-team battles Formula 1 has seen in years."
                lowerTextImage="/assets/motorsport/Shanghai_Circuit.avif"
                coverImage=
                "/assets/motorsport/top-3-china.webp"
            />

            <Footer/>
        </div>
    )
}