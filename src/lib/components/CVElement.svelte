<script lang="ts">
    import { link_style } from "../../theme/styles";
    export let name: string;
    export let startDate: Date | null = null;
    export let endDate: Date | null = null;
    export let institution: string| null = null;
    export let institutionLink: string | null = null;
    export let location: string | null = null;
</script>

<div class="grid grid-cols-1 gap-y-2">
    <div class="flex space-x-5 sm:text-lg">
        <h3 class="flex flex-initial justify-left font-extrabold">
        {name}
        </h3>
        <div class="flex-auto justify-center"/>
        <h4 class="flex space-x-1 flex-none justify-end">
            {#if startDate != null}
                <span class="flex-none justify-start">{startDate.toLocaleString('default', { year: 'numeric', month: 'long' })}</span>
                <span class="justify-center"> - </span>
            {/if}
            {#if endDate != null}
                <span class="flex-none justify-end">{endDate.toLocaleString('default', { year: 'numeric', month: 'long' })}</span>
            {:else}
                <span class="flex-none justify-end">ongoing</span>
            {/if}
        </h4>
    </div>

    <div class="flex flex-nowrap space-x-2 text-base my-1">
        {#if institution != null}
            <h4 class="shrink justify-left italic">
            {#if institutionLink != null}
                <a href="{institutionLink}" 
                    class={link_style}>
                    {institution}
                </a>
            {:else}
                {institution}
            {/if}
            </h4>
        {/if}
        {#if institution != null && location != null} 
            <div class="flex-none hidden md:block justify-left">|</div>
            <div class="justify-center md:hidden"/>
        {/if}
        {#if location != null}
            <h4 class="flex-none justify-right md:justify-left italic">{location}</h4>
        {/if}
    </div>
    <slot/>
</div>