# Ruby Van

<a title="LN9267, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:RU3966_Shau_Kei_Wan_to_Shek_O_04-10-2018.jpg"><img width="512" alt="RU3966 Shau Kei Wan to Shek O 04-10-2018" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/RU3966_Shau_Kei_Wan_to_Shek_O_04-10-2018.jpg/512px-RU3966_Shau_Kei_Wan_to_Shek_O_04-10-2018.jpg?20181004122654"></a>

## Running

You need to have Deno v1.28.0 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

## Notes

- You need to use `.mjs` or `.mts` extension for the `vite.config.[ext]` file.

## Papercuts

Currently there's a "papercut" for Deno users:

- peer dependencies need to be referenced in `vite.config.js` - in this example
  it is only `svelte` package that needs to be referenced
