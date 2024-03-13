import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = (
    {params}: Props
): Metadata => {
    return {
        title: `iphone 15 pro ${params.productId}`
    }
}

export default function ProductDetails({
    params,
}: Props) {
    return <h1>Details of product {params.productId}</h1>
}