import styles from './post-body.module.css'
import adCode from './ad-code.html'; //import the ad code

export default function PostBody({ content }) {
  let contentString = content.rendered;
  const paragraphs = contentString.split('</p>');
  paragraphs.splice(2, 0, adCode);
  contentString = paragraphs.join('</p>');
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: contentString }}
      />
    </div>
  )
}
