<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import { page } from '$app/stores';
	import {
		AppBar,
		AppRail,
		AppRailTile,
		AppShell,
		autoModeWatcher,
		LightSwitch,
		Modal,
		storeHighlightJs,
		Toast
	} from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import '../app.postcss';

	storeHighlightJs.set(hljs);

	const storeValue: Writable<number> = writable(0);

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="btn cursor-pointer text-xl uppercase">Skeleton playground</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<AppRailTile
				label="Home"
				value={0}
				tag="a"
				href={'/'}
				class={'/' === $page.url.pathname ? '!bg-primary-500' : ''}>(icon)</AppRailTile
			>
			<AppRailTile
				label="Tile 2"
				value={1}
				tag="a"
				href={'/about'}
				class={'/about' === $page.url.pathname ? '!bg-primary-500' : ''}>(icon)</AppRailTile
			>
			<AppRailTile
				label="Editor"
				value={2}
				tag="a"
				href={'/editor'}
				class={'/editor' === $page.url.pathname ? '!bg-primary-500' : ''}>(icon)</AppRailTile
			>
		</AppRail>
	</svelte:fragment>

	<Modal />
	<Toast />

	<!-- Page Route Content -->
	<slot />
</AppShell>
