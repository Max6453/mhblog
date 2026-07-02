'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1ChinaArticle() {
    return(
        <div>
        <ArticleTemplate
            headerName="Austrian Grand Prix - race report"
            date="28.06.2026"
            upperTitle="Russell ends his winless streak at the Red Bull Ring, holding off a late Verstappen charge to close in on Antonelli."
            mainText=""
            middleText="The Red Bull Ring produced a fitting midpoint to a fiercely contested season. George Russell claimed a dramatic pole position on Saturday, his fastest lap coming just as Max Verstappen crashed out of Q3, and converted it into a composed if hard-fought victory on Sunday. Antonelli, who had looked the class of the field for most of the weekend, ran wide several times in a scrappy opening stint and never fully recovered, eventually closing to within four tenths of second-placed Verstappen at the flag but unable to complete the pass.

            Verstappen himself produced an impressive recovery from a fifth-place start, working his way past the Ferraris before mounting a late charge at Russell that never quite materialised into a serious threat. Lewis Hamilton, starting third, gambled again on an early stop but could only manage fifth in brutal Styrian heat, behind Oscar Piastri's McLaren."
            lowerText="Russell's second win of the season — his first since the Australian opener in March — cut his championship deficit to Antonelli to 40 points and moved him back above Hamilton into second in the standings. Eight rounds into a twenty-four-race season, Mercedes had won seven of eight Grands Prix between its two drivers, but with Ferrari and Red Bull both showing genuine pace, the fight for the 2026 title was only just beginning."
            lowerTextImage="/assets/motorsport/RedBullRing_Circuit.avif"
            coverImage="/assets/motorsport/austria-26.jpg"
        />
        <Footer/>
        </div>
)
}