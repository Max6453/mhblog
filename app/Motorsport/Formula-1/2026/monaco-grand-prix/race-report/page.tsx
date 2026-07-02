'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
        <ArticleTemplate
            headerName="Monaco Grand Prix - race report"
            date="07.06.2026"
            upperTitle="Crashes, a red flag, and a record: Antonelli becomes the youngest ever winner of the Monaco Grand Prix."
            mainText=""
            middleText="The Circuit de Monaco lived up to its reputation for chaos in 2026. Antonelli converted a last-gasp pole position — edging out Max Verstappen and Lewis Hamilton — into a lights-to-flag victory, becoming the youngest ever winner of the Monaco Grand Prix in the process. Verstappen's race barely got going, the Red Bull driver retiring at the very start of the event, while further incidents for Valtteri Bottas and Lando Norris thinned the field even before the halfway mark.

            With around twenty laps remaining, Lance Stroll crashed at the final corner to bring out a Safety Car, and the restart proved eventful in the extreme: home favourite Charles Leclerc suffered an almost identical accident just after the green flag, prompting a red flag stoppage to inspect the barriers. Antonelli made a clean second standing start and was never seriously challenged again, eventually crossing the line ahead of Hamilton, with Isack Hadjar claiming his first Red Bull podium in third. It was a torrid afternoon for George Russell, who fell to twelfth after a string of penalties."
            lowerText="Antonelli's fifth consecutive victory extended his championship lead to a commanding 66 points over Hamilton, who leapfrogged Russell into second in the standings. For a driver in only his second full Formula 1 season, becoming the youngest winner of the sport's most prestigious race was a statement that few in the paddock could argue with."
            lowerTextImage="/assets/motorsport/Monaco_Circuit.avif"
            coverImage="/assets/motorsport/monaco-26.jpg"
        />
        <Footer/>
        </div>
    )
}