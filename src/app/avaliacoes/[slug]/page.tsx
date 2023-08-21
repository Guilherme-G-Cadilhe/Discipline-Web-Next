import styles from './page.module.css'

export default function AvaliationDetailsPage({ params }: { params: { slug: string } }) {
    return <div className={styles.main}>Detalhe de avaliação. Slug: {params.slug}</div>
}