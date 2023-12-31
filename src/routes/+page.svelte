<script lang="ts">
    import CVElement from '$lib/components/CVElement.svelte';
    import KeyValue from '$lib/components/KeyValue.svelte';
	import KeyValueList from '$lib/components/KeyValueList.svelte';
    import Section from '$lib/components/Section.svelte';
    import { link_style } from '../theme/styles';
</script>

<svelte:head>
    <title>David Wang</title> 
</svelte:head>

<div class="m-auto max-w-screen-lg p-auto">
    <h1 class="text-4xl sm:text-5xl mx-1 my-4 p-0">David Wang</h1>

    <Section name="Contact">
        <KeyValueList>
            <KeyValue name="E-Mail" details="firstname.lastname@kcl.ac.uk"/>
        </KeyValueList>
    </Section>
    <Section name="About">
        <p class="text">I like logic and interactive theorem proving because I like to really understand something from the basics. It also feels good to be certain of things, even after you have forgotten the details of how you came to that conclusion.</p>
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
                    class={link_style}>
                    GOLOG
                </a> 
                programs under the supervision of 
                <a href="https://mabdula.github.io/" 
                    class={link_style}>
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
            <p class="text">A studentship for the duration of my studies as postgraduate research student at King's College London.</p>
        </CVElement>
    </Section>
    <Section name="Biography">
        <p>I did a few internships from summer 2021 to 2022.</p>
    </Section>
    <Section name="Skills">
        <KeyValueList>
            <KeyValue name="Programming" details="Java, Scala, Kotlin, TypeScript"/>
            <KeyValue name="Interactive Theorem Proving" details="Isabelle/HOL"/>
        </KeyValueList>
    </Section>
    <Section name="Additional Information">
        <p>The source code for this site can be found on 
            <a href="https://github.com/david-wang-0/david-wang" 
            class={link_style}>
            GitHub</a>.</p>
    </Section>
</div>