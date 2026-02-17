import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};
// console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const coleccionProductos = collection(database, "/productos");
const coleccionOdC = collection(database, "/ordenesDeCompra");


export async function getProductos() {
    console.log("Buscando Productos")
    const productosRaw = await getDocs(coleccionProductos);
    if (productosRaw.empty) {
        console.log("Productos no encontrados")
        return [];
    }
    const productos = productosRaw.docs.map(item => {
        return ({ ...item.data(), id: item.id });
    });
    console.log("Devolviendo Productos: ", productos);
    return productos;
}

export async function getProducto(productoId) {
    const documento = doc(database, "productos", productoId);
    const productoRaw = await getDoc(documento);
    if (productoRaw.empty) {
        throw new Error(`Producto con Id ${productoId} no encontrado.`);
    }
    const producto = { ...productoRaw.data(), id: productoRaw.id }
    return producto;
}

export async function getCategoria(categoriaId) {
    const consulta = query(coleccionProductos, where("categoria", "==", categoriaId))
    const productosRaw = await getDocs(consulta);
    if (productosRaw.empty) {
        throw new Error(`La categoria ${categoriaId} no existe o no posee productos registrados.`)
    }
    const productos = productosRaw.docs.map(item => {
        return ({ ...item.data(), id: item.id })
    })
    return productos;
}

export async function createOrdenDeCompra(ordenData) {
    const ordenRegistrada = await addDoc(coleccionOdC, ordenData);
    alert(`¡Gracias por tu compra! Tu ticket id es: ${ordenRegistrada.id}`)
}

export async function exportProductsToFirestore() {
    await fetch("./src/database/csvjson.json").then(c => c.json()).then(lista => {
        for (let item of lista) {
            const docRef = addDoc(coleccionProductos, item);
            console.log("Doc creado:", docRef.id, "\nDetalles: ", item)
        }
    })
}

// exportProductsToFirestore();
