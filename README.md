# Configurations and Setup
## 1. Backend
1. Install Sanity usinig `npm i --save-dev sanity` inside `./backend_sanity` (add node-modules to .gitingore)
2. Configure Sanity using `npm create sanity@latest -- --coupon javascriptmastery2022`
3. Add schemas in `./backend_sanity/mo-portfolio/schemas` and export them in `schema.ts`
4. In `sanity.config.ts`, change `import {schemaTypes} from './schemas/'` to `import {schemaTypes} from './schemas/schema'`
5. Move to `mo-portfolio` using `cd ./mo-portfolio` and run `npm run dev` to open studio
6. After creating frontend, create a `client.ts` file to configure sanity client
     **Note**: Use `document['property']` syntax instead of `document.property` inside the HTML tree
## 2. Frontend
1. Move to root directory
2. Run `create-next-app@latest`
3. Modify `tsconfig.json` to include `"noImplicitAny": true` and `"skipLibCheck": true"`
4. Modify `.esllintrc.json` as desired and create `.eslingignore` if needed
5. Add extra packages: `prettier, jasmine, eslint-prettier` and run `npm install`
6. Add `spec` folder with `jasmine`'s configurations
7. Run `npm run dev` to make sure frontend is working
8. Add more dependencies `npm install --save-dev @sanity/client @sanity/image-url framer-motion node-sass sass react-icons`
9. Get frontend ready:
   1.  Add your CSS reusables in `./frontend_next/styles/globals.css`
   2.  In the same drectory, create `App.scss` to use the `globals.css` settings and import file in `frontend_next/pages/_app.tsx`
   3.  Set up your folder structure 
          <pre>
          frontend_next/src
          ├───api
          ├───assets
          ├───components
          ├───constants
          ├───containers
          ├───pages
          ├───wrapper
   4.  Create containers' folders having the files needed: `Name.tsx`, `Name.scss`, `NameSpec.ts`, `Name.stories.tsx`, etc.
     
        
        **Note**: This project uses the following containers: `About`, `Footer`, `Header`, `Skills`, `Testimonials`, and `Work`. 
   5.  Create `index.ts` inside `containers` and export each container using `export {default as Name} from "./Name/Name"`
   6.  Import containers in `frontend_next/pages/index.tsx` and their styles in their corresponding `.tsx` files as following: `import styles from ./Name.module.scss`
   7.  Add containers to HTML tree
   8.  Create needed components' folders and the files needed: `Name.tsx`, `Name.module.scss`, `NameSpec.ts`, `Name.stories.tsx`, etc.


        **Note**: This project uses `Navbar` component. 
   8.  Create `index.ts` inside `components` and export each component using `export {default as Name} from "./Name/Name"`
   9.  Import components in `frontend_next/pages/index.tsx` and their styles in their corresponding `.tsx` files as following: `import styles from ./Name.module.scss`
   10. Add components to HTML tree
   11. Add assets in `frontend_next/pages/assets` folder
   12. Create `images.ts` in `frontend_next/constants` to import paths from assets and export them as `images` module
   13. Create `text.ts` in `frontend_next/constants` to make hardcoded text come from one file
