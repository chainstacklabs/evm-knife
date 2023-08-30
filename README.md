## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

App is built uisng Next [Pages Router](https://nextjs.org/docs) and [Ant Design UI](https://ant.design/components/overview) library for React.

## What is module?

In terms of this app module is standalone component with isolated logic inside. It can use reusable components, but all logic must be performed inside module component's bounds.

Module consists of:

- Heading (required)
- Description (optional but highly recommended)
- Module logic (required)

Each module is represented in left navigation bar and must belong to some group. If no group is suitable, you can create a new one.

Each module must have unique URL in app (see below).

Modules are stored at `src/components/Modules/`

## How to add a new module?

### Create a new module component

Create a new module with unique name with camel case. Eg: `MyNewModule.js`. Exported function must have the same name. Additional css is ok. Eg:

```jsx
export default function MyNewModule {

  ...some logic...

  return ...
}
```

It is ok to use additional components for UI. You can keep them here `src/components/`.

### Create a new page for module

Routing in next.js is performed automatically. All you need is to add js file to `src/pages`.

Keep file name consistent, but here it must be divided with dashes, because urls dont support camel case. New js file will be called: `src/pages/my-new-module.js`.

Big difference from the prevoius step is the following. Since we create a new **page** for new module and it is still must be readable, we call new component inside page file with `Page` postfix in camel case:

```jsx
export default function MyNewModulePage() {
  return (
    <>
      <Head>
        ...
      </Head>

      <LayoutWrapper>
        <MyNewModule />   <- this is your module
      </LayoutWrapper>
    </>
  );
}
```

> Notice that every module must be wrapped in `LayoutWrapper`, this component is responsible for position on the page and includes left navigation bar inside.

### Add new module in navigation bar

Navigation bar config is located at `src/components/LayoutWrapper/LayoutWrapper.jsx` in `items` array.

---

**If you adding new module to existing group:**

Find a target group in array. You can find group names in functions as the first argument, eg for `Converters`:

```js
/**
 * @param {string} Group name displayed on navigation bar
 * @param {string} Unique group/subgroup item ID
 * @param {ReactNode} Icon used near group label
 * @param {Array} Group of subitems
 */

getItem('Converters', '5', <></>, [
  getItem('Decimal → hexadecimal', 'decimal-hexadecimal'),
  ...
  getItem('ENS → address', 'ens-to-address'),
  getItem('My new module', 'my-new-module') <- this is your module
]),
```

> Notice that your new module's Unique id must be the same as new page file's name, because this ID is used to generate routes between different pages inside the app.

---

**If you adding new module to a new group:**

Come up with a name to a new group and add it to config:

```js
/**
 * @param {string} Group name displayed on navigation bar
 * @param {string} Unique group/subgroup item ID
 * @param {ReactNode} Icon used near group label
 * @param {Array} Group of subitems
 */

...
getItem('Converters', '5', ...),

getItem('New group for my module', '6', <></>, [
  getItem('My new module', 'my-new-module') <- this is your module
]),
```

Here `New group for my module` has unique ID `6` by it's order's number.

> Notice that your new module's Unique id must be the same as new page file's name, because this ID is used to generate routes between different pages inside the app.

Last thing is turn on auto expanding for groups on navigation bar. You need to add group's ID to menu `defaultOpenKeys` property:

```jsx
<Menu
  onClick={onClick}
  selectedKeys={[activeNavItem.replace('/', '')]}
  defaultOpenKeys={['2', '3', '4', '5', '6']} <- new ID added
  mode="inline"
  items={items}
  className={styles.navbar}
/>
```

---

### Summary

New module's file: `MyNewModule.js`  
New module's component: `MyNewModule`

New module's page file: `my-new-module.js`  
New module's page component: `MyNewModulePage`  
New module's page URL: `app.com/my-new-module` (generated automatically)

## Left navigation bar

Created with Ant design's Menu component. [See docs](https://ant.design/components/menu) for API and description.

## Images

There are two types of images in the app: icons and illustrations.

### UI icons

Eg: home icon in left navigation bar.  
Such icons located in `src/components/Icons`.  
Each icon is wrapped in react component. In this way it's possible to use icons inside Ant Design's components.

### Illustrations

Eg: images on home page  
Such icons located in `public/images`.  
These can be SVGs or raster images such as PNG or JPG. They are used in app via next's `Image` module, [see the docs](https://nextjs.org/docs/pages/api-reference/components/image). Eg:

```js
import solidity from "../../../../public/images/solidity.svg";
...
<Image src={solidity} />
```
