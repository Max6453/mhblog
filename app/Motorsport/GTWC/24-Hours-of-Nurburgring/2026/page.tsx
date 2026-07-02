'use client'
import ArticleTemplate from "@/components/templates/article-template";
import Footer from "@/components/templates/footer-template";

export default function nurburgring26() {
    return(
    <div>   
    <ArticleTemplate
        headerName="24 Hours of Nürburgring - race report"
        date="17.05.2026"
        upperTitle="Max Verstappen leads for 20 hours on his Nordschleife debut, only for a broken driveshaft to hand victory to his own sister car."
        mainText=""
        middleText="The 2026 Nürburgring 24 Hours delivered one of the most talked-about editions in the race's history, drawing a record crowd of 352,000 to the Eifel region for Max Verstappen's debut at the legendary Nordschleife. Sharing the #3 Mercedes-AMG GT3 with Daniel Juncadella, Jules Gounon and Lucas Auer, the four-time Formula 1 champion looked every bit the natural, surviving an early scare when he ran onto the grass and later trading paint with his own sister car during a tense night-time battle for the lead. For close to twenty hours, Team Verstappen led the race, at one point stretching the gap to the chasing pack past six minutes.

        Then, with roughly three hours remaining, disaster struck. Juncadella had barely settled into the car after taking over from Verstappen when a driveshaft failure forced the leading Mercedes into the garage, ending its hopes of victory in heartbreaking fashion. Out of that misfortune came a fairytale for the #80 Winward Racing entry — the sister Mercedes-AMG GT3 of Maro Engel, Luca Stolz, Fabian Schiller and Maxime Martin — which cruised home more than a minute clear to claim the marque's first overall win at the Nürburgring since 2016. The #84 Red Bull Team ABT Lamborghini and the #34 Walkenhorst Motorsport Aston Martin completed the podium."
        lowerText="For Engel it was a second Nürburgring triumph, having also been part of the winning crew a decade earlier, while Stolz and Schiller both claimed their first overall 24-hour victories and Martin finally added an N24 win to a career that had produced four previous runner-up finishes. As for Verstappen, despite the cruel ending, his commitment to the gruelling week of licence tests and the composed, mistake-free stints he put in throughout the race only added to the growing respect for his versatility away from Formula 1."
        lowerTextImage="/assets/motorsport/Nordschleife_Circuit.avif"
        coverImage="/assets/motorsport/nurburgring24h-26.jpg"
    />
    <Footer/>
    </div>
    )
}