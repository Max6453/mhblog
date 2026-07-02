'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
        <ArticleTemplate
            headerName="Japanese Grand Prix - race report"
            date="29.03.2026"
            upperTitle="A Safety Car, a spin, and a slice of history: Antonelli becomes F1's youngest ever championship leader at Suzuka."
            mainText=""
            middleText="The Japanese Grand Prix delivered one of the most dramatic afternoons of the young season. Oscar Piastri finally got his 2026 campaign off the ground in spectacular fashion, seizing the lead into Turn 1 after a superb launch from third on the grid, while both Mercedes drivers slipped backwards at the start. Antonelli, starting from pole, dropped as low as sixth after excessive wheelspin, but the Mercedes recovery machine was already in motion.

            Fortune swung decisively in Antonelli's favour when Haas driver Ollie Bearman crashed heavily at the Spoon Curve, triggering a Safety Car just moments after the Italian had pitted. The timing handed him track position for free, and from there he was untouchable, crossing the line more than thirteen seconds clear of Piastri. Charles Leclerc held off a hard-charging George Russell to complete the podium, while Max Verstappen's four-year winning streak at Suzuka came to an end with an eighth-placed finish."
            lowerText="Antonelli's second consecutive victory made him the youngest championship leader in Formula 1 history, and the first teenager ever to top the standings. With that milestone came a five-week gap in the calendar after the planned Bahrain and Saudi Arabian rounds were cancelled amid the ongoing conflict in the Middle East, pushing the paddock's next stop back to Miami in early May."
            lowerTextImage="/assets/motorsport/Suzuka_Circuit.avif"
            coverImage="/assets/motorsport/japan-26.jpg"
        />
        <Footer/>
        </div>
)
}