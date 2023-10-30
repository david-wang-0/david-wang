<script lang="ts">
    export let name: string;
</script>
<h2 class="text-2xl sm:text-3xl p-1">{name}</h2>
<div class="grid grid-cols-1 gap-4 py-4 px-1">
    <slot/>
</div>