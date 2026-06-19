import { useReducer } from "react";
import { cartReducer } from "../reduce/reduce";

const PRODUCTS =[
    {
    "id": 1,
    "name": "Memoria RAM DDR5 16GB 4800MHz",
    "price": 65.99
  },
  {
    "id": 2,
    "name": "Disco Duro Sólido SSD NVMe M.2 1TB",
    "price": 89.50
  },
  {
    "id": 3,
    "name": "Procesador Intel Core i5-13400F",
    "price": 210.00
  },
  {
    "id": 4,
    "name": "Tarjeta Gráfica NVIDIA RTX 4060 Ti",
    "price": 429.99
  },
  {
    "id": 5,
    "name": "Monitor Gaming 24'' FHD 165Hz",
    "price": 145.00
  }
]

function Cart() {
    const [items, dispatch] = useReducer(cartReducer, [])

    return(
        <div>
            <h2>Catálogo</h2>
            {
                PRODUCTS.map((product) => (
                    <button key={product.id} onClick={()=> dispatch({type: "add", product})} >Añadir {product.name} </button>
                ))
            }
            <h3>Carrito({items.length}) </h3>
            <ul>
                {
                    items.map((item)=> ( // CAMBIO 1
                        // CAMBIO 2 
                        <li key = {item.id}>
                            {item.name} x {item.amount}
                            <button onClick={()=> dispatch({type: "increase", id: item.id})}>
                                +
                            </button>
                            <button onClick={()=> dispatch({type: "remove", id: item.id})}>
                                🗑️
                            </button>
                        </li>
                    ) // CAMBIO 1
                )}
            </ul>
            {/* El cambio 1 es poner otra cosa en lugar de lo que hay y el cambio 2 es añadir una cosa que falta. Los dos cambios están relacionados con el mismo concepto. */}
            <button onClick={()=> dispatch({type: "clear"})}>Vaciar</button>
        </div>
    )
}

export{
    Cart
}