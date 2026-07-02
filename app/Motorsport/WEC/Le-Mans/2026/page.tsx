import ArticleTemplate from "@/components/templates/article-template";
import Footer from "@/components/templates/footer-template";
export default function LeMans26() {
    return(
        <div>
            <ArticleTemplate
                headerName="24 Hours of Le Mans - race report"
                date="14.06.2026"
                upperTitle="Toyota ends a four-year wait at the Circuit de la Sarthe as former F1 drivers Kobayashi and de Vries lead the #7 crew to victory."
                mainText=""
                middleText="Toyota returned to the top step of the 24 Hours of Le Mans podium after a tense, strategy-driven 94th edition of the French endurance classic. The #7 car of Mike Conway, Kamui Kobayashi and Nyck de Vries took the chequered flag just 10.9 seconds ahead of the #20 BMW M Hybrid V8 of Robin Frijns, Rene Rast and Sheldon van der Linde, with the sister #8 Toyota of Sebastien Buemi, Brendon Hartley and Ryo Hirakawa completing a Japanese one-three finish. It was Toyota's first win at Circuit de la Sarthe since 2022, ending a three-year run of Ferrari victories, and its sixth overall triumph in the race.

                Toyota's win was built on an early strategic gamble, with both cars short-fuelled and brought in just thirty minutes into the race to seize track position. The #8 car looked the stronger of the two for much of the night, but a brake drum mounting change on Sunday morning cost it crucial time and handed the initiative to its sister car. As the race entered its final hours, four cars from three manufacturers — the #20 BMW, the #12 Cadillac Hertz Team JOTA and both Toyotas — were still in contention, with a late Full Course Yellow proving decisive in the #7 car's favour before de Vries brought it home after being cleared of a track-limits investigation in the closing stages."
                lowerText="The victory was a landmark one on a personal level too: de Vries claimed his first Le Mans win at the first attempt, while both Conway and Kobayashi picked up their second overall triumphs at the circuit. In the other classes, Inter Europol Competition took LMP2 honours after early leaders and Mercedes junior Doriane Pin's crew suffered a brake failure on Sunday morning, while TF Sport's Corvette climbed from 17th on the grid to win LMGT3 — the manufacturer's tenth class victory at Le Mans."
                lowerTextImage="/assets/motorsport/Circuit_de_la_Sarthe.avif"
                coverImage="/assets/motorsport/lemans24h-26.jpg"
            />

            <Footer/>
        </div>
    )
}