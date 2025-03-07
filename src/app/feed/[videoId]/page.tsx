interface PageProps {
    params: Promise<{ videoId: string }>;
}

const SingleVideoPage = async ({ params }: PageProps ) => {
    const{ videoId } = await params

    return (
        <div>Video Page for {videoId}</div>
    )
}

export default SingleVideoPage;