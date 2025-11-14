// Ejercicio 1
const calcularAreaRectangulo = (ancho, alto) => {
  return ancho * alto;
};
console.log(`Ejercicio 1: El área es ${calcularAreaRectangulo(5, 3)}`);

// Ejercicio 2
const contarPalabras = (cadena) => {
  const palabras = cadena.split(' ');
  return palabras.length;
};
console.log(`Ejercicio 2: Total de palabras: ${contarPalabras("Humahuaca es un lugar copado")}`);

// Ejercicio 3
const contarVocales = (cadena) => {
  const vocalesEncontradas = cadena.match(/[aeiou]/gi);
  return vocalesEncontradas ? vocalesEncontradas.length : 0;
};
console.log(`Ejercicio 3: Total de vocales: ${contarVocales("JavaScript")}`);

// Ejercicio 4
const esPalindromo = (cadena) => {
  const cadenaLimpia = cadena.toLowerCase().replace(/[\W_]/g, '');
  const cadenaRevertida = cadenaLimpia.split('').reverse().join('');
  return cadenaLimpia === cadenaRevertida;
};
console.log(`Ejercicio 4 (neuquen): ${esPalindromo("neuquen")}`);
console.log(`Ejercicio 4 (reconocer): ${esPalindromo("reconocer")}`);
console.log(`Ejercicio 4 (rallar): ${esPalindromo("rallar")}`);

// Ejercicio 5
const edadCanina = (edadPerro) => {
  const edadHumana = edadPerro * 7;
  console.log(`Ejercicio 5: Tu perro tiene ${edadHumana} años humanos`);
};
edadCanina(7);

// Ejercicio 6
const capitalizarPalabras = (cadena) => {
  return cadena.split(' ')
    .map(palabra => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(' ');
};
console.log(`Ejercicio 6: ${capitalizarPalabras("hola mundo desde javascript")}`);

// Ejercicio 7
const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    const numSiguiente = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(numSiguiente);
  }
  return secuencia;
};
console.log(`Ejercicio 7 (n=5): ${JSON.stringify(fibonacci(5))}`);

// Ejercicio 8
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("\n--- Ejercicio 8: Productos ---");
console.log("8.1: Nombres y precios (forEach):");
productos.forEach(producto => {
  console.log(`  - Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
});

const nombresProductos = productos.map(producto => producto.nombre);
console.log(`8.2: Array de nombres (map): ${JSON.stringify(nombresProductos)}`);

const electronicosConStock = productos.filter(producto => 
  producto.categoria === 'electrónica' && producto.stock > 20
);
console.log("8.3: Electrónicos con stock > 20 (filter):", electronicosConStock);

const productoId3 = productos.find(producto => producto.id === 3);
console.log("8.4: Producto con ID 3 (find):", productoId3);

const valorTotalInventario = productos.reduce((total, producto) => {
  return total + (producto.precio * producto.stock);
}, 0);
console.log(`8.5: Valor total del inventario (reduce): $${valorTotalInventario}`);

// Ejercicio 9
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8]},
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7]},
  { id: 3, nombre: 'Maria', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8]}
];

const calcularPromedio = (calificaciones) => {
  const suma = calificaciones.reduce((acc, nota) => acc + nota, 0);
  return suma / calificaciones.length;
};

console.log("\n--- Ejercicio 9: Estudiantes ---");
console.log("9.1: Nombres y edades (forEach):");
estudiantes.forEach(est => {
  console.log(`  - Nombre: ${est.nombre}, Edad: ${est.edad}`);
});

const estudiantesConPromedio = estudiantes.map(est => {
  return {
    nombre: est.nombre,
    promedio: calcularPromedio(est.calificaciones)
  };
});
console.log("9.2: Estudiantes con promedio (map):", estudiantesConPromedio);

const estudiantesAprobados = estudiantes.filter(est => {
  return calcularPromedio(est.calificaciones) > 7.5;
});
console.log("9.3: Estudiantes con promedio > 7.5 (filter):", estudiantesAprobados);

const estudianteMaria = estudiantes.find(est => est.nombre === 'Maria');
console.log("9.4: Encontrar a 'Maria' (find):", estudianteMaria);

const sumaEdades = estudiantes.reduce((total, est) => total + est.edad, 0);
const edadPromedio = sumaEdades / estudiantes.length;
console.log(`9.5: Edad promedio (reduce): ${edadPromedio} años`);

// Ejercicio 10
const peliculas = [
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2},
  { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9},
  { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasia', rating: 8.8},
  { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6},
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6}
];

console.log("\n--- Ejercicio 10: Películas ---");
console.log("10.1: Título y año (forEach):");
peliculas.forEach(peli => {
  console.log(`  - Título: ${peli.titulo}, Año: ${peli.año}`);
});

const titulosEnMayusculas = peliculas.map(peli => peli.titulo.toUpperCase());
console.log(`10.2: Títulos en mayúsculas (map): ${JSON.stringify(titulosEnMayusculas)}`);

const dramasPopulares = peliculas.filter(peli => 
  peli.genero === 'drama' && peli.rating > 8.5
);
console.log("10.3: Dramas con rating > 8.5 (filter):", dramasPopulares);

const peliculaDe2014 = peliculas.find(peli => peli.año === 2014);
console.log("10.4: Película de 2014 (find):", peliculaDe2014);

const duracionTotal = peliculas.reduce((total, peli) => total + peli.duracion, 0);
console.log(`10.5: Duración total (reduce): ${duracionTotal} minutos`);