<svelte:options customElement="ruby-van" />

<script lang="ts">
	export let text = "";
</script>

<ruby>
	<ruby>
		<slot />
	</ruby>
	<rt>{text}</rt>
</ruby>
