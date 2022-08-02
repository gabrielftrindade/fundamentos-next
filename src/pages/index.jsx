import Navegador from "../components/Navegador"

export default function Inicio () {
    return (
        <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            height: '100vh',
            flexWrap: "wrap"
        }}>
            <Navegador texto="JSX" destino="/jsx" />
            <Navegador texto="Navegação #01" destino="/navegacao" color="#9400d3" />
            <Navegador texto="Navegação #02" destino="/cliente/sp/123" color="crimson" />
            <Navegador texto="Componente Estado" destino="/estado" color="green" />
            <Navegador texto="Integracao API #1" destino="/integracao_1" color="blue" />
        </div>
    )
}