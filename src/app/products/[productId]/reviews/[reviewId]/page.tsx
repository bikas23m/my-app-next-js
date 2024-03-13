import { notFound } from 'next/navigation'

export default function ReviewDetails({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    if (Number(params.reviewId) > 100) {
        return notFound();
    }
    return <h1>Review {params.reviewId} for product {params.productId}</h1>
}