import { Box } from "@mui/material"
import type { Product } from "../../app/models/Product"
import ProductCard from "./ProductCard"

type Props = {
    products: Product[]
}

export default function ProductList({products}: Props) {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center'}}>
        {products.map(itemProduct => (
            <ProductCard key={itemProduct.id} product={itemProduct}/>
        ))}
    </Box>
  )
}