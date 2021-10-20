<script context="module">
	export async function load({ fetch }) {
		const url = `/index.json`;

		const res = await fetch(url);

		if (res.ok) {
			return {
				props: res.json()
			}
		}
	}
</script>

<script>
  import { onDestroy, onMount } from 'svelte';
  import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';

  export let pageDetails;

  onMount(async () => {
    onCloudCannonChanges((newProps) => pageDetails = newProps);
  });

  onDestroy(async () => {
    stopCloudCannonChanges();
  });
</script>

<svelte:head>
	<title>{pageDetails.title}</title>
</svelte:head>

<h1>{pageDetails.header}</h1>
<p>{pageDetails.subtext}</p>
