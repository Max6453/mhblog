'use client'

import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function PortimaoArticle() {
    return(
        <div>
            <ArticleTemplate
            headerName=
            "Winter testing completed. What to expect in Melbourne"
            date="14.02.2026"
            mainText="This week, all 11 teams came to Bahrain to further test and get to know their challengers for 2026 season.
            The most laps completed McLaren with Williams with 422 laps across 3 days. 3rd was Ferrari with 421 laps.
            Reliablity of mercedes and ferrari engines look strong even though mercedes suffered significant setback on day 2 when they had a power unit problem.
            Red Bull's power unit looks also strong on both power and reliability sides.
            But Aston Martin's honda powered power unit is not looking good. They have driven least laps of all teams and they had power unit problems practically everyday.
            And also speed on straights and battery management is worrying. Lance Stroll said that AM could be behind by 4 seconds. Fernando Alonso also looked defeated when leaving paddock."
            middleText="But mercedes powered teams look strong with mercedes and mclaren possible competing for both championships this year.
            Williams weren't driving in Barcelona's testing earlier this month so they had big catch-ups to do.
            Even when williams is possibly suffering from overweight, in tests they looked as really strong middle field team.
            Red Bull racing could also surprise with their power unit which looks pretty strong.
            Ferrari also look strong on reliable and power deployment sides."
            upperTitle="Both testing weeks completed. What we can expect in Melbourne, who will be fastest and who slowest?"
            lowerText="First testing week in Bahrain completed and another one awaits next week on wednesday."
            lowerTextImage="/assets/motorsport/Portugal_Circuit.avif"
            coverImage=
            "/assets/motorsport/testing-bahrain-2026.jpg"
            />

            <Footer/>
        </div>
    )
}