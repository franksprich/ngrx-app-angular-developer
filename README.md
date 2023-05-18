# NGRX from AngularDeveloper.io

## Install Packages
```shell
npm install @ngrx/store
npm install bootstrap@5.3.0-alpha3
npm install @ngrx/store-devtools
```

## Run the Application
Add the libraries `json-server` and `concurrently` via `npm`
```shell
npm install json-server
npm install concurrently
```
Add the script named: `concurrently` to `package.json` of your project
```yaml
{
  "name": "ngrx-app-angular-developer",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "json-server": "json-server --watch db.json",
    "concurrently": "concurrently \"ng serve\" \"json-server --watch db.json\" "
  },
...
}
```

![](doc/static/RunAngularConcurrently.png)

### Install Redux Devtools

Link: [DevTools Explained](https://youtu.be/SkoI_VHtcTU?t=281)
```typescript
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
```
