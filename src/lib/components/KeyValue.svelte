<script lang="ts">
    export let name: string;
    export let details: string;
</script>

<div class="flex gap-2">
    <h3 class="flex justify-left flex-none">{name}: </h3> 
    <h4 class="flex justify-left flex-none">{details}</h4>
</div>