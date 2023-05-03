Para este taller he utilizado el framework de frontend llamado Angular, el cual se lo utiliza en una biblioteca virtual 

1. Con este comando corremos el proyecto docker compose run --rm -p 4200:4200 frontend run start
![image](https://user-images.githubusercontent.com/85821391/235824793-92c9b4a6-d74e-42bd-b44f-6d18e468b258.png)

Vemos como si muestra la biblioteca 
![image](https://user-images.githubusercontent.com/85821391/235824861-83560f61-80da-4abc-9d37-c9d9650bc13b.png)

Para trabajar de una forma interactiva utilizamos este comando: 

`docker exec -it <container_id> sh`

Pero ante de estos colamos un:

`docker ps` 
Para conocer el ID del container 

![image](https://user-images.githubusercontent.com/85821391/235825609-69da1a48-3b82-4647-b8fb-2604f0ed27d7.png)


Una vez ya hagamos echo estos pasos pues podremos colocar los comandos como si estuvieramos trajando en el sistema host

2.	Para ver la version de Angular 
    
    `ng version`

![image](https://user-images.githubusercontent.com/85821391/235825755-70661bdc-ee51-495f-bb14-b761352870eb.png)

3. crear un servicio 

  `ng generate service miServicio`
  
  ![image](https://user-images.githubusercontent.com/85821391/235825842-df178a08-b05f-4db1-84c3-e0645175759b.png)
  ![image](https://user-images.githubusercontent.com/85821391/235825852-8ffc7c00-d5ed-452b-80c6-7ac64049f6ec.png)
  
  4.	Para evitar crear una nueva carpeta mientras crea un nuevo componente

  `ng generate component nuevoComponente –flat`
  
  ![image](https://user-images.githubusercontent.com/85821391/235825939-2616b296-e31e-42ee-9d78-25b403c19fea.png)
  
  Observamos como si se creo el nuevo componente 
  
  ![image](https://user-images.githubusercontent.com/85821391/235826403-2925e153-52b3-4518-9c61-2dce9f301123.png)

5.	Para instalar una dependencia en este caso axios

  `npm install axios`

  ![image](https://user-images.githubusercontent.com/85821391/235825987-ceededb5-424b-424d-83bf-a0c5292fe99f.png)
  
  nos dirigimos a package-lock.json y vemos como si esta instalda la dependencia 
  
  ![image](https://user-images.githubusercontent.com/85821391/235826135-e186546f-17bf-400d-a8f1-a2d8aa0ac6bd.png)

6.	Agregar dependencias con schematics

  `ng add @angular/material --project=schemat`
  
  Esto instalará y anotará la dependencia de @angular/material y otros paquetes necesarios. Pero además los registrará en AppModule y lo configurará.
  
  ![image](https://user-images.githubusercontent.com/85821391/235826219-818e5ac6-b578-4948-9358-54fcd16ef3c4.png)

  ![image](https://user-images.githubusercontent.com/85821391/235826228-1d2a5140-14b6-4f34-8916-e932cc34ddc6.png)
  
  Nos dirigimos a package-lock.json
  
  ![image](https://user-images.githubusercontent.com/85821391/235826254-df95bb11-5b12-4212-ac7e-00e3dac3db50.png)

  Y observamos como si esta instalado
  




