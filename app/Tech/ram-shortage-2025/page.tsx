'use client'

import ArticleTemplate from "@/components/templates/article-template"

export default function ArticleRam() {
    return(
        <div>
            <ArticleTemplate
            headerName="Big Ram shortage in 2025"
            date="15.12.2025"
            mainText="The memory market is currently facing an unprecedented crisis that is fundamentally shifting the economics of computer hardware.
            What started as a cyclical supply issue has become a structural shift driven almost entirely by the insatiable demand for AI infrastructure.
            This is leading to skyrocketing prices and severe shortages across all segments of the RAM market,
            impacting everyone from PC builders to major tech manufacturers.
            The core of the crisis stems from two major, related factors: the explosion of AI data center demand and the strategic response from the three dominant memory manufacturers (Samsung, SK Hynix, and Micron, who control over 90% of global DRAM supply)."
            upperTitle="Could AI drastically change RAM market?"
            lowerText="When Will Relief Arrive?
            The consensus among industry analysts is grim for the short and medium term:
            Memory prices are expected to remain high or continue rising well into 2026, with the supply-demand imbalance potentially lasting through late 2027 or even 2028.
            Manufacturers are reluctant to build new fabs dedicated to commodity DRAM due to the immense cost and the fear of a potential 'AI bubble' that could lead to another oversupply crisis down the road.
            Furthermore, the lead time for new fabrication plants is typically 3–5 years, meaning any new capacity planned now would not yield chips until 2028 or later.
            In the current market, consumer memory prices are no longer set by PC demand; they are a side effect of the AI industry's spending spree.
            Until AI demand moderates or production capacity for commodity memory dramatically expands—neither of which is expected soon—consumers must brace for continued high prices and limited stock."
            coverImage="/assets/tech/ram-shortage.jpg"
            middleText=""
            lowerTextImage=""
            />
        </div>
    )
}