import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);

  async function fetchVideos() {
    const url = nextPageToken
      ? `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}`
      : YOUTUBE_VIDEOS_API;

    try {
      const response = await fetch(url);
      const json = await response.json();

      if (json.items) {
        setVideos((prev) => {
          const existingIds = new Set(prev.map((video) => video.id));
          return [
            ...prev,
            ...json.items.filter((video) => !existingIds.has(video.id)),
          ];
        });
      }

      setNextPageToken(json.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  async function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (nextPageToken) fetchVideos();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <Link key={`${video.id}-${index}`} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
