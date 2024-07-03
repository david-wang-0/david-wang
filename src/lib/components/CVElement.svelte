<script lang="ts">
    export let startDate: Date | null = null;
    export let endDate: Date | null = null;
    export let location: string | null = null;
    export let longDate: boolean = false;
</script>

<div class="grid grid-cols-1 gap-y-2">
    <div class="flex space-x-5 sm:text-lg">
        <h3 class="flex flex-initial justify-left font-extrabold">
            <slot name="title"/>
        </h3>
        <div class="flex-auto justify-center"/>
        <h4 class="flex space-x-1 flex-none justify-end">
            {#if startDate != null}
                {#if longDate}
                    <span class="flex-none justify-start">{startDate.toLocaleString('default', {year: 'numeric', month: 'long', day: '2-digit'})}</span>
                {:else}
                    <span class="flex-none justify-start">{startDate.toLocaleString('default', {year: 'numeric', month: 'long'})}</span>
                {/if}
                <span class="justify-center"> - </span>
            {/if}
            {#if endDate != null}
                {#if longDate}
                    <span class="flex-none justify-start">{endDate.toLocaleString('default', {year: 'numeric', month: 'long', day: '2-digit'})}</span>
                {:else}
                    <span class="flex-none justify-start">{endDate.toLocaleString('default', {year: 'numeric', month: 'long'})}</span>
                {/if}
            {:else}
                <span class="flex-none justify-end">ongoing</span>
            {/if}
        </h4>
    </div>

    <div class="flex flex-nowrap space-x-2 text-base my-1">
        {#if $$slots.institution}
            <h4 class="shrink justify-left italic">
            <slot name="institution"/>
            </h4>
        {/if}
        {#if $$slots.institution && location != null} 
            <div class="flex-none hidden md:block justify-left">|</div>
            <div class="justify-center md:hidden"/>
        {/if}
        {#if location != null}
            <h4 class="flex-none justify-right md:justify-left italic">{location}</h4>
        {/if}
    </div>
    <slot name="content"/>
</div>