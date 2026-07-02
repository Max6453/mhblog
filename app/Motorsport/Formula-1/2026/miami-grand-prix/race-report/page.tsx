'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
        <ArticleTemplate
            headerName="Miami Grand Prix - race report"
            date="03.05.2026"
            upperTitle="F1 returns from its spring break with a thriller in Florida as Antonelli makes it three wins from three."
            mainText=""
            middleText="Formula 1's return from its extended break produced one of the most action-packed races of the year at the Miami International Autodrome. With storms forecast for later in the day, the start time was moved forward by three hours, and the chaos began almost immediately: pole-sitter Antonelli found himself in a three-way squeeze with Max Verstappen and Charles Leclerc into the first corner, sending the Red Bull into an early spin. Crashes for Isack Hadjar and Pierre Gasly brought out an early Safety Car, and the lead changed hands repeatedly as Antonelli, Leclerc, Lando Norris, Oscar Piastri and Verstappen all took turns at the front.

            In the end it was Antonelli who prevailed, resisting late pressure from a much-improved Norris to take his third consecutive win and become the first driver in history to win each of his first three Grands Prix from pole position. Piastri completed a strong McLaren podium in third, while a frantic finish saw Charles Leclerc spin out of what looked like a podium finish on the final lap, before a further penalty dropped him to eighth."
            lowerText="Miami underlined just how competitive the front of the field had become, with McLaren's upgraded package closing the gap to Mercedes to a matter of tenths. For Antonelli, though, the result was simple: three races, three poles, three wins, and a championship lead that showed no signs of slowing down."
            lowerTextImage="/assets/motorsport/Miami_Circuit.avif"
            coverImage="/assets/motorsport/miami-26.avif"
        />
        <Footer/>
        </div>
    )
}