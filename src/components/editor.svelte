<script lang="ts">
	import { clsx } from 'clsx';
	import type monaco from 'monaco-editor';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
	import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
	import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
	import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
	import { onMount } from 'svelte';

	let divEl: HTMLDivElement;
	let editor: monaco.editor.IStandaloneCodeEditor;
	// @ts-ignore-error (this is a hack)
	let Monaco: monaco;

	let text = `{
    "name": "skeleton",
    "version": "0.0.0",
    "scripts": {
        "dev": "svelte-kit dev",
        "build": "svelte-kit build",
        "preview": "svelte-kit preview",
        "lint": "prettier --check . && eslint --ext .js,.ts,.svelte src",
        "lint:fix": "prettier --write . && eslint --ext .js,.ts,.svelte src --fix"
    },
    "devDependencies": {
        "@sveltejs/adapter-node": "^1.0.0-next.15",
        "@sveltejs/kit": "next",
        "@types/node": "^16.0.0",
        "eslint": "^7.32.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-svelte3": "^3.2.0",
        "prettier": "^2.4.1",
        "svelte": "^3.42.6",
        "svelte-check": "^2.2.0",
        "svelte-preprocess": "^4.9.4",
        "tslib": "^2.3.1",
        "typescript": "^4.4.3"
    },
    "dependencies": {
        "@skeletonlabs/skeleton": "^0.0.0",
        "highlight.js": "^11.3.1",
        "svelte-highlight": "^3.0.0"
    }
}`;

	function isMonacoInErrorState() {
		const markers = Monaco.editor.getModelMarkers({});

		const hasAnyError = markers.some((m: any) => m.severity === Monaco.MarkerSeverity.Error);

		return hasAnyError;
	}

	onMount(async () => {
		// @ts-ignore
		self.MonacoEnvironment = {
			getWorker: function (_moduleId: any, label: string) {
				if (label === 'json') {
					return new jsonWorker();
				}
				if (label === 'css' || label === 'scss' || label === 'less') {
					return new cssWorker();
				}
				if (label === 'html' || label === 'handlebars' || label === 'razor') {
					return new htmlWorker();
				}
				if (label === 'typescript' || label === 'javascript') {
					return new tsWorker();
				}
				return new editorWorker();
			}
		};

		Monaco = await import('monaco-editor');

		editor = Monaco.editor.create(divEl, {
			value: text,
			language: 'json',
			theme: 'vs-dark'
		});

		return () => {
			editor.dispose();
		};
	});
</script>

{#if !Monaco}
	<div class="flex flex-col items-center flex-1">
		<div>Loading...</div>
	</div>
{/if}

<div bind:this={divEl} class={clsx('h-full')} />
