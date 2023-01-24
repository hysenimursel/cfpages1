export default function PostTitle({ children }) {
  return (
    <h1
      className="text-xl font-bold"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
