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
        <p class="text">
            I currently perform research on the formal semantics of planning formalisms, such as 
            <a href="https://en.wikipedia.org/wiki/Planning_Domain_Definition_Language" class={link_style}>PDDL</a> and 
            <a href="https://en.wikipedia.org/wiki/GOLOG" class={link_style}>GOLOG</a>.
        </p>
    </Section>
    <Section name="Research Experience">
        <CVElement
            startDate={new Date("2023-10")}
            location="London, United Kingdom">
            <span slot="title">PhD research in Computer Science</span>
            <a slot="institution" href="https://www.kcl.ac.uk/informatics/" class={link_style}>
                King's College London - Department of Informatics
            </a>
            <p slot="content" class="text">
                I currently perform research on the formal semantics of planning formalisms, such as 
                <a href="https://en.wikipedia.org/wiki/Planning_Domain_Definition_Language" class={link_style}>PDDL</a> and 
                <a href="https://en.wikipedia.org/wiki/GOLOG" class={link_style}>GOLOG</a>
                under the supervision of <a href="https://mabdula.github.io/" class={link_style}>Dr Mohammad Abdulaziz</a>. 
            </p>
        </CVElement>
        <CVElement
            startDate={new Date("2022-09")}
            endDate={new Date("2023-04")}
            location="London, United Kingdom">
            <span slot="title">Bachelor of Science - Final Year Project</span>
            <a slot="institution" href="https://www.kcl.ac.uk/" class={link_style}>King's College London</a>
            <p slot="content" class="text">Regular Expressions, Lexing, Derivatives</p>
        </CVElement>
    </Section>
    <Section name="Education">
        <CVElement 
            startDate={new Date("2023-10")}
            location="London, United Kingdom">
            <span slot="title">Computer Science Research MPhil/PhD</span>
            <a slot="institution" href="https://www.kcl.ac.uk/informatics/" class={link_style}>
                King's College London - Department of Informatics
            </a>
        </CVElement>
        <CVElement 
            startDate={new Date("2019-09")} 
            endDate={new Date("2023-07")}
            location="London, United Kingdom">
            <span slot="title">Bachelor of Science with Honours in Computer Science</span>
            <a slot="institution" href="https://www.kcl.ac.uk/" class={link_style}>King's College London</a>
        </CVElement>
    </Section>
    <Section name="Awards, Workshops">
        <CVElement
            startDate={new Date("2023-10")}
            location="London, United Kingdom">
            <span slot="title">NMES Faculty Studentship</span>
            <a slot="institution" href="https://www.kcl.ac.uk/nmes/" class={link_style}>
                King's College London - Faculty of Natural, Mathematical, and Engineering Sciences
            </a>
            <p slot="content" class="text">A studentship for the duration of my studies as postgraduate research student at King's College London.</p>
        </CVElement>
        <CVElement
            startDate={new Date("2024-05-13")}
            endDate={new Date("2024-05-17")}
            location="Bonn, Germany">
            <a slot="title" href="https://www.mathematics.uni-bonn.de/him/programs/current-trimester-program/him-trimester-program-prospects-of-formal-mathematics" class={link_style}>
                Trimester Programme - Prospects of Formal Mathematics - School on Formal Mathematics
            </a>
            <a slot="institution" href="https://www.mathematics.uni-bonn.de/en" class={link_style}>
                University of Bonn - Hausdorff Research Institute for Mathematics
            </a>
        </CVElement>
        <CVElement
            startDate={new Date("2024-06-17")}
            endDate={new Date("2024-06-28")}
            location="Bonn, Germany">
            <a slot="title" href="https://www.mathematics.uni-bonn.de/him/programs/current-trimester-program/him-trimester-program-prospects-of-formal-mathematics" class={link_style}>
                Trimester Programme - Prospects of Formal Mathematics
            </a>
            <a slot="institution" href="https://www.mathematics.uni-bonn.de/en" class={link_style}>
                University of Bonn - Hausdorff Research Institute for Mathematics
            </a>
        </CVElement>
    </Section>
    <Section name="Skills">
        <KeyValueList>
            <KeyValue name="Programming" details="Java, Scala, Kotlin, TypeScript"/>
            <KeyValue name="Interactive Theorem Proving" details="Isabelle/HOL"/>
        </KeyValueList>
    </Section>
    <Section name="Additional Information">
        <p style="text">
            Some things that I do can be found on <a href="https://github.com/david-wang-0/david-wang" class={link_style}>GitHub</a>.
        </p>
    </Section>
</div>