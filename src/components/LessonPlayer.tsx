export default function LessonPlayer({ videoUrl }: { videoUrl: string }) {
  return (
    <div style={{ margin: "20px 0" }}>
      {videoUrl ? (
        <iframe width="560" height="315" src={videoUrl} />
      ) : (
        <div>Видео отсутствует</div>
      )}
    </div>
  );
}