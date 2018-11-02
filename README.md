# react+redux boilerplate simple starter

- easy and simple react starter without server side rendering

- how to use
```
git clone...  
cd ...  
npm install    # install all the 3rd-Party dependencies
```

### mode
- run your frontend-app with webpack-devServer when you are in develop
```
npm run start
```

-  production mode, will generate bundle.js files to ./dist/...
```
npm run dist
```

- help people to deploy their work to GH-Page, but need to adjust `publicPath` property first in `webpack.config.prod.js`
```
npm run deploy 
```