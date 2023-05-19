export default function GifContainer({ gifs }) {
  return <ul>
    {
      gifs.map(gif => (
        <li key={gif.id}>
          <iframe src={gif.embed_url} />
          <p><a href={gif.embed_url}>"{gif.title}" via GIPHY</a></p>
        </li>
      ))
    }
  </ul>
}
