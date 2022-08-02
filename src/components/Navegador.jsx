import Link from 'next/link'
import style from '../styles/Navegador.module.css'

export default function Navegador (props) {
    return (
        <Link href={props.destino} passHref>
            <div className={style.navegador} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}