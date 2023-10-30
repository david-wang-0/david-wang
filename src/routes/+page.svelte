<script lang="ts">
    import CVElement from '$lib/components/CVElement.svelte';
    import Skill from '$lib/components/Skill.svelte';
    import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
    <title>David Wang</title> 
</svelte:head>

<div class="m-auto max-w-screen-lg p-auto">
    <h1 class="text-6xl my-4 p-0">David Wang</h1>

    <Section name="About">
        <p class="text">I like mathematics and logic, because once you understand a proof, you know you understand it and if you don't, you know you don't. It feels good to be certain of things, even after you have forgotten the details of how you came to that conclusion.</p>
        <p class="text">This lead me to my current research area and the topic <em class="italic">formal reasoning about GOLOG programs</em>. It combines formal logic, programming language semantics, formal verification, and AI planning.</p>
    </Section>
    <Section name="Research Experience">
        <CVElement
            name="PhD research in Computer Science"
            startDate={new Date("2023-10")}
            institution="King's College London - Department of Informatics"
            institutionLink="https://www.kcl.ac.uk/informatics/"
            location="London, United Kingdom">
            <p class="text">
                Researching formal reasoning about 
                <a href="https://en.wikipedia.org/wiki/GOLOG" 
                    class="underline underline-offset-4 decoration-cyan-500 dark:decoration-cyan-400 decoration-2 hover:text-cyan-500 hover:dark:text-cyan-400">
                    GOLOG
                </a> 
                programs under the supervision of 
                <a href="https://mabdula.github.io/" 
                    class="underline underline-offset-4 decoration-cyan-500 dark:decoration-cyan-400 decoration-2 hover:text-cyan-500 hover:dark:text-cyan-400">
                    Dr Mohammad Abdulaziz
                </a>. 
                GOLOG is a high-level agent modelling language meant to capture human intuition and common-sense reasoning in dynamic situations. The research aims to formalise GOLOG's semantics using techniques applied to programming languages as well as the situation calculus within the Isabelle/HOL theorem prover. It combines various applications of logic, from philosophy to AI.
            </p>
        </CVElement>
        <CVElement
            name="Bachelor of Science - Final Year Project"
            startDate={new Date("2022-09")}
            endDate={new Date("2023-04")}
            institution="King's College London"
            institutionLink="https://www.kcl.ac.uk/"
            location="London, United Kingdom">
            <p class="text">
                Regular Expressions, Lexing, Derivatives
            </p>
        </CVElement>
    </Section>
    <Section name="Education">
        <CVElement 
            name="Computer Science Research MPhil/PhD" 
            startDate={new Date("2023-10")}
            institution="King's College London - Department of Informatics"
            institutionLink="https://www.kcl.ac.uk/informatics/"
            location="London, United Kingdom"/>
        <CVElement 
            name="Bachelor of Science with Honours in Computer Science" 
            startDate={new Date("2019-09")} 
            endDate={new Date("2023-07")}
            institution="King's College London"
            institutionLink="https://www.kcl.ac.uk/"
            location="London, United Kingdom"/>
        <CVElement 
            name="IB Diploma"
            startDate={new Date("2012-09")} 
            endDate={new Date("2019-07")}
            institution="Vienna International School"
            institutionLink="https://www.vis.ac.at/"
            location="Vienna, Austria"/>
    </Section>
    <Section name=Awards>
        <CVElement name="NMES Faculty Studentship"
            startDate={new Date("2023-10")}
            institution="King's College London - Faculty of Natural, Mathematical, and Engineering Sciences"
            institutionLink="https://www.kcl.ac.uk/nmes"
            location="London, United Kingdom">
            <p class="text">A studentship for the duration of my studies as postgraduate research student at King's College London</p>
        </CVElement>
        <h2 class="text-2xl sm:text-3xl">Work Experience</h2>
        <CVElement 
            name="Internship - Software Engineering" 
            startDate={new Date("2022-04")} 
            endDate={new Date("2022-07")}
            institution="Austrian Ministry of Defence"
            location="Vienna, Austria">
            <p class="text">Software-development using Kotlin</p>
        </CVElement>
        <CVElement 
            name="Mandatory Military Service" 
            startDate={new Date("2021-10")} 
            endDate={new Date("2022-04")}
            institution="Austrian Armed Forces"
            location="Vienna, Austria"/>
        <CVElement 
            name="Internship - Software Engineering" 
            startDate={new Date("2021-06")} 
            endDate={new Date("2021-08")}
            institution="Scientific Games"
            location="Vienna, Austria">
            Software-development using Java
        </CVElement>
    </Section>
    <Section name="Skills">
        <Skill name="Programming" details="Java, Scala, Kotlin, TypeScript"/>
        <Skill name="Interactive Theorem Proving" details="Isabelle/HOL"/>
    </Section>
</div>