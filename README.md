Step 1: start the Nx repo.

```
npx create-nx-workspace my-workspace --appName=demo --preset=next --style=scss --nx-cloud

npm install -g @nrwl/cli

npx nx serve demo
```

You can also create new pages by running the generate command :

```
npx nx generate page About --project=demo --style=scss
```

The same thing goes for new components.

```
npx nx g component PartyPopper --project=demo  --style=scss
```

Step 2: Build and deploy

```
heroku login
heroku apps:create next-nx
// heroku apps:create keystone-nx
```

```
npx nx g @nrwl/workspace:run-commands deploy --project keystone --command "cd dist/apps/keystone && cp ../../../apps/keystone/Dockerfile . && heroku container:login && heroku container:push web -a keystone-nx && heroku container:release web -a keystone-nx"


npx nx g @nrwl/workspace:run-commands deploy --project demo --command "cd dist/apps/demo && cp ../../../apps/demo/Dockerfile . && heroku container:login && heroku container:push web -a next-nx && heroku container:release web -a next-nx"
```

```
npx nx build demo
npx nx deploy demo

//npx nx build keystone-app
//npx nx deploy keystone-app
```

go to https://next-nx.herokuapp.com/.

step 3: Publish Library

npx nx g @nrwl/js:lib components-bis --publishable --importPath="@dots/components-bis"
npx nx publish components-bis --ver=1.0.1 --tag=hello

step 4: create custom plugins:

```
npx create-nx-plugin dots --pluginName keystone
npm i -D @nrwl/nx-plugin
nx g @nrwl/nx-plugin:plugin keystone --importPath=@dots/keystone
```

experimentale :
$ npx nx generate @nrwl/nx-plugin:plugin keyston-extension --no-interactive
$ npx nx build keystone-extension

$ npx nx build keystone --skip-nx-cache

https://youtu.be/ptpEBhHwl6Q?t=1225

# PUBLISH PLUGIN:

- npx nx run my-plugin:build
- npm publish ./dist/libs/my-plugin
