# TALLER3

Para la realizancion de este taller utilizamos node y mongo atlas como base de datos.

# Creacion de servicio REST

- Creacion de Persona
- POST, GET, DELETE ![image](https://github.com/Luis5600/IS-9A/assets/85821391/75e7aed4-e7d8-426d-a5a3-8eec17e699bc)

- Creacion de Encuesta 
- POST, GET, DELETE ![image](https://github.com/Luis5600/IS-9A/assets/85821391/bbf5e7ea-f838-4b32-ac51-72ce9366fe0e)

- Creacion de Registro
- POST, GET, DELETE ![image](https://github.com/Luis5600/IS-9A/assets/85821391/71cb5356-7222-467b-a829-6135904d150f)

# Ahora veremos si esta corriendo el test 

```bash
$ npm run testwin
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/d9760ac1-866a-4540-9683-39038589b0c3)

# Configuramos el Dockerfile

![image](https://github.com/Luis5600/IS-9A/assets/85821391/de53954a-f4fe-473a-a38a-72be9ff5661d)


# Creación de los tags 
- Tag incial 

```bash
$ docker build --tag luis098/taller3:version1 .
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/d5aaec5e-01c9-407e-a518-5040852e2247)

# Se sube la imagen a dockerhub previamente creado el repositorio 

```bash
$ docker push luis098/taller3:version1
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/c62eef69-e9b9-4476-987c-48040fe7658a)

# Corremos la imagen de docker hub

```bash
$ docker run -p 4000:4000 --name taller3 --env-file ./.env luis098/taller3:version1
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/ce117032-f609-4f02-a83a-90474a2de6d6)

# Revisamos el repositorio de docker hub

![image](https://github.com/Luis5600/IS-9A/assets/85821391/cfd8597a-ad09-4a71-af88-a99ee234c13c)

# Tag multi stage

- Configuracion de Dockerfile

![image](https://github.com/Luis5600/IS-9A/assets/85821391/301fbb5f-1fa8-4bb8-a346-33f14653a9cd)

```bash
$ docker build --tag luis098/taller3:version2 .
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/674d4fe3-147d-42a8-82e4-2048c52817ba)

# Se sube la imagen a dockerhub previamente creado el repositorio 

```bash
$ docker push luis098/taller3:version2  
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/d821edd9-4ce1-407f-a239-448051cdbe16)

# Corremos la imagen de docker hub

```bash
$ docker run -p 4000:4000 --name taller3 --env-file ./.env luis098/taller3:version2
```

![image](https://github.com/Luis5600/IS-9A/assets/85821391/cbe27207-77e9-42d6-b578-e3edb4d200e8)

# Revisamos el repositorio de docker hub

![image](https://github.com/Luis5600/IS-9A/assets/85821391/cfd8597a-ad09-4a71-af88-a99ee234c13c)


