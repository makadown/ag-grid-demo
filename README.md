# AgGridDemo

Demo para ag-grid, 


## Instalaciones (Ejercicio)

Creando la app:
```
ng new ag-grid-demo --skip-install --skip-tests
```
Actualizando el core de angular (si es necesario):
```
ng update @angular/cli @angular/core
```
Instalando Bootstrap:
```
npm install bootstrap jquery popper.js --save
```
el archivo angular.json debería tener las siguientes ediciones:
```
"styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
"scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/popper.js/dist/umd/bootstrap.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ],
```
Instalar 
```
npm install --save ag-grid-community ag-grid-angular
```
Es probable que se ocupe hacer esto:
```
npm i codelyzer tslint @angular/compiler @angular/core
```
Para asegurar que estén presentes todas las dependencias:
```
npm install
```


