import styles from './page.module.css'

export default function AvaliationResultPage({ params }: { params: { slug: string } }) {
    return <div className={styles.main}>Resultado da avaliação. Slug: {params.slug}</div>
}