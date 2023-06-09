<!-- TOC -->
* [NGRX from AngularDeveloper.io](#ngrx-from-angulardeveloperio)
  * [Manage Environment with NVM](#manage-environment-with-nvm)
    * [Installation](#installation)
    * [node: List, Install, Default](#node-list-install-default)
    * [Angular CLI Update or Uninstall/Install](#angular-cli-update-or-uninstallinstall)
  * [Precondition](#precondition)
  * [Install Packages](#install-packages)
  * [Run the Application](#run-the-application)
    * [Install Redux Devtools](#install-redux-devtools)
  * [Routing Step-by-step](#routing-step-by-step)
  * [Add Customer Components](#add-customer-components)
<!-- TOC -->

# NGRX from AngularDeveloper.io
## Manage Environment with NVM
Use `nvm` for quick changes of `node` versions

### Installation
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm version
```

### node: List, Install, Default
```shell
nvm ls-remote
nvm install v20.1.0
nvm alias default v20.1.0
node -v
npm version
```

### Angular CLI Update or Uninstall/Install
Link: [ng update](https://docs.angular.lat/cli/update)
```shell
ng update @angular/cli @angular/core
## ng update @angular/cli@^<major_version> @angular/core@^<major_version>
ng version
```
or
```shell
npm uninstall -g @angular/cli
npm cache verify
npm install -g @angular/cli@latest
ng version
```

## Precondition
```shell
Angular CLI: 16.0.1
Node: 20.1.0 (Unsupported)
Package Manager: npm 9.6.4
OS: linux x64

```

## Install Packages
```shell
npm install @ngrx/store
npm install @ngrx/effects
npm install @ngrx/entity
npm install @ngrx/store-devtools
npm install @ngrx/router-store
npm install bootstrap@5.3.0-alpha3
```
or short
```shell
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools @ngrx/router-store bootstrap@5.3.0-alpha3
```

## Run the Application
Add the libraries `json-server` and `concurrently` via `npm`
```shell
npm install json-server
npm install concurrently
```
Add the script named: `concurrently` to `package.json` of your project. It runs both the `json-server` and the `application`. 
Without `concurrently` one has to start the application and the json-server separately.
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

## Routing Step-by-step
 - The Git branch `routing` depicts an early state of the application which concentrates on the integration of the routing. CLI: `git checkout routing`.
 - Routing video explanation: [Angular NgRx Course - 03 Application Setup](https://youtu.be/QlzX_gKixa4?list=PLaMbwDs23r4KXoMucJEyUAvamQ-kFNBvC&t=223)

1. Create a module AppRouting via `ng g m appRouting --flat` (creates the file: `app-routing.module.ts`)
2. Import and add AppRouting to `app.module.ts` `import {AppRoutingModule} from "./app-routing.module";`
    ```typescript
        import {AppRoutingModule} from "./app-routing.module";
        ...
        @NgModule({
            declarations: [
                AppComponent,                
                NavbarComponent,
                HomeComponent
             ],
            imports: [
                BrowserModule,
                AppRoutingModule,
    ```
3. Define `appRoutes` in `app-routing.module.ts` and lazy load of customer module
   ```typescript
        import {RouterModule, Routes} from "@angular/router";
        ...
        const appRoutes: Routes = [
           { path: "", component: HomeComponent },
           { path: "customers", loadChildren: () => import("../app/customers/customers.module").then(m => m.CustomersModule) }
        ];
  
        @NgModule({
          declarations: [],
          imports: [
            CommonModule,
            RouterModule.forRoot(appRoutes)
          ],
          exports: [RouterModule]
        })
        export class AppRoutingModule {}
   ```
4. Create module `customers` via `ng generate module customers/customers`
5. Define `customerRoutes` in `customers.module.ts`
   ```typescript
        import {RouterModule, Routes} from "@angular/router";
        ...
        const customerRoutes: Routes = [
          {
            path: "",
            component: CustomerComponent}
        ]
  
        @NgModule({
          declarations: [
            CustomerComponent,
            CustomerAddComponent,
            CustomerEditComponent,
            CustomerListComponent
          ],
          imports: [
            CommonModule,
            RouterModule.forChild(customerRoutes),
            ReactiveFormsModule
          ]
        })
        export class CustomersModule { }
   ```
6. Add the `router-outlet` in `app-component.html`
   ```html
   <app-navbar></app-navbar>
   <router-outlet></router-outlet>
   ```

## Add Customer Components
To add components to the previously created module `Customers[customers.module.ts]` do the following:
```shell
ng g c customers/customer -m customers
ng g c customers/customer-add -m customers
ng g c customers/customer-edit -m customers
ng g c customers/customer-list -m customers
```
