import { useRouter } from 'next/router'

export default function Docs({ params }: {
    params: {
        slug: string[];
    }
}) {

    if (params.slug?.length === 2) {
        return <h1>Viewing feature {params.slug[0]} of concept {params.slug[1]}</h1>
    }
    if (params.slug?.length === 1) {
        return <h1>Viewing feature {params.slug[0]}</h1>
    }
    return (
        <h1>Docs Page!</h1>
    )
}