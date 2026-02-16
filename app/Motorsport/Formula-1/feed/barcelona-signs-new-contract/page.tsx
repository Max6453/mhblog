'use client'

import ArticleTemplate from "@/components/templates/article-template"
import Footer from "@/components/ui/footer"

export default function PortimaoArticle() {
    return(
        <div>
            <ArticleTemplate
            headerName=
            "Barcelona circuit signs new contract extension to 2032"
            date="16.02.2026"
            upperTitle="Traditional circuit is staying in formula 1 but with small limitations."
            mainText="The Circuit de Barcelona-Catalunya will be part of rotation deal with Spa-Francorchamps so Barcelona will host grand prix for 2028, 2030 and 2023.
            We will also see a brand new name for grand prix as the Spanish Grand Prix will be taken by Madrid circuit. 
            As a result, the Barcelona event has been rebranded the 'Barcelona-Catalunya Grand Prix.'"
            middleText="The extension secures F1’s continued presence in Catalonia and reinforces the region’s appeal as a major international sporting venue.
            Formula 1 and local organisers highlight the economic impact of the race — historically significant for tourism, jobs, and international visibility.
            The rotational agreement was reached after intense negotiation, partly due to calendar competition from new races (like Madrid) and other European events.
            F1 leadership has noted Barcelona’s strong fan support and recent investments in facilities and fan-experience initiatives as key factors in securing the deal.
            "
            lowerText="It is soon to tell if FIA made a right choice but I certainly will miss a Barcelona."
            lowerTextImage="/assets/motorsport/Portugal_Circuit.avif"
            coverImage=
            "/assets/motorsport/barcelona-catalunya-circuit.jpg"
            />

            <Footer/>
        </div>
    )
}