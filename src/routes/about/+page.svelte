<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';

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
</script>

<div class="flex flex-col p-10">
	<CodeBlock language="json" code={text} contenteditable="true" />
	<pre class="mt-10">
        <code class="language-json" contenteditable="true">
            {text}
        </code>
    </pre>
</div>
