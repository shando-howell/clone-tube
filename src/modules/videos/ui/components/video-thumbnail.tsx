import Image from "next/image"

const VideoThumbnail = () => {
  return (
    <div className="relative">
        {/* Thumbnail wrapper */}
        <div className="relative w-full overflow-hidden rounded-xl aspect-video">
            <Image src="/placeholder.jpg" alt="Thumbnail" fill className="size-full object-cover"/>
        </div>

        {/* Video duration box */}
        {/* TODO: Add video duration box */}
    </div>
  )
}

export default VideoThumbnail