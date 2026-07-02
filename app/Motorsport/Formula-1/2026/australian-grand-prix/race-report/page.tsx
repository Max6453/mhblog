'use client'
import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function F1AustraliaArticle() {
    return(
        <div>
            <ArticleTemplate
                headerName="Australian Grand Prix - race report"
                date="08.03.2026"
                upperTitle="A new rulebook, a new season, and an old story: Mercedes dominate the 2026 season opener at Albert Park."
                mainText=""
                middleText="The 2026 Formula 1 season kicked off at Albert Park with a statement from Mercedes. George Russell converted his pole position into a lights-to-flag victory, but not without a fight. Ferrari's Charles Leclerc launched brilliantly off the grid to snatch the lead from Russell, and the pair traded blows for several laps before two Virtual Safety Car periods reshuffled the entire race. Mercedes pounced on both interruptions to pit cheaply, while Ferrari elected to stay out — a gamble that ultimately cost them track position. Russell emerged in control, with teammate Kimi Antonelli completing a dominant Silver Arrows one-two.

                Behind them, Leclerc held on for third ahead of Lewis Hamilton, who impressed with an early double overtake to move into the podium picture before a chaotic pit sequence dropped him back. Lando Norris salvaged fifth for McLaren in what was otherwise a nightmare weekend for the papaya team — teammate Oscar Piastri failed to even start the race after crashing on the reconnaissance lap to the grid."
                lowerText="It was a season opener shaped as much by strategy as pace, with Mercedes' one-stop execution proving decisive. Max Verstappen produced arguably the drive of the day, recovering from twentieth on the grid to sixth by the finish, hinting at the pace Red Bull could unlock once reliability caught up with raw speed. For now though, the message from Melbourne was unambiguous: this is Mercedes' championship to lose."
                lowerTextImage="/assets/motorsport/Albert_Park_Circuit.avif"
                coverImage="/assets/motorsport/australia-26.jpg"
            />

            <Footer/>
        </div>
    )
}