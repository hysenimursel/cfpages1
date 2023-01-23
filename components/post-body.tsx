import styles from './post-body.module.css'
import adCode from './ad-code.html'; //import the ad code

export default function PostBody({ content }) {
  const paragraphs = content.split('</p>');
  paragraphs.splice(2, 0, adCode);
  content = paragraphs.join('</p>');
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
