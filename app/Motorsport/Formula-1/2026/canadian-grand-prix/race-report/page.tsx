'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
        <ArticleTemplate
            headerName="Canadian Grand Prix - race report"
            date="24.05.2026"
            upperTitle="Heartbreak for Russell in Montreal as a power unit failure hands Antonelli his fourth win in a row."
            mainText=""
            middleText="The Canadian Grand Prix in Montreal turned into a captivating duel between the two Mercedes drivers before ending in heartbreak for one of them. George Russell and Kimi Antonelli swapped the lead multiple times in a wheel-to-wheel battle reminiscent of their karting days, building a comfortable cushion over the chasing pack in the process. But on lap thirty, with Russell back in front, his Mercedes suddenly lost power and rolled to a stop at Turn 8, ending his race on the spot and handing the lead — and eventually a fourth straight win — to Antonelli.

            Behind the Mercedes drama, Lewis Hamilton produced a superb late move on Max Verstappen to claim second for Ferrari, giving the Scuderia its best result of the season to that point, with Verstappen completing the podium for Red Bull. Reigning champion Lando Norris endured a miserable weekend, retiring after McLaren's ill-fated gamble on intermediate tyres for a track that never got wet enough to need them."
            lowerText="Russell's retirement was a bitter pill after what had been arguably his strongest weekend of the season — pole for both the sprint and the Grand Prix, plus a sprint win. Antonelli's fourth win in five races pushed his championship advantage out to 43 points, and with Monaco next on the calendar, Mercedes' dominance of 2026 showed no sign of loosening its grip."
            lowerTextImage="/assets/motorsport/Montreal_Circuit.avif"
            coverImage="/assets/motorsport/canada-26.jpg"
        />
        <Footer/>
        </div>
    )
}