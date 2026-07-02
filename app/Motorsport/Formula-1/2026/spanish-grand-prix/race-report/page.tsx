'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
        <ArticleTemplate
            headerName="Spanish Grand Prix - race report"
            date="14.06.2026"
            upperTitle="The streak ends: Lewis Hamilton claims his first Ferrari victory as Mercedes' unbeaten start to 2026 finally cracks."
            mainText=""
            middleText="Mercedes' unbeaten start to 2026 finally came to an end at the Circuit de Barcelona-Catalunya, where Lewis Hamilton delivered his first Grand Prix victory since joining Ferrari. Starting from pole, George Russell controlled the early laps, but Ferrari's bold three-stop strategy — built around an aggressive undercut and a timely Virtual Safety Car triggered by Fernando Alonso's retirement — allowed Hamilton to leapfrog both Mercedes cars and pull away on fresher tyres in the closing stages.

            The result also produced a piece of history, with Hamilton, Russell and Lando Norris forming the first all-British podium since 1968. Championship leader Antonelli, who had briefly moved ahead of Russell in the closing stages, suffered an electrical failure just four laps from home and failed to finish for the first time all season."
            lowerText="At 41 years old, Hamilton became the oldest Grand Prix winner in over five decades, and the emotional victory — his first in Ferrari red after a long wait — cut Antonelli's championship lead to 41 points. With Mercedes' momentum finally interrupted and both Ferrari and McLaren now proven race winners, the 2026 title fight looked wide open heading into the Austrian Grand Prix."
            lowerTextImage="/assets/motorsport/Catalunya_Circuit.avif"
            coverImage="/assets/motorsport/spain-26.jpg"
        />
        <Footer/>
        </div>
    )
}