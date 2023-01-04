# Configurations and Setup
## 1. Backend
1. Install Sanity usinig `npm i --save-dev sanity` inside `./backend_sanity` (add node-modules to .gitingore)
2. Configure Sanity using `npm create sanity@latest -- --coupon javascriptmastery2022`
3. Add schemas in `./backend_sanity/mo-portfolio/schemas` and export them in `schema.ts`
4. In `sanity.config.ts`, change `import {schemaTypes} from './schemas/'` to `import {schemaTypes} from './schemas/schema'`
5. Move to `mo-portfolio` using `cd ./mo-portfolio` and run `npm run dev` to open studio
## 2. Frontend
1. Move to root directory
2. Run `create-next-app@latest`
3. Modify `tsconfig.json` to include `"noImplicitAny": true` and `"skipLibCheck": true"`
4. Modify `.esllintrc.json` as desired and create `.eslingignore` if needed
5. Add extra packages: `prettier, jasmine, eslint-prettier` and run `npm install`
6. Add `spec` folder with `jasmine`'s configurations
7. Run `npm run dev` to make sure frontend is working