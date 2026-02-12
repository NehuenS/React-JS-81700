import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export async function getProductos() {
    console.log("Buscando Productos")
    const coleccion = collection(database, "productos");
    const productosRaw = await getDocs(coleccion);
    if (productosRaw.empty) {
        console.log("Productos no encontrados")
        return [];
        // throw new Error(`No se encontraron productos.`);
    }
    const productos = productosRaw.docs.map(item => {
        return ({ ...item.data(), id: item.id });
    });
    console.log("Devolviendo Productos")
    return productos;
}

export async function getProducto(productoId) {
    const documento = doc(database, "products", productoId);
    const productoRaw = await getDoc(documento);
    if (productoRaw.empty) {
        throw new Error(`Producto con Id ${productoId} no encontrado.`);
    }
    const producto = { ...productoRaw.data(), id: productoRaw.id }
    return producto;
}

export async function getCategoria(categoriaId) {
    const coleccion = collection(database, "products");
    const consulta = query(coleccion, where("categoria", "==", categoriaId))
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
    const coleccion = collection(database, "ordenesDeCompra")
    const ordenRegistrada = await addDoc(coleccion, ordenData);
    alert(`¡Gracias por tu compra! Tu ticket id es: ${ordenRegistrada.id}`)
}
