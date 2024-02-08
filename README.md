##Project setup

Install linter, husky (skip prettier)
https://miyauchi.dev/posts/vite-vue3-typescript/

Add to .eslintrc: 
"rules": {
      "vue/script-setup-uses-vars": "error"
}

Change moduleResolution to "node" in tsconfig: 
"moduleResolution": "node"

Run development server

1. Go to project directory
2. npm i
3. npm run dev

##Project sub-parts

###Tailwind 

Install pre-built tailwind html/css components 

-npm install @headlessui/vue @heroicons/vue


Resources & assets (used by default)

Pre-built Components - HeadlessUI - https://headlessui.com/vue
Icons - Heroicons - https://heroicons.com/

###Pinia - https://pinia.vuejs.org/

