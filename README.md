# video-player

## Modificaciones

### Input tipo rage

- Al acabar de reproducir el video en el input range quedaba un espacio en blanco.

  - ![](images/error1.png)

- Para solucionar ello se agregó step del input tipo range desde la función handleLoaded().
  
  -  ![](images/cod1.png)
  
- Quedando de la siguiente manera.

  -   ![](images/sol1.png)
  
### Botón play y pause
  
  - Al acabar de reproducir el video el botón de pausa se seguía mostrando.
  
    - ![](images/error2-1.png)
  
  - Para solucionar ello se agregó las siguientes líneas de código en la función handleUpdate().
  
    - ![](images/cod2.png)
   
  - Quedando de la siguiente manera.
  
    -![](images/sol2.png)
